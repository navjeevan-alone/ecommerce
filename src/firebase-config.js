// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCB9en8djI6ftu8_0UZ-gG-CN39njhscZ0",
	authDomain: "fir-basics-e8ff8.firebaseapp.com",
	projectId: "fir-basics-e8ff8",
	storageBucket: "fir-basics-e8ff8.appspot.com",
	messagingSenderId: "986127518688",
	appId: "1:986127518688:web:e9df4479b5b39aa3b4f985",
	measurementId: "G-VYK85RZHZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
