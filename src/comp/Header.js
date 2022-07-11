import React, { useState, useContext, useEffect } from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signoutUser } from "../reducer";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { StateContext } from "../ContextProvider";

function Header() {
	const { state, dispatch } = useContext(StateContext);
	// super important to display username instantly in header
	const [username, setUsername] = useState("loading...");
	useEffect(() => {
		auth.currentUser !== null && // check if current user is not null
			auth.currentUser.displayName !== null && //then displayname is not null
			setUsername(auth.currentUser.displayName); // only then render displayName
	}, [auth.currentUser?.displayName]);
	// the end of super important
	const navigate = useNavigate();
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>E commerce</Navbar.Brand>
				<Nav className='me-auto'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/cart' className='nav-link'>
						Cart ({state.basket.length})
					</Link>
				</Nav>
				{state.user ? (
					<NavDropdown
						title={username}
						style={{ color: "#ffffff" }}
						className='user-displayname'>
						<Link to='/profile' className='dropdown-item'>
							Profile
						</Link>
						<Link to='/cart' className='dropdown-item'>
							Cart ({state.basket.length})
						</Link>
						<NavDropdown.Item
							style={{ color: "var(--bs-red)" }}
							onClick={() => {
								dispatch({ type: "logout" });
								navigate("/login");
							}}>
							Logout
						</NavDropdown.Item>
					</NavDropdown>
				) : (
					<Link to='/login'>
						<Button variant='primary'>Login</Button>
					</Link>
				)}
			</Container>
		</Navbar>
	);
}

export default Header;
