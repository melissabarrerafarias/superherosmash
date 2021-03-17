import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SINGLE_COMMENT } from '../utils/queries';
import Auth from '../utils/auth';//for isLoggedIn function

import Loading from '../components/Loading';
import '../../src/discuss.css';



import RepliesList from '../components/RepliesList';
import ReplyForm from '../components/ReplyForm';

const SingleThread = () => {
    const { id: commentId } = useParams();//gets id from params

    const { loading, data } = useQuery(QUERY_SINGLE_COMMENT, { variables: { id: commentId } });

    const comment = data?.comment || {};

    const goBack = () => { //go back to last page 
        window.history.back();
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <body className="background-image">
            <div className="return-to">
                <a onClick={goBack} className="return-a"> Return</a>
            </div>

            <div id="st-card" className="ui card">
                <div className="content">

                    <div className="meta">
                        {comment.username} {" "}{" "} {comment.createdAt}

                    </div>
                    <br></br>
                    <div className="header">
                        {comment.commentBody}

                    </div>

                    {Auth.isLoggedIn() && <ReplyForm commentId={comment._id} />}


                    {comment.replyCount > 0 && <RepliesList replies={comment.replies} />}
                </div>



            </div>

          



        </body>
    )

}





export default SingleThread;