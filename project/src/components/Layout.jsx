import React from 'react';
import styled from 'styled-components';

function Layout({ children }) {
    console.log('layout');
    return (
        <div>
            <StLayout>{children}</StLayout>
        </div>
    );
}

export default Layout;

const StLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
