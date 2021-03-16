import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/discuss.css';


const CommentList = ({ comments, title }) => {

    if (!comments.length) {
        return <h3>Oops! Looks like there's nothing here yet!</h3>;
    }

    return (
        <div>
            <h1>{title}</h1>
            <br></br>
            <div className="commentlist">
            {comments &&
                comments.map(comment => (
                    <div key={comment._id}>
                        <div className="ui dividing header">
                        <p id="cmt-user">
                            {comment.username} started a thread on {comment.createdAt}
                        </p>
                        <Link to={`/comment/${comment._id}`}>
                            <div>
                                <h2 id="cmt-header" className="ui header">{comment.commentBody}</h2>
                                <p className="commentlist">
                                    Replies in this thread: {comment.replyCount} - Go to{' '}
                                    {comment.replyCount ? 'see' : 'start'} the discussion!
                            </p>
                            </div>
                        </Link>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    );
};

export default CommentList;