import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCm55bYK9nlfY3A8EUpfRp4CRSBLGKRP0E",
    authDomain: "photo-gallery-786.firebaseapp.com",
    projectId: "photo-gallery-786",
    storageBucket: "photo-gallery-786.appspot.com",
    messagingSenderId: "148863997367",
    appId: "1:148863997367:web:caacad21e27076826ec432"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firestorage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestorage, firestore, timestamp };