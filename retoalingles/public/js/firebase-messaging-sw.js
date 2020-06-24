importScripts("https://www.gstatic.com/firebasejs/3.5.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.1/firebase-messaging.js");


// Initialize Firebase
    var config = {
    apiKey: "AIzaSyDm3WvCAVAtWHrQYzG3mNOei5ffzk2SGhg",
    authDomain: "dpro-343c0.firebaseapp.com",
    databaseURL: "https://dpro-343c0.firebaseio.com",
    projectId: "dpro-343c0",
    storageBucket: "dpro-343c0.appspot.com",
    messagingSenderId: "622288756150"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
    const title = 'Hello World';
    const options = {
      body: payload.data.status
    };
    return self.registration.showNotification(title, options);
})