import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import HomeBox from '../features/HomeBox';
import LocalNav from '../features/LocalNav';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// import { useQuery } from 'react-query';
// import { getLists } from '../api/lists';
import { AiFillAccountBook, AiFillPlusCircle } from 'react-icons/ai';
import useInput from '../hooks/useInput';
import { useMutation, useQueryClient } from 'react-query';
import { postLists } from '../api/lists';

function Home() {
    const queryClient = useQueryClient();
    const mutation = useMutation(postLists, {
        onSuccess: (data) => {
            queryClient.invalidateQueries('lists');
        },
    });
    const [postModalOpen, setPostModalOpen] = useInput(false);
    const postModalRef = useRef(null);

    const [title, onChangeTitle] = useInput('');
    const [username, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [contents, onChangeContent] = useInput('');

    const fileInput = useRef();

    const onChangePostTitle = () => {
        onChangeTitle();
    };

    const onClickConfirmButton = (event) => {
        event.preventDefault();
        const newLists = {
            title,
            contents,
            username,
            password,
            files: fileInput.current.files,
        };
        mutation.mutate(newLists);
    };

    const openPostModal = () => {
        setPostModalOpen(true);
    };

    const closePostModal = () => {
        setPostModalOpen(false);
    };

    const handleOutsidePostClick = (e) => {
        if (postModalRef.current === e.target) {
            closePostModal();
        }
    };

    return (
        <Layout>
            <LocalNav />
            <HomeBox />
            <AddButton>
                <BsFillPlusCircleFill
                    size="7rem"
                    color="#5ba692"
                    onClick={openPostModal}
                />
                {postModalOpen && (
                    <PostModalOverlay
                        ref={postModalRef}
                        onClick={handleOutsidePostClick}
                    >
                        <PostModalBackground>
                            <PostModalele>
                                <PostTItle>{'Post'}</PostTItle>
                                <PostPost onClick={onClickConfirmButton}>
                                    {'Submit'}
                                </PostPost>
                            </PostModalele>
                            <PostDragBox>
                                <input
                                    ref={fileInput}
                                    type="file"
                                    id="file-input"
                                    name="image"
                                    multiple
                                />
                                <DragBoxText>{'Drag & Drop'}</DragBoxText>
                            </PostDragBox>
                            <PostContent>
                                <PostModalInput>
                                    <PostModalInfo>{'Title'}</PostModalInfo>
                                    <PostInput
                                        value={title}
                                        onChange={onChangePostTitle}
                                    />
                                </PostModalInput>
                                <PostModalInput>
                                    <PostModalInfo>{'password'}</PostModalInfo>
                                    <PostInput type="password" />
                                </PostModalInput>
                                <PostModalInput>
                                    <PostTextArea />
                                </PostModalInput>
                            </PostContent>
                        </PostModalBackground>
                    </PostModalOverlay>
                )}
            </AddButton>
        </Layout>
    );
}

export default Home;

const AddButton = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const PostModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PostModalBackground = styled.div`
    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 0.8rem;
    background-color: #fff;
    width: 50%;
    height: 60%;
`;

const PostModalele = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20%;
`;

const PostTItle = styled.div`
    font-size: 5rem;
`;

const PostPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 0.8rem;
    background-color: #9b9de2;
    width: 6rem;
    height: 3rem;
`;

const PostDragBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    border: 1px dashed black;
    background-color: #dbd9d9;
    width: 100%;
    height: 40%;
`;

const DragBoxText = styled.div`
    font-size: 4rem;
    color: #b9acac;
`;

const PostContent = styled.div`
    margin: 3rem;
    display: flex;
    flex-direction: column;
`;

const PostModalInput = styled.div`
    display: flex;
    align-items: center;
`;

const PostModalInfo = styled.span`
    width: 5rem;
    color: #cfc6c6;
    font-size: 1.3rem;
    margin-right: 2rem;
`;

const PostInput = styled.input`
    margin: 1rem 1rem 1rem 0;
    padding-left: 1rem;
    border: none;
    border-radius: 0.8rem;
    background-color: #f6f0f0;
    width: 14rem;
    height: 3rem;
`;

const PostTextArea = styled.textarea`
    padding: 1rem;
    border: none;
    border-radius: 0.8rem;
    background-color: #f6f0f0;
    width: 100%;
    height: 7rem;
`;
