
//自适应监测屏幕宽度
function setRemSize() {
	var oWidth = document.documentElement.clientWidth / 6.4 + "px";
	document.documentElement.style.fontSize = oWidth;
};
setRemSize();
window.addEventListener("resize", setRemSize, false);
//document.addEventListener('plusready', function() {});	
window.onload=function(){
	//音乐
		loadMp3("img/music.mp3");
		function loadMp3(src) {
			
			$('<audio autoplay loop preload><source src="' + src + '" />您的浏览器不支持</audio>').appendTo('body'); //.on('canplaythrough', setMp3);    			
			setMp3();
		}
		function setMp3() {				
			document.addEventListener("WeixinJSBridgeReady", function() {
				
				WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
					$('audio')[0].play();					
				});
			}, false);
			
			$('audio')[0].play();
//			console.log("没问题")
			$('.music_btn').on('click', playOrPaused);
		}
		

		function playOrPaused() {
			$('.music_btn').removeClass('active');
			setTimeout(function() {
				$('.music_btn').addClass('active')
			}, 0)
			var audio = $('audio')[0];
			var _this = $(this);
			if(audio.paused) {				
				audio.play();
				_this.addClass('off');
				return;
			} else {
				audio.pause();
				_this.removeClass('off');
				return;
				
			}

		}	
}

function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
function getRootPath(){
    //获取当前网址，如： http://localhost:8088/test/test.jsp
    var curPath=window.document.location.href;
    //获取主机地址之后的目录，如： test/test.jsp
    var pathName=window.document.location.pathname;
    var pos=curPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8088
    var localhostPaht=curPath.substring(0,pos);
    //获取带"/"的项目名，如：/test
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}
function submitForm(){
	 ga('send', 'event', 'C01_双十一活动页面', '预约试驾按钮', 'C01A01L00_预约试驾按钮');
	var oName = $("#name").val();
	var oSex = $("#sex").val();
	var oPhone = $("#phone").val();
	var oProvince = $("#province").val();
	var oCity = $("#city").val();
	var oDealerName = $("#dealerName").val();
	var oCars = $("#cars").val();
	var oBudget = $("#budget").val();
	var oShopCar = $("#shopCar").val();
	var bid = GetQueryString('bid');
	var mapid = GetQueryString('mapid');
	var arg = {
			username: oName,
			carmodel:oCars,
			mobile: oPhone,
			province: oProvince,
			city: oCity,
			county: oDealerName
	}
	var obj = {
		name: arg.username,
		carmodel: arg.carmodel,
		mobile: arg.mobile,
		province: arg.province,
		city: arg.city,
		county: arg.county
	};
	if(oName == null || oName == ""){
		doubleclickjc("pv", "2016_bai", "2016_00s");
	  //doubleclickjc("uv", "2016_bai", "2016_00s");
		ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': '请填写姓名!'});
		alert("请填写姓名!");
		return;
	}
//	if(oSex == null || oSex == ""|| oSex == "请选择"){
//		alert('请填写性别!');
//		return;
//	}
	if(oPhone==""||!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/.test(oPhone)){
		doubleclickjc("pv", "2016_bai", "2016_00s");
	  //doubleclickjc("uv", "2016_bai", "2016_00s");
		ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': '请填写正确的手机号!'});
		alert('请填写正确的手机号!');
		return;
	}
	if(oProvince == ""|| oProvince == "省份"){
		doubleclickjc("pv", "2016_bai", "2016_00s");
	  //doubleclickjc("uv", "2016_bai", "2016_00s");
		ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': '请选择省份!'});
		alert('请选择省份!');
		return;
	}	
	if(oCity == ""||oCity == "地级市"){
		doubleclickjc("pv", "2016_bai", "2016_00s");
	  //doubleclickjc("uv", "2016_bai", "2016_00s");
		ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': '请选择城市!'});
		alert('请选择城市!');
		return;
	}
//	if(oDealerName == ""||oDealerName == "选择经销商"){
//		alert('请选择经销商!');
//		return;
//	}
	if(oCars == ""||oCars == "请选择"){
		doubleclickjc("pv", "2016_bai", "2016_00s");
	  //doubleclickjc("uv", "2016_bai", "2016_00s");
		ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': '请选择意向车系!'});
		alert('请选择意向车系!');
		return;
	}
	if(oBudget == ""||oBudget == "请选择"){
		doubleclickjc("pv", "2016_bai", "2016_00s");
	  //doubleclickjc("uv", "2016_bai", "2016_00s");
		ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': '请选择购车预算!'});
		alert('请选择购车预算!');
		return;
	}
	if(oShopCar == ""||oShopCar == "请选择"){
		doubleclickjc("pv", "2016_bai", "2016_00s");
	  //doubleclickjc("uv", "2016_bai", "2016_00s");
		ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': '请选择购车时间!'});
		alert('请选择购车时间!');
		return;
	}
	$.ajax({
		type: "POST",
		url: getRootPath() + "/save.do",
		dataType: "json",
		data: {
			"project":"bqsb11",
			"bid":bid,
			"mapid":mapid,
			"name":oName,
			"gender":oSex,
			"tel":oPhone,
			"province":oProvince,
			"city":oCity,
			"dealerName":oDealerName,
			"favoriteModel":oCars,
			"budget":oBudget,
			"scheduledTime":oShopCar
		},
		success: function (data) {			
			ga('send', 'pageview', '/VP/bqsb11/testdrive-finished', {'dimension1': oName + '_' + oSex + '_' + oPhone + '_' + oProvince + '_'+  oCity + '_' + oDealerName + '_'  +  oCars + '_'  + oBudget + '_' + oShopCar});
			setTimeout(function(){
                doubleclicksubmit("pv", "2016_bai", "2016_00r", obj);
                //doubleclicksubmit("uv", "2016_bai", "2016_00r", obj);
            },500);
			alert("预约成功！");
		},
	    error: function(data) {
	    	//ga('send', 'pageview', '/VP/bqsb11/testdrive-failed', {'dimension2': data.toString()+ '_'+ data.toString() + '_' + data.toString()});
	    	alert("网络不好，请重试！");
	    }
	});
}

