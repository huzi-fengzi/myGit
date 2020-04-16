var oId,oMianbao1
var theRequest = new Object()

var href1= document.referrer.split("?")[0] //得到来源
if(href1.indexOf("concerning.html")>0){
	// var src="您当前位置：<a href='"+  href1  +"' class='mianbao1'>关于我们</a> &gt;<a href='"+  href1  +"' class='mianbao2'>公司动态</a> &gt;<sapn>新闻详情</sapn>"
	// $(".main_header_inner").html(src)
	// oMianbao1="关于我们"
	// getId()
	// getContent(oId)	
	// getNextArticle(0,oMianbao1)
	
}else if(href1.indexOf("index.html")>0){
	// var src="您当前位置：<a href='"+  href1  +"' class='mianbao1'>首页</a> &gt;<a href='"+  href1  +"' class='mianbao2'>公司动态</a> &gt;<sapn>新闻详情</sapn>"
	// $(".main_header_inner").html(src)
	// oMianbao1="首页"
	// getId()
	// getContent(oId)
	// getNextArticle(0,oMianbao1)
	
}else if(href1.indexOf("case.html")>0){
	// var src="您当前位置：<a href='"+  href1  +"' class='mianbao1'>经典案例</a> &gt;<sapn>案例详情</sapn>"
	// $(".main_header_inner").html(src)
	// oMianbao1="经典案例"
	getId()
	getContent(oId)
	// getNextArticle(1,oMianbao1)
}else if(href1.indexOf("newList.html")>0){
	// getId()
	// console.log(oMianbao1+oId)
	// if(oMianbao1=="关于我们"){		
	// 	var src="您当前位置：<a href='"+  href1  +"' class='mianbao1'>关于我们</a> &gt;<a href='"+  href1  +"' class='mianbao2'>公司动态</a> &gt;<sapn>新闻详情</sapn>"
	// 	$(".main_header_inner").html(src)
	// 	console.log(oMianbao1)
	// 	getContent(oId)
	// 	getNextArticle(0,oMianbao1)
	// }else if(oMianbao1=="经典案例"){
	// 	var src="您当前位置：<a href='"+  href1  +"' class='mianbao1'>经典案例</a> &gt;<sapn>案例详情</sapn>"
	// 	$(".main_header_inner").html(src)
	// 	getContent(oId)
	// 	getNextArticle(1,oMianbao1)
	// }
	
	
}else if(href1.indexOf("news.html")>0){
	// getId()
	// console.log(oId)
	// if(oMianbao1 && oMianbao1 != ""){
	// 	if(oMianbao1=="首页"){
	// 		var src="您当前位置：<a href='../index.html' class='mianbao1'>首页</a> &gt;<a href='../index.html' class='mianbao2'>公司动态</a> &gt;<sapn>新闻详情</sapn>"
	// 		$(".main_header_inner").html(src)
	// 		getContent(oId)
	// 		getNextArticle(0,oMianbao1)
	// 	}else if(oMianbao1=="关于我们"){
	// 		var src="您当前位置：<a href='concerning.html' class='mianbao1'>关于我们</a> &gt;<a href='concerning.html' class='mianbao2'>公司动态</a> &gt;<sapn>新闻详情</sapn>"
	// 		$(".main_header_inner").html(src)
	// 		getContent(oId)
	// 		getNextArticle(0,oMianbao1)
	// 	}else if(oMianbao1=="经典案例"){
	// 		var src="您当前位置：<a href='case.html' class='mianbao1'>经典案例</a> &gt;<sapn>案例详情</sapn>"
	// 		$(".main_header_inner").html(src)
	// 		getContent(oId)
	// 		getNextArticle(1,oMianbao1)
	// 	}
	// }		
	
}
