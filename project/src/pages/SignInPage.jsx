import React, { useState } from 'react';
import styled from 'styled-components';
import { instance, onSignAPI } from '../api/lists';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

function SignInPage() {
    const queryClient = useQueryClient();

    const mutation = useMutation(onSignAPI, {
        onSuccess: (data) => {
            console.log('data', data);
        },
        onError: (error) => {
            console.log('error', error);
        },
    });
    const [signUsername, setSIgnUsername] = useState('');
    const [signPassword, setSignPassword] = useState('');

    const onChangesignUsername = (event) => {
        setSIgnUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setSignPassword(event.target.value);
    };

    const signInHandler = async () => {
        const userInfo = {
            username: signUsername,
            password: signPassword,
        };
        console.log(userInfo);
        // mutation.mutate(userInfo);

        try {
            let res = await axios.post(
                'http://43.201.22.74/api/auth/signup',
                userInfo
            );
            console.log('res', res);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div>
            <div>
                <SignContainer>
                    <SignInputContainer>
                        <div>
                            <SignLabel>Username</SignLabel>
                            <input
                                value={signUsername}
                                onChange={onChangesignUsername}
                            />
                        </div>
                        <div>
                            <SignLabel>Password</SignLabel>
                            <input
                                type="password"
                                value={signPassword}
                                onChange={onChangePassword}
                            />
                        </div>
                    </SignInputContainer>
                    <StSignButton onClick={signInHandler}>Submit</StSignButton>
                </SignContainer>
            </div>
        </div>
    );
}

export default SignInPage;

const SignContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

const SignInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    width: 10rem;
`;

const StSignButton = styled.button`
    width: 10rem;
`;

const SignLabel = styled.p`
    margin: 0.5rem;
`;
