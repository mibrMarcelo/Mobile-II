import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAuTp_fCG5dpYdOuiOH3ZhTM7ClnFtC2mc",
    authDomain: "myapp-a8c81.firebaseapp.com",
    projectId: "myapp-a8c81",
    storageBucket: "myapp-a8c81.appspot.com",
    messagingSenderId: "649677114475",
    appId: "1:649677114475:web:4532bdfbae47fd5394752e"
};
if (!firebase.apps.length) { 
    // Initialize Firebase 
    firebase.initializeApp(firebaseConfig); 
} 

export default firebase;