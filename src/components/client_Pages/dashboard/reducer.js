
import { DashboardModel } from './model';
import { requestsLoaded, requestUpdated } from './actions';
const initialState = DashboardModel();

export default function DashboardReducer(state= initialState, action){
    switch(action.type){
        case requestsLoaded().type:
            return state.merge({
                requests : action.payload
            })
        case requestUpdated().type.type:
            return state.merge({
                requests : action.payload.requests
            })
        default:
        return state
    }
}