import React, { useEffect, useState } from "react";
import axios from 'axios';
import PokePerfil from "./PokePerfil";

const Battle = () => {
    var randomNumber = Math.floor((Math.random() * 1126) + 1);
    var url = (`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    const [move, setMoves] = useState([]);
    const [rmove, setRmove] = useState([]);
    const [data, load] = PokePerfil("https://pokeapi.co/api/v2/pokemon/pikachu");
    const [data2, load2] = PokePerfil(url);
    const [life, setLife] = useState(0);
    const [rlife, setRlife] = useState(0);

    
    var moves = !data ? data : data.moves.slice(0, 4);
    setMoves(moves);
    var hp = !data ? data : data.stats.find(base_stat => base_stat.stat.name === 'hp');
    setLife(hp.map(item => { return (item.base_stat) }));

    var moves2 = !data2 ? data2 : data2.moves.slice(0, 4);
    setRmove(moves2);
    var hp2 = !data2 ? data2 : data2.stats.slice(0, 1);
    setRlife(hp2.map(item => { return (item.base_stat) }));


    var rand = 0;
    
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
  
       
    };*/

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
            {load ? <h1>Loading....</h1> :
                (!data) ? "" : (
                    <>
                        <h3>Pokemon</h3>
                        <div>
                            <p>HP: {life}</p>


                            <p>{data.name}</p>
                            <img src={data.sprites.front_default} alt="" />
                            <div> 
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


                            <p>HP : {rlife}</p>



                            <p>{data2.name}</p>

                            <img src={data2.sprites.front_default} alt="" />
                            <div> 
                            </div>
                        </div>
                    </>
                )
            }
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

