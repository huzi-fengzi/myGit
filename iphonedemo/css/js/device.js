var oId,oMianbao1
var theRequest = new Object()
getNr()
function getNr(){
	getId()
	var arr=["dayin","biaoqian","saomiao"]
	for(var i=0;i<arr.length;i++){
		if(arr[i]==oId){
			$(".main_header").find("li").eq(i).addClass("header_active")
			$(".main_bottom").find("li").eq(i).addClass("bottom_active")
		}
	}
}
//点击按钮切换
$(".main_header li").on({
	"click":function(){
		var _idx=$(this).index()
		$(".main_header li").removeClass("header_active")
		$(this).addClass("header_active")
		$(".main_bottom li").removeClass("bottom_active")
		$(".main_bottom").find("li").eq(_idx).addClass("bottom_active")
	}
})
