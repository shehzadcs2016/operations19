import { createAction } from "redux-actions"

export const fetchFreelancerProfile = createAction("FETCH_FEELANCER_PROFILE")
export const freelancerProfileLoaded = createAction("FREELANCER_PROFILE_LOADED")

export const fetchActiveFreelancer = createAction("FETCH_ACTIVE_FEELANCER")
export const freelancerActiveLoaded = createAction("FREELANCER_Active_LOADED")
export const fetchReasonPauseFreelancer = createAction(
  "FETCH_REASON_PAUSE_FEELANCER"
)
export const freelancerReasonPauseLoaded = createAction(
  "FETCH_REASON_PAUSE_LOADED"
)

export const fetchPauseFreelancer = createAction("FETCH_PAUSE_FEELANCER")
export const freelancerPauseLoaded = createAction("FREELANCER_PAUSE_LOADED")
export const sendBonus = createAction("SEND_BONUS")
export const pauseFreelancer = createAction("PAUSE_FREELANCER")
export const hoursLimit = createAction("HOURS_LIMIT")

export const addReview = createAction("ADD_REVIEW")
export const postReviewReply = createAction("POST_REVIEW_REPLY")
