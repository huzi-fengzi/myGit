// 他们在使用易盘点
var swiper1 = new Swiper('.swiper-container1', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 0,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
})
// 他们都选择了我
var swiper2 = new Swiper('.swiper-container2', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 0,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination2',
	},
})
// 经典案例
var swiper3 = new Swiper('.swiper-container3', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 0,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination3',
	},
})

// 经典案例调用接口
submitForm2()
function submitForm2() {
	$.ajax({
		type: "post",
		url: "http://test.epandian.com/oms/website/findContentList",
		dataType: "json",
		data: {
			pageIndex: 1,
			pageSize:3,
			documentType:1
		},
		success: function(data) {
			var dataList=data.data
			for(var i=0;i<dataList.length;i++){	
			var	str="<img src='"+ dataList[i].photoUrl +"'><div class='swi_bottom'><p class='left'>"+ dataList[i].title +"</p><a class='right' href='news.html?id="+ dataList[i].id +"'>了解更多>></a></div>"
			$(".main_inner1_bottom").find(".swiper-slide").eq(i).html(str)
			}
		},
		error: function(error) {
			console.log(error)
		},

	});
	
}
