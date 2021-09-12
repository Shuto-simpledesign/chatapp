import React from 'react';
import { useState, useContext } from "react";
import { AuthContext } from '../Config/AuthService'
import style from '../style.css'

import { Link, Redirect } from 'react-router-dom'
import firebase from '../Config/firebase'

const LogIn = ({ history }) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const user = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/") // "/"に移動
            })
            .catch(err => {
                console.log(err)
            })
    }

    //ログインしていたら"/"Roomにリダイレクトする
    if (user) {
        return <Redirect to="./" />
    }
    // // なぜログインしても移動しなかったのかと言うと、初期値の状態でレンダリングされると、login => loginになるから。
    //上のif文を入れることで、ユーザーの情報があればルームに飛ぶようになる。
    //AuthProviderを最初にレンダリングした。その後ユーザーがnull（初期値）の状態で、ルームコンポネントをLoggedInRouteでレンダリングするから。すると、nullなので、ログインに飛ばされる。画面は何も変わらないが、login => Loginに飛んだだけ

    console.log("aaa")
    return (
        <div className="PageBox">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="formLabel">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={e => {
                            setemail(e.target.value)
                        }}
                        className="input"
                    />
                </div>
                <div className="formLabel">
                    <label htmlFor="password">password</label>
                    <input type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={e => {
                            setpassword(e.target.value)
                        }}
                        className="input"
                    />
                </div>
                <button className="btn" type="submit">Login</button>
                <Link className="link" to="/SignUp">Sign Up</Link>
            </form>
        </div>
    )

}

export default LogIn