import { combineReducers } from 'redux';
import getProductList from "./reducers/getProductList";

const allReducers = combineReducers({
  getProductList: getProductList,
});

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;