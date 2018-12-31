import {SELECT_BORO} from './actionType';

export const selectBoro = (boro) => {
    return {
        type: SELECT_BORO,
        boro:boro
    }
}