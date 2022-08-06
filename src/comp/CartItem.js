import React, { useContext, useState, useEffect } from "react";
import { Container, Alert, Card, Button, ListGroup } from "react-bootstrap";
import { StateContext } from "../ContextProvider";
import CurrencyFormat from "react-currency-format";
function CartItem({ item }) {
	const { dispatch } = useContext(StateContext);
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"];
	const [myQuantity, setMyQuantity] = useState(1);
	const [show, setShow] = useState(true);
	useEffect(() => {
		myQuantity === "10+" && setShow(false);
	}, [myQuantity]);
	return (
		<ListGroup.Item className='d-flex flex-row  gap-3'>
			<Card.Img variant='top' src={item.imgSrc} />
			<Card.Body style={{ padding: "0", marginTop: "1rem" }}>
				<Card.Text>{item.title}</Card.Text>
				<Card.Title>
					<CurrencyFormat
						value={item.price}
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
									{arr.map((value) => {
										return (
											<option value={value} key={value}>
												{value}
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
					<Button
						variant='danger'
						size='sm'
						onClick={() => dispatch({ type: "remove-from-cart", id: item.id })}>
						Remove item
					</Button>
				</div>
			</Card.Body>
			<div className='sub-total'>
				<h4>
					{/* <sup>₹</sup> */}

					<CurrencyFormat
						value={item.price * myQuantity}
						thousandSeparator
						thousandSpacing='2s'
						prefix='₹'
						displayType='text'
					/>
				</h4>
			</div>
		</ListGroup.Item>
	);
}

export default CartItem;
//
