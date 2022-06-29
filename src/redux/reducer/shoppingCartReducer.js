import {
	ADD_TO_CART,
	CLEAR_CART,
	GET_DATA_PRODUCTS,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
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
			let newItem = state.products.find((item) => item.id === action.payload);
			let itemInCart = state.shoppingCart.find(
				(item) => item.id === newItem.id
			);
			return itemInCart
				? {
						...state,
						shoppingCart: state.shoppingCart.map((item) =>
							item.id === newItem.id
								? {...item, quantity: item.quantity + 1}
								: item
						),
				  }
				: {
						...state,
						shoppingCart: [...state.shoppingCart, {...newItem, quantity: 1}],
				  };
		}

		case REMOVE_ONE_FROM_CART: {
			let deletedItem = state.shoppingCart.find(
				(item) => item.id === action.payload
			);
			return deletedItem.quantity === 1
				? {
						...state,
						shoppingCart: state.shoppingCart.filter(
							(item) => item.id !== action.payload
						),
				  }
				: {
						...state,
						shoppingCart: state.shoppingCart.map((item) =>
							item.id === action.payload
								? {...item, quantity: item.quantity - 1}
								: item
						),
				  };
		}

		case REMOVE_ALL_FROM_CART: {
			return {
				...state,
				shoppingCart: state.shoppingCart.filter(
					(item) => item.id !== action.payload
				),
			};
		}

		case CLEAR_CART: {
			return initalState;
		}

		default:
			return state;
	}
};