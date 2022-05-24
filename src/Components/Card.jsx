import React from "react";

const Card = ({pokemon, idx}) =>{
    return (
        <>
            <div className="thumb-container">
              <h3 key={idx}>{pokemon.name}</h3>
              <img src={pokemon.sprites.front_default} />
            </div>
        </>
    )
};

export default Card;