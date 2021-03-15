// import React, { useState, useEffect } from "react";  <-- Import never used
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries"; //queries all of users data , QUERY_COMMENTS was not being used
import { DELETE_COMMENT } from "../utils/mutations"; //mutation to delete thread/comment

import Loading from '../components/Loading'; 
import "../../src/discuss.css";

const MyThreads = () => {
  const { loading, data } = useQuery(QUERY_ME); //quering data

  const [deleteComment, { error }] = useMutation(DELETE_COMMENT);

  const user = data?.me || {};

  const handleDelete = async (event) => {
    //deletes thread/comment
    event.preventDefault();

    const commentID = event.target.getAttribute("name");
    try {
      await deleteComment({
        variables: { commentId: commentID },
        update: (cache) => {
          const { me } = cache.readQuery({ query: QUERY_ME });
          const newData = me.comments.filter(
            (comment) => comment._id !== commentID
          );
          cache.writeQuery({
            query: QUERY_ME,
            data: { me: { ...me, comments: newData } },
          });
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <body className="background-image">
      <div className="return-to">
      <a href="/discussionboard" className="return-a"> ⭍  Return to Discussion Board</a>
      </div>
      <div id="st-card" className="ui card">
        <div className="content">
          <h2 className="title">
            {user.username} Threads
            <br />
            <div className="ui dividing header">
              <h3>Look back at what you said!</h3>
            </div>
          </h2>

          <div>
            {user.comments &&
              user.comments.map((comment) => (
                <div key={comment._id}>
                  <div className="ui dividing header">
                    <p>thread started on {comment.createdAt}</p>
                    <Link to={`/comment/${comment._id}`}>
                      <div>
                        <p>{comment.commentBody}</p>
                        <p>
                          Replies in this thread: {comment.replyCount} - Go to{" "}
                          {comment.replyCount ? "see" : "start"} the discussion!
                        </p>
                      </div>
                    </Link>
                    <br />
                    <div>
                      <button name={comment._id} onClick={handleDelete}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </body>
  );
};

export default MyThreads;
