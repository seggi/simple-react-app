import { all, fork } from "redux-saga/effects";
import deleteProduct from "./sagas/deleteProduct";
import getProductList from "./sagas/getProductList";
import saveProduct from "./sagas/saveProduct";

export default function* rootSaga() {
    yield all([
        fork(getProductList),
        fork(deleteProduct),
        fork(saveProduct)
    ])
}