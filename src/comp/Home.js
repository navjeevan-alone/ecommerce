import React, { useContext } from "react";
import { Container, Alert, Card, Button } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { StateContext } from "../ContextProvider";
function Home() {
	const { state, dispatch } = useContext(StateContext);
	return (
		<Container className='py-2'>
			<Alert className='section-title' variant='primary'>
				Products
			</Alert>
			<div className='products-flex d-flex flex-wrap' style={{ gap: ".5rem" }}>
				{state.products.map((item) => {
					return (
						<Card
							key={item.id}
							style={{
								padding: ".5rem",
								flex: "1 1 17rem",
								maxWidth: "20rem",
							}}>
							<Card.Img
								variant='top'
								style={{ objectFit: "contain", height: "14rem" }}
								src={item.imgSrc}
							/>
							<Card.Body
								className='d-flex flex-column'
								style={{ padding: "0", marginTop: "1rem" }}>
								<Card.Text style={{ flexGrow: 2 }}>{item.title}</Card.Text>
								<Card.Title>
									<CurrencyFormat
										value={item.price}
										thousandSeparator
										thousandSpacing='2s'
										prefix='₹'
										displayType='text'
									/>
								</Card.Title>
								{item.isInCart ? (
									<Button
										variant='outline-danger'
										onClick={() =>
											dispatch({ type: "remove-from-cart", id: item.id })
										}>
										Remove
									</Button>
								) : (
									<Button
										variant='warning'
										onClick={() =>
											dispatch({ type: "add-to-cart", id: item.id })
										}>
										Add to Cart
									</Button>
								)}
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</Container>
	);
}

export default Home;
