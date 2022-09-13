import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4KHvIAWTLt9_p-7188kKymPnL8MvqrCk",
  authDomain: "facebook-clone-fc8d9.firebaseapp.com",
  projectId: "facebook-clone-fc8d9",
  storageBucket: "facebook-clone-fc8d9.appspot.com",
  messagingSenderId: "509757786505",
  appId: "1:509757786505:web:c615532eeb88d0aa403958",
};

const app = firebase.initializeApp(firebaseConfig);
//   const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();
const storage = firebase.storage(app);

export { db, storage };
