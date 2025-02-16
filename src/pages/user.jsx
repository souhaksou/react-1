import { useEffect, useState } from "react";
import { getData } from "../api";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getData("/user/getData").then(({ data }) => {
      const { userData } = data;
      setUser(userData);
    });
  }, []);
  console.log(user);

  return (
    <div className="bg:white p:16 r:8">
      <p className="f:32 f:bold mb:16">用戶管理</p>
      <table className="w:full overflow-x:hidden">
        <thead>
          <tr className="bg:#F0F0F0 {p:8;}>th">
            <th>姓名</th>
            <th>年齡</th>
            <th>性別</th>
            <th>生日</th>
            <th>地址</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <>
                <tr key={index} className="{p:8;t:right;}>td">
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.birthdate}</td>
                  <td>{item.address}</td>
                </tr>
                <tr>
                  <td colSpan="5" className="bg:#F0F0F0 p:0!">
                    <div className="h:2 bg:"></div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
