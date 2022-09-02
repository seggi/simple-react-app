import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '../../helpers';
import { 
    GET_PRODUCT_LIST_START, 
    GET_PRODUCT_LIST_SUCCESS, 
    GET_PRODUCT_LIST_FAIL 
} from './../../constants/action-types/productTypes';

export interface ResponseGenerator{}

function* getProductListData() {
    try {
        const productListData: ResponseGenerator = yield call(fetchData, "/");
        yield put({type: GET_PRODUCT_LIST_SUCCESS, data: productListData})
    } catch (e: any) {
        yield put({ type: GET_PRODUCT_LIST_FAIL, error: e.message });
    }
}

export default function* fetchProductList() {
    yield takeEvery(GET_PRODUCT_LIST_START, getProductListData)
}