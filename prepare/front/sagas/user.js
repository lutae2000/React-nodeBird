import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
} from '../reducers/user';

function loginAPI(data) {
    return axios.post('api/login', data);
}

function logoutAPI() {
    return axios.post('api/post');
}

function* logout() {
    try {
        //const result = yield fork(loginAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
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
            type: LOG_IN_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
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