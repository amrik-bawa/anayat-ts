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
import Test2 from '../page/common/Test2'
import Test3 from '../page/common/Test3'
import CommingSoon from '../page/common/CommingSoon'
import Reminders from '../page/reminders';
import EditUser from '../page/user-manager/users/EditUser';
import EditMyDetails from '../page/user-manager/users/EditMyDetails';
import EditPaidAds from '../page/user-manager/users/EditPaidAds';
import EditMedia from '../page/user-manager/users/EditMedia';
import EditUserLayout from '../page/user-manager/users/EditUserLayout';
import ErrorPage from '../page/ErrorPage';

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
            {path:'/ts-fans', element: <CommingSoon/>},
            {path:'/orders', element: <CommingSoon/>},
            {path:'/reminders', element: <Reminders/>},
            { path: 'advert-manager', element: <AdvertManager />,
            children:[
                { index:true, element: <LiveAdverts/> },
                { path: 'live-adverts', element: <LiveAdverts/> },
                { path: 'advert-locations', element: <Locations/> },
                ] },
            { path: 'user-manager', element: <UserManager/>,
            children:[
                { path: 'edit-user', element: <EditUserLayout/>,
                children:[
                    {index:true ,element:<EditMyDetails/>},
                    {path:'my-details' ,element:<EditMyDetails/>},
                    {path:'media' ,element:<EditMedia/>},
                    {path:'paid-ads' ,element:<EditPaidAds/>},
                    {path:'*' ,element:<ErrorPage/>}
                ]
                 },
                { path: 'customers', element: <Customers /> },
            { path: 'administrators', element: <Administrators /> },
            ]
        }
          ],
    },
    
    {path:'/ts-fans', element: <CommingSoon/>},
    
    {path:'/test', element: <Test2/>},
    {path:'/test3', element: <Test3/>}
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

        // <Router basename='/dev/react'>
        <Router basename='/'>
            <Logs />
            <AuthRoutes />
            
        </Router>

    )
}

export default QRouter