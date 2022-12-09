import { ADD_CHARACTER, ADD_FAVORITE, DELETE_CHARACTER, DELETE_FAVORITE, FILTER, ORDER } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacter: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE:
            // add 'fav' propertie to true
            const index = state.allCharacter.findIndex((character) => {
                return character.id === action.payload.id
            });
            const newArray = [...state.allCharacter];
            newArray[index] = { ...action.payload };
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacter: newArray
            }

        case DELETE_FAVORITE:
            const filter = state.myFavorites.filter(favorite => action.payload !== favorite.id)
            return {
                ...state,
                myFavorites: filter
            }

        case ADD_CHARACTER:
            return {
                ...state,
                allCharacter: [...state.allCharacter, action.payload]
            }

        case DELETE_CHARACTER:
            const filtertwo = state.allCharacter.filter(character => action.payload !== character.id)
            return {
                ...state,
                allCharacter: filtertwo
            }

        case FILTER:

            return {
                ...state,
                myFavorites: state.allCharacter.filter((character) => (character.fav && character.gender === action.payload))
            }

        case ORDER:
            const characters = [...state.myFavorites]

            return {
                ...state,
                myFavorites: characters.sort((a, b) => action.payload === 'Descendente' ? b.id - a.id : a.id - b.id)
            }


        default:
            return {
                ...state
            }
    }
}

export default rootReducer;