import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAzKSQ7anbkPTEPEFCUEWR0Gkf7QKvicOA",
  authDomain: "picturebook-b0817.firebaseapp.com",
  projectId: "picturebook-b0817",
  storageBucket: "picturebook-b0817.appspot.com",
  messagingSenderId: "298405953988",
  appId: "1:298405953988:web:8533e79cc57f2fa602e491",
  measurementId: "G-WBD74SVEDM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };