import { put, takeLatest, select, throttle } from "redux-saga/effects"
import axios from "../../../config/axios"
import { BASE_URL_API } from "../../../config/constants"
import {
  makeSelectAuthToken,
  makeSelectUserID,
} from "../../client_Pages/dashboard/selectors"
import {
  fetchClients,
  loadedclients,
  requestHold,
  fetchholdRequests,
  loadholdRequests,
  requestActivated,
  fetchPausedByRequests,
  loadPausedByRequests,
  fetchViewRequests,
  loadViewRequests,
  loadSearchClients as fetchSearchClientsAction,
  freelancerClientsLoadChatMessages as freelancerClientsLoadChatMessagesAction,
  freelancerClientsChatMessagesLoaded,
  freelancerClientsSendMessage as freelancerClientsSendMessageAction

} from "./actions"
import { makeSelectFreelancerClientsChatMessages} from "./selectors";
import { freelancerClientsLoaded } from '../dashboard/actions';

function* fetchClientRequests() {
  try {
    const token = yield select(makeSelectAuthToken())

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/projects`,
      headers
    )
    yield put({ type: loadedclients().type, payload: response.data.data })
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

function* fetchHoldRequests() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/projects`,
      headers
    )
    yield put({ type: loadholdRequests().type, payload: response.data.data })
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

function* fetchPausedByClient() {
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
      type: loadPausedByRequests().type,
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

function* fetchViewRequest(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    // alert(action.payload.id)

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/request/${action.payload.id}`,
      headers
    )
    yield put({
      type: loadViewRequests().type,
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

function* Reactivate(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const user_id = yield select(makeSelectUserID())
    const id = action.payload.id
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/reactivate/${id}`,
      {
        _method: "patch",
      },
      headers
    )
    console.log(response, "responseeeee")
    if (response.data.status === 200) {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "success",
          text: "Project reactivated requested successfully",
        },
      })
    } else {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "info",
          text: "Project reactivated could not be requested",
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

function* putOnHold(action) {
  try {
    const token = yield select(makeSelectAuthToken())

    const user_id = yield select(makeSelectUserID())

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    console.log(headers, "headers")
    const response = yield axios.post(
      `${BASE_URL_API}client/holdclient`,
      {
        client_project_id: action.payload.id,
        client_id: user_id,
      },
      headers
    )

    if (response.data.status === 200) {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Project requested successfully" },
      })
    } else {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "info", text: "Project could not be requested" },
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

function* fetchSearchClients(action){
  try {
    const token = yield select(makeSelectAuthToken())
    const searchQuery = action.payload.searchQuery;
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    console.log(headers, "headers")
    const response = yield axios.get(
      `${BASE_URL_API}getFreelancer/clients?${searchQuery}`,
      headers
    )

    yield put({ type: freelancerClientsLoaded().type, payload: response.data.data });
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* fetchChatMessages(action){
  try {
    const token = yield select(makeSelectAuthToken())
    const clientId = action.payload.clientId;
    const page = action.payload.page;
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    console.log(headers, "headers")
    const response = yield axios.get(
      `${BASE_URL_API}get-chat-by-recipient-id?recipient_id=${clientId}&page=${page}`,
        headers
    )
    if (response.status === 200){
      yield put({ type: freelancerClientsChatMessagesLoaded().type, payload: response.data.data.chat.messages });
    }
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* SendChatMessage(action){
  try {
    const token = yield select(makeSelectAuthToken())
    const messages = yield select(makeSelectFreelancerClientsChatMessages())
    const recipient_id = action.payload.recipient_id;
    const message = action.payload.message;
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    console.log(headers, "headers")
    const response = yield axios.post(
      `${BASE_URL_API}send-message`,
      {
        "recipient_id":recipient_id,
        "message": message,
      },
        headers
    )
    if (response.status === 200){
      yield put({ type: freelancerClientsChatMessagesLoaded().type, payload: [...messages, response.data.data] });
    }
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}


export default function* FreelanceManageClientSaga() {
  yield takeLatest(fetchClients().type, fetchClientRequests)
  yield takeLatest(requestHold().type, putOnHold)
  yield takeLatest(requestActivated().type, Reactivate)
  yield takeLatest(fetchPausedByRequests().type, fetchPausedByClient)
  yield takeLatest(fetchViewRequests().type, fetchViewRequest)
  yield takeLatest(fetchholdRequests().type, fetchHoldRequests)
  yield takeLatest(freelancerClientsLoadChatMessagesAction().type, fetchChatMessages)
  yield takeLatest(freelancerClientsSendMessageAction().type, SendChatMessage)

  yield throttle(2000,fetchSearchClientsAction().type, fetchSearchClients);
}
