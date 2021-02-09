import {types} from './comments.types';

const initState={
    comments:{}
};

export default (state=initState,{type,payload})=>{
switch (type) {
    case types.CREATE_SUCCESS:
        return {...state,comments:{...state.comments,payload}}

    default:
        return state
}
}