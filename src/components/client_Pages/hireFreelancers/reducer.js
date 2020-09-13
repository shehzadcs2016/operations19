import { hireFreelancerModel } from "./model"
import {
  freelancerProfileLoaded,
  freelancerActiveLoaded,
  fetchActiveFreelancer,
  fetchPauseFreelancer,
  sendBonus,
  freelancerPauseLoaded,
  pauseFreelancer,
  hoursLimit,
  fetchReasonPauseFreelancer,
  freelancerReasonPauseLoaded,
} from "./actions"
const initialState = hireFreelancerModel()
export default function hireFreelancerReducer(state = initialState, action) {
  switch (action.type) {
    case freelancerProfileLoaded().type:
      return state.merge({
        freelancerProfile: action.payload,
      })
    case freelancerActiveLoaded().type:
      return state.merge({
        Activefreelancer: action.payload,
      })
    case fetchReasonPauseFreelancer().type:
      return state.merge({
        pauseReasons: action.payload,
      })
    case freelancerReasonPauseLoaded().type:
      return state.merge({
        pauseReasons: action.payload,
      })
    case fetchActiveFreelancer().type:
      return state.merge({
        Activefreelancer: action.payload,
      })
    case freelancerPauseLoaded().type:
      return state.merge({
        Pausefreelancer: action.payload,
      })
    case fetchPauseFreelancer().type:
      return state.merge({
        Pausefreelancer: action.payload,
      })

    case sendBonus().type:
      return state.merge({
        Action: action.payload,
      })

    case hoursLimit().type:
      return state.merge({
        Action: action.payload,
      })
    case pauseFreelancer().type:
      return state.merge({
        Action: action.payload,
      })

    default:
      return state
  }
}
