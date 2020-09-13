import { LOGOUT } from "../types";

export const logoutAction = () => {
  console.log("logout action called 1");
  return { type: LOGOUT };
};

export default logoutAction;
