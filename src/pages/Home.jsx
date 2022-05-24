import React, { useEffect, useState } from "react";
import useGetData from '../hooks/useGetData';
import axios from 'axios';
import List from "../components/List";
import Results from "../components/Results";

import PokePerfil from "../components/PokePerfil";
import Separator from "../components/Separator";

const Home = () => {
    const [data, loading, error] = useGetData("https://pokeapi.co/api/v2/pokemon?limit=100000");
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);
    const [url, setUrl]=useState("");
    const [pokeDex, setPokeDex] = useState();

    const handleChange = (e) => {
        setInputValue(e.target.value.toLowerCase());
        setList(results);
      };
      
    const results = !inputValue ? data : data.filter((value) => value.name.toLowerCase().includes(inputValue.toLocaleLowerCase()));
    
    
  useEffect(()=>{
    
  },[handleChange]);

  return (
    <>
      <div className="app-contaner">
        <input type="text" onChange={handleChange} value={inputValue} />
        <h1>Pokemon</h1>
        <div className="pokemon-container">
          {loading ? <h1>Loading..</h1> :
            (results) ? (
              <div className="all-container">
                <List data={data} loading={loading} error={error} infoPokemon={poke=>setPokeDex(poke)}/>
                <Separator height={"30px"} />
                <PokePerfil data={pokeDex}/>
              </div>) : (
              <>
                <div>
                  <Results list={list} />
                </div>
              </>
            )
          }
           
        </div>
      </div>
      
    </>
  )
};

export default Home;
/*
{results.map(item => {
  return { 
    setUrl(item.url)
  }
  <>
  <Results url ={url} />
  </>
 })}*/