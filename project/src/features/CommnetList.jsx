import React from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import { getComment } from '../api/lists';

function CommnetList({ itemid }) {
    const queryClient = useQueryClient();
    const { isLoading, isError, data } = useQuery(['getComment', itemid], () =>
        getComment(itemid)
    );
    // console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred</div>;
    }

    return (
        <div>
            <StCommentTitle>{'Comment'}</StCommentTitle>
            <CommentContainer>
                {data.commentList &&
                    data.commentList.map((comment) => {
                        return (
                            <StComment key={comment.contents}>
                                <CommentUsername>
                                    {comment.username}
                                </CommentUsername>
                                <CommentContent>
                                    {comment.contents}
                                </CommentContent>
                            </StComment>
                        );
                    })}
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

const CommentUsername = styled.div`
    font-size: 1rem;
`;

const CommentContent = styled.div`
    font-size: 1.4rem;
`;

const StComment = styled.div`
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;
`;
