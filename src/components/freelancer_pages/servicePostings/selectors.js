import { createSelector } from 'reselect';

const connectionKey = 'freelancerClientAvailableServices';

const selectClientAvailableServicesDomain = (state) => state[connectionKey];

export const makeSelectClientAvailableServices = () => createSelector(
  selectClientAvailableServicesDomain,
  (globalState) => globalState.get('clientAvailableServices')
);

export const makeSelectSearchResult = () => createSelector(
  selectClientAvailableServicesDomain,
  (globalState) => globalState.get('searchResult')
);

export const makeSelectLocationFilterData = () => createSelector(
  selectClientAvailableServicesDomain,
  (globalState) => globalState.get('locationFilterData')
);

export const makeSelectCategoryFilterData = () => createSelector(
  selectClientAvailableServicesDomain,
  (globalState) => globalState.get('categoryFilterData')
);

export const makeSelectSubCategoryFilterData = () => createSelector(
  selectClientAvailableServicesDomain,
  (globalState) => globalState.get('subCategoryFilterData')
);

export const makeSelectServiceProposals = () => createSelector(
  selectClientAvailableServicesDomain,
  (globalState) => globalState.get('serviceProposals')
);

export const makeSelectIsLoading = () => createSelector(
  selectClientAvailableServicesDomain,
  (globalState) => globalState.get('isLoading')
);
