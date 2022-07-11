import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { reducer, ACT, registerUser } from "../reducer";

function Signup() {
	const navigate = useNavigate();
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	//
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	//
	const handleSignup = (e) => {
		e.preventDefault();
		setLoading(true);
		if (password === confirmPassword) {
			registerUser(email, password, displayName);
		} else {
			setError(true);
			setMessage("can't sign in user");
		}
		setDisplayName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		setLoading(false);
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
					Sign up
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSignup}>
						{loading && <p>Loading...</p>}
						{error && (
							<Alert
								key={message}
								variant='danger'
								onClose={() => setError(!error)}
								dismissible>
								{message}
							</Alert>
						)}

						<Form.Group className='mb-3'>
							<Form.Control
								value={displayName}
								onChange={(e) => setDisplayName(e.target.value)}
								type='text'
								placeholder='Name'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Control
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type='email'
								placeholder='Email'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Control
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type='password'
								placeholder='Password'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Control
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								type='password'
								placeholder='Confirm Password'
								required
							/>
						</Form.Group>
						<Button variant='primary' type='submit'>
							{" "}
							Sign up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<p style={{ textAlign: "center", margin: "1rem auto" }}>
				Already have an Account? <Link to='/login'>Login</Link>
			</p>
		</div>
	);
}

export default Signup;
