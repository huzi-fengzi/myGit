//1.3T排量-经销商名称
var dealer1 = {
		'安徽': {
			'阜阳': ['阜阳雪峰世盛', ],
			'合肥': ['合肥世辉', ],
		},
		'北京': {
			'北京': ['北京金名俱扬', ]
		},
		'福建': {
			'厦门': ['厦门吉仁', ],
			'泉州': ['泉州丰骏', ],
		},
		'广东': {
			'汕头': ['汕头新华', ],
			'深圳': ['深圳鹏昌盛', ],
			'东莞': ['东莞东威', ],
			'惠州': ['惠州旺华', ],
		},
		'广西': {
			'南宁': ['南宁广合盛', ],
		},
		'贵州': {
			'贵阳': ['贵阳安达护行', ],
			'黔西南': ['兴义林荣', ],
			'遵义': ['遵义汇工', ],
			'毕节': ['毕节众力兴旺', ],
		},
		'海南': {
			'海南': ['海口旺诚', ],
		},
		'河北': {
			'唐山': ['唐山广通', ],
			'邯郸': ['邯郸福达', ],
		},
		'河南': {
			'平顶山': ['平顶山亿通',
				'平顶山亿通',
			],
			'郑州': ['郑州宇鼎缘', ],
		},
		'黑龙江': {
			'哈尔滨': ['哈尔滨腾意', ],
		},
		'湖北': {
			'襄阳': ['襄阳鑫龙',
				'襄阳鑫龙',
			],
			'十堰': ['十堰杰奥', ],
		},
		'湖南': {
			'郴州': ['郴州顺鑫达', ],
			'长沙': ['长沙兰天兴望', ],
			'株洲': ['株洲千里马',
				'株洲千里马',
			],
		},
		'江苏': {
			'苏州': ['苏州天丰汇', ],
			'无锡': ['无锡宝丽佳',
				'无锡佳元',
			],
		},
		'江西': {
			'赣州': ['赣州天琛', ],
		},
		'山东': {
			'济宁': ['济宁天鑫达', ],
			'青岛': ['青岛美海',
				'青岛美海',
			],
		},
		'山西': {
			'大同': ['大同启舰', ],
		},
		'陕西': {
			'西安': ['西安华中', ],
		},
		'上海': {
			'上海': ['上海圣跃', ],
		},
		'四川': {
			'泸州': ['泸州都慧', ],
		},
		'西藏': {
			'拉萨': ['拉萨麒翔', ],
		},
		'云南': {
			'普洱': ['普洱航宇', ],
			'红河': ['红河通成', ],
			'文山': ['文山宏昌', ],
			'昭通': ['昭通大昌隆', ],
		},
		'浙江': {
			'宁波': ['宁波骏超',
				'宁波声腾',
			],
			'杭州': ['杭州君德', ],
			'嘉兴': ['嘉兴新奔达', ],
		},
		'重庆': {
			'重庆': ['重庆泓腾', ],
		},

	}
	//1.3T排量-经销商代码
var dealer2 = {
		'安徽': {
			'阜阳': ['V1327', ],
			'合肥': ['V1309', ],
		},
		'北京': {
			'北京': ['V0105', ]
		},
		'福建': {
			'厦门': ['V2017', ],
			'泉州': ['V2015', ],
		},
		'广东': {
			'汕头': ['V2142', ],
			'深圳': ['V2140', ],
			'东莞': ['V2127', ],
			'惠州': ['V2141', ],
		},
		'广西': {
			'南宁': ['V4217', ],
		},
		'贵州': {
			'贵阳': ['V1621', ],
			'黔西南': ['V1623', ],
			'遵义': ['V1624', ],
			'毕节': ['V1622', ],
		},
		'海南': {
			'海南': ['V2401', ],
		},
		'河北': {
			'唐山': ['V2836', ],
			'邯郸': ['V2835', ],
		},
		'河南': {
			'平顶山': ['V1429',
				'V1429',
			],
			'郑州': ['V1440', ],
		},
		'黑龙江': {
			'哈尔滨': ['V2517', ],
		},
		'湖北': {
			'襄阳': ['V1503',
				'V1503',
			],
			'十堰': ['V1522', ],
		},
		'湖南': {
			'郴州': ['V2316', ],
			'长沙': ['V2319', ],
			'株洲': ['V2318',
				'V2318',
			],
		},
		'江苏': {
			'苏州': ['V1128', ],
			'无锡': ['V1113',
				'V1135',
			],
		},
		'江西': {
			'赣州': ['V2214', ],
		},
		'山东': {
			'济宁': ['V1029', ],
			'青岛': ['V1039',
				'V1039',
			],
		},
		'山西': {
			'大同': ['V2921', ],
		},
		'陕西': {
			'西安': ['V3011', ],
		},
		'上海': {
			'上海': ['V0203', ],
		},
		'四川': {
			'泸州': ['V1725', ],
		},
		'西藏': {
			'拉萨': ['V4103', ],
		},
		'云南': {
			'普洱': ['V1834', ],
			'红河': ['V1831', ],
			'文山': ['V1830', ],
			'昭通': ['V1808', ],
		},
		'浙江': {
			'宁波': ['V1208',
				'V1217',
			],
			'杭州': ['V1218', ],
			'嘉兴': ['V1209', ],
		},
		'重庆': {
			'重庆': ['V0305', ],
		},

	}
	//1.3T排量-经销商销售部
