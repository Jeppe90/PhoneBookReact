import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKiB7RjS1QqR2BifTyD1zplZiEF1C12JA",
  authDomain: "telephonebook-9b45a.firebaseapp.com",
  databaseURL: "https://telephonebook-9b45a.firebaseio.com",
  projectId: "telephonebook-9b45a",
  storageBucket: "telephonebook-9b45a.appspot.com",
  messagingSenderId: "303718768771",
  appId: "1:303718768771:web:c6aa03c796a2cb80c1bbb6",
  measurementId: "G-7VPLP7HE5H",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

firebase.storage();

const storage = firebase.storage();

export { storage, firebase as default };
