import {
	ADD_TO_CART,
	CLEAR_CART,
	GET_DATA_PRODUCTS,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
	START_FETCHING,
} from "../types";

export const isLoading = (load) => ({type: START_FETCHING, payload: load});
export const getDataProducts = (data) => ({
	type: GET_DATA_PRODUCTS,
	payload: data,
});

export const addToCart = (id) => ({type: ADD_TO_CART, payload: id});
export const removeFromCart = (id, all = false) =>
	all
		? {type: REMOVE_ALL_FROM_CART, payload: id}
		: {type: REMOVE_ONE_FROM_CART, payload: id};

export const clearCart = () => ({type: CLEAR_CART});
