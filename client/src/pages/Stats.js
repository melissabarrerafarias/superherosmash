import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../utils/queries";


const StatsPage = () => {
  const [loading, data] = useQuery(QUERY_HEROS);
  return <div>"Hello World"</div>;
};

export default StatsPage;
