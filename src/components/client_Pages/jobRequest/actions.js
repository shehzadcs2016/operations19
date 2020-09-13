import { createAction } from 'redux-actions';
export const setTicketId = createAction('SET_TICKET_ID');
export const requestOpenTicket = createAction('REQUEST_OPEN_TICKET');
export const fetchCandidates = createAction('FETCH_CANDIDATES');
export const candidatesLoaded = createAction('CANDIDATES_LOADED');
export const hireAtHourlyRate = createAction('HIRE_AT_HOURLY_RATE');