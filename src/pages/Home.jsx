import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import styled from "@emotion/styled";

import {getDataProducts, isLoading} from "../redux/actions/shoppingCartActions";
import apiProducts from "../api";
import {CardProduct} from "../components/CardProduct";
import { Hero } from '../components/Hero';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 1rem;
	padding: 40px;

	@media (min-width: 992px) {
		padding: 20px;
	}
`;

function Home() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const {cart} = state;
	const {amiibo} = cart.products;
	const {load} = cart;

	const getProductos = async () => {
		dispatch(isLoading(true));
		try {
			const {data} = await apiProducts.get();
			dispatch(getDataProducts(data));
		} catch (error) {
			console.log(error);
		}
		dispatch(isLoading(false));
	};

	useEffect(() => {
		getProductos();
	}, []);

	return (
		<>
			<Hero />
			<Container>
				{load ? (
					<>
						<h1 style={{color: "white"}}>Cargando...</h1>
					</>
				) : (
					<>
						{amiibo?.map((item) => (
							<CardProduct item={item} key={item.tail} />
						))}
					</>
				)}
			</Container>
		</>
	);
}

export default Home;
