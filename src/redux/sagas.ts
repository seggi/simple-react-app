import { all, fork } from "redux-saga/effects";
import deleteProduct from "./sagas/deleteProduct";
import getProductList from "./sagas/getProductList";

export default function* rootSaga() {
    yield all([
        fork(getProductList),
        fork(deleteProduct),
    ])
}