import PageNotFound from "../components/public_pages/PageNotFound";
import { publicRoutes } from "./_public";
import { clientRoutes } from "./_client";
import { freelancerRoutes } from "./_freelancer";

export const routes = [
  ...publicRoutes,
  ...clientRoutes,
  ...freelancerRoutes,

  // please do not add any route below this line
  { path: "*", component: PageNotFound, ispublic: true },
];
