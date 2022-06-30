import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout";
import Cart from './pages/Cart';
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
