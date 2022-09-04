import { 
  GET_PRODUCT_LIST_START, 
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL
} from './../../constants/action-types/productTypes';


export const getProductList = () => ({type: GET_PRODUCT_LIST_START});

export const getProductListSuccess = (productList:any) => ({
  type: GET_PRODUCT_LIST_SUCCESS,
  payload: productList
})

export const getProductListError = (error:any) => ({
  type: GET_PRODUCT_LIST_FAIL,
  payload: error
})