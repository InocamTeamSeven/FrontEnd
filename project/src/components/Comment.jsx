import React from 'react';
import AddComment from '../features/AddComment';
import styled from 'styled-components';

function Comment() {
    return (
        <div>
            <StComment>
                <AddComment />
            </StComment>
            );
        </div>
    );
}

export default Comment;

const StComment = styled.div`
    display: flex;
    /* width: 100%; */
`;
