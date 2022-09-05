import { combineReducers } from 'redux';
import getProductList from "./reducers/getProductList";
import deleteProduct from './reducers/deleteProduct';
import saveProduct from './reducers/saveProduct';


const allReducers = combineReducers({
  getProductList: getProductList,
  deleteProduct: deleteProduct,
  saveProduct: saveProduct,
});

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;