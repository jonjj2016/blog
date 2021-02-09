import {
    call,
    all
} from 'redux-saga/effects';
import {postSagas} from './Posts/post.saga';
import commentSaga from './Comments/comments.saga';

export function* rootSaga() {
    yield all([call(postSagas),call(commentSaga)]);
}