import React from 'react';
import { useSpring, animated  as a } from 'react-spring';


const HeroCard = ({hero}) =>{
    console.log({hero})
    
    const propss = useSpring({width: '300px', from: {width: '10px'}})
    
    return(
        <a.div className="HeroCard" style={propss}> 
        <div >Hero Name: {hero.name} Hero Id: {hero.id}</div>
        </a.div>
    );
}

export default HeroCard;
