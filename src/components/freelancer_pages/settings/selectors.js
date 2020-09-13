import { createSelector } from "reselect"

const connectionKey = "EditProfile"

const selectEditProfileRequests = (state) => state[connectionKey]

export const makeSelectEditProfile = () =>
  createSelector(selectEditProfileRequests, (globalState) =>
    globalState.get("EditProfile")
  )
export const makeSelectServiceProposal = () =>
  createSelector(selectEditProfileRequests, (globalState) =>
    globalState.get("ServiceProposal")
  )
export const makeSelectMilesTone = () =>
  createSelector(selectEditProfileRequests, (globalState) =>
    globalState.get("MilesTone")
  )
export const makeSelectproposedServices = () =>
  createSelector(selectEditProfileRequests, (globalState) =>
    globalState.get("proposedServices")
  )
export const makeSelectEditproposedServices = () =>
  createSelector(selectEditProfileRequests, (globalState) =>
    globalState.get("EditproposedServices")
  )
  export const makeSelectPortfolios = () =>
  createSelector(selectEditProfileRequests, (globalState) =>
    globalState.get("portfolios")
  )
  
  export const makeSelectSavedMenu = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('SavedMenu')
  );

  export const makeSelectEditmenuServices = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('EditmenuServices')
  );
  
  export const makeSelectmenuService = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('menuService')
  );
   
  export const makeSelecteditPortfolio = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('editPortfolio')
  );
  export const makeSelectFaqs = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('faqs')
  );
  export const makeSelectEditFaq = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('editfaq')
  );
  export const makeSelectMerchantReviews = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('merchantReviews')
  );
  export const makeSelectEditMerchantReviews = () => createSelector(
    selectEditProfileRequests,
    (globalState) => globalState.get('editmerchantReview')
  );
// MilesTone
