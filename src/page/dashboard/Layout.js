import Header from "../header/Index";
import Sidebar from "../sidebar";
import "./dashboard.css";


import axios from 'axios';  
import { useState,useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getEnquiriesList } from "../../store/enquiries/enquiriesSlice";
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