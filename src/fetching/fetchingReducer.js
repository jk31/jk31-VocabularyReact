import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
  } from './fetchingTypes'

const initialState = {
    loading: false,
    fetch: [],
    error: ""
}

const fetchingReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_SUCCESS:
        return {
          loading: false,
          fetch: action.payload,
          error: ''
        }
      case FETCH_FAILURE:
        return {
          loading: false,
          fetch: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default fetchingReducer;

