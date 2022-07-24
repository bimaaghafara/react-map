import { all, fork } from "redux-saga/effects";
import LocationSaga from "./LocationSaga";

export default function* rootSaga() {
  yield all([fork(LocationSaga)]);
}