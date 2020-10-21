importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyCojJFOgEyJ0BtxE16fYeyfCPQ3nlNzYUo",
    authDomain: "notificatioapp-71c8c.firebaseapp.com",
    databaseURL: "https://notificatioapp-71c8c.firebaseio.com",
    projectId: "notificatioapp-71c8c",
    storageBucket: "notificatioapp-71c8c.appspot.com",
    messagingSenderId: "162189751997",
    appId: "1:162189751997:web:4c62246f2e6c87f15b69d4"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();