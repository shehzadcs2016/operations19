// import PostJobOffline from "../components/public_pages/signup";
import Profile from "../components/freelancer_pages/Profile"
import Dashboard from "../components/freelancer_pages/dashboard"
import Earnings from "../components/freelancer_pages/view-earnings"
import Projects from "../components/freelancer_pages/view-projects"
import ServicePostings from "../components/freelancer_pages/servicePostings"
import EditProfile from "../components/freelancer_pages/editProfile"
import Referrals from "../components/freelancer_pages/referrals"
import Settings from "../components/freelancer_pages/settings"
import Clients from "../components/freelancer_pages/view-clients"
import Requests from "../components/freelancer_pages/manage-requests"
import ServiceMenu from "../components/freelancer_pages/service-menu"
import WithDraw from "../components/freelancer_pages/withDraw"
import Reviews from "../components/freelancer_pages/reviews"
import ProjectManagement from "../components/freelancer_pages/projectManagement"

export const freelancerRoutes = [
  {
    path: "/freelancer-dashboard",
    component: Dashboard,
    ispublic: false,
  },
  {
    path: "/freelancer-servicemenu",
    component: ServiceMenu,
    ispublic: false,
  },
  {
    path: "/freelancer-profile",
    component: Profile,
    ispublic: false,
  },
  {
    path: "/freelancer-editprofile",
    component: EditProfile,
    ispublic: false,
  },
  {
    path: "/freelancer-earnings",
    component: Earnings,
    ispublic: false,
  },
  {
    path: "/freelancer-projects",
    component: Projects,
    ispublic: false,
  },
  {
    path: "/freelancer-service-postings",
    component: ServicePostings,
    ispublic: false,
  },
  {
    path: "/freelancer-referrals",
    component: Referrals,
    ispublic: false,
  },
  {
    path: "/freelancer-settings",
    component: Settings,
    ispublic: false,
  },
  {
    path: "/freelancer-clients",
    component: Clients,
    ispublic: false,
  },
  {
    path: "/freelancer-requests",
    component: Requests,
    ispublic: false,
  },
  {
    path: "/freelancer-withdraw",
    component: WithDraw,
    ispublic: false,
  },
  {
    path: "/freelancer-reviews",
    component: Reviews,
    ispublic: false,
  },
  {
    path: "/freelancer-projectManagement",
    component: ProjectManagement,
    ispublic: false,
  },
]
