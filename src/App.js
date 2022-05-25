import React, { useEffect, useState } from 'react';
import './App.css';
import  ReactDOM  from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import './Components/style.css';


import AppRouter from './routes/appRouter';
import Battle from './pages/Battle/Battle';
import { PagesContext } from './pages/PagesContext';

function App() {
  
  const [poke, setPoke] = useState();
  




return(
  <>
    <PagesContext.Provider value={{poke, setPoke}}>
      <AppRouter />
    </PagesContext.Provider >

  </>
)


 
};

export default App;
