
import { ClientAvailableServices } from './model';
import {
  loadedAvailableClientServices, requestClientService,
  loadLocationFilterData, loadedCategoryFilterData, loadedSubCategoryFilterData,
  serviceProposalsLoaded, fetchServiceProposals, fetchSearchResults
} from './actions';
const initialState = ClientAvailableServices();


export default function FreelancerProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case loadedAvailableClientServices().type:
      return state.merge({
        ...state,
        clientAvailableServices: action.payload,
        isLoading: false
      })
    // case requestClientService().type:
    //         return state.merge({
    //           ...state,
    //           clientAvailableServices : action.payload
    //         })
    case loadLocationFilterData().type:
      return state.merge({
        ...state,
        locationFilterData: action.payload
      })
    case loadedCategoryFilterData().type:
      return state.merge({
        ...state,
        categoryFilterData: action.payload
      })
    case loadedSubCategoryFilterData().type:
      return state.merge({
        ...state,
        subCategoryFilterData: action.payload
      })
    case fetchSearchResults().type:
      return state.merge({
        ...state,
        isLoading: true,
      })
    case serviceProposalsLoaded().type:
      return state.merge({
        ...state,
        serviceProposals: action.payload,
      })
    default:
      return state
  }
}