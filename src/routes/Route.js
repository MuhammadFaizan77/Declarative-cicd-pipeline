import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound'
import Home from '../views/Home';
import Login from '../views/Login';
import Menu from '../views/Menu';
import Inventory from '../views/Inventory';
import Analytics from '../views/Analytics';
import Profile from '../views/Profile';

export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
                <RouteSwitch>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route exact path="/dashboard/orders" element={<Home />}></Route>
                    <Route exact path="/dashboard/menu" element={<Menu />}></Route>
                    <Route exact path="/dashboard/inventory" element={<Inventory />}></Route>
                    <Route exact path="/dashboard/analytics" element={<Analytics />}></Route>
                    <Route exact path="/dashboard/profile" element={<Profile />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
            </Router>
        </div>
    )
}