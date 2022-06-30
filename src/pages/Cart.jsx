import {useState } from 'react';
import { addProductCart, deleteOneProductCart, deleteProductCart } from '../utils/crudLocalStorage';
import styled from "@emotion/styled";

const CartContainer = styled.div`
	background-color: #232323;
	border-radius: 20px;
	margin: 1rem;
	padding: 10px;

	@media (min-width: 768px) {
		padding: 2rem;
	}
`;

const Table = styled.table`
	background-color: #232323;
	border-collapse: collapse;
	border-radius: 5px;
	border-spacing: 0;
	color: #fff;
	margin-top: 2rem;
	padding: 1rem;
	width: 100%;
`;

const Row = styled.tr`
	border-bottom: 1px solid #c0b9b95f;
`;

const Cell = styled.td`
	font-size: 12px;
	padding: 10px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 16px;
		padding: 20px;
	}
`;

const TotalContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-end;
	padding: 0.8rem;

	h3 {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 700;
	}

	@media (min-width: 768px) {
		padding: 1rem 2rem;
	}
`

function Cart() {

	const [inCart, setInCart] = useState(JSON.parse(localStorage.getItem('cart')));

	const addQuantity = (id) => {
		let updateProduct = addProductCart(id);
		setInCart(updateProduct);
		}

	const substQuantity = (id) => {
		let updateProduct = deleteOneProductCart(id);
		setInCart(updateProduct);
	};

	const deleteProductInCart = (id) => {
		let updateProduct = deleteProductCart(id);
		setInCart(updateProduct);
	}
	

	return (
		<CartContainer>
			<Table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Add</th>
						<th>Remove</th>
						<th>Delete</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{inCart.map((item) => (
						<Row key={item.tail}>
							<td>{item.name}</td>
							<Cell>{item.price}</Cell>
							<Cell>{parseInt(item.quantity)}</Cell>
							<Cell>
								<button onClick={() => substQuantity(item.tail)}>
									-1
								</button>
							</Cell>
							<Cell>
								<button onClick={() => addQuantity(item.tail)}>
									+1
								</button>
							</Cell>
							<Cell>
								<button onClick={() => deleteProductInCart(item.tail)}>
									Delete
								</button>
							</Cell>
							<Cell>{item.price * parseInt(item.quantity)}</Cell>
						</Row>
					))}
				</tbody>
			</Table>
			<TotalContainer>
				<h3>Total: {inCart.reduce((acc, item) => acc + item.price * parseInt(item.quantity), 0)}</h3>
			</TotalContainer>
		</CartContainer>
	);
}

export default Cart;
