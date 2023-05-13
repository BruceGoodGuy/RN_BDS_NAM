/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Reducers/auth';
const middleware = [thunk];
const store = createStore(authReducer, applyMiddleware(...middleware));
export default store;
