import { combineReducers } from "redux";
import authReducers from "./authReducers";
import cartReducers from './cartReducers'

export default combineReducers({
  auth: authReducers,
  cartReducers
});
