import React, { useEffect, useState } from "react";
import useGetData from '../hooks/useGetData';
import axios from 'axios';

import Card from "./Card";
import PokePerfil from "./PokePerfil";
import Separator from "./Separator";


const List = ({ data, loading, error, infoPokemon }) => {

  const [url, setUrl] = useState("");

  const [pokemon, setPokemon] = useState([]);


  const [pokedex, setPokedex] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);



  var i = 0;
  var j = 10;
  const handlePrev = () => {
    setStart(start - 10);
    setEnd(end - 10);
    if (start === -10 && end === 0) {
      setStart(0);
      setEnd(10);
      getPokemon(data);
    } else {
      getPokemon(data);
    }
  };

  const handleNext = () => {
    setStart(start + 10);
    setEnd(end + 10);
    if (end >= 1130) {
      setEnd(1126);
      setStart(1120);
      getPokemon(data);
    } else {
      getPokemon(data);
    }
  };
  const getPokemon = async (data) => {
    loading = true;
    var arr = data.slice(start, end);
    arr.map(async (item) => {
      const result = await axios(item.url);
      setPokemon(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      });
    });
    loading = false;
  };



  useEffect(() => {
    setPokemon([]);
    getPokemon(data);
  }, []);

  useEffect(() => {
  }, [handleNext]);
  useEffect(() => {
  }, [handlePrev]);







  return (
    <>

      {loading ? (
        <h3>Cargando...</h3>
      ) : error ? (
        <h3>Error: {error.message}</h3>
      ) : (
        pokemon.map((item, i) => {
          return (

            <div className ={item.types[0].type.name} onClick={()=>infoPokemon(item)}>
              <Card pokemon={item} idx={i} />
              
            </div>

          )
        })
      )}
      <Separator height={"10px"} />
      <button onClick={() => {
        setPokemon([])
        handlePrev()
      }}>Prev</button>
      <button onClick={() => {
        setPokemon([])
        handleNext()
      }}>Next</button>


    </>
  )
};
export default List;


/*
import { useEffect, useState } from "react";
import axios from "axios";

export const useTrygetPokemon = (data, loading) =>{
    const [pokemon, setPokemon] = useState([]);
    const [pokedex, setPokedex] = useState ();

    const makeList = async () =>{
        try {
            loading = true;
          let k = 0;
          data.map(async(item) =>{
            const result = await axios (item.url);
            if(k !== 1126){
              k = k + 1;
              setPokedex(result.data);
               
                if(k % 10 === 0){
                  setPokemon(pokedex);
                  setPokedex();
                }
            }
          })
          loading = false;
            
          } catch (error) {
            console.log(error.message);
          }
   
}
useEffect(() =>{
    makeList();
}, [])
return pokemon;
};
*/