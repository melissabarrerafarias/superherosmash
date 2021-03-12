import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";

//semantic ui
import { Card, Icon, Image } from "semantic-ui-react";

const HeroCard = ({ hero }) => {
  const { loading, data } = useQuery(QUERY_HEROS);
  if (loading) {
    return <p>Still loading</p>;
  } else {
    console.log("This heros name is ");
    console.log(hero);
    return (
      <div className="wrapper ">
        {/* <Card className="herocard">
          <Image id="cardImage" src={hero.name} wrapped ui={false} />
          <Card.Content id="remove-padding">
            <Card.Header>{hero.name}</Card.Header>
            <Card.Meta>
              <span className="strength">Strength: {hero.strength}</span>
              <br></br>
              <span className="strength">Durability: {hero.durability}</span>
              <br></br>
              <span className="strength">Speed: {hero.speed}</span>
              <br></br>
              <span className="strength">Power: {hero.power}</span>
              <br></br>
              <span className="strength">Combat: {hero.combat}</span>
              <br></br>
            </Card.Meta>
            <Card.Description>Biography: {hero.biography}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              VOTES: NULL
            </a>
          </Card.Content>
        </Card> */}
        <div class="card">
          <img
            src={hero.imgurl}
            alt="Person"
            className="card__image offsetMove"
          ></img>
          <p className="offsetMove card__name">{hero.name}</p>
          <div class="grid-container offsetMove">
            <div class="grid-child-posts">Strength: {hero.strength}</div>
           <div class="meter red">
                <span style={{ width: "100%" }}></span>
              </div> 
            <div class="grid-child-posts">Durability: {hero.durability}</div> */}
             <div class="meter">
                <span style={{ width: "40%" }}></span>
              </div> 
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
          {/* <ul class="social-icons">
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-codepen"></i>
              </a>
            </li>
          </ul> */}
          <button className="offsetMove btn draw-border">Vote</button>
          <button className="offsetMove btn draw-border">More Info</button>
        </div>
      </div>
    );
  }
};

export default HeroCard;
