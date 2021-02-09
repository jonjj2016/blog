import {types,actions} from './types';

console.log(types);
const initState={
    posts:{}
};

export const postReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.GET_SUCCESS:
            return {...state,posts:payload.data};
            case types.CREATE_SUCCESS:
                return {...state,posts:{...state.posts,[payload.id]:payload}};
        default :
            return state
    }
}