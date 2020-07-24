import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCaDQ_Mhq4dm9EQR54dmGmrrePiolSLns4",
    authDomain: "spa-fantastic.firebaseapp.com",
    databaseURL: "https://spa-fantastic.firebaseio.com",
    projectId: "spa-fantastic",
    storageBucket: "spa-fantastic.appspot.com",
    messagingSenderId: "670672355782",
    appId: "1:670672355782:web:d0b25f05c5fc052d03b2c7",
    measurementId: "G-C3DZKZ8DLC"

};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);