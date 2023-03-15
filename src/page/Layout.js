import Header from "./header/Index";
import Sidebar from "./sidebar";
import "./style.css";
import { Outlet } from "react-router";
const Layout =()=>{

    return <>
    <div className="main-wrapper">
        <Header/>
        <div className="main-dashboard position-relative">
        <div className="main-inner">
                        <Outlet/>
                    </div>
        </div>
        <Sidebar/>
    </div>
        
    </>

}
export default Layout;