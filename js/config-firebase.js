// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAj0oOZRLYotKUUHHMdfzVLp5vN4m7sN0w",
    authDomain: "eticket-b8863.firebaseapp.com",
    projectId: "eticket-b8863",
    storageBucket: "eticket-b8863.appspot.com",
    messagingSenderId: "654468375106",
    appId: "1:654468375106:web:b3389dc7d5082a188a43db",
    measurementId: "G-917WEHXJCC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
getToken(messaging, {vapidKey: "BNEQOtyPxMECvuYexToS5Idmuct7WeuFiMP7QREsEN-nMvT6EDHzHgY18gMKX2l7fJNwqWHi6-owDqvt7-N5yZo"});

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
}



