import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import rootReducer from "../reducers/combine";


const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(logger, thunk))
    );


export default store;