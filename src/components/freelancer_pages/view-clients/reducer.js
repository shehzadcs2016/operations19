import { clients } from "./model"
import {
  loadedclients,
  fetchClients,
  requestHold,
  fetchholdRequests,
  loadholdRequests,
  requestActivated,
  fetchPausedByRequests,
  loadPausedByRequests,
  fetchViewRequests,
  loadViewRequests,
  freelancerClientsChatMessagesLoaded,
  freelancerClientsLoadChatMessages,
} from "./actions"
const initialState = clients()

export default function FreelancerManageProjectsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case loadedclients().type:
      return state.merge({
        availablehiredClients: action.payload,
      })
    case fetchClients().type:
      return state.merge({
        availablehiredClients: action.payload,
      })
    case requestHold().type:
      return state.merge({
        availableClients: action.payload,
      })
    case requestActivated().type:
      return state.merge({
        availableClients: action.payload,
      })
    case loadholdRequests().type:
      return state.merge({
        availablePutOnHold: action.payload,
      })
    case fetchholdRequests().type:
      return state.merge({
        availablePutOnHold: action.payload,
      })
    case loadPausedByRequests().type:
      return state.merge({
        availablePausedByClient: action.payload,
      })
    case fetchPausedByRequests().type:
      return state.merge({
        availablePausedByClient: action.payload,
      })
    case loadViewRequests().type:
      return state.merge({
        viewRequests: action.payload,
      })
    case fetchViewRequests().type:
      return state.merge({
        viewRequests: action.payload,
      })
    case freelancerClientsLoadChatMessages().type:
      return state.merge({
        loading: true,
      })
      case freelancerClientsChatMessagesLoaded().type:
      return state.merge({
        chatMessages: action.payload,
        loading: false
      })
    default:
      return state
  }
}
