// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8AN5TVblVvZkmObUNL41bCoUWKQ_YQzk",
  authDomain: "hackharvard2023-a5c7e.firebaseapp.com",
  projectId: "hackharvard2023-a5c7e",
  storageBucket: "hackharvard2023-a5c7e.appspot.com",
  messagingSenderId: "187438105750",
  appId: "1:187438105750:web:706c79bd9b535498f12eb7",
  measurementId: "G-E7KX03Z0XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app); // not neecessary

// export firestore
export const firestore = getFirestore(app)

// initialize 'users' collection
export const usersCollection = collection(firestore, "users")

// Initialize Firebase authentication (code from PedroTech: https://www.youtube.com/watch?v=vDT7EnUpEoo&ab_channel=PedroTech)
export const auth = getAuth(app)
