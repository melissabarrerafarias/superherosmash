import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_VOTE } from "../../utils/mutations";

const HeroCard = ({ hero, setNew }) => {
  const [defaultImg, setDefaultImg] = useState(hero.imgurl);
  const onImgError = () => {
    setDefaultImg("https://i.imgur.com/Kv5BdNk.png");
  };
  const [addVote] = useMutation(ADD_VOTE);

  const addVoteHandler = async (e) => {
    e.preventDefault();
    // use try/catch instead of promises to handle errors

    // Set the other hero to something else
    setNew();

    try {
      // execute addUser mutation and pass in variable data from form
      await addVote({
        variables: { id: hero.id, name: hero.name },
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="wrapper ">
      <div className="card">
        <img
          src={defaultImg}
          alt="Person"
          className="card__image offsetMove"
          onError={onImgError}
        ></img>

        <p id="heroName" className="offsetMove card__name">
          {hero.name}
        </p>
        <div className="grid-container offsetMove">
          <div className="grid-child-posts">Strength:</div>
          <div className="container-bar">
            <div className="skill " style={{ width: `${hero.strength}%` }}>
              {" "}
              <p>Secret</p>
            </div>
          </div>
          <div className="grid-child-posts">Durability:</div>{" "}
          <div className="container-bar">
            <div className="skill " style={{ width: `${hero.durability}%` }}>
              {" "}
              <p>Secret</p>
            </div>
          </div>
          <div className="grid-child-posts">Speed: </div>
          <div className="container-bar">
            <div className="skill " style={{ width: `${hero.speed}%` }}>
              {" "}
              <p>Secret</p>
            </div>
          </div>
          <div className="grid-child-posts">Power:</div>
          <div className="container-bar">
            <div className="skill " style={{ width: `${hero.power}%` }}>
              {" "}
              <p>Secret</p>
            </div>
          </div>
          <div className="grid-child-posts">Combat:</div>
          <div className="container-bar">
            <div className="skill " style={{ width: `${hero.combat}%` }}>
              {" "}
              <p>Secret</p>
            </div>
          </div>
        </div>
        <button onClick={addVoteHandler} className="offsetMove btn draw-border">
          Vote
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
