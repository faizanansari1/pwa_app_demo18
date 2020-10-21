import firebase from 'firebase';

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
  const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if(permission === "granted"){
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
                console.log('TOKEN')
                console.log(currentToken)
            } else {
              console.log('No registration token available. Request permission to generate one.');
            
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
    }
  });
}
