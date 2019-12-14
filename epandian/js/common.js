// 导航栏产品页切换
 $("#products").on({
   "click":function(){
	   console.log("sssss")
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
// 顶部导航悬浮,滚动后背景变色
$(window).scroll(function() {
	var oHeader=document.getElementById("header");
	var scrolls = $(this).scrollTop(); //获取当前可视区域距离页面顶端的距离
	if(scrolls >0) { //当B>A时，表示页面在向下滑动			
		$("#header").addClass("scrol_down_bg")
		$(".header_nav_innerL").addClass("scrol_down_cl")
		$(".header_nav_list").addClass("header_nav_list_down")
		$(".products1").addClass("products1_down")		
		$(".product_1").addClass("product_2");
	// console.log(scrolls)
	} else { 		
		$("#header").removeClass("scrol_down_bg");
		$(".header_nav_innerL").removeClass("scrol_down_cl")
		$(".header_nav_list").removeClass("header_nav_list_down")
		$(".products1").removeClass("products1_down")
		$(".product_1").removeClass("product_2");	
	}
		
});
// 首页及案例页合作商家按钮事件
 $(".mian_inner3_btn1").on({
   "click":function(){	   
	  $(".mian_inner3_b").css({
		  "height":"882px"
	  })
	  $(".mian_inner3_b").css({
	  		  "height":"882px"
	  })
	  $(".mian_inner3_btn1").css({
	  		  "display":"none"
	  })
	  $(".mian_inner3_btn2").css({
	  		  "display":"block"
	  })
   }
})
$(".mian_inner3_btn2").on({
   "click":function(){	
	  $(".mian_inner3_b").css({
		  "height":"630px"
	  })
	  $(".mian_inner3_btn2").css({
	  	  "display":"none"
	  })
	  $(".mian_inner3_btn1").css({
	  	  "display":"block"
	  })
	}
})
