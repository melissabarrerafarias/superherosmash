import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";
import { ADD_VOTE } from "../../utils/mutations";

//semantic ui
import { Card, Icon, Image } from "semantic-ui-react";

const HeroCard = ({ hero, setNew }) => {
  console.log("SetNew");
  console.log(setNew);
  console.log("HeroCard", hero);
  const { loading, data } = useQuery(QUERY_HEROS);
  const [addVote, { error }] = useMutation(ADD_VOTE);

  const addVoteHandler = async (e) => {
    e.preventDefault();
    console.log("Voted for me!");
    // use try/catch instead of promises to handle errors

    // Set the other hero to something else
    setNew();

    try {
      let heroName = document.getElementById("heroName").innerHTML;
      // execute addUser mutation and pass in variable data from form
      const { data } = await addVote({
        variables: { id: hero.id, name: hero.name },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  if (loading) {
    return <p>Still loading</p>;
  } else {
    // console.log("This heros name is ");
    console.log(hero);
    return (
      <div className="wrapper ">
        <div class="card ">
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

          <button
            onClick={addVoteHandler}
            className="offsetMove btn draw-border"
          >
            Vote
          </button>
        </div>
      </div>
    );
  }
};

export default HeroCard;
