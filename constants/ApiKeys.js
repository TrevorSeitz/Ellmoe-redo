import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = {};
// Initialize Firebase
// export default {
// var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyAdb-VyzqskSDW_vxh984z7elcmNkPOYts",
  src: "https://www.gstatic.com/firebasejs/5.9.1/firebase.js",
  authDomain: "ellmoe.firebaseapp.com",
  databaseURL: "https://ellmoe.firebaseio.com",
  projectId: "ellmoe",
  storageBucket: "ellmoe.appspot.com",
  messagingSenderId: "774360750184"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
