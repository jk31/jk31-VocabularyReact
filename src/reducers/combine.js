import words from "./words";
import fetchingReducer from "../fetching/fetchingReducer";

import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["words", "fetchingReducer"]
}

const rootReducer = combineReducers({
    words: words,
    fetchingReducer: fetchingReducer
})

export default persistReducer(persistConfig, rootReducer);