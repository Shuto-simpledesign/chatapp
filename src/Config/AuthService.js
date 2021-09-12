
import React, { useState, useEffect } from 'react'
import firebase from './firebase'


const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {   //childlenは定義してなくても使える。そのコンポーネントの中にあるコンポーネント。

    const [user, setUser] = useState(null)  //認証済みユーザー情報を取得して、userに格納。

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser)
    }, [])

    return (                                   // context=どこからでも使えるような値。propsのようにどこにでも渡せるもの。 その実際の値を定義するのがprovider*/ }
        < AuthContext.Provider value={user} >   {/* valueに入るのがユーザ */}
            {children}
        </AuthContext.Provider >
    )
}

export {
    AuthProvider, AuthContext
}


//ーーーーーーーーーーーーーーーー

// useEffect(() => {
//     firebase.auth().onAuthStateChanged(setUser)  //ログイン状態をキャッチしてくれる 関数化してsetUserに渡して、初期値が更新される
//         , []
// })

//レンダリングの後に実行する。（遅延実行）
    //useEffect 
    //レンダリング＝DOMを作る。レンダリング終わらないとDOMが存在しないので、操作しようがない
    //外部APIとの通信＝＞レンダリング関係ない
    //コンポーネントのレンダリングとは直接関係ないが、コンポーネントの中で分離して、遅延実行させることで不具合を防ぐことができる
    //第二引数 [] がなけれな、無限レンダリングが起きる。だから、空のブラケットを置くと、初回のレンダリングだけ実行される。第二引数は実行される頻度を表すもの









// const AuthProvider = () => {
//     const [user, setUser] = useState(null)
// useEffect(() => {
//     firebase.auth().onAuthStateChanged(user => {
//         setUser(user)
//     })
// }, [])
// }
