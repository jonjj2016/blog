import {call,put,all,takeLatest,takeEvery} from 'redux-saga/effects';
import {actions,types} from './comments.types';
import apiGen from '../../utils/util';

function * getComments(props) {
    try {
        const res=  yield call(apiGen,`http://localhost:5000/posts/${props.id}/comments`,['get']);
        yield put ({
            type:types.GET_SUCCESS,payload:{
                data:res.data.data,
                id:props.id
            }
        })
    } catch (error) {
        
    }
}



function * createComment(props) {
    // console.log(props);

    try {
        const res=  yield call(apiGen,`http://localhost:5000/posts/${props.payload.id}/comments`,['post'],{content:props.payload.data});
        // console.log(res);
        yield put ({
            type:types.CREATE_SUCCESS,payload:{
                data:res.data.data,
                id:props.payload.id
            }
        })
        // yield put (actions.create_success(res.data.data[0]))
        
    } catch (error) {
        
    }
    
}



// ********************************************************************************************************
function * onGetComments() {
    yield takeEvery(types.GET_START,getComments)
};
function * onCreateComment() {
    yield takeLatest(types.CREATE_START,createComment)
}


export default function *() {
    yield all([call(onGetComments),call(onCreateComment)])
}