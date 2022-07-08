import React, { useRef, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { reducer, ACT } from "../reducer";
import { useStateValue } from "../StateProvider";
function Signup() {
	const [dispatch] = useStateValue();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignup = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			dispatch({
				type: ACT.REGISTER_USER,
				payload: { email: email, password: password },
			});
		} else {
			console.log("can't sign in user");
		}
		setEmail("");
		setPassword("");
		setConfirmPassword("");
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
						<Form.Group className='mb-3'>
							<Form.Control
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type='email'
								placeholder='Email'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Control
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type='password'
								placeholder='Password'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Control
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								type='password'
								placeholder='Confirm Password'
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
