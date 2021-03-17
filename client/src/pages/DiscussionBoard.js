import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_COMMENTS } from "../utils/queries";
import Auth from "../utils/auth";
import "../../src/discuss.css";

import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import Loading from '../components/Loading';

const DiscussionBoard = () => {
  const { loading, data } = useQuery(QUERY_COMMENTS);

  const comments = data?.comments || []; //if object exists save into 'comments', else save as empty array

  if (loading) {
    return <Loading />;
  }

  return (
    <body className="background-image">

      <div id="st-card" className="ui card">
        <div className="content">
          {Auth.isLoggedIn() && (
            <div>
              <CommentForm /> <br /> 
              <br />
            </div>
          )}
          <CommentList comments={comments} title="Discussion Threads" />
        </div>
      </div>
    </body>
  );
};

export default DiscussionBoard;
