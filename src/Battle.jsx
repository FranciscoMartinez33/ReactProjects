import React, { useEffect, useState } from "react";
import axios from 'axios';
import PokePerfil from "./PokePerfil";

const Battle = () =>{
    var randomNumber = Math.floor((Math.random() * 1126) + 1);
    var url = (`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    const [move, setMoves] = useState([]);
    const [data, load] = PokePerfil("https://pokeapi.co/api/v2/pokemon/ditto");
    const [data2, load2] = PokePerfil(url);
    const [life, setLife] = useState("");
    const [rlife, setRlife] = useState("");

   const moves = !data ? data : data.moves.slice(0,4);
   const moves2 = !data2 ? data2 : data2.moves.slice(0,4);
   var hp = !data ? data : data.stats.slice(0,1);
   var hp2 = !data2 ? data2 : data2.stats.slice(0,1);
   
   console.log(hp);

   const handleMove = async (direc) =>{
       const res = await axios.get(direc);
       
        if(res.data.accuracy !== 100) {
            var random = Math.floor((Math.random() * 100) + 1);
            if(random < res.data.accuracy){
                hp-= - res.data.power;
            }
        } else {
            hp -= - res.data.power;
        }
         };

    return (
        <>
            {load ? <h1>Loading....</h1> :
                (!data) ? "" : (
                    <>
                        <h3>Pokemon</h3>
                        <div>
                            {hp.map(item => {
                                
                                return (
                                    <>
                                        <p>HP : {item.base_stat} </p>
                                    </>
                                )
                            })}


                            <p>{data.name}</p>
                            <img src={data.sprites.front_default} alt="" />
                            <div> {moves.map(item => {

                                return (
                                    <>
                                        <div >
                                            <button onClick={()=>{
                                                handleMove(item.move.url)
                                            } }>{item.move.name}</button>
                                        </div>
                                    </>
                                )
                            })}
                            </div>
                            <p></p>
                        </div>
                    </>
                )
            }

            {load2 ? <h1>Loading....</h1> :
                (!data2) ? "" : (
                    <>
                        <h3>Rival</h3>
                        <div>
                            {hp2.map(item => {
                                return (
                                    <>
                                        <p>HP : {item.base_stat}</p>
                                    </>
                                )
                            })}
                            <p>{data2.name}</p>

                            <img src={data2.sprites.front_default} alt="" />
                            <div> {moves2.map(item => {

                                return (
                                    <>
                                        <div >
                                            <button onClick={()=>{}}>{item.move.name} </button>
                                        </div>
                                    </>
                                )
                            })}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
};
export default Battle;