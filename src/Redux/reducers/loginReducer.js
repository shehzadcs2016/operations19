/*jshint esversion: 6 */

import initialState from "../initialState"
import { LOGIN, LOGOUT } from "../types"
// import { store } from "../store";

const loginReducer = (state = initialState, action) => {
  console.log("state is =====> ", state)
  switch (action.type) {
    case LOGIN:
      if (action.payload) {
        //   console.log("action on login reducer is", action.payload.data);

        //   const { id, email, type, is_approved, timezone, is_active } = user;

        //   if (status === 200 && is_active && is_approved) {
        if (action.payload.status === 200) {
          const { token, user } = action.payload.data || {}
          const { id, email, type, timezone } = user || {}
          if (type === 2 || type === 3)
            return {
              isLoggedIn: true,
              loading: false,
              id,
              email,
              timezone,
              type,
              token,
              error: null,
            }

          return { ...state, error: action.payload.message }
        }
      }

      return { ...state, error: action.payload.message }

    case LOGOUT:
      console.log("outout again")
      return state
    default:
      return state
  }
}

export default loginReducer
