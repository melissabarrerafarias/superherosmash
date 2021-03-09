import React from 'react';
import { useSpring, animated  as a } from 'react-spring';
import Arena from "./Arena";



const MOCK_HEROS = [
  
  {
    id: 1,
    name: "Hero1",
  },
  {
    id: 2,
    name: "Hero2",
  },
  {
    id: 3,
    name: "Hero3",
  },
  {
    id: 4,
    name: "Hero4",
  },
  {
    id: 5,
    name: "Hero5",
  },
];

const BattleGround = () => {
  
  const props = useSpring({opacity: 1, from:  {opacity : 0}})

  return (
    <a.div className="battleGround" style={props}>
      
      
       <Arena heros={MOCK_HEROS} />
      
    </a.div>
  );
};

export default BattleGround;
