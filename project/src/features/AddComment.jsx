import React from 'react';
import styled from 'styled-components';

function AddComment() {
    return (
        <CommentInputContainer>
            <StUser>
                <StInput>
                    <InputInfo>{'Name '}</InputInfo>
                    <UserInput placeholder={'이름을 입력해 주세요'} />
                </StInput>
                <StInput>
                    <InputInfo>{'input'}</InputInfo>
                    <UserInput placeholder={'비밀번호를 입력해 주세요'} />
                </StInput>
            </StUser>

            <CommentContentInput placeholder={'댓글을 남겨 주세요'} />
        </CommentInputContainer>
    );
}

export default AddComment;

const CommentInputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 30px;
    margin-left: auto;
    width: 40rem;
`;

const StUser = styled.div``;

const StInput = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 0 2rem;
`;

const InputInfo = styled.span`
    width: 5rem;
    color: #cfc6c6;
    font-size: 1.3rem;
`;

const UserInput = styled.input`
    margin: 10px;
    padding-left: 1rem;
    border: none;
    border-radius: 0.8rem;
    background-color: #f6f0f0;
    width: 14rem;
    height: 3rem;
`;

const CommentContentInput = styled.textarea`
    margin: 2rem;
    padding: 1rem;
    box-sizing: border-box;
    border: none;
    border-radius: 0.8rem;
    background-color: #f6f0f0;
    height: 12rem;
`;
