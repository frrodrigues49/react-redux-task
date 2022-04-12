import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { reducers } from "./reducers";

const middleares = [logger];

const store = createStore(reducers, applyMiddleware(...middleares));

export { store };
