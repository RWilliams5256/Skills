import firebase from 'firebase';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCHi8elcWhRSivNszIqI2a__SGIz6tFCZQ",
    authDomain: "shomsi-test.firebaseapp.com",
    databaseURL: "https://shomsi-test.firebaseio.com",
    projectId: "shomsi-test",
    storageBucket: "shomsi-test.appspot.com",
    messagingSenderId: "164035676451"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

  const auth = firebase.auth();
  const db = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  db.settings(settings);

  export {
      auth,
      db
  };
