import {SELECT_BORO} from '../actions/actionType';

const initialState = {
    boro:''
}

const boros = (state = initialState, action) => {
    switch(action.type){
        case SELECT_BORO:
            return {
                ...state,
                boro: action.boro
            };
        default:
            return state
    }
}

export default boros;