var dealer3 = {
		'安徽': {
			'阜阳': ['乘用车', ],
			'合肥': ['乘用车', ],
		},
		'北京': {
			'北京': ['乘用车', ]
		},
		'福建': {
			'厦门': ['乘用车', ],
			'泉州': ['乘用车', ],
		},
		'广东': {
			'汕头': ['乘用车', ],
			'深圳': ['乘用车', ],
			'东莞': ['乘用车', ],
			'惠州': ['乘用车', ],
		},
		'广西': {
			'南宁': ['乘用车', ],
		},
		'贵州': {
			'贵阳': ['乘用车', ],
			'黔西南': ['乘用车', ],
			'遵义': ['乘用车', ],
			'毕节': ['乘用车', ],
		},
		'海南': {
			'海南': ['南部', ],
		},
		'河北': {
			'唐山': ['乘用车', ],
			'邯郸': ['乘用车', ],
		},
		'河南': {
			'平顶山': ['乘用车',
				'乘用车',
			],
			'郑州': ['乘用车', ],
		},
		'黑龙江': {
			'哈尔滨': ['乘用车', ],
		},
		'湖北': {
			'襄阳': ['乘用车',
				'乘用车',
			],
			'十堰': ['乘用车', ],
		},
		'湖南': {
			'郴州': ['乘用车', ],
			'长沙': ['乘用车', ],
			'株洲': ['乘用车',
				'乘用车',
			],
		},
		'江苏': {
			'苏州': ['乘用车', ],
			'无锡': ['东部',
				'乘用车',
			],
		},
		'江西': {
			'赣州': ['乘用车', ],
		},
		'山东': {
			'济宁': ['东部', ],
			'青岛': ['乘用车',
				'乘用车',
			],
		},
		'山西': {
			'大同': ['乘用车', ],
		},
		'陕西': {
			'西安': ['乘用车', ],
		},
		'上海': {
			'上海': ['乘用车', ],
		},
		'四川': {
			'泸州': ['乘用车', ],
		},
		'西藏': {
			'拉萨': ['乘用车', ],
		},
		'云南': {
			'普洱': ['南部', ],
			'红河': ['乘用车', ],
			'文山': ['乘用车', ],
			'昭通': ['乘用车', ],
		},
		'浙江': {
			'宁波': ['东部',
				'乘用车',
			],
			'杭州': ['乘用车', ],
			'嘉兴': ['乘用车', ],
		},
		'重庆': {
			'重庆': ['乘用车', ],
		},

	}
	//1.5T排量-经销商名称
