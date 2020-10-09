import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiCM5Rnj5SRG079yBF2s8O_8-nVCw-0OE",
    authDomain: "crown-db-9a7d7.firebaseapp.com",
    databaseURL: "https://crown-db-9a7d7.firebaseio.com",
    projectId: "crown-db-9a7d7",
    storageBucket: "crown-db-9a7d7.appspot.com",
    messagingSenderId: "94808358949",
    appId: "1:94808358949:web:a3b1a6cf6d426dd1c7bfcc",
    measurementId: "G-1555E35TXV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;

