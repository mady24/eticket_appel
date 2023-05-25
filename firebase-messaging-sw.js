importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

//Remeber this part we have used above in our index.html
/*
var firebaseConfig = {
  apiKey: "myApiKey",
  authDomain: "browser-notif-test.firebaseapp.com",
  projectId: "browser-notif-test",
  storageBucket: "browser-notif-test.appspot.com",
  messagingSenderId: "myMessaginSenderId",
  appId: "myAppId",
  measurementId: "myMeasurementId"// this is for analytics purpose
};
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Title';
  const notificationOptions = {
    body: payload,
    icon: '/firebase-logo.png'
  };
  self.registration.showNotification(notificationTitle,
      notificationOptions);
});*/
const firebaseConfig = {
    apiKey: "AIzaSyAj0oOZRLYotKUUHHMdfzVLp5vN4m7sN0w",
    authDomain: "eticket-b8863.firebaseapp.com",
    projectId: "eticket-b8863",
    storageBucket: "eticket-b8863.appspot.com",
    messagingSenderId: "654468375106",
    appId: "1:654468375106:web:b3389dc7d5082a188a43db",
    measurementId: "G-917WEHXJCC"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage( (payload) => {
    console.log(payload);
    const notification = JSON.parse(payload);
    const notitificationOption = {
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title, notitificationOption);
})