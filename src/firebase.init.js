import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    // apiKey: "AIzaSyDalQfPN8XXlb7H9exS4I4Q5kPBkj-68mk",
    // authDomain: "electronics-inventory-a11.firebaseapp.com",
    // projectId: "electronics-inventory-a11",
    // storageBucket: "electronics-inventory-a11.appspot.com",
    // messagingSenderId: "588465238901",
    // appId: "1:588465238901:web:ec60d118c6d4cc1390593c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
