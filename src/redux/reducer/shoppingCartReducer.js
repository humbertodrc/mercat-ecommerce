import {
	ADD_TO_CART,
	GET_DATA_PRODUCTS,
	START_FETCHING,
} from "../types";

const initalState = {
	load: false,
	products: [],
	shoppingCart: [],
};

export const shoppingCartReducer = (state = initalState, action) => {
	switch (action.type) {
		case START_FETCHING: {
			return {
				...state,
				load: action.payload,
			};
		}

		case GET_DATA_PRODUCTS: {
			return {
				...state,
				products: action.payload,
			};
		}

		case ADD_TO_CART: {
			let newItem = state.products.amiibo.find(
				(item) => item.tail === action.payload
			);
			let itemInCart = state.shoppingCart.find(
				(item) => item.tail === newItem.tail
			);
			return itemInCart
				? {
						...state,
						shoppingCart: state.shoppingCart.map((item) =>
							item.tail === newItem.tail
								? {...item, quantity: item.quantity + 1}
								: item
						),
				  }
				: {
						...state,
						shoppingCart: [...state.shoppingCart, {...newItem, quantity: 1}],
				  };
		}

		default:
			return state;
	}
};
