import { combineReducers } from "redux";
import getProductList from "./reducers/getProductList";

const allReducers = combineReducers({
  getProductList: getProductList,
});

export default allReducers;