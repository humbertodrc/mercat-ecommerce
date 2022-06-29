import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getDataProducts, isLoading} from "./redux/actions/shoppingCartActions";
import styled from "@emotion/styled";
import apiProducts from "./api";
import "./App.css";
import {CardProduct} from "./components/CardProduct";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 1rem;
`;

function App() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const {cart} = state;
	const {amiibo} = cart.products;

	const {load} = cart;

	console.log(load);

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
		<Container>
			{load ? (
        <>
          <h1 style={{color:"white"}}>Cargando...</h1>
        </>
			) : (
				<>
					{amiibo?.map((item) => (
						<CardProduct item={item} key={item.tail} />
					))}
				</>
			)}
		</Container>
	);
}

export default App;
