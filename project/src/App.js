import GlobalStyle from './shared/GlobalStyle';
import Router from './shared/Router';
import styled from 'styled-components';
import Buttons from './components/Buttons';
import Header from './components/Header';

function App() {
    return (
        <RootBody>
            <GlobalStyle />
            <Router />
        </RootBody>
    );
}
export default App;

const RootBody = styled.div``;
