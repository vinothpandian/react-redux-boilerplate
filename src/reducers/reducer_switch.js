import { handleAction } from "redux-actions";
import { SWITCH_NAME } from "../actions";

const defaultState = {
  name: "you"
};

export default handleAction(
  SWITCH_NAME,
  (state, action) => ({
    name: action.payload
  }),
  defaultState
);
