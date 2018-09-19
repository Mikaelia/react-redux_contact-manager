import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// normally would have more than one reducer
// keyname important because you would access contact state via this.props.contact
// the keys here are going to be the property of state that we are producing.

export default combineReducers({
  contact: contactReducer
});
