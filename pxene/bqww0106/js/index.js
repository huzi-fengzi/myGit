//提交数据
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
var bid = GetQueryString('bid');
var mapid = GetQueryString('mapid');

function submitForm() {
	var name = $("#name").val();
	var tel = $("#tel").val();
	var favoritemodel = $("#favoritemodel").val();
	var province = $("#province").val();
	var city = $("#city").val();
	var dealername = $("#dealername").val();
	var dealercode = $("#dealercode").val();
	var sales = $("#sales").val();

	if(name == null || name == "") {
		alert("姓名必须输入！")
		return;
	}
	if(tel == null || tel == "") {
		alert("电话必须输入！")
		return;
	}
	if(!/^1(3|4|5|6|7|8)\d{9}$/.test(tel)) {
		alert("请输入正确的电话格式！")
		return;
	}
	if(favoritemodel == null || favoritemodel == "") {
		alert("请选择试驾车型！")
		return;
	}

	if(province == null || province == "") {
		alert("请选择省份！")
		return;
	}
	if(city == null || city == "") {
		alert("请选择城市！")
		return;
	}
	if(dealername == null || dealername == "") {
		alert("请选择意向经销商！")
		return;
	}
	if($('#checked').is(':checked') == false) {
		alert("请接受所附隐私条款！")
		return;
	}

	var data = {
		"pro": "bqww0106", //1、所属项目
		"bid": bid, //2、BID
		"mid": mapid, //3、MAPID
		"name": name, //4、用户姓名
		"gender": "", //5、用户性别
		"tel": tel, //6、联络电话
		"province": province, //7、所属省份
		"city": city, //8、所属城市
		"dealername": dealername, //9、经销商名称
		"scheduledtime": "", //10、预计购车时间
		"status": "", //11、状态码
		"budget": "", //12、购车预算
		"favoritemodel": favoritemodel, //13、意向车型
		"from": "", //14、设备来源
		"addtime": "", //15、添加时间
		"address": dealercode, //16、地址//此处存放的是经销商代码
		"email": "", //17、电子邮箱
		"hobby": sales, //18、兴趣爱好//此处存放的是销售部
		"pageid": "4a773bd3-d964-4155-a302-098f509d6448" //19、落地页ID		
	};

//	console.log(data);
	_pxe.push(data);
	alert("预约成功！");
	$("#name").val("");
	$("#tel").val("");
	$("#favoritemodel").val("");
	$("#province").html("");
	$("#city").html("");
	$("#dealername").html("");
	$("#sales").html("");

}

var windowTop = 0; //初始话可视区域距离页面顶端的距离
$(window).scroll(function() {
	var oYinche=document.getElementById("hd1");
	var scrolls = $(this).scrollTop(); //获取当前可视区域距离页面顶端的距离
		console.log(scrolls)
		if(scrolls > windowTop) { //当B>A时，表示页面在向下滑动
		//需要执行的操作
		if(scrolls>=0&&scrolls<520){
			$("#hd1").css("top","13.82rem");
		}else if(scrolls>=520&&scrolls<880){
			$("#hd1").css({
				"-webkit-animation": "che1 1s 0s ease both",
				"-ms-animation": "che1 1s 0s ease both",
				"animation": "che1 1s 0s ease both",
			});
		}else if(scrolls>=880&&scrolls<1200){
			$("#hd1").css({
				"-webkit-animation": "che2 1s 0s ease both",
				"-ms-animation": "che2 1s 0s ease both",
				"animation": "che2 1s 0s ease both",
			});
		}else if(scrolls>=1200&&scrolls<1520){
			$("#hd1").css({
				"-webkit-animation": "che3 1s 0s ease both",
				"-ms-animation": "che3 1s 0s ease both",
				"animation": "che3 1s 0s ease both",
			});
		}else if(scrolls>=1520&&scrolls<1660){
			$("#hd1").css({
				"-webkit-animation": "che4 1s 0s ease both",
				"-ms-animation": "che4 1s 0s ease both",
				"animation": "che4 1s 0s ease both",
			});
		}else if(scrolls>=1660){
			$("#hd1").css({
				"-webkit-animation": "che5 1s 0s ease both",
				"-ms-animation": "che5 1s 0s ease both",
				"animation": "che5 1s 0s ease both",
			});
		}
		windowTop = scrolls;
		
	} else { //当B		
//		alert("向上滑动了"+num2)
		if(scrolls>=0&&scrolls<520){			
			$("#hd1").css({
				"-webkit-animation": "che1a 1s 0s ease both",
				"-ms-animation": "che1a 1s 0s ease both",
				"animation": "che1a 1s 0s ease both",
			});
		}else if(scrolls>=520&&scrolls<880){
			$("#hd1").css({
				"-webkit-animation": "che2a 1s 0s ease both",
				"-ms-animation": "che2a 1s 0s ease both",
				"animation": "che2a 1s 0s ease both",
			});
		}else if(scrolls>=880&&scrolls<1200){
			$("#hd1").css({
				"-webkit-animation": "che3a 1s 0s ease both",
				"-ms-animation": "che3a 1s 0s ease both",
				"animation": "che3a 1s 0s ease both",
			});
		}else if(scrolls>=1200&&scrolls<1520){
			$("#hd1").css({
				"-webkit-animation": "che4a 1s 0s ease both",
				"-ms-animation": "che4a 1s 0s ease both",
				"animation": "che4a 1s 0s ease both",
			});
		}else if(scrolls>=1520&&scrolls<1660){
			$("#hd1").css({
				"-webkit-animation": "che5a 1s 0s ease both",
				"-ms-animation": "che5a 1s 0s ease both",
				"animation": "che5a 1s 0s ease both",
			});
		}else if(scrolls>=1660){
			$("#hd1").css("top","46.39rem");
		}
		windowTop = scrolls;
	}
		
});


//精美车图

var _idx10=0;
var _num=0;
var oLi=$("#swiper-wrapper2").find(".swiper-slide");
$("#swiper-button-next").on({
	click:function(){
		if(_num==10){
			_num=0;
			_idx10=0;
		}
		_idx10=_idx10-3.09;		
		_num=_num+1;	
		if(_idx10<-30.9){
			_idx10=0;
		}
		if(_num>10){
			_num=1;
		}
		var oCurrent=oLi.eq(_num-1).html();
		$("#current").html(oCurrent);
		$("#swiper-wrapper2").css({
			transform:"translate3d("+_idx10+"rem, 0rem, 0rem)",
//			transitionDuration: "1s", 
			
		})
	}
})
$("#swiper-button-prev").on({
	click:function(){
		_idx10=_idx10+3.09;
		_num=_num-1;
		//console.log(_num);
		if(_idx10>1){
			_idx10=-27.81;
		}
		if(_num<1){
			_num=10;
		}		
		var oCurrent=oLi.eq(_num-1).html();
		$("#current").html(oCurrent);
		$("#swiper-wrapper2").css({
			transform:"translate3d("+_idx10+"rem, 0rem, 0rem)",
//			transitionDuration: "1s", 
		})
	}
})