// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDGKrNzXnWgYjf7160GT5g-Y4qQtlTxGA",
  authDomain: "b9-a-10-ceramics-pottery.firebaseapp.com",
  projectId: "b9-a-10-ceramics-pottery",
  storageBucket: "b9-a-10-ceramics-pottery.appspot.com",
  messagingSenderId: "626352764287",
  appId: "1:626352764287:web:9e08c83b02d411ed98564a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth