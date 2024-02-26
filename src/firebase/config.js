import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAZdEV2YxWQ8qiA8R7f4z2SXXK7wc2Hoas",
  authDomain: "olx-react-b4880.firebaseapp.com",
  projectId: "olx-react-b4880",
  storageBucket: "olx-react-b4880.appspot.com",
  messagingSenderId: "700734943858",
  appId: "1:700734943858:web:e2e689d3858d5b539088eb",
  measurementId: "G-BSNNHFRRL0"
  };
 export  default firebase.initializeApp(firebaseConfig)