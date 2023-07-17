import GlobalStyle from './shared/GlobalStyle';
import Router from './shared/Router';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Errorpage from './pages/Errorpage';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <GlobalStyle />
                <Header />
                <Route path="/" element={<Home />} />
                <Route path="404" element={<Errorpage />} />
            </Router>
            <Footer />
        </div>
    );
}
export default App;

const RootBody = styled.div``;
