import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __postLists } from '../../redux/modules/listSlice';
import useInput from '../../hooks/useInput';

function AddPostForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, onChangeTitle] = useInput('');
    const [username, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [contents, onChangeContent] = useInput('');

    const onClickCancelButton = () => {
        navigate(-1);
    };

    const fileInput = useRef();

    const onClickConfirmButton = async (event) => {
        event.preventDefault();
        const newList = {
            title,
            contents,
            username,
            password,
            files: fileInput.current.files,
        };
        const newPost = await dispatch(__postLists(newList)).unwrap();
        navigate(`/detail/${newPost.id}`);
    };

    return (
        <PostContainer onSubmit={onClickConfirmButton}>
            <InputContainer>
                <TitleInput value={title} onChange={onChangeTitle} />
                <InputPersonal>
                    <InputName
                        autoComplete="current-username"
                        value={username}
                        onChange={onChangeName}
                    />
                    <InputPassword
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        autoComplete="current-password"
                    />
                </InputPersonal>
                <InputContent value={contents} onChange={onChangeContent} />
            </InputContainer>
            <input
                ref={fileInput}
                type="file"
                id="file-input"
                name="image"
                multiple
            />
            <PostButtonContainer>
                <button onClick={onClickCancelButton}>{'취소'}</button>
                <button onClick={onClickConfirmButton}>{'작성'}</button>
            </PostButtonContainer>
        </PostContainer>
    );
}

export default AddPostForm;

const PostContainer = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const InputContainer = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: left;
    flex-direction: column;
    gap: 20px;
`;

const TitleInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
`;

const InputPersonal = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

const InputName = styled.input`
    margin-right: auto;
`;

const InputPassword = styled.input`
    margin-right: auto;
`;

const InputContent = styled.textarea``;

const PostButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
