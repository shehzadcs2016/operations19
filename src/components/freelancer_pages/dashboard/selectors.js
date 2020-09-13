import { createSelector } from 'reselect';

const connectionKey = 'freelancerDashboard';

const selectFreelancerDashboardDomain = (state) => state[connectionKey];

export const makeSelectClientsRequests = () => createSelector(
    selectFreelancerDashboardDomain,
    (globalState) => globalState.get('freelancerDashboardClients')
  );

export const makeSelectServicesRequests = () => createSelector(
  selectFreelancerDashboardDomain,
  (globalState) => globalState.get('freelancerDashboardServices')
);

export const makeSelectReviewsRequests = () => createSelector(
  selectFreelancerDashboardDomain,
  (globalState) => globalState.get('freelancerReviews')
);

export const makeFreelancerInActiveServices = () => createSelector(
  selectFreelancerDashboardDomain,
  (globalState) => globalState.get('freelancerInActiveServices')
);
