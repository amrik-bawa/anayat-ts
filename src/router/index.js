import {
    BrowserRouter as Router,
    useRoutes,
} from 'react-router-dom';

import React from "react";
import Login from '../page/login/Index';
import Layout from '../page/dashboard/Layout';
import Home from '../page/dashboard/Home';
import Test from '../page/dashboard/AdvertManager.js';
import AdvertManager from '../page/dashboard/AdvertManager.js';


const AuthRoutes = () => {
    const routes = [
        { path: '/', element: <Login /> },
        { path: '/dashboard', element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'advert-manager', element: <AdvertManager /> }
          ],
    },
    ]

    return useRoutes(routes);
}

const QRouter = () => {
    return (
        <Router basename='/'>
            <AuthRoutes />
        </Router>

    )
}

export default QRouter