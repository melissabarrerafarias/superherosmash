import React from "react";
import Auth from "../../utils/auth";
import "../../../src/discuss.css";

const RepliesList = ({ replies }) => {
  const loggedIn = Auth.isLoggedIn();

  if (!loggedIn) {
    return <h4>You need to be logged in to see what people are saying!</h4>;
  }

  return (
    <div>
      <br />
      <div>
        <h3 className="ui dividing header">Replies: </h3>
      </div>
      {replies &&
        replies.map((reply) => (
          <div className="ui dividing header">
            <p key={reply._id}> </p>
            <div>
              <div>
                <div className="ui comments">
                  <div className="comment">
                    <p className="author">
                      {reply.username}

                      <div className="metadata">
                        <span id="date" className="data">
                          {reply.createdAt}
                        </span>
                      </div>
                    </p>
                    <div className="commentlist">{reply.replyBody}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RepliesList;
