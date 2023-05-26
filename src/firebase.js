// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCAB8Qr4GBVnzJc57pAAaPAFK_OiHy1s24",
    authDomain: "twitter-clone-bc4e4.firebaseapp.com",
    projectId: "twitter-clone-bc4e4",
    storageBucket: "twitter-clone-bc4e4.appspot.com",
    messagingSenderId: "161838790584",
    appId: "1:161838790584:web:2dcb7bd49eb93c2da3814d",
    measurementId: "G-3JX92KQ74B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;