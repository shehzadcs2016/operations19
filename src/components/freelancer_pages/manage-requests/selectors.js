import { createSelector } from "reselect"

const connectionKey = "freelancerManageRequests"

const selectFreelancerManageRequestsDomain = (state) => state[connectionKey]

export const makeSelectAvailableProjects = () => createSelector(
  selectFreelancerManageRequestsDomain,
  (globalState) => globalState.get('availableRequests')
);

export const makeSelectClosedProjects = () => createSelector(
  selectFreelancerManageRequestsDomain,
  (globalState) => globalState.get('closedRequests')
);
