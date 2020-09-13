import { ServiceRequestsModel } from "./model"
import {
  fetchOpenRequest,
  loadOpenRequest,
  fetchClientServices,
  loadClientServices,
  fetchClosedRequest,
  loadClosedRequest,
} from "./actions"
const initialState = ServiceRequestsModel()

export default function JobRequestsReducer(state = initialState, action) {
  switch (action.type) {
    case fetchOpenRequest().type:
      return state.merge({
        openServiceRequests: action.payload,
      })
    case loadOpenRequest().type:
      return state.merge({
        openServiceRequests: action.payload,
      })

    case fetchClientServices().type:
      return state.merge({
        Services: action.payload,
      })
    case loadClientServices().type:
      return state.merge({
        Services: action.payload,
      })

    case fetchClosedRequest().type:
      return state.merge({
        closeServiceRequests: action.payload,
      })
    case loadClosedRequest().type:
      return state.merge({
        closeServiceRequests: action.payload,
      })
    default:
      return state
  }
}