var dealer4 = {
		'安徽': {
			'蚌埠': ['蚌埠众旺', ],
			'亳州': ['亳州正鑫',
				'亳州鑫旺',
			],
			'滁州': ['滁州隆胜', ],
			'阜阳': ['阜阳恒安', ],
			'合肥': ['合肥智和星', ],
			'淮北': ['淮北宝丰', ],
			'马鞍山': ['马鞍山联博', ],
			'芜湖': ['芜湖宝星', ],
			'宿州': ['宿州益昌', ],
		},
		'北京': {
			'北京': ['北京中农通',
				'北京冀东华明',
			],
		},
		'福建': {
			'漳州': ['漳州南龙', ],
			'泉州': ['泉州泉威', ],
			'莆田': ['莆田隆腾', ],
			'福州': ['福州豪杰', ],
		},
		'甘肃': {
			'张掖': ['张掖鑫中信', ],
			'天水': ['天水威盛', ],
			'平凉': ['平凉长昌', ],
			'兰州': ['兰州祥云', ],
			'酒泉': ['酒泉兴顺达', ],
		},
		'广东': {
			'东莞': ['东莞润达', ],
			'佛山': ['佛山车力', ],
			'广州': ['广州汇峰', ],
			'河源': ['河源联友发', ],
			'惠州': ['惠州鹏鑫盛', ],
			'江门': ['江门新大昌', ],
			'梅州': ['梅州嘉金', ],
			'清远': ['清远三炬', ],
			'韶关': ['韶关和顺达', ],
			'深圳': ['深圳鹏汇', ],
			'湛江': ['湛江金士达', ],
			'肇庆': ['肇庆庆利', ],
			'中山': ['中山润达', ],
		},
		'广西': {
			'玉林': ['玉林瀚泓', ],
			'梧州': ['梧州风顺', ],
			'钦州': ['钦州鹏达', ],
			'南宁': ['南宁金绿源',
				'南宁金惠利',
			],
			'柳州': ['柳州全好', ],
			'百色': ['百色凯瑞', ],
		},
		'贵州': {
			'遵义': ['遵义香车亚飞',
				'遵义千帆飞扬',
			],
			'黔西南': ['兴义远达', ],
			'铜仁': ['铜仁鑫盛源', ],
			'六盘水': ['六盘水润亿', ],
			'黔东南': ['凯里鼎盛鑫', ],
			'贵阳': ['贵阳平安护行', ],
			'黔南州': ['都匀鑫盛', ],
			'毕节': ['毕节诚信合', ],
			'安顺': ['安顺腾飞', ],
		},
		'海南': {
			'海南': ['海口旺诚', ],
		},
		'河北': {
			'保定': ['保定奇盛宝',
				'保定铭盛',
			],
			'沧州': ['沧州中农通', ],
			'承德': ['承德庞大信德', ],
			'廊坊': ['廊坊农机',
				'廊坊金泰',
			],
			'石家庄': ['石家庄金润', ],
			'唐山': ['唐山冀东华利', ],
			'邢台': ['邢台致祥', ],
			'张家口': ['张家口致远', ],
		},
		'河南': {
			'安阳': ['安阳泰旺', ],
			'焦作': ['焦作亿嘉', ],
			'洛阳': ['洛阳久佳', ],
			'洛阳': ['洛阳宝泰', ],
			'漯河': ['漯河骏通', ],
			'平顶山': ['平顶山众通', ],
			'濮阳': ['濮阳天润',
				'濮阳润丰',
			],
			'商丘': ['商丘驰原', ],
			'新乡': ['新乡锦江', ],
			'信阳': ['信阳新新成', ],
			'许昌': ['许昌裕丰',
				'许昌鑫隆源',
			],
			'郑州': ['郑州顺之成',
				'郑州庞大龙腾',
				'郑州和诚',
			],
			'周口': ['周口众恒', ],
			'驻马店': ['驻马店恒天', ],
		},
		'黑龙江': {
			'绥化': ['绥化广吉', ],
			'齐齐哈尔': ['齐齐哈尔永旺', ],
			'牡丹江': ['牡丹江盛运', ],
			'鸡西': ['鸡西鑫环宇', ],
			'哈尔滨': ['哈尔滨盛鼎', ],
		},
		'湖北': {
			'宜昌': ['宜昌欧瑞', ],
			'孝感': ['孝感星宇', ],
			'咸宁': ['咸宁同富', ],
			'武汉': ['武汉天丰',
				'武汉顺亿达',
			],
			'荆州': ['荆州万盛鑫', ],
			'黄石': ['黄石万众', ],
			'黄冈': ['黄冈源华悦诚', ],
			'恩施': ['恩施众隆',
				'恩施富讯',
			],
		},
		'湖南': {
			'株洲': ['株洲蓝京', ],
			'长沙': ['长沙国昌', ],
			'岳阳': ['岳阳华梦', ],
			'邵阳': ['邵阳永通',
				'邵阳吉峰',
			],
			'娄底': ['娄底富华', ],
			'怀化': ['怀化宏帆', ],
			'郴州': ['郴州吉驰', ],
			'常德': ['常德奥之杰', ],
		},
		'吉林': {
			'长春': ['长春瑞隆', ],
			'通辽': ['通辽惠都', ],
			'四平': ['四平泓瑞', ],
		},
		'江苏': {
			'盐城': ['盐城金鼎', ],
			'徐州': ['徐州天骄', ],
			'宿迁': ['宿迁永旺', ],
			'无锡': ['无锡宝丽佳', ],
			'苏州': ['苏州天丰达', ],
			'南通': ['南通瑞盈',
				'南通锐驰',
			],
			'南京': ['南京宁亚', ],
			'连云港': ['连云港利亚奇', ],
			'淮安': ['淮安佳运', ],
		},
		'江西': {
			'宜春': ['宜春长丰', ],
			'上饶': ['上饶裕安', ],
			'萍乡': ['萍乡一路顺风', ],
			'南昌': ['南昌和丰', ],
			'吉安': ['吉安鑫茂隆达', ],
			'赣州': ['赣州雄瑞', ],
			'抚州': ['抚州旺达', ],
		},
		'辽宁': {
			'沈阳': ['沈阳威鹏',
				'沈阳聚豪',
				'沈阳金威鹏',
			],
			'盘锦': ['盘锦众旺', ],
			'葫芦岛': ['葫芦岛中兴', ],
			'大连': ['大连安运', ],
			'朝阳': ['朝阳鑫鼎', ],
		},
		'内蒙': {
			'兴安': ['乌兰浩特瑞隆', ],
			'呼伦贝尔': ['呼伦贝尔富田', ],
			'赤峰': ['赤峰龙驰', ],
			'包头': ['包头农机', ],
		},
		'宁夏': {
			'银川': ['银川嘉润', ],
		},
		'山东': {
			'滨州': ['滨州顺鑫',
				'滨州福泽钲坤',
			],
			'德州': ['德州宝亿源', ],
			'菏泽': ['菏泽润桥',
				'菏泽建达',
			],
			'济南': ['济南世纪广联', ],
			'济宁': ['济宁天鑫达', ],
			'临沂': ['临沂九州顺宏',
				'临沂九州顺发',
			],
			'青岛': ['青岛美丰',
				'青岛汇泉茂',
				'青岛鼎成',
			],
			'日照': ['日照宇瑞', ],
			'泰安': ['泰安润桥', ],
			'威海': ['威海民鑫源', ],
			'潍坊': ['潍坊鸿业', ],
			'烟台': ['烟台鸿枫', ],
			'淄博': ['淄博宏利', ],
		},
		'山西': {
			'长治': ['长治飞路', ],
			'运城': ['运城润通', ],
			'忻州': ['忻州华迪', ],
			'太原': ['太原昌达顺天', ],
			'朔州': ['朔州金奕通', ],
			'吕梁': ['吕梁华旺', ],
			'临汾': ['临汾吉悦锦程', ],
			'晋中': ['晋中宸如', ],
			'大同': ['大同顺旺', ],
		},
		'陕西': {
			'安康': ['安康宏江', ],
			'榆林': ['榆林兴源', ],
			'延安': ['延安诚旺', ],
			'咸阳': ['咸阳天谊', ],
			'西安': ['西安华鹏', ],
			'渭南': ['渭南华鹏', ],
			'铜川': ['铜川世纪', ],
			'汉中': ['汉中顺亿达', ],
			'宝鸡': ['宝鸡华鹏', ],
		},
		'上海': {
			'上海': ['上海源奥', ],
		},
		'四川': {
			'巴中': ['巴中万瑞', ],
			'成都': ['成都源兴', ],
			'达州': ['达州瑞驰', ],
			'广安': ['广安强杰', ],
			'广元': ['广元博伟', ],
			'凉山': ['西昌盛茂', ],
			'泸州': ['泸州亚通', ],
			'绵阳': ['绵阳万烽', ],
			'内江': ['内江景鸿', ],
			'攀枝花': ['攀枝花盛运', ],
			'宜宾': ['宜宾金祥顺源', ],
			'自贡': ['自贡宏吉', ],
		},
		'天津': {
			'天津': ['天津天宇',
				'天津天一盈通',
			],
		},
		'新疆': {
			'阿克苏': ['阿克苏隆鑫伟业', ],
			'乌鲁木齐': ['乌鲁木齐百斯特', ],
			'喀什': ['喀什鸿泽', ],
		},
		'云南': {
			'昭通': ['昭通贵红', ],
			'玉溪': ['玉溪华晨', ],
			'文山': ['文山文桥', ],
			'曲靖': ['曲靖贵中红',
				'曲靖东盛源',
			],
			'普洱': ['普洱航宇', ],
			'临沧': ['临沧靖安', ],
			'丽江': ['丽江万一', ],
			'昆明': ['昆明力德',
				'昆明玖磊',
			],
			'红河': ['红河鑫通', ],
			'德宏': ['德宏启顺', ],
			'大理': ['大理万一', ],
			'楚雄': ['楚雄陆驰', ],
			'保山': ['保山万一', ],
		},
		'重庆': {
			'重庆': ['重庆亚兴欧',
				'重庆佰威',
			],
		},
		'浙江': {
			'温州': ['温州柯隆', ],
			'绍兴': ['绍兴嘉通', ],
			'衢州': ['衢州大华', ],
			'宁波': ['宁波骏超', ],
			'丽水': ['丽水德亿', ],
			'金华': ['金华红峰', ],
			'嘉兴': ['嘉兴奔达（桐乡）', ],
			'湖州': ['湖州旺达', ],
			'杭州': ['杭州君昌', ],
		},

	}
	//1.5T排量-经销商代码
