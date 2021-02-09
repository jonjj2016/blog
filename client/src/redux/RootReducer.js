import {combineReducers} from 'redux';
import {postReducer} from './Posts/reducer';
import commentsReducer from './Comments/comments.reducer';

export const rootReducer=combineReducers({
    posts:postReducer,
    comments:commentsReducer
})