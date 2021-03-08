import React from 'react';




const HeroCard = (hero) =>{
    return(
        <div class="HeroCard">Hero Name: {hero.name} Hero Id: {hero.id}</div>
    );
}

export default HeroCard;
