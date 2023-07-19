import React, { useRef, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { postLists } from '../api/lists';

function Post() {
    const queryClient = useQueryClient();
    const mutation = useMutation(postLists, {
        onSuccess: (data) => {
            queryClient.invalidateQueries('lists');
        },
    });
    const [postModalOpen, setPostModalOpen] = useState(false);
    const postModalRef = useRef(null);

    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [contents, setContents] = useState('');
    const [previewImage, setPreviewImage] = useState(null);
    const [file, setFile] = useState(null);
    const fileInput = useRef();

    const onChangePostTitle = (e) => {
        setTitle(e.target.value);
    };

    // const onChangePostName = (e) => {
    //     setUsername(e.target.value);
    // };

    // const onChangePassword = (e) => {
    //     setPassword(e.target.value);
    // };

    const onChangePostContent = (e) => {
        setContents(e.target.value);
    };

    const onPreview = (e) => {
        const file = e.target.files[0];
        setFile(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => {
            reader.onload = () => {
                setPreviewImage(reader.result || null);
                resolve();
            };
        });
    };

    const onClickConfirmButton = (event) => {
        event.preventDefault();
        if (title.trim() === '' || contents.trim() === '' || file === null) {
            alert('제목, 내용, 그리고 파일을 모두 입력해주세요!');
            return;
        }

        if (file) {
            const newLists = {
                title,
                contents,
                username,
                password,
                files: file,
            };
            mutation.mutate(newLists);
        } else {
            console.log('No file selected');
        }
        setPostModalOpen(false);
        closePostModal();
        setPreviewImage(null);
        setTitle('');
        setUsername('');
        setPassword('');
        setContents('');
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
            setPreviewImage(null);
            setTitle('');
            setUsername('');
            setPassword('');
            setContents('');
        }
    };

    if (mutation.isSuccess) {
    }
    return (
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
                        {previewImage ? (
                            <PostPreview>
                                <PostPreviewImg
                                    src={previewImage}
                                    alt="Preview"
                                />
                            </PostPreview>
                        ) : (
                            <PostDragBox>
                                <input
                                    ref={fileInput}
                                    type="file"
                                    id="file-input"
                                    name="image"
                                    accept=".png, .jpg, .jpeg"
                                    onChange={onPreview}
                                    multiple
                                />
                                <DragBoxText>{'Drag & Drop'}</DragBoxText>
                            </PostDragBox>
                        )}
                        <PostContent>
                            <PostModalInput>
                                <PostModalInfo>{'Title'}</PostModalInfo>
                                <PostInput
                                    value={title}
                                    onChange={onChangePostTitle}
                                />
                            </PostModalInput>
                            {/* <PostModalInput>
                                <PostModalInfo>{'username'}</PostModalInfo>
                                <PostInput
                                    value={username}
                                    onChange={onChangePostName}
                                    type="text"
                                />
                                <PostModalInfo>{'password'}</PostModalInfo>
                                <PostInput
                                    value={password}
                                    onChange={onChangePassword}
                                    type="password"
                                />
                            </PostModalInput> */}
                            <PostModalInput>
                                <PostTextArea
                                    value={contents}
                                    onChange={onChangePostContent}
                                />
                            </PostModalInput>
                        </PostContent>
                    </PostModalBackground>
                </PostModalOverlay>
            )}
        </AddButton>
    );
}

export default Post;

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
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 0.8rem;
    background-color: #fff;
    width: 30%;
    height: 60%;
    overflow-y: scroll;

    /* Chrome, Safari, Edge */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Firefox */
    scrollbar-width: none;

    /* IE 10+ */
    -ms-overflow-style: none;
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

const PostPreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 40%;
`;

const PostPreviewImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
