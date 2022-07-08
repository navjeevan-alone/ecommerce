import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
export const initialState = {
	basket: [],
	products: [],
	user: null,
	total: 0,
	isLoggedIn: false,
};
export const ACT = {
	REGISTER_USER: "REGISTER_USER",
};
// other functions
export const registerUser = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
	}
};
// main reducer function

export const reducer = (state, action) => {
	switch (action.type) {
		case ACT.REGISTER_USER:
			registerUser(action.payload.email, action.payload.password);
			console.log("user logged in", action.email);
			return { ...state };
		case "logout":
			console.log("logout");
	}
};
