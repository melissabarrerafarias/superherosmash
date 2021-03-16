import React from "react";
import backgroundImage from "../../src/img/hulk.png";
import LeaderBoard from "../components/LeaderBoard"

const StatsPage = () => {
  
    return (
      <body
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "1000px", // added minheight for image full cover of page (can be taken off)
        }}
      >

      <LeaderBoard></LeaderBoard>

      </body>
    );
  
};

export default StatsPage;
