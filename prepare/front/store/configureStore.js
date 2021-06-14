import { createWrapper } from 'next-redux-wrapper';
import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import {composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';


const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;

/*
리액트 SAGA란 애플리케이션에서 일어나는 side effect(데이터를 불러오는 비동기 처리나 브라우저 캐쉬에 접근하는등)등을
쉽게 관리하여 효과적인 실행, 손쉬운 테스트, 에러 핸들링을 쉽게 해줌

https://uzihoon.com/post/181be130-63a7-11ea-a51b-d348fee141c4
https://velog.io/@jeonghoheo/Redux-Saga%EC%9D%98-%EA%B8%B0%EB%B3%B8
https://react.vlpt.us/redux-middleware/10-redux-saga.html
*/