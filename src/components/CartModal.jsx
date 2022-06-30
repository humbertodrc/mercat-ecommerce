import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { addProductCart, deleteOneProductCart } from '../utils/crudLocalStorage';
import styled from "@emotion/styled";
import Close from "../assets/img/cerrar.svg";

const ModalContainer = styled.div`
	align-items: center;
	background-color: rgb(0 0 0 / 0.92);
	border: solid 1px #74717160;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
	position: absolute;
	right: 0px;
	top: 0px;
	z-index: 99999;

	@media (min-width: 768px) {
		min-height: 600px;
		min-width: 500px;
		right: 20px;
		top: 20px;
	}
`;

const CloseButton = styled.div`
	height: 20px;
	margin: 10px;
	position: absolute;
	right: 0;
	top: 0;
	width: 20px;
`;

const Table = styled.table`
	background-color: rgb(0 0 0 / 0.92);
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
	padding: 10px;
	text-align: center;

	@media (min-width: 768px) {
		padding: 20px;
	}
`;

const ButtonContainer = styled.div`
	margin: 0 auto;
	width: 100%;
`;

const Button = styled.button`
	all: unset;
	background-color: #d03030;
	border-radius: 5px;
	border: none;
	color: #fff;
	cursor: pointer;
	font-size: 1rem;
	padding: 15px 10px;
	text-align: center;
	width: 95%;
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
`;

export const CartModal = ({handleCartModal}) => {
	const [cartLocalStorage, setCartLocalStorage] = useState(
		JSON.parse(localStorage.getItem("cart")) || []
	);

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/cart");
		handleCartModal();
	};

	const addQuantity = (id) => {
		let updateProduct = addProductCart(id);
		setCartLocalStorage(updateProduct);
		}

	const substQuantity = (id) => {
		let updateProduct = deleteOneProductCart(id);
		setCartLocalStorage(updateProduct);
	};


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
					</tr>
				</thead>
				<tbody>
					{cartLocalStorage.map((item) => (
						<Row key={item.tail}>
							<td>{item.name}</td>
							<Cell>
								<button onClick={() => substQuantity(item.tail)}>
									-1
								</button>
							</Cell>
							<Cell>{parseInt(item.quantity)}</Cell>
							<Cell>
								<button onClick={() => addQuantity(item.tail)}>+1</button>
							</Cell>
						</Row>
					))}
				</tbody>
			</Table>
			<TotalContainer>
				<h3>
					Total:{" "}
					{cartLocalStorage.reduce(
						(acc, item) => acc + item.price * parseInt(item.quantity),
						0
					)}
				</h3>
			</TotalContainer>
			<ButtonContainer>
				<Button onClick={handleNavigate}>Checkout</Button>
			</ButtonContainer>
		</ModalContainer>
	);
};
