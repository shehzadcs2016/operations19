import { createAction } from 'redux-actions';

export const loadRequests = createAction('LOAD_REQUESTS');
export const requestsLoaded = createAction('REQUESTS_LOADED');
export const requestUpdated = createAction('REQUEST_UPDATED');
