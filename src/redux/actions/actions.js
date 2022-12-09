import { ADD_CHARACTER, ADD_FAVORITE, DELETE_CHARACTER, DELETE_FAVORITE, FILTER, ORDER } from "./types"


export const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}

export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

// It should be 'ACCENDENT || DECENDENT'
export const orderCard = (typeOrd) => {
    return {
        type: ORDER,
        payload: typeOrd
    }
}