import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer, itemReducer } from './reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    items: itemReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
