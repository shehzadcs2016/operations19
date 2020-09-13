import { createSelector } from 'reselect';

const connectionKey = 'freelancerRequests';

const selectFreelancerRequestsDomain = (state) => state[connectionKey];

export const makeSelectActiveProjects = () => createSelector(
  selectFreelancerRequestsDomain,
  (globalState) => globalState.get('activeRequests')
);

export const makeSelectRecruitingProjects = () => createSelector(
  selectFreelancerRequestsDomain,
  (globalState) => globalState.get('recruitingRequests')
);

export const makeSelectLocationFilter = () => createSelector(
  selectFreelancerRequestsDomain,
  (globalState) => globalState.get('locationFilterData')
);

export const makeSelectHourlyRateFilter = () => createSelector(
  selectFreelancerRequestsDomain,
  (globalState) => globalState.get('hourlyRateFilterData')
);

export const makeSelectIsLoading = () => createSelector(
  selectFreelancerRequestsDomain,
  (globalState) => globalState.get('isLoading')
);
