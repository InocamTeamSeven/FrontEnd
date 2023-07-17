import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LocalNav() {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('post');
    };
}
export default LocalNav;

const LocalNavContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: default;
    font-family: 'KBO-Dia-Gothic_bold';
    height: 200px;
    font-size: 70px;
`;
