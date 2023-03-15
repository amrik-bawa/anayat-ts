import Header from "./header/Index";
import Sidebar from "./sidebar";
import "./style.css";
import { Outlet } from "react-router";
import Modal from '@mui/material/Modal';
const Layout =()=>{

    return <>
    <div className="main-wrapper">
        <button>Open Modal</button>
        <Modal open={true}/>my test content<Modal></Modal>
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