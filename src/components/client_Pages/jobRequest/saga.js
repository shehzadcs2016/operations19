import { put, takeLatest, select } from "redux-saga/effects"
import {
  makeSelectAuthToken,
  makeSelectRequestIndexByID,
  makeSelectRequests,
} from "../dashboard/selectors"
import { makeSelectTicketId, makeSelectCandidates } from "./selectors"

import axios from "../../../config/axios"
import { BASE_URL_API } from "../../../config/constants"
import { requestUpdated } from "../dashboard/actions"
import {
  requestOpenTicket,
  candidatesLoaded,
  fetchCandidates as fetchCandidatesAction,
  hireAtHourlyRate,
} from "./actions"

function* requestTicketOpen() {
  try {
    const token = yield select(makeSelectAuthToken())
    const ticketId = yield select(makeSelectTicketId())
    const requests = yield select(makeSelectRequests())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}client/request/reopenrequest/`,
      { client_project_id: ticketId },
      headers
    )
    const requestIndex = yield select(makeSelectRequestIndexByID(ticketId))
    requests[requestIndex] = response.data.data
    yield put({
      type: requestUpdated().type,
      payload: {
        index: requestIndex,
        requests: requests,
      },
    })
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* fetchCandidates(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    // const ticketId = yield select(makeSelectTicketId());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}client/freelancerrequest?client_project_id=${action.payload.ticketId}`,
      headers
    )
    yield put({ type: candidatesLoaded().type, payload: response.data.data })
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}
function* fetchProjectDetails(action) {
  // try{
  //     const token = yield select(makeSelectAuthToken());
  //     // const ticketId = yield select(makeSelectTicketId());
  //     const headers = {
  //         headers: { Authorization: `Bearer ${token}` },
  //       };
  //     const response = yield axios.get(
  //       `${BASE_URL_API}client/freelancerrequest?client_project_id=${action.payload.ticketId}`,
  //       headers
  //     );
  //     console.log("response ", response);
  //     yield put({ type: candidatesLoaded().type, payload: response.data.data, });
  // }
  // catch (e){
  //     // do nothing for now
  //     yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  // }
}

function* hireCandidateAtHourlyRate(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const candidates = yield select(makeSelectCandidates())
    const updatedCandidates = []
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/hired`,
      action.payload,
      headers
    )
    if (response.data.status === 200) {
      candidates.forEach((candidate) => {
        console.log("user id ", candidate.user.id)
        console.log("freelancer id ", action.payload.freelancer_id)
        if (candidate.user.id === action.payload.freelancer_id) {
          console.log("freelancer found =====>>>")
          candidate["status"] = "hired"
        }
        updatedCandidates.push(candidate)
      })
      console.log("freelancers updates ", updatedCandidates)
      yield put({ type: candidatesLoaded().type, payload: updatedCandidates })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "success",
          text: "Freelancer has been hired successfully",
        },
      })
    } else {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "error", text: "Freelancer could not be hired" },
      })
    }
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

export default function* JobRequestsSaga() {
  yield takeLatest(requestOpenTicket().type, requestTicketOpen)
  yield takeLatest(fetchCandidatesAction().type, fetchCandidates)
  yield takeLatest(fetchCandidatesAction().type, fetchProjectDetails)
  yield takeLatest(hireAtHourlyRate().type, hireCandidateAtHourlyRate)
}
