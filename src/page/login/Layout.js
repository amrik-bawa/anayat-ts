import "./login.css";
import { Outlet } from "react-router";
import Header from "./Header";
const Layout =()=>{

    return <>
    <div className="main-wrapper">
        <Header/>
        <div className="main-dashboard position-relative">
        <div className="main-inner">
                        <Outlet/>
                    </div>
        </div>
    </div>
        
    </>

}
export default Layout;