import { combineReducers } from 'redux';
import getProductList from "./reducers/getProductList";
import deleteProduct from './reducers/deleteProduct';

const allReducers = combineReducers({
  getProductList: getProductList,
  deleteProduct: deleteProduct
});

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;