 $("#products").on({
   "click":function(){
	  $(".product_1").toggle()
   }
})
// 多行显示超出省略号IE兼容写法
$(function(){
 //获取文本的行高，并获取文本的高度，假设我们规定的行数是3行，那么对超过行数的部分进行限制高度，并加上省略号
   $('.p_afters').each(function(i, obj){
        var lineHeight = parseInt($(this).css("line-height"));
        var height = parseInt($(this).height());
		var sss=lineHeight*3+"px";
        if((height / lineHeight) >3 ){
            $(this).addClass("p_after")
            $(this).css("height",sss);
        }else{
            $(this).removeClass("p_after");
        }
    });
})