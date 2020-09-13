import { ServiceRequestsModel } from "./model"
import {
  fetchOpenRequest,
  loadOpenRequest,
  fetchClientServices,
  loadClientServices,
  fetchClosedRequest,
  loadClosedRequest,
  fetchmerchantProfile,
  loadmerchantProfile,
  fetchServiceMenu,
  loadServiceMenu,
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
    case fetchServiceMenu().type:
      return state.merge({
        serviceMenu: action.payload,
      })
    case loadServiceMenu().type:
      return state.merge({
        serviceMenu: action.payload,
      })

    case fetchmerchantProfile().type:
      return state.merge({
        Merchants: action.payload,
      })
    case loadmerchantProfile().type:
      return state.merge({
        Merchants: action.payload,
      })

    case fetchClientServices().type:
      return state.merge({
        Offers: action.payload,
      })
    case loadClientServices().type:
      return state.merge({
        Offers: action.payload,
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
