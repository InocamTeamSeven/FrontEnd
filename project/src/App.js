import GlobalStyle from './shared/GlobalStyle';
import Router from './shared/Router';
import styled from 'styled-components';

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
