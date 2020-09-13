import axioss from "axios";
import { BASE_URL_API } from "./constants";
// axioss.defaults.headers.common = {
//   "X-Requested-With": "XMLHttpRequest",
//   "X-CSRF-TOKEN": document
//     .querySelector('meta[name="csrf-token"]')
//     .getAttribute("content")
// };

export const axios = axioss.create({
  baseURL: BASE_URL_API,

  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// axios.interceptors.request.use(function(config) {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

export default axios;
