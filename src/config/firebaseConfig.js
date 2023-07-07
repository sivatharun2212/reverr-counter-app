import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCVsszrKx-zqvRdMvOUXLNq5j_s3CHKX3w",
  authDomain: "reverr-counter-app.firebaseapp.com",
  projectId: "reverr-counter-app",
  storageBucket: "reverr-counter-app.appspot.com",
  messagingSenderId: "730887694655",
  appId: "1:730887694655:web:0b0886a8819484fd52cb8a",
  measurementId: "G-TP3W846Z83"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)