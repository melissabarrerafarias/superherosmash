import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";
import { ADD_VOTE } from "../../utils/mutations";
import { useSpring, animated as a } from "react-spring";

//semantic ui
// import { Card, Icon, Image } from "semantic-ui-react"; <- Not being used but might end up being used

const HeroCard = ({ hero, setNew }) => {
  console.log("SetNew");
  console.log(setNew);
  console.log("HeroCard", hero);
  const { loading, data } = useQuery(QUERY_HEROS);
  const [addVote, { error }] = useMutation(ADD_VOTE);


  // mock props
  const props = useSpring({ "opacity": 1, from: { "opcaity": 0  } });
  
  const addVoteHandler = async (e) => {
    e.preventDefault();
    console.log("Voted for me!");
    // use try/catch instead of promises to handle errors

    // Set the other hero to something else
    setNew();

    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addVote({
        variables: { id: hero.id, name: hero.name },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
    // console.log("This heros name is ");
    console.log(hero);
    return (
      <div  className="wrapper ">
        <a.div style={props} class="card ">
          <img
            src={hero.imgurl}
            alt="Person"
            className="card__image offsetMove"
          ></img>
          <p id="heroName" className="offsetMove card__name">
            {hero.name}
          </p>
          <div class="grid-container offsetMove">
            <div class="grid-child-posts">Strength:</div>
            <div className="container-bar">
              <div className="skill " style={{ width: `${hero.strength}%` }}>
                {" "}
                <p>Secret</p>
              </div>
            </div>
            <div class="grid-child-posts">Durability:</div>{" "}
            <div className="container-bar">
              <div className="skill " style={{ width: `${hero.durability}%` }}>
                {" "}
                <p>Secret</p>
              </div>
            </div>
            <div class="grid-child-posts">Speed: </div>
            <div className="container-bar">
              <div className="skill " style={{ width: `${hero.speed}%` }}>
                {" "}
                <p>Secret</p>
              </div>
            </div>
            <div class="grid-child-posts">Power:</div>
            <div className="container-bar">
              <div className="skill " style={{ width: `${hero.power}%` }}>
                {" "}
                <p>Secret</p>
              </div>
            </div>
            <div class="grid-child-posts">Combat:</div>
            <div className="container-bar">
              <div className="skill " style={{ width: `${hero.combat}%` }}>
                {" "}
                <p>Secret</p>
              </div>
            </div>
          </div>
          <br/>
          <button
            onClick={addVoteHandler}
            className="offsetMove btn draw-border"
          >
            Vote
          </button>
        </a.div>
      </div>
    );
};

export default HeroCard;
