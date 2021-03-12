import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_COMMENTS } from '../utils/queries';
import Auth from '../utils/auth';

import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const DiscussionBoard = () => {

    const { loading, data } = useQuery(QUERY_COMMENTS);

    const comments = data?.comments || []; //if object exists save into 'comments', else save as empty array 

    if (loading) {
        return <div>We're testing your patience...</div>; 
    }

    return (
        <main>
            <div>
                <div>
                    {Auth.isLoggedIn() && <div><CommentForm /> <a className="item" id="mythreads-id" name='threads' href='/mythreads'>My Threads</a></div>}
                    <CommentList comments={comments} title="Discussion Threads" />
                </div>
            </div>
        </main>
    );
};

export default DiscussionBoard;