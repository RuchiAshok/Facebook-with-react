import { combineReducers } from "redux";
import UsersReducer from "./users";
import LoginReducer from "./login";
import PostsReducer from "./posts";


export default combineReducers({
  UsersReducer,
  LoginReducer,
  PostsReducer
});