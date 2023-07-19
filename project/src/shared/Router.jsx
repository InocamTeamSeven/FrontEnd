import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import Header from '../components/Header';
import SignInPage from '../pages/SignInPage';
import LogInPage from '../pages/LogInPage';

// 새로운 페이지로 넘어갔을때 스크롤을 제일 위로
function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
}

const Router = () => {
    return (
        <StyledRouterContainer>
            <BrowserRouter>
                <Header />
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<LogInPage />} />
                        <Route path="signin" element={<SignInPage />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </StyledRouterContainer>
    );
};

export default Router;

const StyledRouterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
