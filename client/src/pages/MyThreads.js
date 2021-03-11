import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { DELETE_COMMENT } from '../utils/mutations';


const MyThreads = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const [deleteComment, { error }] = useMutation(DELETE_COMMENT);

    const user = data?.me || {};

    const handleDelete = async event => {
        event.preventDefault();

        let commentId = this.comment._id

        try {
            await deleteComment({ variables: { commentId } });
        }
        catch (e) {
            console.log(e);
        }
    };

    if (loading) {
        return <div>Please hold on as we reheat our coffee...</div>;
    }

    return (
        <div>
            <div>
                <h2>
                    {user.username}'s threads
          </h2>
            </div>

            <div>
                <h3>Look back at what you said!</h3>
                {user.comments &&
                    user.comments.map(comment => (
                        <div key={comment._id}>
                            <p>
                                {comment.username} commented on {comment.createdAt}
                            </p>
                            <Link to={`/comment/${comment._id}`}>
                                <div>
                                    <p>{comment.commentBody}</p>
                                    <p>
                                        Replies in this thread: {comment.replyCount} - Go to{' '}
                                        {comment.replyCount ? 'see' : 'start'} the discussion!
                            </p>
                                </div>
                            </Link>
                            <div>
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MyThreads;
