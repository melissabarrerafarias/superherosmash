import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments, title }) => {
    if (!comments.length) {
        return <h3>Oops! Looks like there's nothing here yet!</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {comments &&
                comments.map(comment => (
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
                    </div>
                ))}
        </div>
    );
};

export default CommentList;