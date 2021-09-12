//インポートの試行エラー：「firebase / app」に
//デフォルトのエクスポートが含まれていません
//（「firebase」としてインポートされます）。8系　9系ドキュメント

import firebase from 'firebase/app'  //{ initializeApp }に変えた
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyA0GE01wVZsw3sqxVXPGRHOykYHv7ghM7M",
    authDomain: "chatapp-c486e.firebaseapp.com",
    projectId: "chatapp-c486e",
    storageBucket: "chatapp-c486e.appspot.com",
    messagingSenderId: "788943165215",
    appId: "1:788943165215:web:b4f9aaf6e68efcd264c22a",
    measurementId: "G-WP1DZ39J04"
}

firebase.initializeApp(firebaseConfig) //const firebase = initializeApp に変えた

export default firebase