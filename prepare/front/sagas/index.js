import { all, call, fork, take, put } from 'redux-saga/effects';

function loginAPI() {
    return axios.post('api/login');
}

function login() {
    try {
        //call: 동기함수 호출, fork: 비동기 함수 호출
        const result = yield call(loginAPI);
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
        //call: 동기함수 호출, fork: 비동기 함수 호출
        const result = yield call(loginAPI);
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

function addPostAPI() {
    return axios.post('api/login');
}
function addPost() {
    try {
        //call: 동기함수 호출, fork: 비동기 함수 호출
        const result = yield call(loginAPI);
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

function watchLogin() {
    yield take('LOG_IN_REQUEST', login);
}

function* watchLogout() {
    yield take('LOG_OUT_REQUEST', logout);
}

function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAddPost),
    ])
}