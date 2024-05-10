import axios from 'axios';

const API_URL = 'http://localhost:8000/users';

export const loginUser = (username, password) => {
    return (dispatch) => {
        axios.get(`${API_URL}?username=${username}&password=${password}`)
            .then(response => {
                if (response.data.length > 0) {
                    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data[0] });
                } else {
                    dispatch({ type: 'LOGIN_FAIL', payload: 'No such user or wrong password' });
                }
            })
            .catch(error => {
                dispatch({ type: 'LOGIN_ERROR', payload: error.message });
            });
    };
};

export const registerUser = (username, password) => {
    return (dispatch) => {
        axios.get(`${API_URL}?username=${username}`)
            .then(response => {
                if (response.data.length === 0) {
                    // User does not exist, proceed with registration
                    axios.post(API_URL, { username, password })
                        .then(response => {
                            dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
                        })
                        .catch(error => {
                            dispatch({ type: 'REGISTER_ERROR', payload: error.message });
                        });
                } else {
                    // User already exists
                    dispatch({ type: 'REGISTER_FAIL', payload: 'Username is already taken' });
                }
            })
            .catch(error => {
                dispatch({ type: 'REGISTER_ERROR', payload: error.message });
            });
    };
};


export const fetchItems = () => {
    return (dispatch) => {
        axios.get(API_URL)
            .then(response => dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data }))
            .catch(error => dispatch({ type: 'ITEMS_ERROR', payload: error.message }));
    };
};

export const addItem = (item) => {
    return (dispatch) => {
        axios.post(API_URL, item)
            .then(response => dispatch({ type: 'ADD_ITEM_SUCCESS', payload: response.data }))
            .catch(error => dispatch({ type: 'ITEMS_ERROR', payload: error.message }));
    };
};

export const updateItem = (id, updates) => {
    return (dispatch) => {
        axios.patch(`${API_URL}/${id}`, updates)
            .then(response => dispatch({ type: 'UPDATE_ITEM_SUCCESS', payload: response.data }))
            .catch(error => dispatch({ type: 'ITEMS_ERROR', payload: error.message }));
    };
};

export const deleteItem = (id) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/${id}`)
            .then(response => dispatch({ type: 'DELETE_ITEM_SUCCESS', id }))
            .catch(error => dispatch({ type: 'ITEMS_ERROR', payload: error.message }));
    };
};
