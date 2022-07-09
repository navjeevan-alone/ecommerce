import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginUser } from "../reducer";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = (e) => {
		e.preventDefault();
		loginUser(email, password);

		setEmail("");
		setPassword("");
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
						<Link className='forget-password nav-link' to='/forgot-password'>
							Forgot password?
						</Link>
					</Form>
				</Card.Body>
			</Card>
			<p style={{ textAlign: "center", margin: "1rem auto" }}>
				Need an Account? <Link to='/signup'>Sign Up</Link>
			</p>
		</div>
	);
}

export default Login;
