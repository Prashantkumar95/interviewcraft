
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "interviewiq-ba6ba.firebaseapp.com",
//   projectId: "interviewiq-ba6ba",
//   storageBucket: "interviewiq-ba6ba.firebasestorage.app",
//   messagingSenderId: "862159592601",
//   appId: "1:862159592601:web:7308d702cd708076ddec08"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCKn1gAmQZEHRMyCiTGAeCdSxxzEkx3zqk",
  authDomain: "interviewer-3428f.firebaseapp.com",
  projectId: "interviewer-3428f",
  storageBucket: "interviewer-3428f.firebasestorage.app",
  messagingSenderId: "821285590036",
  appId: "1:821285590036:web:7c97875e0fe09e61310301"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}