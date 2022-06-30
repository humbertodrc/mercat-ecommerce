import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/shoppingCartActions';
import { getPrice } from '../utils/getPrice';
import { addToCartLocalStorage } from '../utils/crudLocalStorage';
import styled from "@emotion/styled";

const CardContainer = styled.div`
	align-items: center;
	background-color: #232323;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	height: 350px;
	justify-content: center;
	position: relative;
	width: 100%;

	&:before {
		background: #b198984d;
		border-radius: 20px;
		clip-path: circle(150px at 80% 20%);
		content: "";
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		transition: 0.5s ease-in-out;
		width: 100%;
	}

	&:hover:before {
		clip-path: circle(300px at 80% -20%);
	}

`;

const Image = styled.img`
	margin-bottom: 1rem;
	object-fit: contain;
	position: absolute;
	top: 40%;
	transform: translateY(-60%);
	z-index: 10000;
`;

const CardDetail = styled.div`
	align-items: center;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
`;

const Title = styled.h3`
	color: #fff;
	font-size: 1.1rem;
	font-weight: bold;
	margin: 0.5rem auto 0;
	text-align: center;
`;

const CardBody = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

const CardType = styled.p`
	color: #fff;
	font-size: 1rem;
`;

const CardPrice = styled.p`
	color: #fff;
	font-size: 1rem;
`;

const Button = styled.button`
	all: unset;
	background-color: #d03030;
	border-radius: 10px;
	border: none;
	color: #fff;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	margin: 0 auto 0.5rem;
	padding: 0.5rem 1rem;
	text-align: center;
	text-transform: uppercase;
	transition: 0.5s ease-in-out;
	width: 160px;

	&:hover {
		background-color: #d0303076;
	}
`;

export const CardProduct = ({item}) => {
	const { name, image, type, tail } = item;
	
	const dispatch = useDispatch();
	
	const price = useMemo(() => getPrice(), []);

	// Gurada en localStorage el producto y en el state el carrito
	const saveCart = () => {
		dispatch(addToCart(tail))
		addToCartLocalStorage(name, tail, price);
	}

	return (
		<CardContainer>
			<Image src={image} alt={item.name} width={150} height={210} />
			<CardDetail>
				<Title>{name}</Title>
				<CardBody>
					<CardType>{type}</CardType>
					<CardPrice>
						${price},<small>00</small>
					</CardPrice>
				</CardBody>
				<Button onClick={saveCart}>Add to Cart</Button>
			</CardDetail>
		</CardContainer>
	);
};
