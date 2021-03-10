import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_COMMENTS } from '../utils/queries';

import CommentList from '../components/CommentList';

const DiscussionBoard = () => {
    const { loading, data } = useQuery(QUERY_COMMENTS);

    const comments = data?.comments || []; //if object exists save into 'comments', else save as empty array 
    console.log(comments);

    return (
        <main>
            <div>
                <div>
                    {loading ? (
                        <div>We're testing your patience...</div>
                    ) : (
                        <CommentList comments={comments} title="Discussion Threads" />
                    )}
                </div>
            </div>
        </main>
    );
};

export default DiscussionBoard; 