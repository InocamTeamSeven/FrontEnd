import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useMutation, useQueryClient } from 'react-query';
import { getComment, postComment } from '../api/lists';

function AddComment() {
    const queryClient = useQueryClient();
    const [commentusername, setCommentUserName] = useInput('');
    const [commentPassword, setCommentPassword] = useInput('');
    const mutation = useMutation(postComment, {
        onSuccess: (data) => {
            queryClient.invalidateQueries('comment');
        },
    });

    const onChangeCommentName = () => (event) => {
        setCommentUserName(event.target.value);
    };

    const onChangeCommentPassword = () => (event) => {
        setCommentPassword(event.target.value);
    };

    const onClickAddComment = () => {
        const newComments = {
            commentusername,
            commentPassword,
        };
        mutation.mutate(newComments);
    };

    return (
        <CommentInputContainer>
            <StUser>
                <StInput>
                    <InputInfo>{'Name '}</InputInfo>
                    <NameInput
                        onChange={onChangeCommentName}
                        placeholder={'이름을 입력해 주세요'}
                    />
                </StInput>
                <StInput>
                    <InputPasswordInfo>{'Password'}</InputPasswordInfo>
                    <UserInput
                        onChange={onChangeCommentPassword}
                        placeholder={'비밀번호를 입력해 주세요'}
                    />
                </StInput>
            </StUser>
            <StButton>
                <CommentContentInput placeholder={'댓글을 남겨 주세요'} />
                <OnSubmit onClick={onClickAddComment}>{'submit'}</OnSubmit>
            </StButton>
        </CommentInputContainer>
    );
}

export default AddComment;

const CommentInputContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 30px;
    /* margin-left: auto;
    width: 40rem; */
`;

const StUser = styled.div`
    /* position: fixed; */
    /* display: flex; */
    align-items: center;
`;

const StInput = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
`;

const InputInfo = styled.span`
    align-items: start;
    text-align: start;
    width: 5rem;
    color: #cfc6c6;
    font-size: 1.3rem;
    /* margin-left: 2rem; */
`;

const InputPasswordInfo = styled.span`
    width: 5rem;
    color: #cfc6c6;
    font-size: 1.3rem;
    margin-right: 2rem;
`;

const NameInput = styled.input`
    margin: 1rem 1rem 1rem 2rem;
    padding-left: 1rem;
    border: none;
    border-radius: 0.8rem;
    background-color: #f6f0f0;
    width: 14rem;
    height: 3rem;
`;

const UserInput = styled.input`
    margin: 1rem 1rem 1rem 0;
    padding-left: 1rem;
    border: none;
    border-radius: 0.8rem;
    background-color: #f6f0f0;
    width: 14rem;
    height: 3rem;
`;

const StButton = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

const OnSubmit = styled.button`
    height: 12rem;
    border: none;
    border-radius: 0.8rem;
    background-color: #9b9de2;
`;

const CommentContentInput = styled.textarea`
    margin: 2rem;
    padding: 1rem;
    /* box-sizing: border-box; */
    border: none;
    border-radius: 0.8rem;
    background-color: #f6f0f0;
    height: 12rem;
    width: 38rem;
`;
