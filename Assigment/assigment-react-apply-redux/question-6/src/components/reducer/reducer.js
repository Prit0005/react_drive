const initialState = {
    user: null,
    error: null,
    items: [],
    isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload, error: null };
        case 'LOGIN_FAIL':
        case 'REGISTER_FAIL':
            return { ...state, user: null, error: action.payload };
        case 'LOGIN_ERROR':
        case 'REGISTER_ERROR':
            return { ...state, error: action.payload };
        case 'REGISTER_SUCCESS':
            return { ...state, user: action.payload, error: null };
        default:
            return state;
    }
};


export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_SUCCESS':
            return { ...state, items: action.payload, error: null };
        case 'ADD_ITEM_SUCCESS':
            return { ...state, items: [...state.items, action.payload], error: null };
        case 'UPDATE_ITEM_SUCCESS':
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
                error: null
            };
        case 'DELETE_ITEM_SUCCESS':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id),
                error: null
            };
        case 'ITEMS_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};