import { createSelector } from "reselect"

const connectionKey = "clients"

const selectFreelancerManageRequestsDomain = (state) => state[connectionKey]

export const makeSelectAvailablehiredClient = () =>
  createSelector(selectFreelancerManageRequestsDomain, (globalState) =>
    globalState.get("availablehiredClients")
  )

export const makeSelectPutOnHoldClient = () =>
  createSelector(selectFreelancerManageRequestsDomain, (globalState) =>
    globalState.get("availablePutOnHold")
  )

export const makeSelectPausedByClient = () =>
  createSelector(selectFreelancerManageRequestsDomain, (globalState) =>
    globalState.get("availablePausedByClient")
  )

export const makeSelectViewRequest = () =>
  createSelector(selectFreelancerManageRequestsDomain, (globalState) =>
    globalState.get("viewRequests")
  )

export const makeSelectFreelancerClientsChatMessages = () =>
createSelector(selectFreelancerManageRequestsDomain, (globalState) =>
  globalState.get("chatMessages")
)

export const makeSelectFreelancerClientsLoadingStatus = () =>
createSelector(selectFreelancerManageRequestsDomain, (globalState) =>
  globalState.get("loading")
)
