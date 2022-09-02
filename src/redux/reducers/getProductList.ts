import { 
    GET_PRODUCT_LIST_START, 
    GET_PRODUCT_LIST_SUCCESS, 
    GET_PRODUCT_LIST_FAIL 
} from './../../constants/action-types/productTypes';

interface InitialState {
    data: any;
    error: any;
    loading: boolean
}

const INITIAL_STATE: InitialState = {
    data: [],
    error: {},
    loading: false,
}

const getProductList = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_PRODUCT_LIST_START: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }

        case GET_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        }

        case GET_PRODUCT_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        default: {
            return state;
          }
    }
}

export default getProductList;