import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../utils/queries";
import backgroundImage from "../../src/img/hulk.png";

const StatsPage = () => {
  const {loading, data} = useQuery(QUERY_HEROS);
  

  if(loading){
  console.log("Loading ...");
  return(<div>L O A D I N G</div>)
  } else {

  console.log(data)
  for(const dat of data{
    console.log(dat)
  }
  
  
  return (
  <body
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "1000px" // added minheight for image full cover of page (can be taken off)
        }}
      >
<div>
  'hello world'
</div>
</body>
       
       )
};

export default StatsPage;
