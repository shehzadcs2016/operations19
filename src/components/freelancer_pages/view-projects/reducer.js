
import { Projects } from './model';
import {
  loadedActiveProjects, projectRequested, loadedRecruitingProjects,
  loadHourlyRateFilterData, loadLocationFilterData, fetchSearchResults
} from './actions';
const initialState = Projects();

export default function FreelancerProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case fetchSearchResults().type:
      return state.merge({
        ...state,
        isLoading: true,
      })
    case loadedActiveProjects().type:
      return state.merge({
        ...state,
        activeRequests: action.payload,
        isLoading: false
      })
    case projectRequested().type:
      return state.merge({
        ...state,
        activeRequests: action.payload
      })
    case loadedRecruitingProjects().type:
      return state.merge({
        ...state,
        recruitingRequests: action.payload
      })
    case loadLocationFilterData().type:
      return state.merge({
        ...state,
        locationFilterData: action.payload
      })
    case loadHourlyRateFilterData().type:
      return state.merge({
        ...state,
        hourlyRateFilterData: action.payload
      })
    default:
      return state
  }
}