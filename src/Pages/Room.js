import React, { useState, useEffect, useContext } from 'react';
import firebase from '../Config/firebase'
import { AuthContext } from '../Config/AuthService'
import { nanoid } from 'nanoid';

const Room = () => {
    const [messages, setMessages] = useState([]) //データベースから取得したデータを表示
    const [value, setValue] = useState("") //入力内容

    const user = useContext(AuthContext)
    console.log(user.displayName)

    const handleSubmit = (e) => {  //送信ボタンで、FBにadd以下のデータを追加する
        e.preventDefault()
        firebase.firestore().collection("messages")
            .add({
                content: value,
                user: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()//ここにタイムスタンプ？
            })
    }


    //ーーーーーーーーーーーーー送信内容を表示するーーーーーーーーーーーーーーーーーーーーーーーーー

    useEffect(() => {
        firebase.firestore().collection("messages").orderBy("timestamp") // "Cloud firebase" で設定したコレクションの値。リソースの数だけコレクションが増える
            .onSnapshot((snapshot) => { //だれかがDBにデータ（チャット内容）を送信すれば、onSnapshotの中の関数が発火する

                const messages = snapshot.docs.map(doc => { //firebaseから取得したユーザー情報を配列にしたもの。map関数でdoc１つ１つを取り出す。そのdocに対してdataを実行。するとcontent userなど必要なデータを取り出した配列になっている。
                    return doc.data();
                })
                setMessages(messages)
            })
    }, [])


    return (
        <div className="PageBox">
            <h1 className="title">チャットルーム</h1>
            <ul >

                {messages.map(message =>

                    <li
                        className="message"
                        key={nanoid()}>
                        {message.user} : {message.content}
                    </li>)}
            </ul>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="message"
                />
                <button className="submitBtn">送信</button>
            </form>
            <button className="btn" onClick={() => { firebase.auth().signOut() }}>Logout</button>

            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
        </div>

    )
}


export default Room;