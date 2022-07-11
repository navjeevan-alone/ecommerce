import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { resetEmail } from "../reducer";
export default function ForgotPassword() {
	const [show, setShow] = useState(false);
	const [email, setEmail] = useState("");
	const handleClose = () => {
		setEmail("");
		setShow(false);
	};
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				variant='link'
				onClick={handleShow}
				style={{ display: "block", margin: " .5rem auto" }}>
				Forgot Password
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header
					className='p-0 mb-2'
					style={{ borderBottom: "none" }}
					closeButton>
					<Modal.Title>Reset Password</Modal.Title>
				</Modal.Header>
				{/* <Modal.Body className='p-0'> */}
				<Form className='p-0' onSubmit={() => resetEmail(email)}>
					<Form.Group>
						<Form.Control
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							placeholder='Email'
							required
						/>
						<Form.Text>
							We will send and reset password email,( if it exists)
						</Form.Text>
					</Form.Group>
					<Button
						variant='primary'
						style={{ margin: "none", float: " right" }}
						type='submit'
						// onClick={() => resetEmail(email)}
					>
						Reset
					</Button>
				</Form>
				{/* </Modal.Body> */}
			</Modal>
		</>
	);
}
