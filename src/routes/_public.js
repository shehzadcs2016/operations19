import Login from "../components/public_pages/login";
import PostJobOffline from "../components/public_pages/signup";
import Home from "../components/public_pages/home";
import ClientSignupPage from "../components/public_pages/clientSignUp";
import ForgotPassword from "../components/public_pages/forgotPassword";
import ResetPassword from "../components/public_pages/resetPassword";
import TopRated from "../components/public_pages/topRated/topRated";
import AboutUs from "../components/public_pages/about/aboutUs";
import HowItWorkClient from "../components/public_pages/about/howItWorkClient";
import AvailableServices from "../components/public_pages/about/availableServices";
import BookServices from "../components/public_pages/about/bookServices";
import HowItWorkPros from "../components/public_pages/about/howItWorkProfessionals";
import ProfessionalApplication from "../components/public_pages/about/professionalApplication/professionalApplication";
import Solutions from "../components/public_pages/about/solutions";
import ApplyAsPro from "../components/public_pages/applyAsPro/applyAsPro";
import ContactUs from "../components/public_pages/contactUs/contactUs";
import Blog from "../components/public_pages/blog/blog";
import BlogOverView from "../components/public_pages/blog/blogOverView";
import Article from "../components/public_pages/article/article"; 

import AddProject from "../components/adminPages/addProject/addProject";
import ManageUsers from "../components/adminPages/manageUsers/manageUsers";
import AddCategoryManager from "../components/adminPages/AddCategoryManagers/AddCategoryManager"
import CategoryManagerList from "../components/adminPages/categoryManagerList/categoryManagerList";
import EditPageContent from "../components/adminPages/editPageContent/editPageContent";
import MerchantApplications from "../components/adminPages/merchantApplications/merchantApplications";
import AffiliateManager from "../components/adminPages/affiliateManager/affiliateManager";

export const publicRoutes = [
  // Public Routes
  { path: "/", component: Home, ispublic: true },
  { path: "/top-rated", component: TopRated, ispublic: true },
  { path: "/about-us", component: AboutUs, ispublic: true },
  {
    path: "/how-it-works-for-clients",
    component: HowItWorkClient,
    ispublic: true,
  },
  {
    path: "/how-it-works-for-professionals",
    component: HowItWorkPros,
    ispublic: true,
  },
  {
    path: "/professional-application",
    component: ProfessionalApplication,
    ispublic: true,
  },
  {
    path: "/available-services",
    component: AvailableServices,
    ispublic: true,
  },
  {
    path: "/Book-services",
    component: BookServices,
    ispublic: true,
  },
  
  { path: "/solutions", component: Solutions, ispublic: true },
  { path: "/apply-as-pro", component: ApplyAsPro, ispublic: true },
  { path: "/contactus", component: ContactUs, ispublic: true },
  { path: "/blog", component: Blog, ispublic: true },
  { path: "/blog-overview", component: BlogOverView, ispublic: true },
  { path: "/article", component: Article, ispublic: true },
  { path: "/login", component: Login, ispublic: true },
  {
    path: "/freelance-signup",
    component: PostJobOffline,
    ispublic: true,
  },
  {
    path: "/clients-signup",
    component: ClientSignupPage,
    ispublic: true,
  },
  { path: "/forgotpassword", component: ForgotPassword, ispublic: true },
  { path: "/resetpassword", component: ResetPassword, ispublic: true },

  { path: "/addproject", component: AddProject, ispublic: true },
  { path: "/manage-users", component: ManageUsers, ispublic: true },
  { path: "/add-category-manager", component: AddCategoryManager, ispublic: true },
  { path: "/category-managers-list", component: CategoryManagerList, ispublic: true },
  { path: "/edit-page-content", component: EditPageContent, ispublic: true },
  { path: "/merchant-applications", component: MerchantApplications, ispublic: true },
  { path: "/affiliate-manager", component: AffiliateManager, ispublic: true },
];

