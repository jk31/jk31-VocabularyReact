import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import rootReducer from "../reducers/combine";


export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(logger, thunk))
    );

export const persistor = persistStore(store);

export default { store, persistor };