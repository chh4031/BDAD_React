import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import "./Styles/root_Layout.css"

const Root_Layout = () => {
  return (
    <div id="root_Layout">
      <div className="headerWrap">
        <Header/>
      </div>
      <div className="bodyWrap">
        <Outlet />
      </div>
    </div>
  );
};
export default Root_Layout;

// Outlet 자리에 동적으로 들어간다.그래서 Main이 들어간것
