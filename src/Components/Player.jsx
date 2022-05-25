import React, { useContext, useEffect, useState } from "react";
import { PagesContext } from "../pages/PagesContext";


const Player = ({pokemon}) => {
   
    
    
    
  return (
    (!pokemon) ? "" : (
        <>
            <h3>Pokemon</h3>
            <div>
                <p>HP: </p>


                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt="" />
                <div> 
                    
                </div>
                <p></p>
            </div>
        </>
    )

  )
}

export default Player