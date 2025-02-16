const courses = [
  {
    "course": "微積分",
    "monthlyPurchase": 23,
    "yearlyPurchase": 404,
    "totalPurchase": 4607
  },
  {
    "course": "線性代數",
    "monthlyPurchase": 10,
    "yearlyPurchase": 472,
    "totalPurchase": 4624
  },
  {
    "course": "資料結構",
    "monthlyPurchase": 29,
    "yearlyPurchase": 211,
    "totalPurchase": 3942
  },
  {
    "course": "演算法",
    "monthlyPurchase": 38,
    "yearlyPurchase": 173,
    "totalPurchase": 4184
  },
  {
    "course": "離散數學",
    "monthlyPurchase": 20,
    "yearlyPurchase": 213,
    "totalPurchase": 1174
  },
  {
    "course": "計算機組織",
    "monthlyPurchase": 32,
    "yearlyPurchase": 291,
    "totalPurchase": 2345
  },
  {
    "course": "機率與統計",
    "monthlyPurchase": 33,
    "yearlyPurchase": 72,
    "totalPurchase": 3841
  },
  {
    "course": "作業系統",
    "monthlyPurchase": 26,
    "yearlyPurchase": 496,
    "totalPurchase": 4478
  },
  {
    "course": "編譯原理",
    "monthlyPurchase": 43,
    "yearlyPurchase": 384,
    "totalPurchase": 3365
  },
  {
    "course": "人工智慧",
    "monthlyPurchase": 12,
    "yearlyPurchase": 221,
    "totalPurchase": 2025
  }
];

const counts = [
  {
    "name": "今日支付訂單",
    "value": 1234,
    "icon": "bi bi-check-circle",
    "color": "#66C5C8"
  },
  {
    "name": "今日收藏訂單",
    "value": 2222,
    "icon": "bi bi-clock",
    "color": "#F2BE87"
  },
  {
    "name": "今日未支付訂單",
    "value": 745,
    "icon": "bi bi-x-circle",
    "color": "#74B0EB"
  },
  {
    "name": "本月支付訂單",
    "value": 8457,
    "icon": "bi bi-check-circle",
    "color": "#66C5C8"
  },
  {
    "name": "本月收藏訂單",
    "value": 16157,
    "icon": "bi bi-clock",
    "color": "#F2BE87"
  },
  {
    "name": "本月未支付訂單",
    "value": 1037,
    "icon": "bi bi-x-circle",
    "color": "#74B0EB"
  },
];

const data = () => {
  return {
    tableData: courses,
    countData: counts
  }
};

export default data;

// const courseNames = [
//   '微積分', '線性代數', '資料結構', '演算法', '離散數學',
//   '計算機組織', '機率與統計', '作業系統', '編譯原理', '人工智慧'
// ];

// const data = Mock.mock({
//   'courses|10': [
//     {
//       'course|+1': courseNames,
//       'monthlyPurchase|1-50': 1,
//       'yearlyPurchase|50-500': 50,
//       'totalPurchase|500-5000': 500
//     }
//   ]
// });

// console.log(JSON.stringify(data, null, 2));