import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useQuery } from 'react-query';
import { getLists } from '../api/lists';
import Comment from '../components/Comment';

function HomeBox() {
    const { isLoading, isError, data } = useQuery('lists', getLists);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    console.log('HomeBox');

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setIsModalOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (modalRef.current === e.target) {
            closeModal();
        }
    };

    const handleImageClick = (index) => {
        openModal(index);
        setIsModalOpen(true);
    };

    if (isLoading) {
        return <h1>로딩중입니다.....</h1>;
    }

    if (isError) {
        return <h1>에러.....</h1>;
    }

    return (
        <HomeBoxStyle>
            {data.map((item, index) => (
                <HomeBoxImageContainer key={item.id} hasImage={item.image}>
                    {item.image && (
                        <HomeBoxImage
                            src={item.image}
                            onClick={() => openModal(index)}
                            hasImage={item.image}
                            isModalOpen={isModalOpen} // 모달이 열려 있을 때 호버 효과 비활성화
                        />
                    )}
                </HomeBoxImageContainer>
            ))}
            {isModalOpen && selectedImageIndex !== null && (
                <ModalOverlay ref={modalRef} onClick={handleOutsideClick}>
                    <ModalBackground>
                        <ModalContent>
                            <ModalImage src={data[selectedImageIndex].image} />
                        </ModalContent>
                        <Comment />
                    </ModalBackground>
                </ModalOverlay>
            )}
        </HomeBoxStyle>
    );
}

export default HomeBox;

const HomeBoxStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    width: 100%;
`;

const HomeBoxImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20rem;
    display: ${(props) => (props.hasImage ? 'block' : 'none')};
`;

const HomeBoxImage = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 1;
    transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out;
    position: relative;

    ${(props) =>
        !props.hasImage &&
        css`
            opacity: 0;
            pointer-events: none;
        `}

    ${(props) =>
        props.isModalOpen &&
        css`
            pointer-events: none; // 모달이 열려 있을 때 호버 효과 비활성화
        `}

    &:hover {
        transform: scale(1.2);
        z-index: 2; // 변경: 더 큰 값으로 설정
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding-top: 2rem;
    padding: 1rem;
    width: 60%;
    height: 100%;
    overflow-y: scroll;
`;

const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    max-height: 90%;

    @media;
`;

const ModalImage = styled.img`
    margin-top: 1rem;
    padding-top: 2rem;
    object-fit: contain;
    width: 100%;
    height: 100%;
`;
