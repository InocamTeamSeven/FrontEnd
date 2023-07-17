import React from 'react';
import styled from 'styled-components';

function HomeBox() {
    console.log('HomeBox');
    return (
        <AppBlock>
            <HomeBoxStyle>
                <HomeBoxImage>이미지</HomeBoxImage>
                <HomeBoxTitle>제목</HomeBoxTitle>
            </HomeBoxStyle>
            <HomeBoxStyle>
                <HomeBoxImage>이미지</HomeBoxImage>
                <HomeBoxTitle>제목</HomeBoxTitle>
            </HomeBoxStyle>
            <HomeBoxStyle>
                <HomeBoxImage>이미지</HomeBoxImage>
                <HomeBoxTitle>제목</HomeBoxTitle>
            </HomeBoxStyle>
        </AppBlock>
    );
}

export default HomeBox;

const AppBlock = styled.div`
    display: grid;
    width: 1000px;
    margin: 8px auto 0 auto;
    padding: 8px;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 32px;
    font-size: 12px;
`;

const HomeBoxStyle = styled.div`
    border: 1px solid black;
    width: 240px;
    height: 320px;
`;

const HomeBoxImage = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 80%;
`;

const HomeBoxTitle = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 19%;
`;
