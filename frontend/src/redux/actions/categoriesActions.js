import axios from 'axios';

// Action to fetch categories (async with redux-thunk)
export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/categories');
        // Dispatch the action with the fetched data
        dispatch({
            type: 'SET_CATEGORIES',
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        // Optionally, you can dispatch an error action here
        dispatch({
            type: 'FETCH_CATEGORIES_ERROR',
            payload: error.message,
        });
    }
};
