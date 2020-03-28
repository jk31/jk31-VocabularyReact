import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from "./fetchingTypes"


export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}


export const fetchRequest = fetch => {
    return {
        type: FETCH_SUCCESS,
        payload: fetch
    }
}


export const fetchRequest = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}