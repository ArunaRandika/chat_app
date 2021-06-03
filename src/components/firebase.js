import firebase from "firebase/app";
import "firebase/auth"
export const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyAn7o8K554QJeW-R9XMZfk0ZdqpwonpLj0",
    authDomain: "chat-web-app-c000f.firebaseapp.com",
    projectId: "chat-web-app-c000f",
    storageBucket: "chat-web-app-c000f.appspot.com",
    messagingSenderId: "1042573010402",
    appId: "1:1042573010402:web:5d9055fbc87e9c3d4e45bb"
}).auth();
