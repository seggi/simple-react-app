import { call, put, takeEvery } from "redux-saga/effects";
import { saveData } from '../../helpers';
import { 
    SAVE_PRODUCT_LIST_START, 
    SAVE_PRODUCT_LIST_SUCCESS, 
    SAVE_PRODUCT_LIST_FAIL 
} from './../../constants/action-types/productTypes';

export interface ResponseGenerator{
    data: any
}

function* saveProductData(data: any) {
    try {
        const productListData: ResponseGenerator = yield call(saveData, '', data?.data);
        yield put({type: SAVE_PRODUCT_LIST_SUCCESS, data: productListData})
    } catch (e: any) {
        yield put({ type: SAVE_PRODUCT_LIST_FAIL, error: e.message });
    }
}

export default function* saveProduct() {
    yield takeEvery(SAVE_PRODUCT_LIST_START, saveProductData)
}