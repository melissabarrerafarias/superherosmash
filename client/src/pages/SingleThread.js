import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SINGLE_COMMENT } from '../utils/queries';
import Auth from '../utils/auth';//for isLoggedIn function

import RepliesList from '../components/RepliesList'; 
import ReplyForm from '../components/ReplyForm'; 

const SingleThread = () => {
    const { id: commentId } = useParams();//gets id from params

    const { loading, data } = useQuery(QUERY_SINGLE_COMMENT, { variables: { id: commentId } });
    console.log(data)

    const comment = data?.comment || {};

    if (loading) {
        return <div>Adjusting flux capacitor...</div>; 
    }

    return (
        <div>
            {Auth.isLoggedIn() && <ReplyForm commentId={comment._id} />}
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
            {comment.replyCount > 0 && <RepliesList replies={comment.replies} />}
        </div>
    )
}

export default SingleThread; 