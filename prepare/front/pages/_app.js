import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import head from 'next/head';
import wrapper from '../store/configureStore';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';

const nodeBird = ({Component}) =>{
    return(
        <>
        <head>
            <meta charSet="utf-8"></meta>
            <title>Node Bird</title>
        </head>
        <Component />
        </>
    );
};

nodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(nodeBird));