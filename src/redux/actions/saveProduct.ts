import { 
    SAVE_PRODUCT_LIST_START, 
    SAVE_PRODUCT_LIST_SUCCESS,
    SAVE_PRODUCT_LIST_FAIL
} from './../../constants/action-types/productTypes';


export const saveProduct = (data: any) => ({type: SAVE_PRODUCT_LIST_START, data});

export const saveProductSuccess = (productList:any) => ({
  type: SAVE_PRODUCT_LIST_SUCCESS,
  payload: productList
})

export const saveProductError = (error:any) => ({
  type: SAVE_PRODUCT_LIST_FAIL,
  payload: error
})