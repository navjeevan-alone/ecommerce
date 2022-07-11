import React, { useState, useContext } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../reducer";
import ForgotPassword from "./ForgotPassword";
import { StateContext } from "../ContextProvider";
function Login() {
	const { state, dispatch } = useContext(StateContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		loginUser(email, password);
		setEmail("");
		setPassword("");
		navigate("/");
	};

	return (
		<div style={{ maxWidth: "25rem", margin: " 1rem auto" }}>
			<Card>
				<Card.Header
					style={{
						textAlign: "center",
						fontSize: "1.2rem",
						fontWeight: "bold",
					}}>
					Log in
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleLogin}>
						<Form.Group className='mb-3'>
							<Form.Control
								type='email '
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Email'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Control
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Password'
							/>
						</Form.Group>
						<Button type='submit' variant='primary'>
							Login
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<ForgotPassword />
			<p style={{ textAlign: "center", margin: "1rem auto" }}>
				Need an Account? <Link to='/signup'>Sign Up</Link>
			</p>
		</div>
	);
}

export default Login;
