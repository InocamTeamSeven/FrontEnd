import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { __getLists } from '../redux/modules/listSlice';

function Detail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const { lists, isLoading, isError } = useSelector(
        (state) => state.listSlice
    );
    console.log(lists);

    const list = lists.find((list) => list.id === Number(id));
    console.log(list);

    useEffect(() => {
        dispatch(__getLists());
    }, []);

    if (isLoading) <div>로딩중</div>;
    if (isError) <div>에러!</div>;
    if (!list) return null;

    return (
        <Layout>
            <div key={list.id}>
                <div>{list.title}</div>
                <div>{list.username}</div>
                <div>{list.contents}</div>
                <GetImage src={list.image} />
            </div>
        </Layout>
    );
}

export default Detail;

const GetImage = styled.img`
    width: 100%;
    height: 100%;
`;
