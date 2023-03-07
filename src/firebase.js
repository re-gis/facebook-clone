import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB040XmXQb-zHHr3HA18dDHKLBspeXOONk",
  authDomain: "facebook-clone-540a7.firebaseapp.com",
  projectId: "facebook-clone-540a7",
  storageBucket: "facebook-clone-540a7.appspot.com",
  messagingSenderId: "536741081997",
  appId: "1:536741081997:web:a92d2c7723d5971d4003c4",
  measurementId: "G-2T5S66WT6S",
};

// const app = initialize(firebaseConfig)
// const db = getFirestore.firestore()
// const auth =

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
