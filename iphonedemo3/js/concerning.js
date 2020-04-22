var content=[]
var test2=[]
pShow(1,64)
pShow(2,44)
function pShow(id,num){
	content.push($("#concer_main1_p"+id).html())
	// console.log(content[id-1])
	test2.push($("#concer_main1_p"+id).html().slice(0,num))
	// console.log(test2[id-1])
	$("#concer_main1_p"+id).html(test2[id-1])
	// console.log(test2);
	var span = document.createElement('span');
	span.innerHTML = '...'
	 $("#concer_main1_p"+id).append(span)
	
}
function aboutBtn(id){
	var thisBtn=$(".main_inner").eq(id).find(".about_btn_1")
	
	console.log(thisBtn.text())
	if(thisBtn.text()=="了解更多>>"){
		thisBtn.text("收起>>")
		thisBtn.parent().find(".concer_main1_ps").eq(0).html(content[id])
	}else{
		thisBtn.text("了解更多>>")
		thisBtn.parent().find(".concer_main1_ps").eq(0).html(test2[id])
		var span = document.createElement('span');
		span.innerHTML = '...'
		thisBtn.parent().find(".concer_main1_ps").eq(0).append(span)
	}
}
$(".about_btn_1").on({
	"click":function(){
		var _idx=$(this).parent().parent().index()
		console.log(_idx)
		aboutBtn(_idx)
	}
})
