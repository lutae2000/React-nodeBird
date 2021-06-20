import axios from 'axios';

import { delay, put, takeLatest, all, fork } from '@redux-saga/core/effects';


function* addPost(action) {
    try {
        //const result = yield call(loginAPI, action.data);
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

function addPostAPI(data) {
    return axios.post('api/post', data);
}


//takeEvery는 while 돌리는것처럼 매번 실행
//takeLatest는 짧은시간내 여러번 이벤트 발생해도 맨 마지막것만 실행
//takeLeading 짧은시간에 여러번의 이벤트시 첫번째것 실행



function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST');
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}