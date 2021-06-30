import { all } from "redux-saga/effects";

//public
import UsersSaga from "./users";
import LoginSaga from "./login";
import PostSaga  from "./posts";
import CommentSaga from "./comments";

export default function* rootSaga() {
  yield all([
    UsersSaga(),
    LoginSaga(),
    PostSaga(),
    CommentSaga()
  ]);
}