import React from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import HomeBox from '../features/HomeBox';
import LocalNav from '../features/LocalNav';
import styled from 'styled-components';
import { useQueries, useQuery } from 'react-query';
import { getLists } from '../api/lists';

function Home() {
    const { isLoading, isError, data } = useQuery('lists', getLists);

    return (
        <Layout>
            <LocalNav />
            <HomeBox />
        </Layout>
    );
}

export default Home;
