import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {CartModal} from "./CartModal";
import styled from "@emotion/styled";
import Cart from "../assets/img/cart.svg";
import Logo from "../assets/img/logo-mario.png";

const NavbarContainer = styled.div`
	align-items: center;
	background-color: #232323;
	display: flex;
	justify-content: space-between;
	padding: 0.8rem 1.5rem;
	position: relative;
`;

const NavbarDetail = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	gap: 1.2rem;
`;

const NavbarLogo = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;

	h2 {
		color: #fff;
	}

	h3 {
		color: #fff;
	}
`;

const CartConatiner = styled.div`
	align-items: center;
	background-color: rgba(255, 255, 255, 0.215);
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	height: 50px;
	justify-content: center;
	margin: 0 10px;
	position: relative;
	transition: 0.5s ease-in-out;
	width: 50px;
`;

const TextAmount = styled.p`
	color: #fff;
	font-size: 1.2rem;
	font-weight: bold;
	position: absolute;
	right: 0px;
	top: -25px;
`;

export const Navbar = () => {
	const [cartModal, setCartModal] = useState(false);
	const [amount, setAmount] = useState(JSON.parse(localStorage.getItem("cart")).length);

	const state = useSelector((state) => state);
	const {cart} = state;
	const {shoppingCart} = cart;

	const navigate = useNavigate();

	const handleCartModal = () => {
		setCartModal(!cartModal);
	};

	const upDateAmount = () => {
		setAmount(JSON.parse(localStorage.getItem("cart")).length);
	}

	useEffect(() => {
		upDateAmount();
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
