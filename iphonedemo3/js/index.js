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


// 首屏动画
$(window).scroll(function() {
	var hh = document.body.clientHeight
	// console.log(hh)
	var scrollTop = $(window).scrollTop()
	// console.log(scrollTop)
	if (scrollTop > 0 && scrollTop < 240) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$(".main_inner1_bottom").find(".left").eq(2).addClass("animated zoomIn")
		$(".main_inner1_bottom").find(".left").eq(3).addClass("animated zoomIn")
	} else if (scrollTop > 240 && scrollTop < 320) {
		$(".main_inner2>h3").addClass("animated fadeIn")
		$(".main_inner2>h4").addClass("animated fadeIn")
	} else if (scrollTop > 320 && scrollTop < 500) {
		$(".main_inner2_bottom").find(".left").eq(0).addClass("animated zoomIn")
		$(".main_inner2_bottom").find(".left").eq(1).addClass("animated zoomIn")
	} else if (scrollTop > 500 && scrollTop < 740) {
		$(".main_inner2_bottom").find(".left").eq(2).addClass("animated zoomIn")
		$(".main_inner2_bottom").find(".left").eq(3).addClass("animated zoomIn")
	} else if (scrollTop > 740 && scrollTop < 820) {
		$(".main_inner3>h3").addClass("animated fadeIn")
		$(".main_inner3>h4").addClass("animated fadeIn")
	} else if (scrollTop > 820 && scrollTop < 1080) {
		$(".main_inner3_bottom").find(".left").eq(0).addClass("animated zoomIn")
		$(".main_inner3_bottom").find(".left").eq(1).addClass("animated zoomIn")
	} else if (scrollTop > 1080 && scrollTop < 1340) {
		$(".main_inner3_bottom").find(".left").eq(2).addClass("animated zoomIn")
		$(".main_inner3_bottom").find(".left").eq(3).addClass("animated zoomIn")
	} else if (scrollTop > 1340 && scrollTop < 1440) {
		$(".main_inner4>h3").addClass("animated fadeIn")
		$(".main_inner4>h4").addClass("animated fadeIn")
	} else if (scrollTop > 1440 && scrollTop < 1560) {
		$(".main_inner4>ul>li").eq(0).addClass("animated bounceInLeft")
	} else if (scrollTop > 1560 && scrollTop < 1640) {
		$(".main_inner4>ul>li").eq(1).addClass("animated bounceInLeft")
	} else if (scrollTop > 1640 && scrollTop < 1740) {
		$(".main_inner4>ul>li").eq(2).addClass("animated bounceInLeft")
	} else if (scrollTop > 1740 && scrollTop < 1900) {
		$(".main_inner4>ul>li").eq(3).addClass("animated bounceInLeft")
	}
});
// 首屏下载APP
function downApp() {
	let userAgentInfo = navigator.userAgent.toLowerCase()
	if (/(iphone|ipad|ipod|ios)/i.test(userAgentInfo)) {
		this.fromOS = 'iphone'
	} else if (/(android)/i.test(userAgentInfo)) {
		this.fromOS = 'android'
	}
	if (this.fromOS === 'iphone') {
		window.location.href = 'http://itunes.apple.com/app/id1197959941'
	} else {
		window.location.href = 'https://www.epandian.com/wap/downloadAndroid'
	}
}
