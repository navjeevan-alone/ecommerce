import React, { useState, useEffect, useContext } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../ContextProvider";
import { auth } from "../firebase-config";
function Profile() {
	const navigate = useNavigate();
	const { state, dispatch } = useContext(StateContext);
	const [username, setUsername] = useState("loading...");
	const [email, setEmail] = useState("loading...");
	useEffect(() => {
		const user = auth.currentUser;
		// user !== null && user.displayName !== null && setUsername(user.displayName);
		if (user !== null) {
			user.email !== null && setEmail(user.email);
			user.displayName !== null && setUsername(user.displayName);
		}
	}, [auth.currentUser?.displayName, auth.currentUser?.email]);
	console.log(state);
	return (
		<div style={{ maxWidth: "25rem", margin: " 1rem auto" }}>
			<Card>
				<Card.Header
					style={{
						textAlign: "center",
						fontSize: "1.2rem",
						fontWeight: "bold",
					}}>
					Profile
				</Card.Header>
				<Card.Body>
					{/* <div className='outer-div mb-2'>
						<div className='d-flex align-items-center' style={{ gap: ".8rem" }}>
							<div className='avtar'>
								<img
									className='avatar-img rounded-circle'
									style={{
										border: "4px solid var(--bs-blue)",
										height: "100%",
										objectFit: "contain",
									}}
									src='https://social.webestica.com/assets/images/avatar/07.jpg'
									alt='avatar'
								/>
							</div>
							<div>
								<h6
									className='h6'
									to='/profile'
									style={{
										fontSize: "1.3rem",
										fontWeight: "700",
										textDecoration: "none",
										color: "#000",
									}}>
									Navjeevan Alone
								</h6>
							</div>
						</div>
					</div> */}
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							dispatch({
								type: "update-user",
								payload: { email: email, displayName: username },
							});
						}}>
						<Form.Group className='mb-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								type='text'
								placeholder='Name'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type='email'
								placeholder='Email'
								required
							/>
						</Form.Group>
						<Button variant='primary' type='submit'>
							Update
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='bottom-group d-flex gap-2 my-2 align-items-center justify-content-between'>
				<Link to='/'>Back</Link>
				<Button
					variant='primary'
					onClick={() => {
						dispatch({ type: "logout" });
						navigate("/login");
					}}>
					Logout
				</Button>
				<Button
					variant='danger'
					onClick={() => {
						dispatch({ type: "delete-user" });
						navigate("/login");
					}}>
					Delete Account
				</Button>
			</div>
		</div>
	);
}

export default Profile;
