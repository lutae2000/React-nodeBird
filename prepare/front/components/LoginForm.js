import React, {useState, useCallback} from'react';
import {Input, Form, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction, LOG_IN_REQUEST } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top:10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;


const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeID] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { logInLoading } = useSelector((state) => state.user);



    const onSubmitForm = useCallback(
        () => {
            console.log(id, password);
            //dispatch(loginRequestAction({id, password}));
            dispatch({
                type: LOG_IN_REQUEST,
                data: { id, password },
            });
        },[id, password],
    );

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br></br>
                <Input
                    name="user-id" 
                    value={id} 
                    onChange={onChangeID} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="user-password">패스워드</label>
                <br></br>
                <Input 
                    name="user-password"
                    value={password} 
                    type="password"
                    onChange={onChangePassword} 
                    required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}


export default LoginForm;