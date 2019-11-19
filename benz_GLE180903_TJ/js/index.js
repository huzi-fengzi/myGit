//去除aleat提示框中的IP或者域名
window.alert = function(name){


        var iframe = document.createElement("IFRAME"); 
        iframe.style.display="none"; 
        iframe.setAttribute("src", 'data:text/plain,'); 
        document.documentElement.appendChild(iframe); 
        window.frames[0].window.alert(name); 
        iframe.parentNode.removeChild(iframe); 
    }; 
window.confirm = function (message) { 
            var iframe = document.createElement("IFRAME"); 
            iframe.style.display = "none"; 
            iframe.setAttribute("src", 'data:text/plain,'); 
            document.documentElement.appendChild(iframe); 
            var alertFrame = window.frames[0]; 
            var result = alertFrame.window.confirm(message); 
            iframe.parentNode.removeChild(iframe); 
            return result; 
    };
$("#checked").on({
		change: function() {
			if($('#checked').is(':checked') == true) {
				$('#checked').css({
					"background":"url(img/D_bg1.png) no-repeat",
					"backgroundSize":"100%"
				})
			}else{
				$('#checked').css({
					"background":"url(img/D_bg2.png) no-repeat",
					"backgroundSize":"100%"
				})
			}
			
		}
	})
$(".gender1,.gender2").on({
		change: function() {
			if($('.gender1').is(':checked') == true) {
				$('.gender1a').css({
					"background":"url(img/boy_y.jpg) no-repeat",
					"backgroundSize":"100%"
				})
				$('.gender2a').css({
					"background":"url(img/girl_n.jpg) no-repeat",
					"backgroundSize":"100%"
				})
			}else{
				$('.gender1a').css({
					"background":"url(img/boy_n.jpg) no-repeat",
					"backgroundSize":"100%"
				})
				$('.gender2a').css({
					"background":"url(img/girl_y.jpg) no-repeat",
					"backgroundSize":"100%"
				})
			}
			if($('.gender2').is(':checked') == true) {
				$('.gender1a').css({
					"background":"url(img/boy_n.jpg) no-repeat",
					"backgroundSize":"100%"
				})
				$('.gender2a').css({
					"background":"url(img/girl_y.jpg) no-repeat",
					"backgroundSize":"100%"
				})
			}else{
				$('.gender1a').css({
					"background":"url(img/boy_y.jpg) no-repeat",
					"backgroundSize":"100%"
				})
				$('.gender2a').css({
					"background":"url(img/girl_n.jpg) no-repeat",
					"backgroundSize":"100%"
				})
			}
		}
	})
//提交数据
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
var bid = GetQueryString('bid');
var mapid = GetQueryString('mapid');
function submitForm(){
	var fal=false;
	var name = $("#name").val();
	var gender;
	var province = $("#province").val();
//	var email= $("#email").val();
	var city = $("#city").val();
	var dealername = $("#dealername").val();
	var tel = $("#tel").val();
	var favoritemodel = $("#favoritemodel").val();
//	var scheduledtime = $("#scheduledtime").val();
	if(name == null || name == ""){
		alert("姓名必须输入！")
		return;
	}
	if($('.gender1').is(':checked') == true) {
		gender = $('.gender1').val();
	}
	if($('.gender2').is(':checked') == true) {
		gender = $('.gender2').val();
	}
	if($('.gender1').is(':checked') == false && $('.gender2').is(':checked') == false) {
		alert("请选择性别！")
		return;
	}
	if(tel == null ||tel == ""){
		alert("请输入您的手机号！")
		return;
	}
	if( !/^1(3|4|5|6|7|8)\d{9}$/.test(tel)){
		alert("请输入正确的电话格式！")
		return;
	}
	
	if(province == null || province == ""){
		alert("请选择省份！")
		return;
	}
	if(city == null || city == ""){
		alert("请选择城市！")
		return;
	}			
	if(dealername == null || dealername == ""){
		alert("请选择经销商！")
		return;
	}
	if(favoritemodel == null || favoritemodel == ""){
		alert("请选择意向车型！")
		return;
	}
	if($('#checked').is(':checked')==false){
		alert("请您接受隐私条款！")
		return;
	}
	var data = {
        name: name,                   // 姓名
        gender: gender,               // 性别
        mobile: tel,                  // 电话
        purchase_time: "", // 购买时间
        brand: '',                        // 品牌
        series: '',                      // 车系
        car: favoritemodel,      // 车型
        province: province,           // 省
        city: city,                   // 市
        nd_code: '',                        // ND_CODE
        dealer_sn: dealername ,        // 经销商名称
        qudao: '',                    // 注册渠道
        media: '',                     // 媒体
    };
    var params = {
        aid: window._ab || '',
        cid: window._c || '',
        mid: window._mn || '',
        pid: window._png || '',
        ext: JSON.stringify(data),
        ts: parseInt(new Date().getTime() / 1000),
        url: location.href || ''
    };
    var base = 'aid' + params.aid +
        'cid' + params.cid +
        'ext' + params.ext +
        'mid' + params.mid +
        'pid' + params.pid +
        'ts' + params.ts +
        'url' + params.url +
        '1FfacCGuOz';
    var sign = md5(base);
    params.sign = sign;
    $.ajax({
        url: (location.origin || location.protocol + '/' + location.host) + '/api/ucr/add',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            console.log(data);
            if (data.code == 200) {
                alert('提交成功');
                $("#name").val("");
				$("#tel").val("");
				$("#province").val("");
            } else if (data.code == -230002) {
                alert('您已预约,请不要重复提交!');
            }
        },
        error: function (error) {
            alert('您的网络不好请稍后重试!');
        }
    })

}


//车型亮点
var _idx,_idx2;
$(".LDdj .LDdja").on({
	click:function(){
		_idx = $(this).index();
		_idx2=_idx+1;
		console.log(_idx+":"+_idx2)
		$(".LD").css({
			"display":"block",
		})
		$(".LDdj").css({
			"display":"none",
		})
		swiper2 = new Swiper('.swiper-container2', {
			nextButton: '.swiper-button-next2',
			prevButton: '.swiper-button-prev2',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			loop: true,
		});
		swiper2.slideTo(_idx2, 0, false);//切换到第一个slide，速度为1秒
	}
})
$(".LD .swiper-slide img").on({
	click:function(){
		$(".LD").css({
			"display":"none",
		})
		$(".LDdj").css({
			"display":"block",
		})
	}
})
