import { Link, useLocation } from "react-router-dom";
import nav from "../assets/nav";
import { useSelector } from "react-redux";
import { selectTab } from "../store/slice/tab";

const Sider = () => {
  const isCollapse = useSelector(selectTab);
  const location = useLocation();
  return (
    <>
      <div
        className={`${
          isCollapse ? "max-w:80" : "max-w:200"
        } transition:400ms ~easing:ease-in w:full h:100vh`}
      ></div>
      <nav
        className={`${
          isCollapse ? "max-w:80" : "max-w:200"
        } transition:400ms ~easing:ease-in w:full h:100vh bg:#0C2556 p:16 white-space:nowrap user-select:none fixed`}
      >
        <h3 className="f:20 fg:white f:bold p:8|16 mb:24">
          <span>
            <i className="bi bi-android"></i>
          </span>
          {!isCollapse && <span className="ml:16">後台管理</span>}
        </h3>
        {nav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className={`block p:8|16 r:8 ${
                location.pathname === item.path
                  ? "fg:white bg:#1F3663"
                  : "fg:#8192B0"
              }`}
            >
              <span>
                <i className={item.icon}></i>
              </span>
              {!isCollapse && <span className="ml:16">{item.title}</span>}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Sider;
