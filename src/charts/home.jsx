import { PieChart } from "@opd/g2plot-react";

const data = [
  { course: "微積分", sales: 4607 },
  { course: "線性代數", sales: 4624 },
  { course: "資料結構", sales: 3942 },
  { course: "演算法", sales: 4184 },
  { course: "離散數學", sales: 1174 },
  { course: "計算機組織", sales: 2345 },
  { course: "機率與統計", sales: 3841 },
  { course: "作業系統", sales: 4478 },
  { course: "編譯原理", sales: 3365 },
  { course: "人工智慧", sales: 2025 },
];

const config = {
  data,
  angleField: "sales", // 數值欄位
  colorField: "course", // 類別欄位
  radius: 0.8, // 圓餅圖半徑
  label: {
    type: "spider", // 標籤類型
    content: "{name} {percentage}", // 顯示名稱與百分比
  },
  interactions: [{ type: "element-active" }], // 增加互動效果
};

const MyPieChart = () => {
  return <PieChart {...config} />;
};

export default MyPieChart;
