import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main';
//import './Components/style.css';
import useGetData from './hooks/useGetData';
import axios from 'axios';
import Pokeinfo from './Components/Pokeinfo';
import Battle from './Battle';
import List from './List';
import Home from './Home';

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokedex, setPokedex] = useState();
  




return(
  <>
    <Battle />
  </>
)


 
};

export default App;
