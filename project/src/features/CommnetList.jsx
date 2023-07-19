import React from 'react';
import styled, { css } from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import { getComment } from '../api/lists';

function CommnetList() {
    const queryClient = useQueryClient();
    const { isLoading, isError, data } = useQuery('comment', getComment);

    return (
        <div>
            <StCommentTitle>{"Comment"}</StCommentTitle>
            <CommentContainer>
                <Comment>123123</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
                <Comment>sdfdsf</Comment>
            </CommentContainer>
        </div>
    );
}

export default CommnetList;

const StCommentTitle = styled.span`
    font-size: 2rem;
`;

const CommentContainer = styled.div`
    margin: 2rem 2rem 0 2rem;
`;

const Comment = styled.div`
    margin: 1rem;
    padding: 1rem;
    font-size: 1.4rem;
`;
