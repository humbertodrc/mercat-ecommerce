import styled from '@emotion/styled';
import Cart from '../assets/img/cart.svg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #232323;
  padding: 0.8rem 1.5rem;
`

const NavbarDetail = styled.div`
  display: flex;
  gap: 1.2rem;
`

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2{
    color: #fff;
  }

  h3{
    color: #fff;
  }
`

export const Navbar = () => {


	return (
		<NavbarContainer>
			<NavbarDetail>
				<img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png" alt="logo" width={50} height={70} />
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
