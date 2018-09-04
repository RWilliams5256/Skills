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
  const db = firebase.firestore();
  const functions = firebase.functions();

<<<<<<< HEAD
  export const db = firebase.firestore();
  export const functions = firebase.functions();
=======
  export { db, functions };
>>>>>>> 35563312ea6bfbfd23089c52085f39a9f8f81cb0
