import {
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects';
import axios from 'axios';
import {types,actions} from './types';
import { createStore } from 'redux';

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
            yield put(actions.get_success(res.data))
    } catch (error) {
        
    }
};
function * createPost(props) {
    console.log(props);
    try {
        const res=yield call(apiGen,"http://localhost:4000/posts",['post'],{title:props.payload});
        // console.log(res.data.data);
        yield put(actions.create_success(res.data.data))
    } catch (error) {
        
    }
}


export function * onGetPosts() {
    yield takeLatest(types.GET_START,getPosts);
    
}
function * onCreatePost() {
    yield takeLatest(types.CREATE_START,createPost)
}

export function * postSagas() {
    yield all([call(onGetPosts),call(onCreatePost)])
}