import { createStore,compose, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';        //'./sagas'  -- will take index.js by default if nothing is mentioned;
const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(
    RootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware))
    
);

sagaMiddleware.run(rootSaga)