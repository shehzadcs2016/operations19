import { portfoliosLoaded, faqsLoaded, reviewsLoaded } from './actions';
import {profileCreateModel} from './model';

const initialState = profileCreateModel();

export default function profileCreateReducer(state= initialState, action){
    switch(action.type){
        case portfoliosLoaded().type:
            return state.merge({
                ...state,
                portfolios : action.payload
            })
        case faqsLoaded().type:
            return state.merge({
                ...state,
                faqs : action.payload
            })
        case reviewsLoaded().type:
            return state.merge({
                ...state,
                reviews : action.payload
            })
        
        default:
        return state
    }
}