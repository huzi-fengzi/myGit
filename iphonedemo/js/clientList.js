$(".main").find("img").on({
	"click":function(){
		var _index=$(this).index()/2
		console.log(_index)
		$(".clientList").removeClass("clientList-active");
		$(".clientList").eq(_index).addClass("clientList-active")
		$(".main").find("img").removeClass("client-active");
		$(this).addClass("client-active")
	}
})