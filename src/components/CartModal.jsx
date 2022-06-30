import {useSelector, useDispatch} from "react-redux";
import styled from "@emotion/styled";
import Close from "../assets/img/cerrar.svg";
import {
	addOneToCart,
	removeFromCart,
} from "../redux/actions/shoppingCartActions";

const ModalContainer = styled.div`
	display: block;
	position: absolute;
	right: 0px;
	top: 0px;
	z-index: 99999;
	background-color: rgb(0 0 0 / 0.92);
	border: solid 1px #74717160;

	padding: 10px;

	@media (min-width: 768px) {
		min-height: 600px;
		min-width: 500px;
		right: 20px;
		top: 20px;
	}
`;

const CloseButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 20px;
	height: 20px;
	margin: 10px;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	border-radius: 5px;
	background-color: rgb(0 0 0 / 0.92);
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

	@media (min-width: 768px) {
		padding: 20px;
	}
`;

export const CartModal = ({handleCartModal}) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const {cart} = state;
	const {shoppingCart} = cart;

	return (
		<ModalContainer>
			<CloseButton>
				<img src={Close} alt="close" onClick={handleCartModal} />
			</CloseButton>
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
      <div>
        
      </div>
		</ModalContainer>
	);
};
