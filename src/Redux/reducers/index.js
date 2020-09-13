/*jshint esversion: 6 */

import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

// import storage from 'redux-persist/lib/storage'; // localStorage
import storage from "redux-persist/lib/storage/session" // sessionStorage
import loginReducer from "./loginReducer"
import DashboardReducer from "../../components/client_Pages/dashboard/reducer"
import JobRequestsReducer from "../../components/client_Pages/jobRequest/reducer"
import FreelancerManageProjectsReducer from "../../components/freelancer_pages/manage-requests/reducer"
import hireFreelancerReducer from "../../components/client_Pages/hireFreelancers/reducer"
import FetchClientReducer from "../../components/freelancer_pages/view-clients/reducer"
import ServiceClientReducer from "../../components/client_Pages/manageServiceRequest/reducer"
import EditProfileReducer from "../../components/freelancer_pages/settings/reducer"

import FreelancerProjectsReducer from '../../components/freelancer_pages/view-projects/reducer';
import FreelancerDashboardReducer from '../../components/freelancer_pages/dashboard/reducers';
import FreelancerClientAvailableServicesReducer from '../../components/freelancer_pages/servicePostings/reducers';
import flashMessages from "./flashMessages"
import { LOGOUT } from "../types"
import FreelancerProfileCreateReducer from "../../components/freelancer_pages/service-menu/reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
}

const appReducer = combineReducers({
  login: loginReducer,
  clients: FetchClientReducer,
  flashMessages: flashMessages,
  dashboard: DashboardReducer,
  EditProfile: EditProfileReducer,
  jobRequests: JobRequestsReducer,
  ServiceRequests: ServiceClientReducer,
  freelancerManageRequests: FreelancerManageProjectsReducer,
  freelancerRequests: FreelancerProjectsReducer,
  hireFreelancer: hireFreelancerReducer,
  freelancerProfileCreate: FreelancerProfileCreateReducer,
  freelancerDashboard: FreelancerDashboardReducer,
  freelancerClientAvailableServices: FreelancerClientAvailableServicesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = {}
  }

  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
