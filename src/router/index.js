import {
    BrowserRouter as Router,
    useNavigate,
    useRoutes,
    Navigate
} from 'react-router-dom';

import React from "react";
import Login from '../page/login/Login';
import Layout from '../page/Layout';
import LayoutLogin from '../page/login/Layout'
import Home from '../page/home';
import AdvertManager from '../page/advert-manager';
import Customers from '../page/user-manager/customers';
import Administrators from '../page/user-manager/administrators';
import UserManager from '../page/user-manager';
import LiveAdverts from '../page/advert-manager/live-adverts';
import Locations from '../page/advert-manager/locations';
import Test from '../page/common/Test'

// const isLoggedIn=()=>{
//     if(localStorage.getItem('token')===null){
//       const  isLoggedIn= false
//     }else{
//       const  isLoggedIn= localStorage.getItem('token')
//     }
// }

const AuthRoutes = () => {
    const isLoggedIn=localStorage.getItem('token')

    const routes = [
        { path: '/',
        element: (isLoggedIn!==null) ? <Layout /> : <Navigate to="/login" />,
        children: [
            { index: true, element: <Home /> },
            { path: 'dashboard', element: <Home /> },
            { path: 'advert-manager', element: <AdvertManager />,
            children:[
                { index:true, element: <LiveAdverts/> },
                { path: 'live-adverts', element: <LiveAdverts/> },
                { path: 'advert-locations', element: <Locations/> },
                ] },
            { path: 'user-manager', element: <UserManager/>,
            children:[
            { path: 'customers', element: <Customers /> },
            { path: 'administrators', element: <Administrators /> },
            ]
        }
          ],
    },
    {path:'/orders', element: <Test/>}
    ]
    return useRoutes(routes);
}

const Logs = () => {
    const isLoggedIn=localStorage.getItem('token')
      const routes = [
        { path: '/login',
        element: (isLoggedIn===null) ? <LayoutLogin /> : <Navigate to="/dashboard" />,
        children: [
            { index: true, element: <Login /> }
            ]
    },
    ]
    return useRoutes(routes);
}


const QRouter = () => {
    return (
        <Router basename='/'>
            <Logs />
            <AuthRoutes />
            
        </Router>

    )
}

export default QRouter