import React, { useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Header from "./comp/Header";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import Home from "./comp/Home";
import Profile from "./comp/Profile";
import Cart from "./comp/Cart";
import "./App.css";
import { Button } from "react-bootstrap";
import { StateContext } from "./ContextProvider"; //import context

function App() {
	const { state, dispatch } = useContext(StateContext); //useContext destructure values
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("user is signed in");
				const uid = user.uid;
				dispatch({
					type: "set-user",
					userDetails: {
						user,
						uid: user.uid,
						isLoggedIn: true,
						displayName: user.displayName,
					},
				});
				setIsLoggedIn(true) && console.log(isLoggedIn);
			} else {
				console.log("user is signed out");
				setIsLoggedIn(false) && console.log(isLoggedIn);
			}
		});

		return () => unsubscribe();
	}, []);
	return (
		<div className='App'>
			<Header />
			{/* <Demo /> */}
			<div className='direct-links d-flex justify-content-center gap-3 '>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Signup</Link>
				<Link to='/profile'>Profile</Link>
				<Link to='/cart'>Cart</Link>
			</div>
			<Routes>
				<Route
					path='/'
					element={isLoggedIn ? <Home /> : <Navigate to='/login' />}
				/>
				<Route
					path='/login'
					element={!isLoggedIn ? <Login /> : <Navigate to='/' />}
				/>
				<Route
					path='/signup'
					element={!isLoggedIn ? <Signup /> : <Navigate to='/' />}
				/>
				<Route
					path='/profile'
					element={isLoggedIn ? <Profile /> : <Navigate to='/' />}
				/>
				<Route
					path='/cart'
					element={isLoggedIn ? <Cart /> : <Navigate to='/' />}
				/>
			</Routes>
		</div>
	);
}

export default App;
function Demo() {
	return (
		<div className='px-3 outer-div'>
			<div className='d-flex align-items-center position-relative'>
				{/* avtar */}
				<div className='avatar me-3'>
					<img
						className='avatar-img rounded-circle'
						src='https://social.webestica.com/assets/images/avatar/07.jpg'
						alt='avatar'
					/>
				</div>
				<div>
					<a className='h6' href='#'>
						Navjeevan Alone
					</a>
					<p className='small m-0'>Web Developer</p>
				</div>
			</div>
			<a
				className='dropdown-item btn btn-primary-soft btn-sm my-2 text-center'
				href='my-profile.html'>
				View profile
			</a>
		</div>
	);
}
