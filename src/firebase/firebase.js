import firebase from 'firebase';
require ('firebase/firestore')

var config = {

    apiKey: "AIzaSyCHi8elcWhRSivNszIqI2a__SGIz6tFCZQ",
    authDomain: "shomsi-test.firebaseapp.com",
    databaseURL: "https://shomsi-test.firebaseio.com",
    projectId: "shomsi-test",
    storageBucket: "shomsi-test.appspot.com",
    messagingSenderId: "164035676451"
  };

  firebase.initializeApp(config)

  export const db = firebase.firestore();
  export const functions = firebase.functions();