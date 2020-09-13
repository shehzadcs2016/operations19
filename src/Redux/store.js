/*jshint esversion: 6 */

import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import thunk from "redux-thunk"
import { persistStore } from "redux-persist"
import logger from "redux-logger"
import reducers from "./reducers"
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, logger, sagaMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
// export default { store, persistor };
