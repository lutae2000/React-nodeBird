import axios from 'axios';

import { all, delay, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import {
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
} from '../reducers/post';

function* addPost(action) {
    try {
        //const result = yield call(loginAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.result.data,
        })
    }
}

function addPostAPI(data) {
    return axios.post('api/post', data);
}


//takeEvery는 while 돌리는것처럼 매번 실행
//takeLatest는 짧은시간내 여러번 이벤트 발생해도 맨 마지막것만 실행
//takeLeading 짧은시간에 여러번의 이벤트시 첫번째것 실행



function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}