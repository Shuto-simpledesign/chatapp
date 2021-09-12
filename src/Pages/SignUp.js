import React from 'react';
import { useState } from "react";

import { Link } from 'react-router-dom';
import firebase from '../Config/firebase';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()  // 標準の挙動(リロード)をキャンセル
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => { //新規登録に成功したとき
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    console.log("aaaaaa")
    return (
        <div className="PageBox">
            <h1 className="title">新規登録</h1>
            <form className="form" onSubmit={handleSubmit}> {/* submitイベントハンドラーを設定  */}
                <div className="formLabel">Name
                    <label htmlFor="name"></label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        className="input"
                    />
                </div>
                <div className="formLabel">Emali
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        //ーーーーーーーーーーーーーーーーー
                        value={email} //どこを指してる？ => 入力された値（email） フォームの値も変わる
                        onChange={e => {
                            console.log(e)
                            setEmail(e.target.value) // e => inputそのもの? 
                        }} // なぜtargetが必要なのか？なぜ valueだけだと取得できないのか？
                        //ーーーーーーーーーーーーーーーーー
                        className="input"
                    />
                </div>

                <div className="formLabel">Password
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                        className="input"
                    />
                </div>
                <button className="btn" type="submit">登録</button>
                <Link className="link" to="/login">Login</Link>
            </form>
        </div>

    )
};

export default SignUp