var dealer5 = {
		'安徽': {
			'蚌埠': ['V1320', ],
			'亳州': ['V1306',
				'V1326',
			],
			'滁州': ['V1324', ],
			'阜阳': ['V1322', ],
			'合肥': ['V1317', ],
			'淮北': ['V1319', ],
			'马鞍山': ['V1316', ],
			'芜湖': ['V1305', ],
			'宿州': ['V1318', ],
		},
		'北京': {
			'北京': ['V0101',
				'V0103',
			],
		},
		'福建': {
			'漳州': ['V2013', ],
			'泉州': ['V2003', ],
			'莆田': ['V2016', ],
			'福州': ['V2014', ],
		},
		'甘肃': {
			'张掖': ['V3113', ],
			'天水': ['V3112', ],
			'平凉': ['V3110', ],
			'兰州': ['V3104', ],
			'酒泉': ['V3111', ],
		},
		'广东': {
			'东莞': ['V2101', ],
			'佛山': ['V2121', ],
			'广州': ['V2135', ],
			'河源': ['V2143', ],
			'惠州': ['V2133', ],
			'江门': ['V2139', ],
			'梅州': ['V2123', ],
			'清远': ['V2128', ],
			'韶关': ['V2104', ],
			'深圳': ['V2125', ],
			'湛江': ['V2134', ],
			'肇庆': ['V2118', ],
			'中山': ['V2102', ],
		},
		'广西': {
			'玉林': ['V4203', ],
			'梧州': ['V4206', ],
			'钦州': ['V4201', ],
			'南宁': ['V4212',
				'V4208',
			],
			'柳州': ['V4209', ],
			'百色': ['V4207', ],
		},
		'贵州': {
			'遵义': ['V1601',
				'V1611',
			],
			'黔西南': ['V1603', ],
			'铜仁': ['V1617', ],
			'六盘水': ['V1605', ],
			'黔东南': ['V1619', ],
			'贵阳': ['V1602', ],
			'黔南州': ['V1608', ],
			'毕节': ['V1618', ],
			'安顺': ['V1606', ],
		},
		'海南': {
			'海南': ['V2401', ],
		},
		'河北': {
			'保定': ['V2819',
				'V2833',
			],
			'沧州': ['V2829', ],
			'承德': ['V2823', ],
			'廊坊': ['V2806',
				'V2803',
			],
			'石家庄': ['V2804', ],
			'唐山': ['V2821', ],
			'邢台': ['V2832', ],
			'张家口': ['V2808', ],
		},
		'河南': {
			'安阳': ['V1432', ],
			'焦作': ['V1402', ],
			'洛阳': ['V1422', ],
			'洛阳': ['V1404', ],
			'漯河': ['V1416', ],
			'平顶山': ['V1419', ],
			'濮阳': ['V1421',
				'V1434',
			],
			'商丘': ['V1423', ],
			'新乡': ['V1410', ],
			'信阳': ['V1409', ],
			'许昌': ['V1412',
				'V1425',
			],
			'郑州': ['V1420',
				'V1437',
				'V1401',
			],
			'周口': ['V1436', ],
			'驻马店': ['V1413', ],
		},
		'黑龙江': {
			'绥化': ['V2512', ],
			'齐齐哈尔': ['V2515', ],
			'牡丹江': ['V2511', ],
			'鸡西': ['V2507', ],
			'哈尔滨': ['V2516', ],
		},
		'湖北': {
			'宜昌': ['V1513', ],
			'孝感': ['V1505', ],
			'咸宁': ['V1509', ],
			'武汉': ['V1514',
				'V1506',
			],
			'荆州': ['V1521', ],
			'黄石': ['V1519', ],
			'黄冈': ['V1518', ],
			'恩施': ['V1520',
				'V1523',
			],
		},
		'湖南': {
			'株洲': ['V2302', ],
			'长沙': ['V2313', ],
			'岳阳': ['V2306', ],
			'邵阳': ['V2315',
				'V2312',
			],
			'娄底': ['V2317', ],
			'怀化': ['V2308', ],
			'郴州': ['V2311', ],
			'常德': ['V2307', ],
		},
		'吉林': {
			'长春': ['V2605', ],
			'通辽': ['V4312', ],
			'四平': ['V2615', ],
		},
		'江苏': {
			'盐城': ['V1114', ],
			'徐州': ['V1133', ],
			'宿迁': ['V1130', ],
			'无锡': ['V1113', ],
			'苏州': ['V1102', ],
			'南通': ['V1115',
				'V1123',
			],
			'南京': ['V1122', ],
			'连云港': ['V1116', ],
			'淮安': ['V1132', ],
		},
		'江西': {
			'宜春': ['V2204', ],
			'上饶': ['V2208', ],
			'萍乡': ['V2205', ],
			'南昌': ['V2202', ],
			'吉安': ['V2207', ],
			'赣州': ['V2211', ],
			'抚州': ['V2206', ],
		},
		'辽宁': {
			'沈阳': ['V2701',
				'V2710',
				'V2711',
			],
			'盘锦': ['V2705', ],
			'葫芦岛': ['V2709', ],
			'大连': ['V2703', ],
			'朝阳': ['V2706', ],
		},
		'内蒙': {
			'兴安': ['V4311', ],
			'呼伦贝尔': ['V4313', ],
			'赤峰': ['V4310', ],
			'包头': ['V4302', ],
		},
		'宁夏': {
			'银川': ['V4403', ],
		},
		'山东': {
			'滨州': ['V1014',
				'V1043',
			],
			'德州': ['V1015', ],
			'菏泽': ['V1035',
				'V1022',
			],
			'济南': ['V1032', ],
			'济宁': ['V1029', ],
			'临沂': ['V1041',
				'V1012',
			],
			'青岛': ['V1042',
				'V1025',
				'V1002',
			],
			'日照': ['V1024', ],
			'泰安': ['V1045', ],
			'威海': ['V1005', ],
			'潍坊': ['V1044', ],
			'烟台': ['V1010', ],
			'淄博': ['V1011', ],
		},
		'山西': {
			'长治': ['V2912', ],
			'运城': ['V2913', ],
			'忻州': ['V2904', ],
			'太原': ['V2902', ],
			'朔州': ['V2909', ],
			'吕梁': ['V2918', ],
			'临汾': ['V2920', ],
			'晋中': ['V2919', ],
			'大同': ['V2901', ],
		},
		'陕西': {
			'安康': ['V3013', ],
			'榆林': ['V3006', ],
			'延安': ['V3008', ],
			'咸阳': ['V3007', ],
			'西安': ['V3001', ],
			'渭南': ['V3003', ],
			'铜川': ['V3010', ],
			'汉中': ['V3012', ],
			'宝鸡': ['V3005', ],
		},
		'上海': {
			'上海': ['V0204', ],
		},
		'四川': {
			'巴中': ['V1720', ],
			'成都': ['V1723', ],
			'达州': ['V1710', ],
			'广安': ['V1717', ],
			'广元': ['V1705', ],
			'凉山': ['V1722', ],
			'泸州': ['V1702', ],
			'绵阳': ['V1716', ],
			'内江': ['V1718', ],
			'攀枝花': ['V1713', ],
			'宜宾': ['V1709', ],
			'自贡': ['V1712', ],
		},
		'天津': {
			'天津': ['V0403',
				'V0401',
			],
		},
		'新疆': {
			'阿克苏': ['V4013', ],
			'乌鲁木齐': ['V4012', ],
			'喀什': ['V4014', ],
		},
		'云南': {
			'昭通': ['V1813', ],
			'玉溪': ['V1837', ],
			'文山': ['V1815', ],
			'曲靖': ['V1825',
				'V1822',
			],
			'普洱': ['V1834', ],
			'临沧': ['V1828', ],
			'丽江': ['V1826', ],
			'昆明': ['V1829',
				'V1824',
			],
			'红河': ['V1809', ],
			'德宏': ['V1814', ],
			'大理': ['V1819', ],
			'楚雄': ['V1835', ],
			'保山': ['V1827', ],
		},
		'重庆': {
			'重庆': ['V0304',
				'V0306',
			],
		},
		'浙江': {
			'温州': ['V1215', ],
			'绍兴': ['V1202', ],
			'衢州': ['V1211', ],
			'宁波': ['V1208', ],
			'丽水': ['V1212', ],
			'金华': ['V1214', ],
			'嘉兴': ['V1206', ],
			'湖州': ['V1216', ],
			'杭州': ['V1205', ],
		},

	}
	//1.5T排量-经销商销售部
