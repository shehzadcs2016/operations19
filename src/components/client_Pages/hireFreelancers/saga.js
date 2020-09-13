import { put, takeLatest, select } from "redux-saga/effects"
import { makeSelectAuthToken, makeSelectUserID } from "../dashboard/selectors"

import axios from "../../../config/axios"
import { BASE_URL_API } from "../../../config/constants"
import {
  fetchFreelancerProfile as fetchFreelancerProfileAction,
  freelancerProfileLoaded,
  addReview as addReviewAction,
  postReviewReply,
  fetchActiveFreelancer,
  freelancerActiveLoaded,
  fetchPauseFreelancer,
  freelancerPauseLoaded,
  sendBonus,
  pauseFreelancer,
  hoursLimit,
  fetchReasonPauseFreelancer,
  freelancerReasonPauseLoaded,
} from "./actions"

function* SetHoursLimmit(action) {
  try {
    const token = yield select(makeSelectAuthToken())

    const user_id = yield select(makeSelectUserID())

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}project/hourslimit`,
      {
        client_project_id: action.payload.id,
        weekly_hours_limit: action.payload.bonusAmount,
        comment: action.payload.comment,
        user_id: user_id,
      },
      headers
    )

    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "success", text: "send bonus created successfully" },
    })
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* PauseFreelancer(action) {
  try {
    const token = yield select(makeSelectAuthToken())

    const user_id = yield select(makeSelectUserID())

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}project/pause`,
      {
        client_project_id: action.payload.id,
        reason_to_pause: action.payload.reasonPause,
        reason_to_pause_in_comment: action.payload.comment,
        user_id: user_id,
        reason_to_pause_other: action.payload.otherReason,
      },
      headers
    )
    if (response.data.status === 200) {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "success",
          text: "Reason to pause requested successfully",
        },
      })
    } else {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "info",
          text: "Reason to pause could not be requested",
        },
      })
    }
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* SendBonus(action) {
  try {
    const token = yield select(makeSelectAuthToken())

    const user_id = yield select(makeSelectUserID())

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}project/sendbonus`,
      {
        client_project_id: action.payload.id,
        amount: action.payload.bonusAmount,
        comments: action.payload.comment,
        user_id: user_id,
      },
      headers
    )
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "success", text: "send bonus created successfully" },
    })
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* fetchPauseReasonFreelancer() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(`${BASE_URL_API}constant/arrays`, headers)
    console.log(response, "reasons")
    yield put({
      type: freelancerReasonPauseLoaded().type,
      payload: response.data.data.reason_to_pause,
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

function* fetchActivehiredFreelancer() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(`${BASE_URL_API}client/hirelist`, headers)
    yield put({
      type: freelancerActiveLoaded().type,
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

function* fetchPausehiredFreelancer() {
  try {
    const token = yield select(makeSelectAuthToken())

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}client/pause/list`,
      headers
    )
    yield put({
      type: freelancerPauseLoaded().type,
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

function* fetchFreelancerProfile(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    // const ticketId = yield select(makeSelectTicketId());

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/profile/${action.payload.profileId}`,
      headers
    )
    const [profile] = response.data.data
    yield put({ type: freelancerProfileLoaded().type, payload: profile })
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* addReview(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    // const ticketId = yield select(makeSelectTicketId());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}client/review`,
      action.payload,
      headers
    )
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "success", text: "Review added successfully" },
    })
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* postReply(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    // const ticketId = yield select(makeSelectTicketId());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}client/review/reply`,
      action.payload,
      headers
    )
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "success", text: "Review added successfully" },
    })
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

export default function* hireFreelancerSaga() {
  yield takeLatest(fetchFreelancerProfileAction().type, fetchFreelancerProfile)
  yield takeLatest(addReviewAction().type, addReview)
  yield takeLatest(postReviewReply().type, postReply)
  yield takeLatest(sendBonus().type, SendBonus)
  yield takeLatest(hoursLimit().type, SetHoursLimmit)
  yield takeLatest(pauseFreelancer().type, PauseFreelancer)
  yield takeLatest(fetchActiveFreelancer().type, fetchActivehiredFreelancer)
  yield takeLatest(
    fetchReasonPauseFreelancer().type,
    fetchPauseReasonFreelancer
  )
  yield takeLatest(fetchPauseFreelancer().type, fetchPausehiredFreelancer)
}
