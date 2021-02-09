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
            case types.PATCH_START:
                const posts={...state.posts};
                const post=posts[payload.id];
                post.comments=payload.data;
                posts[payload.id]=post
                return {...state,posts}
        default :
            return state
    }
}