import { createSelector } from 'reselect';

const connectionKey = 'freelancerProfileCreate';

const selectJobRequestsDomain = (state) => state[connectionKey];
const selectLoginDomain = (state) => state["login"]

export const makeSelectPortfolios = () => createSelector(
    selectJobRequestsDomain,
    (globalState) => globalState.get('portfolios')
  );
export const makeSelectFaqs = () => createSelector(
  selectJobRequestsDomain,
  (globalState) => globalState.get('faqs')
);

export const makeSelectReviews = () => createSelector(
  selectJobRequestsDomain,
  (globalState) => globalState.get('reviews')
);


export const makeSelectAuthToken = () =>
createSelector(selectLoginDomain, (globalState) => globalState.token)

