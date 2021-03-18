import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";

import "./style.css";

// Dig the votes out of the hero..
const parseVotes = (voteObjs) => {
  const userNames = voteObjs.map((obj) => obj.username);

  const map = userNames.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  //console.info([...map.keys()])
  //console.info([...map.values()])
  //console.info([...map.entries()])

  const res = [...map.entries()];

  // let str = "";
  // for (let p of res) {
  //   str += `${p[0]} has given ${p[1]} votes `;
  // }
  console.log(res);
  return res;
};

// Modal Config

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Main functional component
const LeaderBoard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Hooks for modal data
  const [currentHero, setCurrentHero] = useState({});

  const openModal = (H) => {
    setCurrentHero(H);

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const { loading, data } = useQuery(QUERY_HEROS);

  if (loading) {
    console.log("Loading ...");
    return <div>L O A D I N G</div>;
  } else {
    const heros = data.getAllHeros.sort((a, b) => (a.votes > b.votes ? -1 : 1));
    console.log(heros);
    return (
      <div id="leaderBoard">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>{currentHero.name}</h2>
          <button onClick={closeModal}>close</button>
          <div>
            <p>Total: {currentHero.votes} votes</p>
            <p className="scorecard__score">
              {parseVotes(currentHero.voteObjs).map((vote) => (
                <p>
                  {vote[0]} voted {vote[1]} times
                </p>
              ))}
            </p>
          </div>
        </Modal>

        <div className="leader-title">Leader Board </div>
        <div className="ui centered card" id="leaderboard-card">
          <div className="content" id="leaderboard-card-content">
            {heros.map((hero) => {
              return (
                <div
                  key={hero.id}
                  onClick={() => openModal(hero)}
                  className="scorecard"
                >
                  <p id="heroName" className="scorecard__name">
                    {hero.name}
                  </p>
                  <div className="votes_bar">
                    <div className="container-bar">
                      <div
                        className="skill "
                        style={{ width: `${hero.votes}%` }}
                      ></div>
                    </div>
                    <p className="scorecard__score">{hero.votes} votes</p>
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
