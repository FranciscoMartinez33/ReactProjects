import React, { useEffect, useState } from "react";
import useGetData from './hooks/useGetData';
import axios from 'axios';
import Paginator from "./Paginator";
import Pokeinfo from "./Components/Pokeinfo";
import Card from "./Components/Card";
import PokePerfil from "./PokePerfil";

const List = () => {
    const [data, loading, error] = useGetData("https://pokeapi.co/api/v2/pokemon?limit=100000");
    const [inputValue, setInputValue] = useState("");
    const [url, setUrl] = useState ("");
    const [poke, load] = PokePerfil(url);
    
    
     

    /*const [pokemon, setPokemon] = useState([]);
    const [pokedex, setPokedex] = useState ();
  
    
    var i = 0;
    var j = 10;
    var arr = !data ? data : data.slice(i,j);


    const getPokemon = async (arr) => {
      loading = true;
      arr.map(async (item) =>{
        const result = await axios (item.url);
        setPokemon(state => {
          state = [...state, result.data]
          state.sort((a,b)=>a.id>b.id?1:-1)
          return state;
        });
      });
      loading= false;
    };
    console.log(pokemon);
    useEffect(()=>{
      getPokemon(arr);
    },[])
    */
    
    const handleChange = (e) => {
        setInputValue(e.target.value.toLowerCase());
        
      };
      
      const results = !inputValue ? data : data.filter((value) => value.name.toLowerCase().includes(inputValue.toLocaleLowerCase()));
    
   /*return (
     <>
     <Paginator value={data}/>
     </>
   )
   */
    return(
    <>
        <input type="text" onChange={handleChange} value={inputValue} />
        <h1>Pokemon</h1>
        <div className="right content">
          <Pokeinfo data={poke} />
        </div>
        {loading ? (
          <h3>Cargando...</h3>
        ) : error ? (
          <h3>Error: {error.message}</h3>
        ) : (
          results.map((item, i) => {
            return (
              <div className="card" onClick={
                () => setUrl(item.url)
              }>
                <h2 key={i}>{item.name}</h2>
              </div>

            )
          })
        )}


      </>
    )
};
export default List;