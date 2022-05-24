import React, { useEffect, useState } from 'react';
import './App.css';
import  ReactDOM  from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import './Components/style.css';


import AppRouter from './routes/appRouter';

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokedex, setPokedex] = useState();
  




return(
  <>
    <AppRouter />

  </>
)


 
};

export default App;
