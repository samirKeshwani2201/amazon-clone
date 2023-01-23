import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4sISWubQOcsxmMhQjN6I7rGgJ-MVhvdA",
    authDomain: "challenge-5c88f.firebaseapp.com",
    projectId: "challenge-5c88f",
    storageBucket: "challenge-5c88f.appspot.com",
    messagingSenderId: "1055177331687",
    appId: "1:1055177331687:web:dd86b9123ccb8dfc13e342"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is a real time db in firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
