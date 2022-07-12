import React, { useContext } from "react";

import { StateContext } from "../ContextProvider";
function ToggleBtn() {
	const { state, dispatch } = useContext(StateContext);

	return <Button variant='warning'>Add to Cart</Button>;
}

export default ToggleBtn;
