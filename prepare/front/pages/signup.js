import React, {useState, useCallback} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';


const ErrorMessage = styled.div`
    color:red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password],
    );

    const [term, setTerm] = useState('');
    const onChangeTerm = useCallback(
        (e) => {
            setTerm(e.target.checked);
            setTermError(false);
        },
        [],
    );

    const [termError, setTermError] = useState(false);


    const onSubmit = useCallback(
        () => {
            if(password !== passwordCheck){
                return setPasswordError(true);
            }
            if(!term){
                return setTermError(true);
            }
            console.log(id, nickname, password, term);

        },
        [password, passwordCheck, term]
    );

    return (
        <>
        <AppLayout>
        <head>
            <title>회원가입</title>
        </head>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user_id">아이디</label>
                <br />
            <input name="user_id" value={id} required onChange={onChangeId} />
            </div>

            <div>
                <label htmlFor="user_nick">닉네임</label>
                <br />
            <input name="user_nick" value={nickname} required onChange={onChangeNickname} />
            </div>

            <div>
                <label htmlFor="user_password">비밀번호</label>
                <br />
            <input name="user_password" type="password" value={password} required onChange={onChangePassword} />
            </div>

            <div>
                <label htmlFor="user-password-check">비밀번호 체크</label>
                <br />
                <input 
                    name="user-password-check"
                    type="password"
                    value={passwordCheck}
                    required
                    onChange={onChangePasswordCheck}
                />
                
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage> }
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>회원가입 동의</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage> }
            </div>
            <div styl={{marginTop: 10}}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>

        </AppLayout>
        </>
    );
}

export default Signup;