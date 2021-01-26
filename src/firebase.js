import firebase from "firebase";

var firabaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfgOtGxXpe2lvjpl0u6IHRCHYK71ngk38",
  authDomain: "tracker-2021.firebaseapp.com",
  projectId: "tracker-2021",
  storageBucket: "tracker-2021.appspot.com",
  messagingSenderId: "493030416918",
  appId: "1:493030416918:web:b24287b4b26e966fa84b37",
  measurementId: "G-SVNSYFED7D",
});

// Initialize Firebase
firebase.analytics();

var db = firabaseApp.firestore();

export { db };
