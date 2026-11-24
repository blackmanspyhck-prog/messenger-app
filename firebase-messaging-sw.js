importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAY8QCUw8Qmmt56qKPDCqQGpcud9qex_UM",
  authDomain: "new-app-2099b.firebaseapp.com",
  projectId: "new-app-2099b",
  storageBucket: "new-app-2099b.firebasestorage.app",
  messagingSenderId: "869110998949",
  appId: "1:869110998949:web:a09e4e9410dbd02df5ea4c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/124/124035.png' 
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
