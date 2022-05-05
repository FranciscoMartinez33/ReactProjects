import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main';
import './Components/style.css';
import useGetData from './hooks/useGetData';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [data, loading, error] = useGetData("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  
  const [inputValue, setInputValue] = useState("");

 /* const getPokemon = async(data) => {
    data.map(async(item) =>{
      const result = await axios.get(item.url);
      setPokemon(state => {
        state = [...state, result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
      });
    })
  };
  console.log(pokemon);*/



const handleChange = (e) => {
  setInputValue(e.target.value.toLowerCase());
  
};

const results = !inputValue ? data : data.filter((value) => value.name.toLowerCase().includes(inputValue.toLocaleLowerCase()));

  
 

  return (
    <>
    <input type="text" onChange={handleChange} value={inputValue} />
    <h1>Caracteres</h1>
    {loading ? (
        <h3>Cargando...</h3>
      ) : error ? (
        <h3>Error: {error.message}</h3>
      ) : (
        results.map((item, i) => {
          return (
            <div>
            <h2 key={i}>{item.name}</h2>
            
            </div>  
                   
          )
        })
      )}
  
    </>
  );
};

export default App;
