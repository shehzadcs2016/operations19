import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "../types";
import shortid from "shortid";

export const flashMessages = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      const { type, text } = action.message;
      const types = ["info", "warning", "error", "success"];
      const validType = types.indexOf(type) !== -1 ? type : "success";
      return [
        ...state,
        {
          id: shortid.generate(),
          type: validType,
          text: text
        }
      ];

    case DELETE_FLASH_MESSAGE:
      return state.filter(message => message.id !== action.id);

    default:
      return state;
  }
};

export default flashMessages;
