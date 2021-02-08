import {combineReducers} from 'redux';
import {postReducer} from './Posts/reducer';

export const rootReducer=combineReducers({
    posts:postReducer
})