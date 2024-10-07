import { applyMiddleware, combineReducers, createStore } from "redux";
import reducer from './reducer';
import ItemReducer from './items/ItemReducer';
import  userReducer  from './users/userReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers(
    {
        user:userReducer,
        itemsInfo:ItemReducer
    }
)
export const store = createStore(rootReducer,applyMiddleware(thunk))



