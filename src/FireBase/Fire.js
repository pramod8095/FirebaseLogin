import firebase from 'firebase'



var firebaseConfig = {
    apiKey: "AIzaSyDbrNHHpkGhuHi0oUEx_6fnKzjRZfR2_NU",
    authDomain: "dashboardlogin-2d726.firebaseapp.com",
    projectId: "dashboardlogin-2d726",
    storageBucket: "dashboardlogin-2d726.appspot.com",
    messagingSenderId: "672064352976",
    appId: "1:672064352976:web:2c041aa5e60c2becc664d5",
    measurementId: "G-SEFR4GG6R6"
  };
  // Initialize Firebase
  const Fire = firebase.initializeApp(firebaseConfig);
  

  export default Fire;