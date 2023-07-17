import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();

    return <Layout></Layout>;
}

export default Detail;

const GetImage = styled.img`
    width: 100%;
    height: 100%;
`;
