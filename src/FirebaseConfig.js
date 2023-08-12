import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 追加

// FirebaseConfig.js


const firebaseConfig = {
    apiKey: "AIzaSyCUpnQXb76jxlHl0gX-AN_H_dCA8Q5PWW0",
    authDomain: "ad-game-9d685.firebaseapp.com",
    projectId: "ad-game-9d685",
    storageBucket: "ad-game-9d685.appspot.com",
    messagingSenderId: "999073026875",
    appId: "1:999073026875:web:4159b670c94cc17f7e5d1e"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);