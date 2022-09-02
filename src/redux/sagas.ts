import { all, fork } from "redux-saga/effects";
import getProductList from "./sagas/getProductList";

export default function* rootSaga() {
    yield all([
        fork(getProductList),
    ])
}