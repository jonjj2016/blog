import {types,actions} from './types';

const initState={
    posts:{}
};

export const postReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.GET_SUCCESS:
            console.log(payload);
            return {...state,posts:payload.data};
            case types.CREATE_SUCCESS:
                return {...state,posts:{...state.posts,[payload.id]:payload}};
        default :
            return state
    }
}