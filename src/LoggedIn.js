import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Cart from './Cart';
import Products from './Products'
import { Route, Switch } from 'react-router-dom';

export default function LoggedIn() {
    return (
        <div>
            <NavBar />

            <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route> */}

                <Route exact path="/Profile">
                    <Profile />
                </Route>

                <Route exact path='/mycart'>
                    <Cart />
                </Route>

                <Route exact path='/products'>
                    <Products />
                </Route>
              
            </Switch>
        </div>
    )
}