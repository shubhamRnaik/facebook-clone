import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBjJwln5YZe5PW80ixAodh5oI8eHKM8e9A",
    authDomain: "facebook-a72e9.firebaseapp.com",
    projectId: "facebook-a72e9",
    storageBucket: "facebook-a72e9.appspot.com",
    messagingSenderId: "558234054445",
    appId: "1:558234054445:web:72952dd44a4e3cd4552da4"
  };

const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore(app)
export const Storage = firebase.storage(app)

