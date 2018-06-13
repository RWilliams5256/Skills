import firebase from 'firebase/app';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCHi8elcWhRSivNszIqI2a__SGIz6tFCZQ",
    authDomain: "shomsi-test.firebaseapp.com",
    databaseURL: "https://shomsi-test.firebaseio.com",
    projectId: "shomsi-test",
    storageBucket: "shomsi-test.appspot.com",
    messagingSenderId: "164035676451"
  };

  if(!firebase.apps.length) {
      firebase.initalzeApp(config);
  }

  const auth = firebase.auth();

  export {
      auth,
  };
