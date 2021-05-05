import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-analytics";
import "firebase/firebase-firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBlGfEWLLauH6OABPc0S0wsOeW4DR0E-lQ",
    authDomain: "covidresource-624e8.firebaseapp.com",
    projectId: "covidresource-624e8",
    storageBucket: "covidresource-624e8.appspot.com",
    messagingSenderId: "919860290679",
    appId: "1:919860290679:web:8693206fabbd6b053ad272",
    measurementId: "G-23G56G6MTK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var auth=firebase.auth;
  var db=firebase.firestore();

  export {auth,db};