import {createContext, useContext, useEffect, useReducer } from "react";
import {getCharacters} from "../service/rickAndMortyApi.js";

const initialState = {
	character: [],
	cart: [],
};

const apiReducer = (state, action) => {
	switch (action.type) {
		case "SET_CHARACTER":
			return {
				...state,
				character: action.payload,
			};
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case "DELETE_TO_CART":
			return {
				...state,
				cart: state.cart.filter((character) => character.id !== action.payload),
			};
	}
};

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
	const [state, dispatch] = useReducer(apiReducer, initialState);

	const addToCart = (character) => {
		console.log("Agregar al carrito", character);
		dispatch({ type: "ADD_TO_CART", payload: character });
	};

	const deleteToCart = (id) => {
		console.log("Eliminar del carrito", id);
		dispatch({type: "DELETE_TO_CART", payload: id});
	};

	useEffect(() => {
		getCharacters().then((data) => {
			dispatch({type: "SET_CHARACTER", payload: data});
		});
	}, []);

	return (
		<ApiContext.Provider
			value={{
				cart: state.cart,
				addToCart,
				deleteToCart,
				characters: state.character,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApi = () => useContext(ApiContext);