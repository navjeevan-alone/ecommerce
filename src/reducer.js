import { useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
export const initialState = {
	basket: [],
	products: [],
	total: 0,
	user: null,
	uid: null,
	displayName: null,
};
export const userDetails = {
	// user: null,
	// userId: null,
	// isLoggedIn: false,
};
export const ACT = {
	REGISTER_USER: "REGISTER_USER",
};
// other functions
export const registerUser = async (
	email,
	password,
	displayUserName = "user"
) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		// dispatch({ type: "set-displayname", name: displayUserName });
		await updateProfile(auth.currentUser, { displayName: displayUserName });
		// const user = userCredential.user;
		// updateDisplayName(displayUserName);
	} catch (error) {
		console.log(error.message);
	}
};
const updateDisplayName = async (displayUserName) => {
	try {
		// dispatch({ type: "set-displayname", name: displayUserName });
		return await updateProfile(auth.currentUser, {
			displayName: displayUserName,
		});
	} catch (error) {
		console.log("can't update name");
	}
};
export const loginUser = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);

		const user = userCredential.user;
	} catch (error) {
		console.log(error.message);
	}
};
export const signoutUser = async () => {
	try {
		signOut(auth);
	} catch (error) {
		console.log(error.message);
	}
};

// main reducer function

export default function reducer(state, action) {
	switch (action.type) {
		case "set-user":
			return { ...state, user: action.user, uid: action.uid };
		case "set-username":
			return { ...state, displayName: action.name };
		case "logout":
			signoutUser();
			return { ...state, user: null, uid: null };
		case "run":
			return console.log("dispatch running");
	}
}
