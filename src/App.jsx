import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import apiProducts from "./api";
import "./App.css";
import {
	getDataProducts,
	isLoading,
} from "./redux/actions/shoppingCartActions";

function App() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const {cart} = state;
	const {
		amiibo
	} = cart.products;
	console.log(amiibo);

  console.log(cart);

  const getPrice = () => {
    // Numero al azar
    const numero = Math.floor(Math.random() * (100 - 1)) + 100;
    return numero;
  }
  

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
		<div className="App">
			{amiibo?.map((item, index) => (
				<div key={index}>
					<h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <p>${getPrice()},<small>00</small></p>
				</div>
			))}
		</div>
	);
}

export default App;
