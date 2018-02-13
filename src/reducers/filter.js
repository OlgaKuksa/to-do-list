import { ON_FILTER_UPDATE } from "../actions/filter";

const DEFAULT_STATE={showCompleted:true};

const filter=(state=DEFAULT_STATE, action)=>
{
    switch(action.type){
        case ON_FILTER_UPDATE:
        return {
            ...state,
            ...action.payload
        }
        default: return state;
    }
}

export default filter;