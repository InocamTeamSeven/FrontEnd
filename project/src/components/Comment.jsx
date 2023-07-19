import React from 'react';
import AddComment from '../features/AddComment';
import styled from 'styled-components';
import CommnetList from '../features/CommnetList';

function Comment({ itemid }) {
    return (
        <div>
            <AddComment itemid={itemid} />
            <CommnetList itemid={itemid} />
        </div>
    );
}

export default Comment;
