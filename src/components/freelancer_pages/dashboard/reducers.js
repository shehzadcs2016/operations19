
import { FreelancerDashboardModel } from './model';
import { loadFreelancerClients, freelancerClientsLoaded,
    loadFreelancerServices, freelancerServicesLoaded
    ,loadFreelancerReviews, freelancerReviewsLoaded,
    freelancerInActiveServicesLoaded
  } from './actions';

  
const initialState = FreelancerDashboardModel();

export default function FreelancerDashboardReducer(state= initialState, action){
    switch(action.type){
        case loadFreelancerClients().type.type:
            return state.merge({
                ...state,
                freelancerDashboardClients : action.payload.requests
            })
        case freelancerClientsLoaded().type:
            return state.merge({
                ...state,
                freelancerDashboardClients : action.payload
            })
        case loadFreelancerServices().type.type:
            return state.merge({
                ...state,
                freelancerDashboardServices : action.payload.requests
            })
        case freelancerServicesLoaded().type:
            return state.merge({
                ...state,
                freelancerDashboardServices : action.payload
            })
        case loadFreelancerReviews().type.type:
            return state.merge({
                ...state,
                freelancerReviews : action.payload.requests
            })
        case freelancerReviewsLoaded().type:
            return state.merge({
                ...state,
                freelancerReviews : action.payload
            })
        case freelancerInActiveServicesLoaded().type:
            return state.merge({
                ...state,
                freelancerInActiveServices : action.payload
            })
        default:
        return state
    }
}