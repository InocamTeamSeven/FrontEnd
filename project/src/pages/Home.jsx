import React from 'react';
import Layout from '../components/Layout';
import HomeBox from '../features/Home/HomeBox';
import LocalNav from '../features/Header/LocalNav';
import styled from 'styled-components';
import { useQueries, useQuery } from 'react-query';
import { getLists } from '../api/lists';

function Home() {
    const { isLoading, isError, data } = useQuery('lists', getLists);
    return (
        <Layout>
            <HomeContainer>
                <LocalNav />
            </HomeContainer>
            <HomeBox />
        </Layout>
    );
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;
