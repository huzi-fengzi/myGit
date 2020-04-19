var swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 0,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
function submitForm() {
			var fal = false;
			var name = $("#name").val();
			var phone = $("#tel").val();
			var companyName = $("#company").val();
			var email = $("#email").val();
			var content = $("#count").val();
			//	不能删除此行r

			if (name == null || name == "") {
				$('.toast').text('请输入姓名！').fadeIn();
				setTimeout(() => {
					$('.toast').fadeOut();
				}, 1600);
				return;
			}

			if (phone == null || phone == "") {
				$('.toast').text('请输入电话！').fadeIn();
				setTimeout(() => {
					$('.toast').fadeOut();
				}, 1600);
				return;
			}
			if (companyName == null || companyName == "") {
				$('.toast').text('请输入公司名称！').fadeIn();
				setTimeout(() => {
					$('.toast').fadeOut();
				}, 1600);
				return;
			}
			if (content == null || content == "") {
				$('.toast').text('请输入意见回馈！').fadeIn();
				setTimeout(() => {
					$('.toast').fadeOut();
				}, 1600);
				return;
			}
			var data = {
				"name": name,
				"phone": phone,
				"companyName": companyName,
				"email": email,
				"content": content,
			}
			$.ajax({
				type: "post",
				url: "/customer/webSiteOpinionCollect",
				dataType: "json",
				data: data,
				success: function (data) {
					alert("提交成功，感谢您的留言。")
				},
				error: function () {
					alert("您的网络不好请稍后重试!");
					return;
				},

			});

		}