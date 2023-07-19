import React from 'react';
import AddComment from '../features/AddComment';
import styled from 'styled-components';
import CommnetList from '../features/CommnetList';

function Comment() {
    return (
        <div>
            <AddComment />
            <CommnetList />
        </div>
    );
}

export default Comment;
