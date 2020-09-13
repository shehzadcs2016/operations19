// import { LOGIN, LOGIN_URL, kips } from "../../config";

import { LOGIN, LOGIN_PATH } from "../../config/constants";
import axios from "../../config/axios";
// import { addFlashMessage } from "./flashMessages";

export const loginAction = (loginCrediantials) => async (dispatch) => {
  // try {
  //   const response = await axios.post(LOGIN_PATH, loginCrediantials);
  //   if (response.data.data.status === 200) {
  //     dispatch({ type: LOGIN, payload: response.data });
  //   } else {
  //     addFlashMessage({
  //       type: "Succcess",
  //       text: "Accha nahin kia.",
  //     });
  //   }
  // } catch (err) {
  //   addFlashMessage({
  //     type: "Succcess",
  //     text: "Accha nahin kia 2." + err,
  //   });
  // }
  const response = await axios.post(LOGIN_PATH, loginCrediantials);

  dispatch({ type: LOGIN, payload: response.data });
};

export default loginAction;
