import axios from 'axios';

// Action to fetch Products (async with redux-thunk)
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/products');
        // Dispatch the action with the fetched data
        dispatch({
            type: 'SET_PRODUCTS',
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching Products:', error);
        // Optionally, you can dispatch an error action here
        dispatch({
            type: 'FETCH_PRODUCTS_ERROR',
            payload: error.message,
        });
    }
};
