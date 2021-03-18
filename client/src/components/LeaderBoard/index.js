import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS} from "../../utils/queries";
import "./style.css";

const LeaderBoard = () => {
  const { loading, data } = useQuery(QUERY_HEROS);

  if (loading) {
    console.log("Loading ...");
    return <div>L O A D I N G</div>;
  } else {
    const heros = data.getAllHeros.sort((a, b) => (a.votes > b.votes ? -1 : 1));



    return (
        <div>
        <div className="leader-title">Leader Board </div>
      <div className="ui centered card" id="leaderboard-card">
        <div className="content" id="leaderboard-card-content">

      
        {heros.map((hero) => {
          return (
            <div key={hero.id} className="scorecard">

              <p id="heroName" className="scorecard__name">
                {hero.name}
              </p>
              <div className = "votes_bar">
                <div className="container-bar">
                  <div
                    className="skill "oi
                    style={{ width: `${hero.votes}%` }}
                  ></div>
                </div>
                <p className = "scorecard__score">
                {hero.votes} votes
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
       </div>
    );
  }
};

export default LeaderBoard;
