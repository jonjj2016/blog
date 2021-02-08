import {
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects';
import axios from 'axios';
import {types,actions} from './types';

function * apiGen (url,method,data) {
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const res=yield axios[method](url,data,config);
    return res;
    
}


function * getPosts () {
    try {
         const res= yield call(apiGen,"http://localhost:4000/posts",['get']);
         console.log(res);
         yield put
    } catch (error) {
        
    }
};


export function * onGetPosts() {
    yield takeLatest(types.GET_START,getPosts);
    
}

export function * postSagas() {
    yield all([call(onGetPosts)])
}