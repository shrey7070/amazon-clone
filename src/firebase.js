import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDgeE6g7SY76XtQcWwglHDQVXbUvkGEy98",
  authDomain: "amzon-clone-c4ecf.firebaseapp.com",
  databaseURL: "https://amzon-clone-c4ecf.firebaseio.com",
  projectId: "amzon-clone-c4ecf",
  storageBucket: "amzon-clone-c4ecf.appspot.com",
  messagingSenderId: "915134838829",
  appId: "1:915134838829:web:601e8cc8ae7bd68ff460a4",
  measurementId: "G-FSW3F83Q16",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
