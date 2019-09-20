import firebase from 'firebase';

const firebaseConfig = {
    //apiKey: process.env.REACT_APP_FIREBASE_KEY,
    apiKey: "AIzaSyAHMgDgqpwWmAbJwSmZ8jFuSw2vuR2-agA",
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;