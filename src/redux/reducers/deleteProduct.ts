import { 
    DELETE_PRODUCT_LIST_START, 
    DELETE_PRODUCT_LIST_SUCCESS, 
    DELETE_PRODUCT_LIST_FAIL 
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

const deleteProduct = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case DELETE_PRODUCT_LIST_START: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }

        case DELETE_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        }

        case DELETE_PRODUCT_LIST_FAIL: {
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

export default deleteProduct;