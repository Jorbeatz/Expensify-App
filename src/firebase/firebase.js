import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA53oHernabIvwC8uCKp3V2W6gO5AaKB-4",
    authDomain: "expense-tracker-96a08.firebaseapp.com",
    databaseURL: "https://expense-tracker-96a08.firebaseio.com",
    projectId: "expense-tracker-96a08",
    storageBucket: "expense-tracker-96a08.appspot.com",
    messagingSenderId: "1009114980420"
};

firebase.initializeApp(config);

firebase.database().ref().set({
