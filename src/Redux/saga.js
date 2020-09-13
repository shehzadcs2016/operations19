import { fork } from "redux-saga/effects"
import DashboardSaga from "../components/client_Pages/dashboard/saga"
import JobRequestsSaga from "../components/client_Pages/jobRequest/saga"
import FreelancerManageRequestSaga from "../components/freelancer_pages/manage-requests/saga"
import hireFreelancerSaga from "../components/client_Pages/hireFreelancers/saga"
import FreelanceManageClientSaga from "../components/freelancer_pages/view-clients/saga"
import ClientManageServiceSaga from "../components/client_Pages/manageServiceRequest/saga"
import EditProfileSaga from "../components/freelancer_pages/settings/saga"
import ProfileCreateSaga from "../components/freelancer_pages/service-menu/saga"
import FreelancerDashboardClientsSaga from '../components/freelancer_pages/dashboard/saga/sagaClients';
import FreelancerReviewsSaga from '../components/freelancer_pages/dashboard/saga/sagaReviews';
import FreelancerRequestSaga from '../components/freelancer_pages/view-projects/saga';
import FreelancerClientAvailableServicesSaga from '../components/freelancer_pages/servicePostings/saga';
import FreelancerDashboardServicesSaga from '../components/freelancer_pages/dashboard/saga/sagaServices';


function* rootSaga() {
  yield fork(DashboardSaga)
  yield fork(JobRequestsSaga)
  yield fork(FreelancerRequestSaga);
  yield fork(ClientManageServiceSaga)
  yield fork(FreelancerManageRequestSaga)
  yield fork(FreelancerManageRequestSaga)
  yield fork(FreelanceManageClientSaga)
  yield fork(EditProfileSaga)
  yield fork(hireFreelancerSaga)
  yield fork(ProfileCreateSaga)
  yield fork(FreelancerClientAvailableServicesSaga)
  yield fork(FreelancerDashboardClientsSaga)
  yield fork(FreelancerDashboardServicesSaga)
  yield fork(FreelancerReviewsSaga)
}

export default rootSaga
