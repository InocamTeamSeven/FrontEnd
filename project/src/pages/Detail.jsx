import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/Layout';

// import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
    // const navigate = useNavigate();
    // const { id } = useParams();

    // const list = lists.find((list) => list.id === Number(id));

    // if (isLoading) <div>로딩중</div>;
    // if (isError) <div>에러!</div>;
    // if (!list) return null;

    return (
        <Layout>
            {/* <div key={list.id}>
                <div>{list.title}</div>
                <div>{list.username}</div>
                <div>{list.contents}</div>
                <GetImage src={list.image} alt="" /> */}
            {/* </div> */}
        </Layout>
    );
}

export default Detail;

// const GetImage = styled.img`
//     width: 100%;
//     height: 100%;
// `;
