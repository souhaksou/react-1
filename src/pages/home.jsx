import { useEffect, useState } from "react";
import { getData } from "../api";
import Chart from "../charts/home";
import photo from "../images/photo_home.jpg";

const Home = () => {
  const [table, setTable] = useState([]);
  const [count, setCount] = useState([]);
  useEffect(() => {
    getData("/home/getData").then(({ data }) => {
      const { tableData, countData } = data;
      setTable(tableData);
      setCount(countData);
    });
  }, []);

  return (
    <div className="grid-cols:3 gap:32">
      <div className="grid-col-span:1">
        <div className="bg:white p:16 r:8 transition:200ms ~easing:ease-in {translate(-4,-4);shadow:2|2|#8F9FBC;}:hover">
          <div className="flex">
            <img
              src={photo}
              alt="photo"
              className="block aspect:1/1 r:50% max-w:150!"
            />
            <div className="w:32"></div>
            <div className="flex flex:col jc:center">
              <p className="f:32 f:bold mb:16">Admin</p>
              <p>超級管理員</p>
            </div>
          </div>
          <div className="h:2 bg:#F0F0F0 my:16"></div>
          <ul className="{mb:8;fg:#6C6C6C;}>li {fg:black;}>li>span">
            <li>
              上次登入時間：&nbsp;<span>2025/02/15</span>
            </li>
            <li>
              上次登入地點：&nbsp;<span>台北市</span>
            </li>
          </ul>
        </div>
        <div className="h:32"></div>
        <div className="bg:white p:16 r:8 transition:200ms ~easing:ease-in {translate(-4,-4);shadow:2|2|#8F9FBC;}:hover">
          <p className="f:32 f:bold mb:16">課程</p>
          <table className="w:full overflow-x:hidden">
            <thead>
              <tr className="{p:8;}>th">
                <th>名稱</th>
                <th>本月銷售</th>
                <th>今年銷售</th>
                <th>總計</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="p:0!">
                  <div className="h:2 bg:#F0F0F0"></div>
                </td>
              </tr>
              {table.map((item, index) => {
                return (
                  <tr key={index} className="{p:8;}>td">
                    <td>{item.course}</td>
                    <td className="t:right">{item.monthlyPurchase}</td>
                    <td className="t:right">{item.yearlyPurchase}</td>
                    <td className="t:right">{item.totalPurchase}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid-col-span:2">
        <div className="bg:white p:16 r:8 transition:200ms ~easing:ease-in {translate(-4,-4);shadow:2|2|#8F9FBC;}:hover grid-cols:3 gap:32">
          {count.map((item, index) => {
            return (
              <div key={index} className="flex jc:start r:8 b:1|solid|#F0F0F0">
                <div
                  className={`h:full aspect:1/1 bg:${item.color} rl:8 flex jc:center ai:center`}
                >
                  <a className="inline-block fg:white f:32">
                    <i className={item.icon}></i>
                  </a>
                </div>
                <div className="p:16|32">
                  <p className="f:32 mb:16">{`$ ${item.value}`}</p>
                  <p className="f:14 fg:#6C6C6C">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb:32"></div>
        <div className="bg:white p:16 r:8 transition:200ms ~easing:ease-in {translate(-4,-4);shadow:2|2|#8F9FBC;}:hover">
          <p className="f:32 f:bold mb:16">總銷售</p>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
