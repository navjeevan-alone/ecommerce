import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase-config";

export const initialState = {
	basket: [],
	products: [],
	total: 0,
	user: null,
	uid: null,
	displayName: null,
	isLoggedIn: false,
};
export const productState = {
	basket: [],
	products: [],
	total: 0,
};
export const ACT = {
	REGISTER_USER: "REGISTER_USER",
};

// main reducer function

export default function reducer(state, action) {
	switch (action.type) {
		// auth actions
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
			return { ...state, user: null, uid: null, isLoggedIn: false }; //not working
		// product actions
		case "set-products":
			return { ...state, products: action.productsArray };

		case "set-cart":
			return { ...state, basket: action.basket };
		case "add-to-cart":
			let productsArray = [...state.products];
			const index = state.products.findIndex((basketItem) => {
				return basketItem.id === action.id;
			});
			if (index >= 0) {
				updateProduct(action.id, { isInCart: true });
				productsArray[index].inInCart = true;
			} else {
				console.log("item does not exists");
			}
			return {
				...state,
				basket: [...state.basket, { ...state.products[index] }],
				products: [...productsArray],
			};

		case "remove-from-cart":
			let basketArray = [...state.basket];
			let newProductsArray = [...state.products];
			const indexRemove = state.products.findIndex((basketItem) => {
				return basketItem.id === action.id;
			});

			if (indexRemove >= 0) {
				// console.log(basketArray[indexRemove]);
				newProductsArray[indexRemove].isInCart = false;
				basketArray.splice(indexRemove, 1);
				updateProduct(action.id, { isInCart: false });
			} else {
				console.warn(
					`can't remove product (id :${action.id}) as its not existed`
				);
			}
			return {
				...state,
				basket: [...basketArray],
				products: [...newProductsArray],
			};
		case "run":
			return console.log("dispatch running");
		default:
			return state;
	}
}
// product/firestore funtions
export const updateProduct = async (id, { ...data }) => {
	try {
		await updateDoc(doc(db, "products", id), { ...data });
	} catch (error) {
		console.log(error.message);
	}
};
// const totalFun = (accumulator, currentValue, index) => {
// 	return accumulator + currentValue.id;
// };
// const total = array.reduce(totalFun, 0);
// auth functions
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
