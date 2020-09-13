import { createAction } from "redux-actions"
export const fetchOpenRequest = createAction("FETCH_OPEN_REQUEST")
export const loadOpenRequest = createAction("LOAD_OPEN_REQUEST")
export const fetchClientServices = createAction("FETCH_CLIENT_SERVICES")
export const loadClientServices = createAction("LOAD_CLIENT_SERVICES")
export const fetchClosedRequest = createAction("FETCH_CLOSED_REQUEST")
export const loadClosedRequest = createAction("LOAD_CLOSED_REQUEST")
