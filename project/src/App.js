import GlobalStyle from './shared/GlobalStyle';
import Router from './shared/Router';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <GlobalStyle />
                <Header />
                <Route path="/" element={<Home />} />
            </Router>
            <Footer />
        </div>
    );
}
export default App;
