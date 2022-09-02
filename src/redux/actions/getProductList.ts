import { GET_PRODUCT_LIST_START } from './../../constants/action-types/productTypes';


export const changeUsersAge = (productList: any) => {
    return {
      type: GET_PRODUCT_LIST_START,
      payload: productList,
    };
  };