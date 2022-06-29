import {useSelector} from "react-redux";
import styled from "@emotion/styled";
import Cart from "../assets/img/cart.svg";
import Logo from "../assets/img/logo-mario.png";
import {useState} from "react";
import { CartModal } from './CartModal';

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #232323;
	padding: 0.8rem 1.5rem;
	position: relative;
`;

const NavbarDetail = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: center;
`;

const NavbarLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	h2 {
		color: #fff;
	}

	h3 {
		color: #fff;
	}
`;

const CartConatiner = styled.div`
	position: relative;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.215);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.5s ease-in-out;
	margin: 0 10px;
`;

const TextAmount = styled.p`
	color: #fff;
	font-size: 1.2rem;
	font-weight: bold;
	position: absolute;
	top: -25px;
	right: 0px;
`;

export const Navbar = () => {
	const [cartModal, setCartModal] = useState(false);

	const state = useSelector((state) => state);

	const {cart} = state;
	const {shoppingCart} = cart;

	const handleCartModal = () => {
		setCartModal(!cartModal);
	}

	return (
		<>
			<NavbarContainer>
				<NavbarDetail>
					<img src={Logo} alt="logo" width={50} height={50} />
					<NavbarLogo>
						<h2>E</h2>
						<h3>commerce</h3>
					</NavbarLogo>
				</NavbarDetail>
				<CartConatiner>
					<TextAmount>
						{shoppingCart.length === 0 ? "" : shoppingCart.length}
					</TextAmount>
					<img
						src={Cart}
						alt="cart"
						onClick={handleCartModal}
					/>
				</CartConatiner>
			</NavbarContainer>
			{cartModal && (
					<CartModal handleCartModal={handleCartModal} />
				)}
		</>
	);
};