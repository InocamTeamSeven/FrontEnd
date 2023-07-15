import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Detail from '../pages/Detail';
import Header from '../components/Header';

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
        <BrowserRouter>
            <Header />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="post" element={<Post />} />
                    <Route path="detail/:id/" element={<Detail />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Router;
