// // import firebase from 'firebase/compat/app';

// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';
// // import { getDatabase } from "firebase/database";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyC8NJ_s4ubGf9iTFYdE-rMLkCT-ORsUieE",
//   authDomain: "vietmap-ecevn.firebaseapp.com",
//   databaseURL: "https://vietmap-ecevn-default-rtdb.firebaseio.com",
//   projectId: "vietmap-ecevn",
//   storageBucket: "vietmap-ecevn.appspot.com",
//   messagingSenderId: "517554787357",
//   appId: "1:517554787357:web:ecde25501409663c8022f4",
//   measurementId: "G-T1PHSJ0EQB"
// });

// const database = getFirestore();

// // var database = firebase.database();
// // var db = firebase.database().ref("/device");
// // console.log(tutorialsRef);

// // const database = getDatabase()
// export { database, firebaseApp };
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyC8NJ_s4ubGf9iTFYdE-rMLkCT-ORsUieE",
  authDomain: "vietmap-ecevn.firebaseapp.com",
  databaseURL: "https://vietmap-ecevn-default-rtdb.firebaseio.com",
  storageBucket: "vietmap-ecevn.appspot.com"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { database };