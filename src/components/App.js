import React from 'react';
import './App.css';

import {ActionsContext, ActionsProvider} from "../contexts/ActionsContext";
import {usePokemonActions} from "../store/pokemon/useActions";

// import PokemonList from "./PokemonList";

function App() {
   const actions = usePokemonActions();

   return (
      <div className="App">
         <header className="App-header">This is an App!!</header>
         <ActionsProvider value={actions}>
            <p>Display some pokemon</p>
         </ActionsProvider>
      </div>
   );
}

export default App;
