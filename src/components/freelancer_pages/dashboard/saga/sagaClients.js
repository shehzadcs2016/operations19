import { put, takeLatest, select } from "redux-saga/effects";
import { makeSelectAuthToken } from "../../../client_Pages/dashboard/selectors";
import axios from "../../../../config/axios";
import { BASE_URL_API } from "../../../../config/constants";
import { loadFreelancerClients as loadFreelancerClientsAction, freelancerClientsLoaded } from "../actions";

function* loadFreelancerClients() {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/clients`,
      headers
    );
    console.log("---- Clients Freelancer SAGA: ",response.data.data);
    yield put({ type: freelancerClientsLoaded().type, payload: response.data.data });
  } catch (err){
    console.log("clients saga error", err)
  }
}

export default function* FreelancerDashboardClientsSaga() {
  yield takeLatest(loadFreelancerClientsAction().type, loadFreelancerClients);
}

