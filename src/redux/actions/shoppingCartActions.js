import {
	ADD_TO_CART,
	GET_DATA_PRODUCTS,
	START_FETCHING,
} from "../types";

export const isLoading = (load) => ({type: START_FETCHING, payload: load});
export const getDataProducts = (data) => ({
	type: GET_DATA_PRODUCTS,
	payload: data,
});

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

