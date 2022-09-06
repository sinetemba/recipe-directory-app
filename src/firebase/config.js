import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCFkcF_wPg74wral8T7RqlLzOG9zjljTB8",
    authDomain: "ninja-cooking-site-dc72c.firebaseapp.com",
    projectId: "ninja-cooking-site-dc72c",
    storageBucket: "ninja-cooking-site-dc72c.appspot.com",
    messagingSenderId: "331169809024",
    appId: "1:331169809024:web:acf1005fb091e24d01dc65"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();

//export firestore so can use in other files  
export { projectFirestore }