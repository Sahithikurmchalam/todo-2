
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLpqFRN-2jXiNG95Wrlkhgn4F88GOvG2E",
    authDomain: "mini-project-c7131.firebaseapp.com",
    databaseURL: "https://mini-project-c7131-default-rtdb.firebaseio.com",
    projectId: "mini-project-c7131",
    storageBucket: "mini-project-c7131.appspot.com",
    messagingSenderId: "803640173460",
    appId: "1:803640173460:web:e312860631e9d22155e581",
    measurementId: "G-9K4KDSXP2X"
});

const db = firebaseApp.firestore();

export default db;