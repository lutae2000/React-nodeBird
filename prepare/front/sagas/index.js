import { all, call, fork, put, takeLatest, throttle, delay } from 'redux-saga/effects';

function loginAPI() {
    return axios.post('api/login');
}

function login() {
    try {
        yield delay(1000);
        //call: 동기함수 호출, fork: 비동기 함수 호출
        //const result = yield call(loginAPI, action.data);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data,
        });
    }
    catch(err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}

function logoutAPI() {
    return axios.post('api/login');
}
function logout() {
    try {
        yield delay(1000);

        //call: 동기함수 호출, fork: 비동기 함수 호출
        //const result = yield call(loginAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data,
        });
    }
    catch(err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function addPostAPI(data) {
    return axios.post('api/login', data);
}
function addPost(action) {
    try {
        yield delay(1000);
        //call: 동기함수 호출, fork: 비동기 함수 호출
        //const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST__SUCCESS',
            data: result.data,
        });
    }
    catch(err) {
        yield put({
            type: 'ADD_POST__FAILURE',
            data: err.response.data,
        });
    }
}
//takeEvery: 응답에 상관없이 트랜젝션 처리도중에도 계속 받음
//takeLatest : 트랜젝션 처리중 요청은 그대로 되고, 응답은 취소 됨
function watchLogin() {
    yield takeLatest('LOG_IN_REQUEST', login);
}

function* watchLogout() {
    yield takeLatest('LOG_OUT_REQUEST', logout);
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);

    //아래와 같이 사용하면 여러번 이벤트 발생해도 2초내에 1번만 실행 가능하게 할 수 있음
    //yield throttle('ADD_POST_REQUEST', addPost, 2000);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAddPost),
    ])
}