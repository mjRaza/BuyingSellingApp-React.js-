import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDJXBEJ1zvAxOoJOXutCWK3vwNzEOwG6AI",
    authDomain: "foodie-bcdf7.firebaseapp.com",
    databaseURL: "https://foodie-bcdf7.firebaseio.com",
    projectId: "foodie-bcdf7",
    storageBucket: "foodie-bcdf7.appspot.com",
    messagingSenderId: "680299516735"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;