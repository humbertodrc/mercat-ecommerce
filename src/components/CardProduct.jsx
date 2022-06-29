import styled from "@emotion/styled";

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 350px;
	background-color: #232323;
	position: relative;
	border-radius: 20px;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #b198984d;
		clip-path: circle(150px at 80% 20%);
		transition: 0.5s ease-in-out;
		border-radius: 20px;
	}

	&:hover:before {
		clip-path: circle(300px at 80% -20%);
	}

`;

const Image = styled.img`
	object-fit: contain;
	position: absolute;
	top: 40%;
	transform: translateY(-60%);
	z-index: 10000;
	margin-bottom: 1rem;
`;

const CardDetail = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	text-align: center;
	background-color: #d03030;
	color: #fff;
	width: 160px;
	border: none;
	border-radius: 10px;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: 0.5s ease-in-out;
	text-transform: uppercase;
	margin: 0 auto 0.5rem;

	&:hover {
		background-color: #d0303076;
	}
`;

export const CardProduct = ({item}) => {
	const {name, image, type} = item;

	const getPrice = () => {
		// Numero al azar
		const numero = Math.floor(Math.random() * (100 - 1)) + 100;
		return numero;
	};

	return (
		<CardContainer>
			<Image src={image} alt={item.name} width={150} height={210} />
			<CardDetail>
				<Title>{name}</Title>
				<CardBody>
					<CardType>{type}</CardType>
					<CardPrice>
						${getPrice()},<small>00</small>
					</CardPrice>
				</CardBody>
				<Button>Add to Cart</Button>
			</CardDetail>
		</CardContainer>
	);
};
