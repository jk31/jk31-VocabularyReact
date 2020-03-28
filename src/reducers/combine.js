import Words from "./words";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    words: Words
})

export default allReducers;