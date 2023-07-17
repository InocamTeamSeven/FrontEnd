import React from 'react';

import Layout from '../components/Layout';
import HomeBox from '../features/HomeBox';
import LocalNav from '../features/LocalNav';

// import { useQuery } from 'react-query';
// import { getLists } from '../api/lists';

function Home() {
    return (
        <Layout>
            <LocalNav />
            <HomeBox />
        </Layout>
    );
}

export default Home;
