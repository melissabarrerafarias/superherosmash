import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'; 


const RepliesList = ({ replies }) => {
    const loggedIn = Auth.isLoggedIn();

    if(!loggedIn) {
        return <h4>You need to be logged in to see what people are saying!</h4>
    }

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