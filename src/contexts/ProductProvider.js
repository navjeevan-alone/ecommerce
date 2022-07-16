import React, { createContext, useContext, useReducer } from "react";
import {
	productReducer,
	productInitialState,
} from "../reducers/productReducer";
export const ProductContext = createContext();
export function useProductContext() {
	return useContext(ProductContext);
}

function ProductProvider({ children }) {
	const [state, dispatch] = useReducer(productReducer, productInitialState);
	const value = { dummyProduct: null }; //we can send anything we want later in this object
	return (
		<ProductContext.Provider value={{ value, state, dispatch }}>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductProvider;
