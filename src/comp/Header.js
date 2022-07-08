import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>E commerce</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='#home'>Home </Nav.Link>
					<Nav.Link href='#products'>Products</Nav.Link>
				</Nav>
				<NavDropdown title='username' style={{ color: "#fff" }}>
					<NavDropdown.Item>Profile</NavDropdown.Item>
					<NavDropdown.Item>Cart</NavDropdown.Item>
				</NavDropdown>
				<Link to='/login'>
					<Button variant='primary'>Login</Button>
				</Link>
			</Container>
		</Navbar>
	);
}

export default Header;
