import styled from "@emotion/styled";
import Cart from "../assets/img/cart.svg";
import Logo from "../assets/img/logo-mario.png";

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #232323;
	padding: 0.8rem 1.5rem;
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

export const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarDetail>
				<img
					src={Logo}
					alt="logo"
					width={50}
					height={50}
				/>
				<NavbarLogo>
					<h2>E</h2>
					<h3>commerce</h3>
				</NavbarLogo>
			</NavbarDetail>
			<div>
				<img src={Cart} alt="cart" />
			</div>
		</NavbarContainer>
	);
};
