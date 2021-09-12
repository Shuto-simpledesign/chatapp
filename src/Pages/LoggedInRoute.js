// import React, { useContext } from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import { AuthContext } from './AuthService'


import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../Config/AuthService';
import { useContext } from 'react';

const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)
    console.log(user)
    return (

        <Route
            {...rest}
            render={props =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    )
}

export default LoggedInRoute




//({component:Compornent})は右側で名前をつけてる。
//...rest => ROOM以外の要素（Login, SignUp）を並べてる。ここでの『...rest』はrestと言う配列にまとめている。
// const LoggedInRoute = ({ component: Compornent, ...rest }) => {

//     const user = useContext(AuthContext)

//     return (
//         <Route>
//             {...rest}  {/* ここにrest()を展開する。＝ what？？？*/}
//             component = {
//                 //ログインしていればcompornentを描写(今回で言うRoomのこと。App.jsにあるから、)
//                 //ログインしていなければ"./Login"にリダイレクト
//                 (routeProps) =>
//                     user ? (
//                         <Component {...routeProps} />
//                     ) : (
//                         <Redirect to="/Login" />
//                     )
//             }
//         </Route>
//     )
// }

// export default LoggedInRoute