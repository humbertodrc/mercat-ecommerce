import {useSelector} from "react-redux";
import styled from "@emotion/styled";
import Cart from "../assets/img/cart.svg";
import Logo from "../assets/img/logo-mario.png";
import {useEffect, useState} from "react";
import {CartModal} from "./CartModal";
import {useNavigate} from "react-router-dom";

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
	cursor: pointer;
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
	const [amount, setAmount] = useState(0);

	const state = useSelector((state) => state);

	const {cart} = state;
	const {shoppingCart} = cart;

	const navigate = useNavigate();

	const handleCartModal = () => {
		setCartModal(!cartModal);
	};

	const getLocalStorage = () => {
		if (localStorage.getItem("cart") === null) {
			localStorage.setItem("cart", JSON.stringify([]));
		} else {
			const cart = JSON.parse(localStorage.getItem("cart")).length;
			setAmount(cart);
			console.log(cart);
		}
	};

	useEffect(() => {
		getLocalStorage();
	}, [shoppingCart]);

	return (
		<>
			<NavbarContainer>
				<NavbarDetail>
					<img src={Logo} alt="logo" width={50} height={50} />
					<NavbarLogo onClick={() => navigate(`/`)}>
						<h2>E</h2>
						<h3>commerce</h3>
					</NavbarLogo>
				</NavbarDetail>
				<CartConatiner>
					<TextAmount>{amount === 0 ? "" : amount}</TextAmount>
					<img src={Cart} alt="cart" onClick={handleCartModal} />
				</CartConatiner>
			</NavbarContainer>
			{cartModal && <CartModal handleCartModal={handleCartModal} />}
		</>
	);
};
