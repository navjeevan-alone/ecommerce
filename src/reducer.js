import { useContext } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { StateContext } from "./ContextProvider";

export const initialState = {
	basket: [],
	products: [],
	total: 0,
	user: null,
	uid: null,
	displayName: null,
	isLoggedIn: false,
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

		await updateProfile(auth.currentUser, { displayName: displayUserName });
	} catch (error) {
		console.log(error.message);
	}
};
export const updateUser = async ({
	email = auth.currentUser.email,
	displayName = auth.currentUser.displayName,
}) => {
	try {
		return await updateProfile(auth.currentUser, {
			displayName: displayName,
			email: email,
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
export const resetEmail = async (email) => {
	try {
		const sendResetPassword = await sendPasswordResetEmail(auth, email);
	} catch (error) {
		console.log(error.message);
	}
};
export const deleteUser = async () => {
	try {
		await deleteUser(auth.currentUser);
	} catch (error) {
		console.log(error.message);
	}
};

// main reducer function

export default function reducer(state, action) {
	switch (action.type) {
		case "set-user":
			return {
				...state,
				...action.userDetails,
			};
		case "set-username":
			return { ...state, displayName: action.name };
		case "logout":
			signoutUser();
			return { ...state, user: null, uid: null, isLoggedIn: false };
		case "update-user":
			console.log({ ...action.payload });
			updateUser({ ...action.payload });
			return { ...state, displayName: action.payload.username };
		case "delete-user":
			deleteUser();
			return { ...state, user: null, uid: null, isLoggedIn: false };
		case "set-products":
			return { ...state, products: action.productsArray };
		case "add-to-cart":
			let basketArray = [...state.basket];
			const index = basketArray.findIndex((basketItem) => {
				return basketItem.id === action.id;
			});

			return { ...state, basket: [...state.basket, state.products[index]] };
		case "run":
			return console.log("dispatch running");
	}
}
