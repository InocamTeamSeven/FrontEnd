import React from 'react';
import Layout from '../components/Layout';
import HomeBox from '../features/HomeBox';
import LocalNav from '../features/LocalNav';
import styled from 'styled-components';

function Home() {
    return (
        <Layout>
            <LocalNav />
            <HomeBox />
        </Layout>
    );
}

export default Home;
