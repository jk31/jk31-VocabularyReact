import axios from "axios";
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from "./fetchingTypes"

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const data = response.data
                dispatch(fetchSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchFailure(errorMsg))
            })
    }
}

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}


export const fetchSuccess = fetch => {
    return {
        type: FETCH_SUCCESS,
        payload: fetch
    }
}


export const fetchFailure = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}