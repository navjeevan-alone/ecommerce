import React from "react";
import { Container, Alert, Card, Button } from "react-bootstrap";
function Home() {
	return (
		<Container>
			<Alert
				variant='primary'
				style={{
					padding: ".5rem",
					fontSize: "18px",
					fontWeight: 500,
					// border: "none",
					// boxShadow: " 1px 2px 4px 0px #9f9898",
					margin: ".5rem auto",
				}}>
				Products
			</Alert>
			<div className='products-flex d-flex flex-wrap' style={{ gap: ".5rem" }}>
				<Card
					style={{ padding: ".5rem", flex: "1 1 17rem", maxWidth: "20rem" }}>
					<Card.Img
						variant='top'
						style={{ objectFit: "contain" }}
						src='https://images-na.ssl-images-amazon.com/images/I/61V8PkpebqL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
					/>
					<Card.Body style={{ padding: "0", marginTop: "1rem" }}>
						<Card.Text>
							TECLAST F15S Laptop Computer 15.6 Inch, Intel N4020 Quad Core
							Windows 10 Laptop(Windows 11 Free Upgrade)
						</Card.Text>
						<Card.Title>₹49,550</Card.Title>
						<Button variant='warning'>Add to Cart</Button>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}

export default Home;
