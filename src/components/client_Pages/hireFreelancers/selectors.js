import { createSelector } from "reselect"

const connectionKey = "hireFreelancer"

const selectHireFreelancerDomain = (state) => state[connectionKey]

export const makeSelectFreelancerProfile = () =>
  createSelector(selectHireFreelancerDomain, (globalState) =>
    globalState.get("freelancerProfile")
  )

export const makeSelectFreelancerActive = () =>
  createSelector(selectHireFreelancerDomain, (globalState) =>
    globalState.get("Activefreelancer")
  )
export const makeSelectFreelancerPause = () =>
  createSelector(selectHireFreelancerDomain, (globalState) =>
    globalState.get("Pausefreelancer")
  )
export const makeSelectAction = () =>
  createSelector(selectHireFreelancerDomain, (globalState) =>
    globalState.get("Action")
  )

export const makeSelectPauseReasons = () =>
  createSelector(selectHireFreelancerDomain, (globalState) =>
    globalState.get("pauseReasons")
  )
