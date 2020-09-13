
import { JobRequestsModel } from './model';
import { setTicketId, candidatesLoaded } from './actions';
const initialState = JobRequestsModel();

export default function JobRequestsReducer(state= initialState, action){
    switch(action.type){
        case setTicketId().type:
            return state.merge({
                ticketId : action.payload
            })
            case candidatesLoaded().type:
            return state.merge({
                candidates : action.payload
            })
        default:
        return state
    }
}