import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
        apiKey: "AIzaSyD1iH7IbH9iZ3AqYfB1ok95Ez2SYluDY2E",
        authDomain: "facebook-messenger-clone-8b80b.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-8b80b.firebaseio.com",
        projectId: "facebook-messenger-clone-8b80b",
        storageBucket: "facebook-messenger-clone-8b80b.appspot.com",
        messagingSenderId: "619446411513",
        appId: "1:619446411513:web:1cb4df7812d1cfc6fb4228",
        measurementId: "G-60YLGY7JDV"
      
    });


const db = firebaseApp.firestore();

export default db;