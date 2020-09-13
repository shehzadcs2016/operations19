import { createAction } from 'redux-actions';
export const fetchAvailableProjects = createAction('FETCH_AVAILABLE_PROJECTS');
export const loadedAvailableProjects = createAction('LOADED_AVAILABLE_PROJECTS');
export const requestProject = createAction('REQUEST_PROJECT');
export const projectRequested = createAction('PROJECT_REQUESTED');
export const fetchSearchResults = createAction('FETCH_SEARCH_RESULTS');

// closed projects actions
export const fetchClosedProjects = createAction('FETCH_Closed_PROJECTS');
export const loadedClosedProjects = createAction('LOADED_Closed_PROJECTS');