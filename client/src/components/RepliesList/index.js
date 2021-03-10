import React from 'react';

const RepliesList = ({ replies }) => {
    return (
        <div>
            <div>
                <span>Replies: </span>
            </div>
            <div>
                {replies &&
                    replies.map(reply => (
                        <p key={reply._id}>
                            {reply.replyBody} {' - '}
                                {reply.username} on {reply.createdAt}
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default RepliesList;