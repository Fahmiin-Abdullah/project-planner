import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAU2939_ZMXb-y-Z6iAoZdCLFytx6WMNss",
  authDomain: "project-planner-80e72.firebaseapp.com",
  databaseURL: "https://project-planner-80e72.firebaseio.com",
  projectId: "project-planner-80e72",
  storageBucket: "project-planner-80e72.appspot.com",
  messagingSenderId: "1003994520854",
  appId: "1:1003994520854:web:40e422218290760a694437"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
