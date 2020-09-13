import { createSelector } from "reselect"

const connectionKey = "ServiceRequests"

const selectServiceRequests = (state) => state[connectionKey]

export const makeSelectOpenServiceRequests = () =>
  createSelector(selectServiceRequests, (globalState) =>
    globalState.get("openServiceRequests")
  )
export const makeSelectClosedServiceRequests = () =>
  createSelector(selectServiceRequests, (globalState) =>
    globalState.get("closeServiceRequests")
  )
export const makeSelectServices = () =>
  createSelector(selectServiceRequests, (globalState) =>
    globalState.get("Services")
  )
