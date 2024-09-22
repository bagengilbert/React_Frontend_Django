import { configureStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Import 'thunk' middleware
import productsReducer from '../Reducers/productsReducers';
import categoriesReducer from '../Reducers/categoriesReducers';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
});



const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;