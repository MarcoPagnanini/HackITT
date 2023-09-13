import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_VLOUZk6rgfiqWiUHpHtxAo96xRHIOl4",
    authDomain: "firechat-b4b02.firebaseapp.com",
    projectId: "firechat-b4b02",
    storageBucket: "firechat-b4b02.appspot.com",
    messagingSenderId: "814455768956",
    appId: "1:814455768956:web:a8a4e4a06aacde7fb246f9"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export{db , auth}