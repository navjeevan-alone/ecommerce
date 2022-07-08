import { Routes, Route } from "react-router-dom";
import Header from "./comp/Header";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
