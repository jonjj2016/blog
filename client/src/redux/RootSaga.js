import {
    call,
    all
} from 'redux-saga/effects';
import {postSagas} from './Posts/post.saga'

export function* rootSaga() {
    yield all([call(postSagas)]);
}