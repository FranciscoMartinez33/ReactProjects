import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState, useEffect } from "react";



const Main=()=>{
    const [pokemon, setPokemon] = useState([]);
    const [load, setLoad] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=10");
    const [nextUrl, setNextUrl]= useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
  
    const pokeDo = async () => {
      setLoad(true);
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoad(false);
    }
  
    const getPokemon = async(res) => {
      res.map(async(item) =>{
        const result = await axios.get(item.url);
        setPokemon(state => {
          state = [...state, result.data]
          state.sort((a,b)=>a.id>b.id?1:-1)
          return state;
        });
      })
    };
    /*const [datas, loading, error] = useGetData("https://pokeapi.co/api/v2/pokemon");
  
    const [inputValue, setInputValue] = useState("");



  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
    
   
  };

  const results = !inputValue ? datas.results : datas.results.filter((value) => value.name.toLowerCase().includes(inputValue.toLocaleLowerCase()));

  */
    useEffect(()=>{
      pokeDo();
    },[url]);
    //const [data, loading, error] =useGetData("https://pokeapi.co/api/v2/pokemon?limit=100000");
    
    return(
        <>
        
            <div className="container">
                <div className="left content">
                    <Card pokemon={pokemon} loading={load} infoPokemon={poke=>setPokeDex(poke)}/>
                    <div className="btn-group">
                        {prevUrl && <button onClick={()=>{
                          setPokemon([])
                          setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={()=>{
                          setPokemon([])
                          setUrl(nextUrl)
                        }}>Next</button>}
                    </div>  
                </div>
                <div className="right content">
                    <Pokeinfo data={pokeDex}/>
                </div>
            </div>

        </>
    )
};

export default Main;