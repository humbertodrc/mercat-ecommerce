import {useSelector, useDispatch} from "react-redux";
import {
	addOneToCart,
	removeFromCart,
} from "../redux/actions/shoppingCartActions";
import styled from "@emotion/styled";

const CartContainer = styled.div`
	background-color: #232323;
	margin: 1rem;
	border-radius: 20px;
	padding: 10px;

	@media (min-width: 768px) {
		padding: 2rem;
	}
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	border-radius: 5px;
	background-color: #232323;
	margin-top: 2rem;
	color: #fff;
	padding: 1rem;
	
`;

const Row = styled.tr`
	border-bottom: 1px solid #c0b9b95f;
`;

const Cell = styled.td`
	text-align: center;
	padding: 10px;
	font-size: 12px;

	@media (min-width: 768px) {
		padding: 20px;
		font-size: 16px;
	}
`;

const TotalContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0.8rem;

	h3 {
		font-size: 1.5rem;
		color: #fff;
		font-weight: 700;
	}

	@media (min-width: 768px) {
		padding: 1rem 2rem;
	}
`

function Cart() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const {cart} = state;
	const {shoppingCart} = cart;

	console.log(shoppingCart);

	return (
		<CartContainer>
			<Table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Delete</th>
						<th>Quantity</th>
						<th>Add</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{shoppingCart.map((item) => (
						<Row key={item.tail}>
							<td>{item.name}</td>
							<Cell>
								<button onClick={() => dispatch(removeFromCart(item.tail))}>
									-1
								</button>
							</Cell>
							<Cell>{parseInt(item.quantity)}</Cell>
							<Cell>
								<button onClick={() => dispatch(addOneToCart(item.tail))}>
									+1
								</button>
							</Cell>
							<Cell>{2 * parseInt(item.quantity)}</Cell>
						</Row>
					))}
				</tbody>
			</Table>
			<TotalContainer>
				<h3>Total: {shoppingCart.reduce((acc, item) => acc + 2 * parseInt(item.quantity), 0)}</h3>
			</TotalContainer>
		</CartContainer>
	);
}

export default Cart;
