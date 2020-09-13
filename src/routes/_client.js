import ClientDashboard from "../components/client_Pages/dashboard"
import JobRequest from "../components/client_Pages/jobRequest"
import ViewCandidates from "../components/client_Pages/jobRequest/viewCandidates"
import SubmitRequest from "../components/client_Pages/jobRequest/submitRequest"
import ViewProfile from "../components/client_Pages/hireFreelancers/viewProfile"
import HireFreelancer from "../components/client_Pages/hireFreelancers"
import ManageSeting from "../components/client_Pages/manageSetting"
import UpdateProfile from "../components/client_Pages/manageSetting/UpdateProfile"
import ServiceRequest from "../components/client_Pages/serviceRequest/index"
import ManageServiceRequest from "../components/client_Pages/manageServiceRequest/index"
import ViewOffers from "../components/client_Pages/manageServiceRequest/ViewOffers/index"
import MerchantProfile from "../components/client_Pages/manageServiceRequest/MerchantProfile/index"
import ManageMerchants from "../components/client_Pages/manageMerchants/index"

export const clientRoutes = [
  { path: "/clients-dashboard", component: ClientDashboard },
  { path: "/clients-requests", component: JobRequest },
  { path: "/clients-service_requests", component: ServiceRequest },
  {
    path: "/clients-manage_service_requests",
    component: ManageServiceRequest,
  },
  {
    path: "/clients-manage_merchants",
    component: ManageMerchants,
  },
  { path: "/clients-submitrequests", component: SubmitRequest },
  { path: "/clients-viewCandidates", component: ViewCandidates },
  { path: "/clients-viewProfile", component: ViewProfile },
  { path: "/clients-viewOffers", component: ViewOffers },
  { path: "/merchant-profile", component: MerchantProfile },

  { path: "/clients-hireFreelancer", component: HireFreelancer },
  { path: "/clients-manageSetting", component: ManageSeting },
  { path: "/clients-updateprofile", component: UpdateProfile },
]
