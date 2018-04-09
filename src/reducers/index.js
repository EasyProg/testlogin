/**
 * Created by Михаил on 07.04.2018.
 */
const initialState = {
    token:'',
    data:{},
    error:''
};

export default function session(state=initialState,action) {
    switch(action.type) {
        case 'REQUESTED_SESSION_SUCCEEDED':return {...state,token:action.token};
        case 'CLEAR_SESSION':return {...state,token:action.token};
        case 'REQUESTED_SESSION_FAILED':return {...state, error:'User or password is invalid'};
        default: return state;
    }
}