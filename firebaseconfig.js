// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjNnyXIAVu2YeiWAd_EQe5W-uoV4er160",
  authDomain: "demoapp-f9fd6.firebaseapp.com",
  databaseURL: "https://demoapp-f9fd6-default-rtdb.firebaseio.com",
  projectId: "demoapp-f9fd6",
  storageBucket: "demoapp-f9fd6.appspot.com",
  messagingSenderId: "383026958054",
  appId: "1:383026958054:web:f8c01a157a826089877527"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);