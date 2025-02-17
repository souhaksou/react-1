import { useSelector, useDispatch } from "react-redux";
import { selectTab, collapseMenu } from "../store/slice/tab";
import photo from "../images/photo.jpg";

const Header = () => {
  const isCollapse = useSelector(selectTab);
  const dispatch = useDispatch();
  const handleCollapse = () => dispatch(collapseMenu());
  return (
    <header className="flex jc:space-between ai:center p:16 bg:white">
      <div>
        <button
          className="fg:#8F9FBC f:32 px:16 inline-block"
          onClick={handleCollapse}
        >
          <i
            className={`bi bi-text-indent-${isCollapse ? "left" : "right"}`}
          ></i>
        </button>
      </div>
      <div>
        <img src={photo} alt="photo" className="w:48 r:50%" />
      </div>
    </header>
  );
};

export default Header;
