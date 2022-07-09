import React, { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { Routes, Route } from "react-router-dom";
import Header from "./comp/Header";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import Home from "./comp/Home";
import "./App.css";
import { Button } from "react-bootstrap";
import { StateContext } from "./ContextProvider"; //import context

function App() {
	const { state, dispatch } = useContext(StateContext); //useContext destructure values
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(auth.currentUser, "user is signed in");
				const uid = user.uid;
				dispatch({ type: "set-user", user: user, uid: user.uid });
			} else {
				console.log("user is signed out");
			}
		});

		return () => unsubscribe();
	}, []);
	return (
		<div className='App'>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
