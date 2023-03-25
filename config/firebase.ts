// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq0zO_vCFPOjbuDkxYUwq9fSY1S3JS6aU",
  authDomain: "next-auth-7a7ae.firebaseapp.com",
  projectId: "next-auth-7a7ae",
  storageBucket: "next-auth-7a7ae.appspot.com",
  messagingSenderId: "430260224513",
  appId: "1:430260224513:web:88119df88607c401843600",
  measurementId: "G-VKHEM8VGKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);
export const auth = getAuth()

export const SignOut = async () => {
  await signOut(auth)
}