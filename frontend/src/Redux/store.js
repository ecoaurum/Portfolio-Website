import { appDetailReducer, appListReducer } from "./reducers/appsReducers";
import {thunk} from 'redux-thunk';
import { combineReducers, compose, applyMiddleware, legacy_createStore as createStore } from 'redux';

const initialState = {};
const reducer = combineReducers({
    appList: appListReducer,
    appDetails: appDetailReducer
});

const composeEnhanse = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhanse(applyMiddleware(thunk))
);

export default store;