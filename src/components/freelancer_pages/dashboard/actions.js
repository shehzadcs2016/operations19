import { createAction } from 'redux-actions';

export const loadFreelancerClients = createAction('LOAD_FREELANCER_CLIENTS');
export const freelancerClientsLoaded = createAction('FREELANCER_CLIENTS_LOADED');
export const loadFreelancerServices = createAction('LOAD_FREELANCER_SERVICES');
export const freelancerServicesLoaded = createAction('FREELANCER_SERVICES_LOADED');
export const loadFreelancerInActiveServices = createAction('LOAD_FREELANCER_INACTIVE_SERVICES');
export const freelancerInActiveServicesLoaded = createAction('FREELANCER_INACTIVE_SERVICES_LOADED');
export const loadFreelancerReviews = createAction('LOAD_FREELANCER_REVIEWS');
export const freelancerReviewsLoaded = createAction('FREELANCER_REVIEWS_LOADED');
export const postPublicReply = createAction('POST_PUBLIC_REPLY');