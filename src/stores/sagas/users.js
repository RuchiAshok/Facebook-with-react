import {
    put,
    takeEvery
} from 'redux-saga/effects'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers(action) {
    console.log("Action: ", action)
    try {
        //const posts = yield call(axios.get());
        yield put({
            type: "FETCH_USERS_SUCCESS",
            payload: {
                users: [{
                        name: "Ruchi Gupta"
                    },
                    {
                        name: "Anuneha"
                    },
                    {
                        name: "Aastha Priya"
                    },
                    {
                        name: "Raj Gupta"
                    },
                    {
                        name: "Kiran Gupta"
                    },
                    {
                        name: "Rajat Bhardwaj"
                    }
                ]
            }
        });
    } catch (e) {
        yield put({
            type: "FETCH_USERS_FAILED",
            message: e.message
        });
    }
}

function* UsersSaga() {
    yield takeEvery("FETCH_USERS", fetchUsers);
}


export default UsersSaga;
