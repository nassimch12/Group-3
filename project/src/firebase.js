//import firebase from "firebase" ;
import firebase from "firebase/compat/app";
 import "firebase/compat/auth"
 import "firebase/compat/database"
 import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAfmX0PsO0L0uie66oWSkAm-OlOVKVp0ww",
  authDomain: "netflix-ba197.firebaseapp.com",
  projectId: "netflix-ba197",
  storageBucket: "netflix-ba197.appspot.com",
  messagingSenderId: "1017643591569",
  appId: "1:1017643591569:web:99ba443db92086367f5c30"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();



export { auth };
export default db ; 