import { 
    DELETE_PRODUCT_LIST_START, 
    DELETE_PRODUCT_LIST_SUCCESS,
    DELETE_PRODUCT_LIST_FAIL
} from './../../constants/action-types/productTypes';


export const deleteProduct = (data: any) => ({type: DELETE_PRODUCT_LIST_START, data});

export const deleteProductSuccess = (productList:any) => ({
  type: DELETE_PRODUCT_LIST_SUCCESS,
  payload: productList
})

export const deleteProductError = (error:any) => ({
  type: DELETE_PRODUCT_LIST_FAIL,
  payload: error
})