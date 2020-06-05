
//自适应监测屏幕宽度
function setRemSize() {
	var oWidth = document.documentElement.clientWidth / 7.5 + "px";
	document.documentElement.style.fontSize = oWidth;
};
setRemSize();
window.addEventListener("resize", setRemSize, false);
//document.addEventListener('plusready', function() {});	
$(".yysh_btn,.yysh_btn2,.yuan,.yuan2,.HB").on({
	click:function(){
		$(".datum").css({
			"display":"block"
		})
	}
})
$(".close").on({
	click:function(){
		$(".datum").css({
			"display":"none"
		})
	}
})
//$(function(){
//	//通过此处测是否为横屏展示
//	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
//		if (window.orientation === 180 || window.orientation === 0) {
//			$(".landscape_notice").css("display","none");
//		}
//		if (window.orientation === 90 || window.orientation === -90 ){
//			$(".landscape_notice").css("display","block");
//		}
//	}, false);
//
//})
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
		"pro": "bqww_tg", //1、所属项目
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
		"pageid": "00002" //19、落地页ID		
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
		_idx10=_idx10-2.64;		
		_num=_num+1;	
		if(_idx10<-26.4){
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
		_idx10=_idx10+2.64;
		_num=_num-1;
		//console.log(_num);
		if(_idx10>1){
			_idx10=-23.76;
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