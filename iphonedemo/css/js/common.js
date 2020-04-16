	//自适应监测屏幕宽度
	(function(doc, win) {
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function() {
				var clientWidth = docEl.clientWidth;
				if(!clientWidth) return;
				// if(clientWidth >= 750) {
				// 	docEl.style.fontSize = '100px';
				// } else {
				// 	docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
				// }
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			};

		if(!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
	
	
// menu显示隐藏	
$(".menu,.zhezhao").on({
	click:function(){
		$(".menu_list").toggle()
		$(".zhezhao").toggle()
	}
})

// 头部导航滚动变色
$(window).scroll(function () {
	var oHeader = document.getElementById("header");
	var scrolls = $(this).scrollTop(); //获取当前可视区域距离页面顶端的距离
	if (scrolls > 0) { //当B>A时，表示页面在向下滑动			
		$("#header").css({
			"background":"rgba(0,0,0,0.5)"
		})		
		// console.log(scrolls)
	} else {
		$("#header").css({
			"background":"#ffffff"
		})
	}

});
// 注册/登录/钉钉版登录
function goRegist() {
	window.open(location.origin + '/views/register1', '_blank')
};
function goDingding() {
	window.open(location.origin + '/views/download-ding.html', '_blank');
}
function goLogin() {
	window.open(location.origin + '/views/login', '_blank');
}

// 展开详情
$(".about_btn1").on({
	"click":function(){
		if($(this).text()=="了解更多>>"){			
			$(this).text("收起>>")	
			$(this).parent().find(".abouts").eq(0).removeClass("about_active")
			$(this).parent().find(".abouts").eq(0).addClass("about_hide")
			$(this).parent().find(".abouts2").eq(0).removeClass("about_hide")
			$(this).parent().find(".abouts2").eq(0).addClass("about_active")				
			
		}else{
			$(this).text("了解更多>>")
			$(this).parent().find(".abouts").eq(0).removeClass("about_hide")
			$(this).parent().find(".abouts").eq(0).addClass("about_active")
			$(this).parent().find(".abouts2").eq(0).removeClass("about_active")
			$(this).parent().find(".abouts2").eq(0).addClass("about_hide")			
		}	
	}
})


// 获取文章内容
function getContent(oId){
	$.ajax({
		type: "get",
		url: "http://test.epandian.com/oms/website/getWebSiteContentById",
		dataType: "json",
		data: {
			id:oId,		
		},
		success: function(data){
			$(".main_center").html(decodeURIComponent(data.data.content))
			$(".main_header").html(decodeURIComponent(data.data.title))
		},
		
	})
}
// 获取url参数
function getId(){
	//获取分案编号
	var hrefVal = window.location.href.split("?")[1] //得到id=楼主
	var strs = hrefVal.split("&")
	// 那么我们在新页面接收参数， 并且将参数转为可用的json格式时， 可以用下面的方法：
	for (var i = 0; i < strs.length; i++) {
		let keyName = strs[i].split("=")[0]
		let valueLi = strs[i].split("=")[1]
		theRequest[keyName] = valueLi
	}
	oId=theRequest.id
	if(theRequest.oMianbao1){
		oMianbao1=decodeURIComponent(theRequest.oMianbao1)
	}
	
}

