import React, { useContext, useEffect } from "react";
import { Container, Alert, Card, Button, ListGroup } from "react-bootstrap";
import CartItem from "./CartItem";
import CurrencyFormat from "react-currency-format";
import { StateContext } from "../ContextProvider"; //import context
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
function Cart() {
	const { state, dispatch } = useContext(StateContext);
	// console.log(state.basket);
	// const array = [
	// 	{
	// 		userId: 1,
	// 		id: 1,
	// 		title: "delectus aut autem",
	// 		completed: false,
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 2,
	// 		title: "quis ut nam facilis et officia qui",
	// 		completed: false,
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 3,
	// 		title: "fugiat veniam minus",
	// 		completed: false,
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 4,
	// 		title: "et porro tempora",
	// 		completed: true,
	// 	},
	// 	{
	// 		userId: 1,
	// 		id: 15,
	// 		title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
	// 		completed: false,
	// 	},
	// ];
	// const totalFun = (accumulator, item) => {
	// 	return accumulator + item.price;
	// };
	// const total = state?.basket.reduce(totalFun, 0) || "-1";
	// console.log(total);
	const getCartItems = async () => {
		try {
			const q = query(collection(db, "cities"), where("isInCart", "==", true));

			const querySnapshot = await getDocs(q);
			let cartArray = [];
			querySnapshot.forEach((doc) => {
				cartArray.push({ ...doc.data() });
				console.log(doc.id, " => ", doc.data());
			});
			dispatch({ type: "set-basket", basket: cartArray });
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		return getCartItems;
	}, [state?.basket]);

	return (
		<Container className='py-2'>
			<Alert variant='primary' className='section-title'>
				Shopping Cart
			</Alert>
			<ListGroup>
				{state?.basket.map((item, index) => {
					return <CartItem key={item.id} item={item} />;
				})}
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
// Registration No : P
