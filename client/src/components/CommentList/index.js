import React from 'react';

const CommentList = ({ comments, title }) => {
    if (!comments.length) {
        return <h3>Be the first to start a discussion!</h3>;
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
                        <div>
                            <p>{comment.commentBody}</p>
                            <p className="mb-0">
                                Replies in this thread: {comment.replyCount} - Go to{' '}
                                {comment.replyCount ? 'see' : 'start'} the discussion!
              </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CommentList;