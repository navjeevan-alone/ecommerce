import React, { useContext } from "react";
import { Container, Alert, Card, Button } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { StateContext } from "../ContextProvider";
import ProductCard from "./ProductCard";
function Home({ loading }) {
	const { state, dispatch } = useContext(StateContext);
	return (
		<Container className='py-2'>
			<Alert className='section-title' variant='primary'>
				Products
			</Alert>
			<div className='products-flex d-flex flex-wrap' style={{ gap: ".5rem" }}>
				{loading && <p>loading...</p>}
				{loading ? (
					<p>loading...</p>
				) : (
					state?.products.map((item) => {
						return <ProductCard key={item.id} item={item} />;
					})
				)}
			</div>
		</Container>
	);
}

export default Home;
