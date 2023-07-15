import React from 'react';
import Header from './Header';
import styled from 'styled-components';

function Layout({ children }) {
    console.log('layout');
    return (
        <div>
            <Header />
            <StLayout>{children}</StLayout>
        </div>
    );
}

export default Layout;

const StLayout = styled.div`
    height: 800px;
    /* background-color: ${({ bgColor }) => {
        return bgColor;
    }}; */
    padding: 50px 100px 0 100px;
`;
