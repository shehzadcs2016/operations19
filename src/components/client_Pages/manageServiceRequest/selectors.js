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
export const makeSelectOffers = () =>
  createSelector(selectServiceRequests, (globalState) =>
    globalState.get("Offers")
  )
export const makeSelectMerchants = () =>
  createSelector(selectServiceRequests, (globalState) =>
    globalState.get("Merchants")
  )
export const makeSelectServiceMenu = () =>
  createSelector(selectServiceRequests, (globalState) =>
    globalState.get("serviceMenu")
  )
