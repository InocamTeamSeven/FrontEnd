import Layout from '../components/Layout';
import HomeBox from '../features/HomeBox';
import Post from '../components/Post';

function Home() {
    return (
        <Layout>
            <HomeBox />
            <Post />
        </Layout>
    );
}

export default Home;
