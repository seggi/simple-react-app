import { call, put, takeEvery } from "redux-saga/effects";
import { deleteData } from '../../helpers';
import { 
    DELETE_PRODUCT_LIST_START, 
    DELETE_PRODUCT_LIST_SUCCESS, 
    DELETE_PRODUCT_LIST_FAIL 
} from './../../constants/action-types/productTypes';

export interface ResponseGenerator{
    data: any
}

function* deleteProductData(data: any) {
    try {
        const productListData: ResponseGenerator = yield call(deleteData, '', data?.data);
        yield put({type: DELETE_PRODUCT_LIST_SUCCESS, data: productListData})
    } catch (e: any) {
        yield put({ type: DELETE_PRODUCT_LIST_FAIL, error: e.message });
    }
}

export default function* deleteProduct() {
    yield takeEvery(DELETE_PRODUCT_LIST_START, deleteProductData)
}