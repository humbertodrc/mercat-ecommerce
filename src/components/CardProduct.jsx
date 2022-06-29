import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #161616;

`


export const CardProduct = ({ item }) => {

  const {name, image, type} = item;
  
  const getPrice = () => {
    // Numero al azar
    const numero = Math.floor(Math.random() * (100 - 1)) + 100;
    return numero;
  }

	return (
		<CardContainer>
			<h3>{name}</h3>
			<img src={image} alt={item.name} width={160} height={240} />
			<p>
				${getPrice()},<small>00</small>
			</p>
		</CardContainer>
	);
};
