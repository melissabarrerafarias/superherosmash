import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";
import { ADD_VOTE } from "../../utils/mutations";

//semantic ui
import { Card, Icon, Image } from "semantic-ui-react";

const HeroCard = ({ hero, setNew }) => {
  console.log("SetNew");
  console.log(setNew);

  const { loading, data } = useQuery(QUERY_HEROS);
  const [addVote, { error }] = useMutation(ADD_VOTE);

  const addVoteHandler = async (e) => {
    e.preventDefault();
    console.log("Voted for me!");
    // use try/catch instead of promises to handle errors

    // Set the other hero to something else
    setNew();

    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addVote({
        variables: { id: 1 },
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
          <p className="offsetMove card__name">{hero.name}</p>
          <div class="grid-container offsetMove">
            <div class="grid-child-posts">Strength: {hero.strength}</div>
            {/* <div class="meter red">
                <span style={{ width: "100%" }}></span>
              </div>  */}
            <div class="grid-child-posts">Durability: {hero.durability}</div>{" "}
            {/* <div class="meter">
              <span style={{ width: "40%" }}></span>
            </div> */}
            <div class="grid-child-posts">Speed: {hero.speed}</div>
            {/* <div class="meter">
                <span style={{ width: "100%" }}></span>
              </div> */}
            <div class="grid-child-posts">Power: {hero.power}</div>
            {/* <div class="meter">
                <span style={{ width: "100%" }}></span>
              </div> */}
            <div class="grid-child-posts">Combat: {hero.combat}</div>
            {/* <div class="meter">
                <span style={{ width: "100%" }}></span>
              </div> */}
          </div>

          <button
            onClick={addVoteHandler}
            className="offsetMove btn draw-border"
          >
            Vote
          </button>
          <button className="offsetMove btn draw-border">More Info</button>
        </div>
      </div>
    );
  }
};

export default HeroCard;
