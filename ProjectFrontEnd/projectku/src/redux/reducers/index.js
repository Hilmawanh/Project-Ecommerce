import { combineReducers } from "redux";
import authReducers from "./authReducers";
import cartReducers from './cartReducers'
import notifReducers from './notifReducers'

export default combineReducers({
  auth: authReducers,
  cartReducers,
  notifReducers
});
