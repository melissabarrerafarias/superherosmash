import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SINGLE_COMMENT } from '../utils/queries';

const SingleThread = () => {
    const { id: commentId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_COMMENT, {
        variables: { id: commentId }
    });

    const comment = data?.comment || {};

    if (loading) {
        return <div>Adjusting flux capacitor...</div>;
    }

    return (
        <div>
            <div>
                <p>
                    <span>
                        {comment.username}
                    </span>{' '}
                        posted on {comment.createdAt}
                </p>
                <div>
                    <p>{comment.commentBody}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleThread; 