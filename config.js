import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-eXK4JW2vuZgqKLhbW23775tTLo4yvkM",
  authDomain: "note-taking-99973.firebaseapp.com",
  projectId: "note-taking-99973",
  storageBucket: "note-taking-99973.appspot.com",
  messagingSenderId: "204036685994",
  appId: "1:204036685994:web:e68e1c462462d2665690d3"
};


// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default  firebase.firestore()                                   