import { createAction } from 'redux-actions';
export const fetchAvailableClientServices = createAction('FETCH_AVAILABLE_CLIENT_SERVICES');
export const loadedAvailableClientServices = createAction('LOADED_AVAILABLE_CLIENT_SERVICES');
export const requestClientService = createAction('REQUEST_CLIENT_SERVICE');
export const fetchClientServicesFilterData = createAction("FETCH_CLIENT_SERVICES_FILTER_DATA")
export const fetchSearchResults = createAction('FETCH_CLIENT_SERVICE_SEARCH_RESULTS');

export const loadedCategoryFilterData = createAction('LOADED_CATEGORY_FILTER_DATA_CLIENT_SERVICES');
export const fetchSubCategoryFilterData = createAction('FETCH_SUB_CATEGORY_FILTER_DATA_CLIENT_SERVICES');
export const loadedSubCategoryFilterData = createAction('LOADED_SUB_CATEGORY_FILTER_DATA_CLIENT_SERVICES');
export const loadLocationFilterData = createAction('LOAD_LOCATION_FILTER_DATA_CLIENT_SERVICES');
export const fetchServiceProposals = createAction('FETCH_SERVICE_PROPOSALS');
export const serviceProposalsLoaded = createAction('SERVICE_PROPOSALS_LOADED');