import {types} from './comments.types';

const initState={
    
};

export default (state=initState,{type,payload})=>{
switch (type) {
    case types.GET_SUCCESS:
        return {...state,[payload.id]:payload.data};
        
    // return {...state,comments:payload}
    case types.CREATE_SUCCESS:
        // const comments=state.comments[]
        return {...state,[payload.id]:payload.data};

    default:
        return state
}
}