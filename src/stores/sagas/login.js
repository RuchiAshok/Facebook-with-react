// import {
//     call,
//     put,
//     takeEvery,
//     takeLatest
// } from 'redux-saga/effects';
import {
  put,
  takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

async function userLoginAPI(uData) {
  let loginData =null;
  const data = await axios.post('http://localhost:8080/login', {
    userName: uData.username,
    userPassword: uData.password
  })
  .then(function (response) {
    //console.log('Login Response',response.data);
    loginData = response.data;
    return (loginData);
  })
  .catch(function (error) {
    console.log('Login Saga: Error: ',error);
    loginData.error_message = "Error Occurred";
    return (loginData);
  });
  return data;
   

}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function *   userLogin(action) {
  //  console.log("Login Saga", action);
    try {
      const loginResponse = yield userLoginAPI(action.payload);
      console.log('Login Response Saga', loginResponse);
        yield put({
            type: "USER_LOGIN_SUCCESS",
            payload: {
               loginResponse:loginResponse
            }
        });
    } catch (e) {
        yield put({
            type: "USER_LOGIN_FAILED",
            message: e.message
        });
    }
}

function* LoginSaga() {
    yield takeEvery("USER_LOGIN", userLogin);
}

export default LoginSaga;
