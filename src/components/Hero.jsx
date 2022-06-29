import styled from "@emotion/styled";
import ImagenHero from "../assets/img/imagen-hero.png";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-image: linear-gradient(
			to right,
			rgb(0 0 0 / 0.7),
			rgb(0 0 0 / 0.8)
		),
		url(${ImagenHero});
	background-size: cover;
	background-position: 30%;

  
  @media (min-width: 768px) {
    height: 600px;
    background-position: 50%;
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;

  span {
    color: #ffc107;
  }

  @media (min-width: 768px) {
    font-size: 5rem;
    text-align: left;
  }
`

const Button = styled.button`
  background-color: #d03030;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;

  &:hover {
    background-color: #d03030a8;
  }
`

export const Hero = () => {
	return (
		<HeroContainer>
			<Title>Super Flash Sale <span>50% Off</span></Title>
			<Button>See More</Button>
		</HeroContainer>
	);
};