var dealer6 = {
	'安徽': {
		'蚌埠': ['东部', ],
		'亳州': ['东部',
			'东部',
		],
		'滁州': ['东部', ],
		'阜阳': ['东部', ],
		'合肥': ['东部', ],
		'淮北': ['东部', ],
		'马鞍山': ['东部', ],
		'芜湖': ['东部', ],
		'宿州': ['东部', ],
	},
	'北京': {
		'北京': ['中部',
			'中部',
		],
	},
	'福建': {
		'漳州': ['南部', ],
		'泉州': ['南部', ],
		'莆田': ['南部', ],
		'福州': ['南部', ],
	},
	'甘肃': {
		'张掖': ['中部', ],
		'天水': ['中部', ],
		'平凉': ['中部', ],
		'兰州': ['中部', ],
		'酒泉': ['中部', ],
	},
	'广东': {
		'东莞': ['南部', ],
		'佛山': ['南部', ],
		'广州': ['南部', ],
		'河源': ['南部', ],
		'惠州': ['南部', ],
		'江门': ['南部', ],
		'梅州': ['南部', ],
		'清远': ['南部', ],
		'韶关': ['南部', ],
		'深圳': ['南部', ],
		'湛江': ['南部', ],
		'肇庆': ['南部', ],
		'中山': ['南部', ],
	},
	'广西': {
		'玉林': ['南部', ],
		'梧州': ['南部', ],
		'钦州': ['南部', ],
		'南宁': ['南部',
			'南部',
		],
		'柳州': ['南部', ],
		'百色': ['南部', ],
	},
	'贵州': {
		'遵义': ['南部',
			'南部',
		],
		'黔西南': ['南部', ],
		'铜仁': ['南部', ],
		'六盘水': ['南部', ],
		'黔东南': ['南部', ],
		'贵阳': ['南部', ],
		'黔南州': ['南部', ],
		'毕节': ['南部', ],
		'安顺': ['南部', ],
	},
	'海南': {
		'海南': ['南部', ],
	},
	'河北': {
		'保定': ['中部',
			'中部',
		],
		'沧州': ['中部', ],
		'承德': ['中部', ],
		'廊坊': ['中部',
			'中部',
		],
		'石家庄': ['中部', ],
		'唐山': ['中部', ],
		'邢台': ['中部', ],
		'张家口': ['中部', ],
	},
	'河南': {
		'安阳': ['中部', ],
		'焦作': ['中部', ],
		'洛阳': ['中部', ],
		'洛阳': ['中部', ],
		'漯河': ['中部', ],
		'平顶山': ['中部', ],
		'濮阳': ['中部',
			'中部',
		],
		'商丘': ['中部', ],
		'新乡': ['中部', ],
		'信阳': ['中部', ],
		'许昌': ['中部',
			'中部',
		],
		'郑州': ['中部',
			'中部',
			'中部',
		],
		'周口': ['中部', ],
		'驻马店': ['中部', ],
	},
	'黑龙江': {
		'绥化': ['中部', ],
		'齐齐哈尔': ['中部', ],
		'牡丹江': ['中部', ],
		'鸡西': ['中部', ],
		'哈尔滨': ['中部', ],
	},
	'湖北': {
		'宜昌': ['东部', ],
		'孝感': ['东部', ],
		'咸宁': ['东部', ],
		'武汉': ['东部',
			'东部',
		],
		'荆州': ['东部', ],
		'黄石': ['东部', ],
		'黄冈': ['东部', ],
		'恩施': ['东部',
			'东部',
		],
	},
	'湖南': {
		'株洲': ['东部', ],
		'长沙': ['东部', ],
		'岳阳': ['东部', ],
		'邵阳': ['东部',
			'东部',
		],
		'娄底': ['东部', ],
		'怀化': ['东部', ],
		'郴州': ['东部', ],
		'常德': ['东部', ],
	},
	'吉林': {
		'长春': ['中部', ],
		'通辽': ['中部', ],
		'四平': ['中部', ],
	},
	'江苏': {
		'盐城': ['东部', ],
		'徐州': ['东部', ],
		'宿迁': ['东部', ],
		'无锡': ['东部', ],
		'苏州': ['东部', ],
		'南通': ['东部',
			'东部',
		],
		'南京': ['东部', ],
		'连云港': ['东部', ],
		'淮安': ['东部', ],
	},
	'江西': {
		'宜春': ['东部', ],
		'上饶': ['东部', ],
		'萍乡': ['东部', ],
		'南昌': ['东部', ],
		'吉安': ['东部', ],
		'赣州': ['东部', ],
		'抚州': ['东部', ],
	},
	'辽宁': {
		'沈阳': ['中部',
			'中部',
			'中部',
		],
		'盘锦': ['中部', ],
		'葫芦岛': ['中部', ],
		'大连': ['中部', ],
		'朝阳': ['中部', ],
	},
	'内蒙': {
		'兴安': ['中部', ],
		'呼伦贝尔': ['中部', ],
		'赤峰': ['中部', ],
		'包头': ['中部', ],
	},
	'宁夏': {
		'银川': ['中部', ],
	},
	'山东': {
		'滨州': ['东部',
			'东部',
		],
		'德州': ['东部', ],
		'菏泽': ['东部',
			'东部',
		],
		'济南': ['东部', ],
		'济宁': ['东部', ],
		'临沂': ['东部',
			'东部',
		],
		'青岛': ['东部',
			'东部',
			'东部',
		],
		'日照': ['东部', ],
		'泰安': ['东部', ],
		'威海': ['东部', ],
		'潍坊': ['东部', ],
		'烟台': ['东部', ],
		'淄博': ['东部', ],
	},
	'山西': {
		'长治': ['中部', ],
		'运城': ['中部', ],
		'忻州': ['中部', ],
		'太原': ['中部', ],
		'朔州': ['中部', ],
		'吕梁': ['中部', ],
		'临汾': ['中部', ],
		'晋中': ['中部', ],
		'大同': ['中部', ],
	},
	'陕西': {
		'安康': ['中部', ],
		'榆林': ['中部', ],
		'延安': ['中部', ],
		'咸阳': ['中部', ],
		'西安': ['中部', ],
		'渭南': ['中部', ],
		'铜川': ['中部', ],
		'汉中': ['中部', ],
		'宝鸡': ['中部', ],
	},
	'上海': {
		'上海': ['东部', ],
	},
	'四川': {
		'巴中': ['南部', ],
		'成都': ['南部', ],
		'达州': ['南部', ],
		'广安': ['南部', ],
		'广元': ['南部', ],
		'凉山': ['南部', ],
		'泸州': ['南部', ],
		'绵阳': ['南部', ],
		'内江': ['南部', ],
		'攀枝花': ['南部', ],
		'宜宾': ['南部', ],
		'自贡': ['南部', ],
	},
	'天津': {
		'天津': ['中部',
			'中部',
		],
	},
	'新疆': {
		'阿克苏': ['中部', ],
		'乌鲁木齐': ['中部', ],
		'喀什': ['中部', ],
	},
	'云南': {
		'昭通': ['南部', ],
		'玉溪': ['南部', ],
		'文山': ['南部', ],
		'曲靖': ['南部',
			'南部',
		],
		'普洱': ['南部', ],
		'临沧': ['南部', ],
		'丽江': ['南部', ],
		'昆明': ['南部',
			'南部',
		],
		'红河': ['南部', ],
		'德宏': ['南部', ],
		'大理': ['南部', ],
		'楚雄': ['南部', ],
		'保山': ['南部', ],
	},
	'重庆': {
		'重庆': ['南部',
			'南部',
		],
	},
	'浙江': {
		'温州': ['东部', ],
		'绍兴': ['东部', ],
		'衢州': ['东部', ],
		'宁波': ['东部', ],
		'丽水': ['东部', ],
		'金华': ['东部', ],
		'嘉兴': ['东部', ],
		'湖州': ['东部', ],
		'杭州': ['东部', ],
	},

}

