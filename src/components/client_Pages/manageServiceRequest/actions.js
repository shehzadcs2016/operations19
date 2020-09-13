import { createAction } from "redux-actions"
export const fetchOpenRequest = createAction("FETCH_OPEN_REQUEST")
export const loadOpenRequest = createAction("LOAD_OPEN_REQUEST")
export const fetchClientServices = createAction("FETCH_CLIENT_SERVICES")
export const loadClientServices = createAction("LOAD_CLIENT_SERVICES")
export const fetchmerchantProfile = createAction("FETCH_MERCHANT_PROFILE")
export const loadmerchantProfile = createAction("LOAD_MERCHANT_PROFILE")
export const fetchServiceMenu = createAction("FETCH_SERVICE_MENU")
export const loadServiceMenu = createAction("LOAD_SERVICE_MENU")

export const fetchClosedRequest = createAction("FETCH_CLOSED_REQUEST")
export const loadClosedRequest = createAction("LOAD_CLOSED_REQUEST")
