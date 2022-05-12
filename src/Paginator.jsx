import React, { useState, useEffect } from "react";
import axios from "axios";

const Paginator = (data, loading) =>{
  const [pokemon, setPokemon] = useState([]);
  const [pokedex, setPokedex] = useState ();

  const makeList = async () =>{
    loading = true;
    try {

      let k = 0;
      data.map(async (item) => {
        const result = await axios(item.url);
        if (k !== 1126) {
          k = k + 1;
          setPokedex(result.data);

          if (k % 10 === 0) {
            setPokemon(pokedex);
            setPokedex();
          }
        }
      })


    } catch (error) {
      console.log(error.message);
    }
    loading = false;

  }
useEffect(() =>{
  makeList();
}, [])
return [pokemon, loading];
};
export default Paginator; 