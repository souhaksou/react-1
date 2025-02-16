const users = [
  {
    "name": "许洋",
    "age": 44,
    "gender": "女",
    "birthdate": "1972-01-13",
    "address": "辽宁省 沈阳市 于洪区"
  },
  {
    "name": "傅娜",
    "age": 49,
    "gender": "女",
    "birthdate": "2000-01-03",
    "address": "江西省 吉安市 青原区"
  },
  {
    "name": "田洋",
    "age": 35,
    "gender": "女",
    "birthdate": "1995-12-21",
    "address": "湖南省 岳阳市 湘阴县"
  },
  {
    "name": "陆霞",
    "age": 24,
    "gender": "女",
    "birthdate": "1989-11-09",
    "address": "内蒙古自治区 鄂尔多斯市 鄂托克前旗"
  },
  {
    "name": "孟娟",
    "age": 26,
    "gender": "男",
    "birthdate": "2007-07-06",
    "address": "西藏自治区 林芝地区 波密县"
  },
  {
    "name": "罗磊",
    "age": 25,
    "gender": "男",
    "birthdate": "2015-02-24",
    "address": "台湾 彰化县 和美镇"
  },
  {
    "name": "熊霞",
    "age": 26,
    "gender": "女",
    "birthdate": "1994-07-25",
    "address": "黑龙江省 齐齐哈尔市 富拉尔基区"
  },
  {
    "name": "田刚",
    "age": 54,
    "gender": "女",
    "birthdate": "1994-09-24",
    "address": "新疆维吾尔自治区 昌吉回族自治州 吉木萨尔县"
  },
  {
    "name": "贾霞",
    "age": 33,
    "gender": "男",
    "birthdate": "2006-07-24",
    "address": "香港特别行政区 九龙 油尖旺区"
  },
  {
    "name": "董霞",
    "age": 19,
    "gender": "女",
    "birthdate": "1970-09-19",
    "address": "四川省 资阳市 雁江区"
  },
  {
    "name": "刘明",
    "age": 56,
    "gender": "女",
    "birthdate": "2016-03-18",
    "address": "湖南省 娄底市 双峰县"
  },
  {
    "name": "姜霞",
    "age": 22,
    "gender": "女",
    "birthdate": "2020-07-27",
    "address": "香港特别行政区 九龙 九龙城区"
  },
  {
    "name": "石强",
    "age": 19,
    "gender": "女",
    "birthdate": "1991-04-01",
    "address": "四川省 广安市 华蓥市"
  },
  {
    "name": "宋秀兰",
    "age": 22,
    "gender": "女",
    "birthdate": "1984-04-04",
    "address": "四川省 宜宾市 兴文县"
  },
  {
    "name": "常秀兰",
    "age": 20,
    "gender": "女",
    "birthdate": "1980-03-21",
    "address": "福建省 漳州市 龙文区"
  },
  {
    "name": "马秀英",
    "age": 31,
    "gender": "男",
    "birthdate": "2015-01-09",
    "address": "辽宁省 锦州市 凌河区"
  },
  {
    "name": "彭娟",
    "age": 18,
    "gender": "女",
    "birthdate": "1988-03-20",
    "address": "江苏省 无锡市 崇安区"
  },
  {
    "name": "廖强",
    "age": 37,
    "gender": "女",
    "birthdate": "2002-10-14",
    "address": "澳门特别行政区 离岛 -"
  },
  {
    "name": "沈芳",
    "age": 35,
    "gender": "男",
    "birthdate": "2019-08-03",
    "address": "新疆维吾尔自治区 克孜勒苏柯尔克孜自治州 阿合奇县"
  },
  {
    "name": "梁伟",
    "age": 57,
    "gender": "女",
    "birthdate": "1998-07-13",
    "address": "河北省 邢台市 威县"
  },
  {
    "name": "林芳",
    "age": 40,
    "gender": "男",
    "birthdate": "1974-04-13",
    "address": "天津 天津市 河北区"
  },
  {
    "name": "卢秀兰",
    "age": 29,
    "gender": "男",
    "birthdate": "1974-03-06",
    "address": "内蒙古自治区 兴安盟 扎赉特旗"
  },
  {
    "name": "曾敏",
    "age": 23,
    "gender": "女",
    "birthdate": "1975-08-10",
    "address": "海南省 海口市 其它区"
  },
  {
    "name": "龚平",
    "age": 50,
    "gender": "女",
    "birthdate": "1976-06-30",
    "address": "黑龙江省 鸡西市 梨树区"
  },
  {
    "name": "蔡芳",
    "age": 27,
    "gender": "女",
    "birthdate": "1991-03-14",
    "address": "辽宁省 葫芦岛市 建昌县"
  },
  {
    "name": "常艳",
    "age": 60,
    "gender": "男",
    "birthdate": "2016-12-16",
    "address": "台湾 嘉义县 大林镇"
  },
  {
    "name": "宋杰",
    "age": 31,
    "gender": "女",
    "birthdate": "2017-09-12",
    "address": "海南省 三沙市 南沙群岛"
  },
  {
    "name": "汤芳",
    "age": 53,
    "gender": "女",
    "birthdate": "1981-10-11",
    "address": "辽宁省 铁岭市 其它区"
  },
  {
    "name": "戴勇",
    "age": 32,
    "gender": "女",
    "birthdate": "1980-07-09",
    "address": "河南省 开封市 开封县"
  },
  {
    "name": "丁明",
    "age": 49,
    "gender": "女",
    "birthdate": "1980-10-09",
    "address": "青海省 海南藏族自治州 贵南县"
  }
];

const data = () => {
  return {
    userData: users,
  }
};

export default data;

// const data = Mock.mock({
//   'users|30': [ // 生成 10 筆數據
//     {
//       'name': '@cname', // 隨機中文姓名
//       'age|18-60': 1, // 年齡範圍 18-60
//       'gender|1': ['男', '女'], // 隨機性別
//       'birthdate': '@date("yyyy-MM-dd")', // 隨機出生日期
//       'address': '@county(true)' // 隨機地址
//     }
//   ]
// });

// console.log(JSON.stringify(data, null, 2));
