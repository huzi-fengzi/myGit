$(".main").find("a").on({
	"click":function(){
		var _index=$(this).index()/2
		$(".clientList").removeClass("clientList-active");
		$(".clientList").eq(_index).addClass("clientList-active")
		$(".main").find("a").removeClass("client-active");
		$(this).addClass("client-active")
	}
})
// 案例页客户列表图案进入列表页
var oId,oMianbao1
var theRequest = new Object()
var href1= document.referrer //得到来源
if(href1.indexOf("case.html")>0){
	if( window.location.href.indexOf("#")>0){
		//获取分案编号
		var hrefVal = window.location.href.split("#client")[1] -1
		$(".clientList").removeClass("clientList-active");
		$(".clientList").eq(hrefVal).addClass("clientList-active")
		$(".main").find("a").removeClass("client-active");
		$(".main").find("a").eq(hrefVal).addClass("client-active")
	}else{
		$(".clientList").removeClass("clientList-active");
		$(".clientList").eq(0).addClass("clientList-active")
		$(".main").find("a").removeClass("client-active");
		$(".main").find("a").eq(0).addClass("client-active")
	}
	
	
}