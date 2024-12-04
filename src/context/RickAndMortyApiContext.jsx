import {createContext, useContext, useEffect, useReducer, useState } from "react";
import {getCharacters} from "../service/rickAndMortyApi.js";
import { toast } from "sonner";

const initialState = {
	characters: [],
	favorites: [],
};

const apiReducer = (state, action) => {
	switch (action.type) {
		case "SET_CHARACTER":
			return {
				...state,
				characters: action.payload,
			};
		case "ADD_TO_FAVORITE":
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
			case "DELETE_TO_FAVORITE":
				return {
					...state,
				favorites: state.favorites.filter((character) => character.id !== action.payload),
			};
	}
};

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
	const [state, dispatch] = useReducer(apiReducer, initialState);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	const addToFavorite = (character) => {

		if(isNotItDuplicate(character.id)) {
			dispatch({ type: "ADD_TO_FAVORITE", payload: character });
			toast.success(character.name + " agregado a favoritos!");
		}
	};
	
	const isNotItDuplicate = (id) => {
		return state.favorites.filter((character) => character.id === id).length === 0 ? true : false;
	}

	const deleteToFavorite = (id) => {
		dispatch({type: "DELETE_TO_FAVORITE", payload: id});
	};

	const handleIsLoggedIn = (isLoggedIn) => {
		setIsLoggedIn(isLoggedIn);
	}

	useEffect(() => {
		getCharacters().then((data) => {
			dispatch({type: "SET_CHARACTER", payload: data});
		});
	}, []);

	return (
		<ApiContext.Provider
			value={{
				favorites: state.favorites,
				addToFavorite,
				deleteToFavorite,
				characters: state.characters,
				isLoggedIn,
				handleIsLoggedIn,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApi = () => useContext(ApiContext);