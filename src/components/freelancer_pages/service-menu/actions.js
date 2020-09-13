import { createAction } from 'redux-actions';

//portfolio
export const fetchPortfolios = createAction('FETCH_PORTFOLIOS');
export const portfoliosLoaded = createAction("PORTFOLIOS_LOADED")
export const addPortfolio = createAction('ADD_PORTFOLIO');
export const deletePortfolio = createAction('DELETE_PORTFOLIO');

//faq
export const deleteFaq = createAction('DELETE_FAQ');
export const createFaq = createAction('CREATE_FAQ');
export const fetchFaqs = createAction('FETCH_FAQS');
export const faqsLoaded = createAction("FAQS_LOADED")

//review
export const addReview = createAction('ADD_MERCHANT_REVIEW');
export const fetchReviews = createAction('FETCH_REVIEWS');
export const reviewsLoaded = createAction("REVIEWS_LOADED")
export const deleteReview = createAction('DELETE_REVIEW');


// service menu
export const fetchServiceMenu = createAction("FETCH_SERVICE_MENU")
export const serviceMenuloaded = createAction("SERVICE_MENU_LOADED")
export const LoadAddaccounts = createAction("ADD_LINKED_ACCOUNTS")

