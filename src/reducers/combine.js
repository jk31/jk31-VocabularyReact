import words from "./words";
import fetchingReducer from "../fetching/fetchingReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    words: words,
    fetchingReducer: fetchingReducer
})

export default rootReducer;