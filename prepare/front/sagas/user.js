function loginAPI(data) {
    return axios.post('api/login', data);
}

function logoutAPI() {
    return axios.post('api/post');
}

function* logout() {
    try {
        //const result = yield fork(loginAPI);
        yield put({
            type: ADD_POST_SUCCEED,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.result.data,
        })
    }
}


function* login(action) {
    try {
        //fork를 사용하면 비동기 처리 결과값 상관없이 쭉 실행
        //call을 사용하면  결과값 받아와서 처리 진행
        
        //예시
        /*
        axios.post('api/login ').then(
            () => {
                    yield put({
                        type: 'LOG_IN_SUCCEED',
                        data: result.data,
                    })
                }
            )
        */
        yield delay(1000);
            //const result = yield call(loginAPI, action.data);
        yield put({
            type: LOG_IN_SUCCEED,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            data: err.action.data,
        })
    }
}






function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
    ])
}