import { all, fork, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';

function loginAPI(data) {
    return axios.post('api/login', data);
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
        const result = yield call(loginAPI, action.data);
        yield put({
            type: 'LOG_IN_SUCCEED',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.result.data,
        })
    }
}

function logoutAPI() {
    return axios.post('api/post');
}

function* logout() {
    try {
        const result = yield fork(loginAPI);
        yield put({
            type: 'ADD_POST_SUCCEED',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.result.data,
        })
    }
}


function addPostAPI(data) {
    return axios.post('api/post', data);
}

function addPost(action) {
    try {
        const result = yield fork(loginAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCEED',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.result.data,
        })
    }
}


//takeEvery는 while 돌리는것처럼 매번 실행
//takeLatest는 짧은시간내 여러번 이벤트 발생해도 맨 마지막것만 실행
//takeLeading 짧은시간에 여러번의 이벤트시 첫번째것 실행

function* watchLogin() {
    yield takeLatest('LOG_IN_REQUEST', login);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logout);
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST');
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),
    ]);
}