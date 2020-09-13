import { put, takeLatest, select } from "redux-saga/effects";
import { makeSelectAuthToken } from "../../../client_Pages/dashboard/selectors";
import axios from "../../../../config/axios";
import { BASE_URL_API } from "../../../../config/constants";
import { loadFreelancerServices as loadFreelancerServicesAction, freelancerServicesLoaded,
  loadFreelancerInActiveServices as loadFreelancerInActiveServicesAction, freelancerInActiveServicesLoaded,
} from "../actions";


function* loadFreelancerServices() {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/active-service-requests`,
      headers
    );
    // console.log("---- FreelancerDashboard Services SAGA: ",response.data.activeServiceRequests);
    yield put({ type: freelancerServicesLoaded().type, payload: response.data.activeServiceRequests.active_requested_projects });
  } catch {
  }
}

function* loadFreelancerInActiveServices() {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/inactive-service-requests`,
      headers
    );
    // console.log("---- FreelancerDashboard Services SAGA: ",response.data.inActiveRequests);
    yield put({ type: freelancerInActiveServicesLoaded().type, payload: response.data.inActiveRequests.in_active_requested_projects });
  } catch {
  }
}

export default function* FreelancerDashboardServicesSaga() {
  yield takeLatest(loadFreelancerServicesAction().type, loadFreelancerServices);
  yield takeLatest(loadFreelancerInActiveServicesAction().type, loadFreelancerInActiveServices);
}
