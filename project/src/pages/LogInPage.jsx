import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { onLoginAPI } from '../api/lists';
import { useMutation } from 'react-query';

function LogIn() {
    const navigate = useNavigate();
    const mutation = useMutation(onLoginAPI);

    const onSignIn = () => {
        navigate('/signin');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    if (mutation.isSuccess) {
        navigate('/');
    }

    const loginHandler = () => {
        const userInfo = {
            username,
            password,
        };
        console.log(userInfo);
        mutation.mutate(userInfo);
        console.log(mutation);
    };

    return (
        <StContainer>
            <StLogInContainer>
                <div>{'LogIn'}</div>
                <LogInContainer>
                    <LogInInPut>
                        <input value={username} onChange={onChangeId} />
                        <input value={password} onChange={onChangePassword} />
                    </LogInInPut>
                    <LogInButton onClick={loginHandler}>{'Submit'}</LogInButton>
                </LogInContainer>
            </StLogInContainer>
            <SignInButton onClick={onSignIn}>{'Sign In'}</SignInButton>
        </StContainer>
    );
}

export default LogIn;

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const StLogInContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    gap: 1rem;
`;

const LogInContainer = styled.div`
    display: flex;
    margin: auto;

    gap: 2rem;
    width: 12rem;
    height: 2rem;
`;

const LogInInPut = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const LogInButton = styled.button`
    height: 4rem;
`;

const LogInLine = styled.div`
    border: 1px solid white;
`;

const SignInButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4rem 0 0 5rem;
    border-radius: 0.8rem;
    background-color: #9b9de2;
    width: 14rem;
    height: 4rem;
    text-align: center;
`;
