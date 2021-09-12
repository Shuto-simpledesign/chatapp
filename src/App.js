import React from 'react';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Room from './Pages/Room';

import LoggedInRoute from './Pages/LoggedInRoute';

import './style.css'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { AuthProvider } from './Config/AuthService'


const App = () => {

    return ( //Routeにアクセスした時は、ROOMを表示する
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <LoggedInRoute exact path='/' component={Room} />
                        <Route exact path='/login' component={LogIn} />
                        <Route exact path='/signup' component={SignUp} />
                        {/* ログインしてるユーザーのみが閲覧できるページ */}

                    </Switch>
                </Router>
            </AuthProvider>

        </>
    )
}



export default App
