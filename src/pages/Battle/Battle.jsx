import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import PokePerfil from "../../components/PokePerfil";
import useBattle from "./useBattle";

import useInfo, { pokeInfo } from "./useInfo";
import Player from "../../components/Player";
import { PagesContext } from "../PagesContext";

const Battle = () => {
    
    const context = useContext(PagesContext);
    var randomNumber = Math.floor((Math.random() * 1126) + 1);
    var url = (`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
   
    const [data2, load2, error2] = useBattle(url);
    const rlife = pokeInfo.tryGetHp(data2);

   // const [move2, life2] = useInfo(data2);    

    /*
    var moves = !context.poke ? context.poke : context.poke.moves.slice(0, 4);
    setMoves(moves);
    

    var moves2 = !data2 ? data2 : data2.moves.slice(0, 4);
    setRmove(moves2);
    var hp2 = !data2 ? data2 : data2.stats.slice(0, 1);
    setRlife(hp2);


   /* var rand = 0;
    
    /*const handleMove = async (direc) => {
       const res = await axios.get(direc);

       
        if(res.data.accuracy !== 100) {
            var random = Math.floor((Math.random() * 100) + 1);
           
            if(random < res.data.accuracy){
                setRlife(rlife - res.data.power);
            }
        } else {
            /*rand = Math.floor((Math.random() * 4) + 1);
            setTimeout(() => {console.log(data.name + ` uso ${rmove[rand].name}`)}, 3000);
            let attack = rattack(rand);
                
                    
                    if(attack.accuracy !== 100) {
                        random = Math.floor((Math.random() * 100) + 1);
                       
                        if(random < attack.accuracy){
                            setLife(life - attack.power);
                        }
                    }else{
                        setLife(life - attack.power);
                    }
                

     
            
        }setRlife(rlife - res.data.power);
  
       
    };

    const rattack = async (rand) => {
        const result = await axios.get(rmove[rand].url);
        return result.data;
    };

    useEffect(() => {

    }, [rattack(rand)]);

   /* useEffect(() => {

    }, [handleMove]);*/

    return (
        <>
            {load2 ? <h1>Loading....</h1> :
            (!data2) ? "" : (
            <>
            <h3>Rival</h3>
            <div>
                <p>HP: {rlife} </p>


                <p>{data2.name}</p>
                <img src={data2.sprites.front_default} alt="" />
            </div>
            </>
            )    
            }

            
            <Player pokemon={context.poke}/>
        </>
    )
};
export default Battle;


/*
{moves.map(item => {

                                return (
                                    <>
                                        <div >
                                            <button onClick={() => {
                                                handleMove(item.move.url)
                                            }}>{item.move.name}</button>
                                        </div>
                                    </>
                                )
                            })}


{moves2.map(item => {

                                return (
                                    <>
                                        <div >
                                            <button >{item.move.name} </button>
                                        </div>
                                    </>
                                )
                            })}*/

