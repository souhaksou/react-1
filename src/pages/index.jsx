import { Outlet } from "react-router-dom";
import Sider from "../components/sider";
import Header from "../components/header";
import Footer from "../components/footer";

const Index = () => {
  return (
    <section className="h:full min-h:100vh flex jc:space-between ai:start bg:#F7F9FC">
      <Sider />
      <div className="w:full">
        <Header />
        <div className="p:32 h:full min-h:calc(100vh-238px)">
          <Outlet />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Index;