var oProvince = $("#province");
var oCity = $("#city");
var oDealername = $("#dealername");
var oDealercode=$("#dealercode");
var oSales=$("#sales");
var oFavoritemodel=$("#favoritemodel");
var provincesVal,cityVal,dealerCodeVal,dealerNameVal,salesVal;
var dealerCodeOpt,dealerNameOpt,salesOpt;
var idx1,idx2;
//意向排量
$("#favoritemodel").on({
		change: function() {
			var favoritemodelVal = $("#favoritemodel").val();
			if(favoritemodelVal == "") {
				$("#province").html("");
				oProvince.append('<option value=""></option>');
				$("#city").html("");
				oCity.append('<option value=""></option>');
				$("#dealername").html("");
				oDealername.append('<option value=""></option>');
			}else if(favoritemodelVal == "M50F1.3T"){
				linkage1(oProvince, oCity, oDealername, dealer1);
				linkage2(oProvince, oCity, oDealercode, dealer2);
				linkage3(oProvince, oCity, oSales, dealer3);
			}else{
				linkage1(oProvince, oCity, oDealername, dealer4);
				linkage2(oProvince, oCity, oDealercode, dealer5);
				linkage3(oProvince, oCity, oSales, dealer6);
			}
		}
	})

//省份
$("#province").on({
		change: function() {
			provincesVal = $("#province").val();
			if(provincesVal == "") {
				$("#city").html("");
				oCity.append('<option value=""></option>');
			}
		}
	})
	//城市
$("#city").on({
	change: function() {
		cityVal = $("#city").val();
		if(cityVal == "") {
			$("#dealername").html("");
			$("#dealername").append('<option value=""></option>');
		}
	}
})
oDealername.on({
	change:function(){
		dealerNameVal=oDealername.val();
		dealerCodeVal=oDealercode.val();
		salesVal=oSales.val();
		dealerNameOpt=oDealername.find("option");
		dealerCodeOpt=oDealercode.find("option");
		salesOpt=oSales.find("option");
		for(var i in dealerNameOpt){
			if(dealerNameOpt[i].innerHTML==dealerNameVal){
				idx1=i;				
				oDealercode.val(dealerCodeOpt[idx1].innerHTML);
				oSales.val(salesOpt[idx1].innerHTML);
			}else if($("#dealer_code_name").val()==""){	
				$("#dealercode").val("");
				$("#sales").val("");
			}			
		}										
	}
})