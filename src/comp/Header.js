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
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand>E commerce</Navbar.Brand>
					<Nav className='me-auto'>
						<Link to='/' className='nav-link'>
							Home
						</Link>
						<Link to='/cart' className='nav-link'>
							Cart ({state?.basket.length})
						</Link>
					</Nav>
					{state?.user ? (
						<NavDropdown
							title={username}
							style={{ color: "#ffffff" }}
							className='user-displayname'>
							<Link to='/profile' className='dropdown-item'>
								Profile
							</Link>
							<Link to='/cart' className='dropdown-item'>
								Cart ({state?.basket.length})
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
			{/* <header className='p-2 bg-dark text-white'>
				<div className='container'>
					<div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
						<a
							href='/'
							className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'>
							E-commerce
						</a>

						<ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
							<li>
								<a href='#' className='nav-link px-2 text-secondary'>
									Home
								</a>
							</li>
							<li>
								<a href='#' className='nav-link px-2 text-white'>
									Features
								</a>
							</li>
							<li>
								<a href='#' className='nav-link px-2 text-white'>
									Pricing
								</a>
							</li>
							<li>
								<a href='#' className='nav-link px-2 text-white'>
									FAQs
								</a>
							</li>
							<li>
								<a href='#' className='nav-link px-2 text-white'>
									About
								</a>
							</li>
						</ul>

						<form
							className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
							role='search'>
							<input
								type='search'
								className='form-control form-control-dark text-white bg-dark'
								placeholder='Search...'
								aria-label='Search'
							/>
						</form>

						<div className='text-end'>
							<button type='button' className='btn btn-outline-light me-2'>
								Login
							</button>
							<button type='button' className='btn btn-warning'>
								Sign-up
							</button>
						</div>
					</div>
				</div>
			</header>
			<header className='p-2 border-bottom bg-dark text-white'>
				<div className='container'>
					<div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
						<a
							href='/'
							className='d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none'>
							E-commerce
						</a>

						<ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
							<li>
								<a href='#' className='nav-link px-2 link-secondary'>
									Overview
								</a>
							</li>
							<li>
								<a href='#' className='nav-link px-2 link-dark'>
									Inventory
								</a>
							</li>
							<li>
								<a href='#' className='nav-link px-2 link-dark'>
									Customers
								</a>
							</li>
							<li>
								<a href='#' className='nav-link px-2 link-dark'>
									Products
								</a>
							</li>
						</ul>

						<form
							className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
							role='search'>
							<input
								type='search'
								className='form-control'
								placeholder='Search...'
								aria-label='Search'
							/>
						</form>

						<div className='dropdown text-end'>
							<a
								href='#'
								className='d-block link-dark text-decoration-none dropdown-toggle'
								id='dropdownUser1'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<img
									src='./logo192.png'
									alt='mdo'
									width='32'
									height='32'
									className='rounded-circle'
								/>
							</a>
							<ul
								className='dropdown-menu text-small'
								aria-labelledby='dropdownUser1'>
								<li>
									<a className='dropdown-item' href='#'>
										New project...
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Settings
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Profile
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Sign out
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header> */}
		</>
	);
}

export default Header;
