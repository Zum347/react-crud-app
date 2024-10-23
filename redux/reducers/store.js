import {createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';
import  userReducer  from './userReducer';


const rootReducer = combineReducers({
   todoReducer,
    userReducer,
});

const store = createStore(rootReducer);

export default store;