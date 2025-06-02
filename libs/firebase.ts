// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2NhF162pvl4ot60MIIWtPP1L3gbrKMLo",
  authDomain: "e-shop-vid-bbf09.firebaseapp.com",
  projectId: "e-shop-vid-bbf09",
  storageBucket: "e-shop-vid-bbf09.appspot.com",
  messagingSenderId: "419929814642",
  appId: "1:419929814642:web:a3fce13d99c609a01834eb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp