import React from "react";
import Signup from './Signup'
import { Route, Switch } from 'react-router-dom';
import LoginForm from "./LoginForm";
export default function LoggedOut({setCurrentClient}) {
    return (
        <div>
            <Route exact path='/signup'>
                <LoginForm setCurrentClient={setCurrentClient}/>
                <Signup setCurrentClient={setCurrentClient} />
            </Route>
        </div>
    )
}