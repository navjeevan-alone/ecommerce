import React, { useState, useEffect } from "react";
import { Container, Alert, Card, Button, ListGroup } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
function CartItem({ title, imgSrc, price, quantity }) {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"];
	const [myQuantity, setMyQuantity] = useState(quantity);
	const [show, setShow] = useState(true);
	useEffect(() => {
		myQuantity === "10+" && setShow(false);
	}, [myQuantity]);
	return (
		<ListGroup.Item className='d-flex flex-row  gap-3'>
			<Card.Img variant='top' src={imgSrc} />
			<Card.Body style={{ padding: "0", marginTop: "1rem" }}>
				<Card.Text>{title}</Card.Text>
				<Card.Title>
					<CurrencyFormat
						value={price}
						thousandSeparator
						thousandSpacing='2s'
						prefix='₹'
						displayType='text'
					/>
				</Card.Title>
				<div className='bottom-group d-flex gap-2 align-items-center'>
					<div className='myQuantity-container ' style={{ width: "10rem" }}>
						{show ? (
							<>
								<select
									name='myQuantity'
									id='myQuantity'
									value={myQuantity}
									style={{ width: "100%" }}
									onChange={(e) => setMyQuantity(e.target.value)}>
									{arr.map((item) => {
										return (
											<option value={item} key={item}>
												{item}
											</option>
										);
									})}
								</select>{" "}
							</>
						) : (
							<input
								type='number'
								value={myQuantity}
								placeholder='myQuantity'
								min={1}
								onChange={(e) => setMyQuantity(e.target.value)}
								onBlur={(e) =>
									(e.target.value <= 10 || e.target.value === "10+") &&
									setShow(true)
								}
								style={{ width: "100%" }}
							/>
						)}
					</div>
					<Button variant='danger' size='sm'>
						Remove item
					</Button>
				</div>
			</Card.Body>
			<div className='sub-total'>
				<h4>
					{/* <sup>₹</sup> */}

					<CurrencyFormat
						value={price * myQuantity}
						thousandSeparator
						thousandSpacing='2s'
						prefix='₹'
						displayType='text'
					/>
					{/* <CurrencyFormat
						value={2456981}
						displayType={"text"}
						thousandSeparator={true}
						prefix={"$"}
					/> */}
				</h4>
			</div>
		</ListGroup.Item>
	);
}

export default CartItem;
