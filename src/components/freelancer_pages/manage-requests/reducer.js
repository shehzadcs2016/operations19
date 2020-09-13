import { availableProjects } from './model';
import { loadedAvailableProjects, projectRequested, loadedClosedProjects } from './actions';
const initialState = availableProjects();

export default function FreelancerManageProjectsReducer(state= initialState, action){
    switch(action.type){
        case loadedAvailableProjects().type:
            return state.merge({
              ...state,
              availableRequests : action.payload
            })
        case projectRequested().type:
                return state.merge({
                  ...state,
                  availableRequests : action.payload
                })
        case loadedClosedProjects().type:
            return state.merge({
              ...state,
              closedRequests : action.payload
            })
        // case projectRequested().type:
        //         return state.merge({
        //           availableRequests : action.payload
        //         })
        default:
        return state
    }
}
