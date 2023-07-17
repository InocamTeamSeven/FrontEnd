import GlobalStyle from './shared/GlobalStyle';
import Router from './shared/Router';
import Buttons from './components/Buttons';
import Header from './components/Header';
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
        </div>
    );
}
export default App;
