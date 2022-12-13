// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMZu3VzH2Irg6WsaS2MQsyVV0Tudbn-o",
  authDomain: "team-project-7f6e9.firebaseapp.com",
  projectId: "team-project-7f6e9",
  storageBucket: "team-project-7f6e9.appspot.com",
  messagingSenderId: "903804140342",
  appId: "1:903804140342:web:ea400802576c547ca35197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)