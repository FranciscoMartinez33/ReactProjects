import React, { useState, useEffect } from "react";
import axios from "axios";

const Paginator = (data) =>{
    const [pokemon, setPokemon] = useState([]);
    const [arr, setArr]= useState([]);
    
    
    var i = 0;
    var j = 10;
    
    
    console.log(data.slice(i,j));
    
    /*const getPokemon = async (data) => {
      
      pokeLista(data).map(async(item) =>{
        const result = await axios.get(item.url);
        setPokemon(result.data);
      });
    };*/
    
};
export default Paginator; 