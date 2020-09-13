import { put, takeLatest, select } from "redux-saga/effects"
import {
  makeSelectAuthToken,
  makeSelectRequestIndexByID,
  makeSelectRequests,
} from "../dashboard/selectors"
import { makeSelectTicketId, makeSelectCandidates } from "./selectors"

import axios from "../../../config/axios"
import { BASE_URL_API } from "../../../config/constants"
import {
  fetchOpenRequest,
  loadOpenRequest,
  fetchClientServices,
  loadClientServices,
  fetchClosedRequest,
  loadClosedRequest,
} from "./actions"

function* fetchOpenServiceRequest() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}client/get-open-service-requests`,
      headers
    )
    yield put({
      type: loadOpenRequest().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* fetchServices() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}client-service-request/view-all-offers/${12}`,
      headers
    )
    yield put({
      type: loadClientServices().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* fetchClosedServiceRequest() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}client/get-closed-service-requests`,
      headers
    )
    yield put({
      type: loadClosedRequest().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}
export default function* ServiceRequestsSaga() {
  yield takeLatest(fetchOpenRequest().type, fetchOpenServiceRequest)
  yield takeLatest(fetchClientServices().type, fetchServices)

  yield takeLatest(fetchClosedRequest().type, fetchClosedServiceRequest)
}
