import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Corrected thunk import
import productsReducer from '../Reducers/productsReducers';
import categoriesReducer from '../Reducers/categoriesReducers';

// Combine all the reducers
const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
});

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
