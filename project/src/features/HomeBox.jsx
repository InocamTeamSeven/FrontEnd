import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useQuery } from 'react-query';
import { getLists } from '../api/lists';

function HomeBox() {
    const { isLoading, isError, data } = useQuery('lists', getLists);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

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

    console.log(data);
    console.log('HomeBox');
    return (
        <HomeBoxStyle>
            {data.map((item, index) => (
                <HomeBoxImageContainer key={item.id} hasImage={!!item.image}>
                    {item.image && (
                        <HomeBoxImage
                            src={item.image}
                            onClick={() => openModal(index)}
                            hasImage={!!item.image}
                        />
                    )}
                </HomeBoxImageContainer>
            ))}
            {isModalOpen && selectedImageIndex !== null && (
                <ModalOverlay ref={modalRef} onClick={handleOutsideClick}>
                    <ModalContent>
                        <ModalImage src={data[selectedImageIndex].image} />

                        <PrevNextButtonWrapper>
                            <PrevButton
                                onClick={() =>
                                    setSelectedImageIndex((prevIndex) =>
                                        prevIndex > 0
                                            ? prevIndex - 1
                                            : data.length - 1
                                    )
                                }
                            >
                                이전
                            </PrevButton>
                            <NextButton
                                onClick={() =>
                                    setSelectedImageIndex((prevIndex) =>
                                        prevIndex < data.length - 1
                                            ? prevIndex + 1
                                            : 0
                                    )
                                }
                            >
                                다음
                            </NextButton>
                        </PrevNextButtonWrapper>
                    </ModalContent>
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
    position: relative; /* 추가 */

    ${(props) =>
        !props.hasImage &&
        css`
            opacity: 0;
            pointer-events: none;
        `}

    &:hover {
        transform: scale(1.2);
        z-index: 1; /* 추가 */
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

const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    max-height: 90%;
`;

const ModalImage = styled.img`
    max-width: 100%;
    max-height: 80%;
`;

const PrevNextButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 1rem;
`;

const PrevButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
`;

const NextButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
`;
