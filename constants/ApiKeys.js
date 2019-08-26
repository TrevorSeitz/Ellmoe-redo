import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = {};
// Initialize Firebase
// export default {
// var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyA7-2UPNZnt8A2Wc7GYUjWzun7EJjLD9WU",
  src: "https://www.gstatic.com/firebasejs/5.9.1/firebase.js",
  authDomain: "ellmoe-stage.firebaseapp.com",
  databaseURL: "https://ellmoe-stage.firebaseio.com",
  projectId: "ellmoe-stage",
  storageBucket: "ellmoe-stage.appspot.com",
  messagingSenderId: "774360750184"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
