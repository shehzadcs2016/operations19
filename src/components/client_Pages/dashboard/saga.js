import { put, takeLatest, select } from "redux-saga/effects";
import { makeSelectAuthToken } from "./selectors";
import axios from "../../../config/axios";
import { BASE_URL_API } from "../../../config/constants";
import { loadRequests as loadRequestsAction, requestsLoaded } from "./actions";

function* loadRequests() {
  try {
    // const userId = yield select(makeSelectUserID());
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = yield axios.get(
      `${BASE_URL_API}client/request`,
      headers
    );
    console.log(response);
    yield put({ type: requestsLoaded().type, payload: response.data.data });
  } catch {
    // do nothing for now
  }
}

export default function* DashboardSaga() {
  yield takeLatest(loadRequestsAction().type, loadRequests);
}
