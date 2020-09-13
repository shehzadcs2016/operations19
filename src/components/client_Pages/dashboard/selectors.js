import { createSelector } from "reselect"

const connectionKey = "dashboard"

const selectDashboardDomain = (state) => state[connectionKey]
const selectLoginDomain = (state) => state["login"]

export const makeSelectRequests = () =>
  createSelector(selectDashboardDomain, (globalState) =>
    globalState.get("requests")
  )

export const makeSelectRequestIndexByID = (id) =>
  createSelector(selectDashboardDomain, (globalState) => {
    const requests = globalState.get("requests")
    if (requests.length > 0) {
      requests.findIndex(function(request) {
        return request.id === id
      })
    }
  })

export const makeSelectOpenRequests = (state) =>
  createSelector(selectDashboardDomain, (globalState) => {
    const requests = globalState.get("requests")
    const openRequests = []
    if (requests) {
      requests.forEach((request) => {
        if (request["status"] === "open") {
          openRequests.push(request)
        }
      })
      return openRequests
    }
    return []
  })

export const makeSelectClosedRequests = (state) =>
  createSelector(selectDashboardDomain, (globalState) => {
    const requests = globalState.get("requests")
    const openRequests = []
    if (requests) {
      requests.forEach((request) => {
        if (request["status"] === "closed") {
          openRequests.push(request)
        }
      })
      return openRequests
    }
    return []
  }
);


export const makeSelectUserID = () =>createSelector(
selectLoginDomain,
(globalState) => globalState.id
);

export const makeSelectAuthToken = () =>
  createSelector(selectLoginDomain, (globalState) => globalState.token)
