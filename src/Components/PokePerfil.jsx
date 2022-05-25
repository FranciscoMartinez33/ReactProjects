import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { PagesContext } from "../pages/PagesContext";


const PokePerfil= ({data}) =>{
    const context = useContext(PagesContext);
    return(
       <>
           {
               (!data)?"":(
                   <>
                       <h2>{data.name}</h2>
                       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
                       <div className="abilities">
                           {
                               data.abilities.map(poke=>{
                                   return(
                                   <>
                                       <div className="group">
                                           <h3>{poke.ability.name}</h3>
                                       </div>
                                   </>
                                   )
                               })
                           }
                       </div>
                       <div className="base-stat">
                           {
                               data.stats.map(poke=>{
                                   return(
                                       <>
                                           <h4>{poke.stat.name} : {poke.base_stat}</h4>
                                       </>
                                   )
                               })
                           }

                       </div>
                        <div>
                        <Link to="/battle">
                            <button onClick ={context.setPoke(data)}>Elegir este pokemon</button>
                        </Link>
                        </div>

                   </>
               )
           }
          
       </>
   )
}

export default PokePerfil;