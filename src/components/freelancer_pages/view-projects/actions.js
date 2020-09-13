import { createAction } from 'redux-actions';
export const fetchActiveProjects = createAction('FETCH_ACTIVE_PROJECTS');
export const loadedActiveProjects = createAction('LOADED_ACTIVE_PROJECTS');
export const requestProject = createAction('FREELANCER_REQUEST_PROJECT');
export const projectRequested = createAction('FREELANCER_PROJECT_REQUESTED');
export const fetchSearchResults = createAction('FREELANCER_FETCH_SEARCH_RESULTS');

// closed projects actions
export const fetchRecruitingProjects = createAction('FETCH_RECRUITING_PROJECTS');
export const loadedRecruitingProjects = createAction('LOADED_RECRUITING_PROJECTS');
export const fetchProjectsFilterData = createAction('FETCH_PROJECTS_FILTER_DATA');
export const loadLocationFilterData = createAction('LOAD_LOCATION_FILTER_DATA');
export const loadHourlyRateFilterData = createAction('LOAD_HOURLY_RATE_FILTER_DATA');