import {
    BrowserRouter as Router,
    useRoutes,
} from 'react-router-dom';

import React from "react";
import Login from '../page/login/Index';
import Layout from '../page/Layout';
import Home from '../page/home';
import AdvertManager from '../page/advert-manager';
import Customers from '../page/user-manager/customers';
import Administrators from '../page/user-manager/administrators';
import UserManager from '../page/user-manager';


const AuthRoutes = () => {
    const routes = [
        { path: '/', element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'dashboard', element: <Home /> },
            { path: 'advert-manager', element: <AdvertManager /> },
            { path: 'user-manager', element: <UserManager/>,
            children:[
            { path: 'customers', element: <Customers /> },
            { path: 'administrators', element: <Administrators /> },
            ]
        }
          ],
    },
    ]
    return useRoutes(routes);
}

const Logs = () => {
    const routes = [
        { path: '/login', element: <Layout />},
    ]
    return useRoutes(routes);
}


const QRouter = () => {
    return (
        <Router basename='/'>
            <AuthRoutes />
            <Logs />
        </Router>

    )
}

export default QRouter