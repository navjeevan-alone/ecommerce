import React from "react";
import { Container, Alert, Card, Button, ListGroup } from "react-bootstrap";
import CartItem from "./CartItem";
import CurrencyFormat from "react-currency-format";
function Cart() {
	return (
		<Container>
			<Alert
				variant='primary'
				style={{
					padding: ".5rem",
					fontSize: "18px",
					fontWeight: 500,
					margin: ".5rem auto",
				}}>
				Shopping Cart
			</Alert>
			<ListGroup>
				<CartItem
					title='TECLAST F15S Laptop Computer 15.6 Inch, Intel N4020 Quad Core Windows
					10 Laptop(Windows 11 Free Upgrade)'
					imgSrc='https://images-na.ssl-images-amazon.com/images/I/61V8PkpebqL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
					price={49550}
					quantity={1}
				/>
				<ListGroup.Item className='d-flex '>
					<div className='spacer' style={{ flex: "3 2 10rem" }}></div>
					<div
						className='group d-flex flex-column gap-2'
						style={{ flex: "1 1 auto" }}>
						<h5>Your Total :</h5>
						<h4>
							<CurrencyFormat
								value={1250}
								thousandSeparator
								thousandSpacing='2s'
								prefix='₹'
								displayType='text'
							/>
						</h4>
						<Button variant='primary'>Pay Now</Button>
					</div>
				</ListGroup.Item>
			</ListGroup>
		</Container>
	);
}

export default Cart;
