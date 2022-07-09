import React, { useContext } from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signoutUser } from "../reducer";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { StateContext } from "../ContextProvider";

function Header() {
	const { state, dispatch } = useContext(StateContext);
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>E commerce</Navbar.Brand>
				<Nav className='me-auto'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/cart' className='nav-link'>
						Cart
					</Link>
				</Nav>
				{state.user ? (
					<NavDropdown
						title={auth.currentUser?.displayName}
						style={{ color: "#ffffff" }}
						className='user-displayname'>
						<NavDropdown.Item>Profile</NavDropdown.Item>
						<NavDropdown.Item>Cart</NavDropdown.Item>
						<NavDropdown.Item onClick={() => dispatch({ type: "logout" })}>
							Logout
						</NavDropdown.Item>
					</NavDropdown>
				) : (
					<Link to='/login'>
						<Button variant='primary'>Login</Button>
					</Link>
				)}
				{/* {auth.currentUser !== null
					? console.log(auth.currentUser.displayName, "is logged in")
					: console.log("no one is logged in")} */}
			</Container>
		</Navbar>
	);
}

export default Header;
