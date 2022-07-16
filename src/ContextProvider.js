import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
export const StateContext = createContext();
export function useStateContext() {
	return useContext(StateContext);
}

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { dummyUser: null }; //we can send anything we want later in this object
	return (
		<StateContext.Provider value={{ value, state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
}

export default ContextProvider;
