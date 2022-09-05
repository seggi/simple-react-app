import { 
    SAVE_PRODUCT_LIST_START, 
    SAVE_PRODUCT_LIST_SUCCESS, 
    SAVE_PRODUCT_LIST_FAIL 
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

const saveProduct = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SAVE_PRODUCT_LIST_START: {
            return {
                ...state,
                loading: true,
                error: "",
            };
        }

        case SAVE_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        }

        case SAVE_PRODUCT_LIST_FAIL: {
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

export default saveProduct;