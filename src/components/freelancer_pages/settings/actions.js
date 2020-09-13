import { createAction } from "redux-actions"
export const fetchEditProfile = createAction("FETCH_EDIT_PROFILE")
export const loadEditProfile = createAction("LOAD_EDIT_PROFILE")
export const fetchServiceProposal = createAction("FETCH_SERVICE_PROPOSAL")
export const loadServiceProposal = createAction("LOAD_SERVICE_PROPOSAL")
export const fetchMilestone = createAction("FETCH_MILESTONE")
export const loadMilestone = createAction("LOAD_MILESTONE")
export const fetchProposedServices = createAction("FETCH_PROPOSED_SERVICES")
export const loadProposedServices = createAction("LOAD_PROPOSED_SERVICES")
export const DeleteServiceProposal = createAction(
  "DELETE_FETCH_SERVICE_PROPOSAL"
)
export const loadDeleteServiceProposal = createAction(
  "DELETE_LOAD_SERVICE_PROPOSAL"
)
export const FetchSingleproposedService = createAction(
  "FETCH_SINGLE_SERVICE_PROPOSAL"
)
export const loadSingleServiceProposal = createAction(
  "LOAD_SINGLE_SERVICE_PROPOSAL"
)
export const FetchServiceMenu = createAction(
  "FETCH_SERVICES_MENUS"
)
export const loadServiceMenu = createAction(
  "LOAD_SERVICES_MENUS"
)
export const FetchSingleServiceMenu = createAction(
  "FETCH_SINGLE_SERVICE_MENU"
)
export const loadSingleServiceMenu = createAction(
  "LOAD_SINGLE_SERVICE_MENU"
)
export const FetchSinglemenuService = createAction(
  "FETCH_SINGLE_SERVICE"
)
export const loadSinglemenuService = createAction(
  "LOAD_SINGLE_SERVICE"
)
export const FetchSinglePortfolio = createAction(
  "FETCH_SINGLE_PORTFOLIO"
)
export const loadSinglemenuPortfolio = createAction(
  "LOAD_SINGLE_PORTFOLIO"
)

export const LoadAddServiceProposal = createAction("ADD_SERVICE_PROPOSAL")
export const LoadDeleteMilestone = createAction("DELETE_MILESTONE")
export const LoadDeleteProposedService = createAction("DELETE_PROPOSED_SERVICE")
export const LoadDeleteProposalService = createAction("DELETE_PROPOSAL_SERVICE")


export const fetchallPortfolios = createAction('FETCH_ALL_PORTFOLIOS');
export const portfoliosLoadedall = createAction("PORTFOLIOS_LOADED_ALL")
export const addsinglePortfolio = createAction('ADD_SINGLE_PORTFOLIO');
export const deletePortfolio = createAction('LOAD_DELETE_PORTFOLIO');
export const LoadUPDATEPortfolio = createAction('UPDATE_PORTFOLIO');

export const deleteFaq = createAction('LOAD_DELETE_FAQ');
export const createFaq = createAction('LOAD_CREATE_FAQ');
export const fetchFaqs = createAction('FETCH_ALL_FAQS');
export const faqsLoaded = createAction("FAQS_LOADED_ALL")

export const fetchSingleFaqs = createAction('FETCH_EDIT_FAQ');
export const LoadedSingleFaq = createAction("EDIT_FAQ_LOADED")
export const LoadUPDATEFaq = createAction('UPDATE_FAQ');



export const addMileStone = createAction('ADD_MILESTONE');

export const UpdateServiceProposal = createAction('UPDATE_SERVICE_PROPOSAL');
export const UpdateServiceMenu = createAction('UPDATE_SERVICE_MENU');
export const LoadDeleteServiceMenu = createAction('DELETE_SERVICE_MENU');
export const LoadDeletemenuservice = createAction('DELETE_MENU_SERVICE');
export const LoadAddServiceMenu = createAction('ADD_SERVICE_MENU');


export const LoadAddReview = createAction('ADD_MERCHANT_REVIEW');
export const LoaddeleteReview = createAction('DELETE_MERCHANT_REVIEW');
export const LoadupdateReview = createAction('UPDATE_MERCHANT_REVIEW');


export const fetchMerchantReviews = createAction('FETCH_MERCHANT_REVIEWS');
export const LoadMerchantReviews = createAction("LOAD_MERCHANT_REVIEWS")

export const fetchsingleMerchantReview = createAction('FETCH_SINGLE_MERCHANT_REVIEW');
export const LoadsingleMerchantReview = createAction("LOAD_SINGLE_MERCHANT_REVIEW")

export const LoadAddEmail = createAction("LOAD_ADD_EMAIL")
export const LoadAddaccounts = createAction("LOAD_ADD_ACCOUNTS")







