import {CLEAR_TASK, SET_EDITED_TASK} from '../actions/editedTask'

const DEFAULT_STATE=null;

const editedTask=(state=DEFAULT_STATE,action)=>{
    switch(action.type){
        case (CLEAR_TASK): {
            console.log('oppa');
            return DEFAULT_STATE};
        case (SET_EDITED_TASK): return action.payload;
        default:return state;
    }
}

export default editedTask;