import React from 'react';
import {connect} from "react-redux";
import './App.css';

//context
import {ActionsProvider} from "../contexts/ActionsContext";
import {usePokemonActions} from "../store/pokemon/useActions";

//components
import PokemonList from "./PokemonList";

function App ({pokeData}) {
   const actions = usePokemonActions();

   return (
      <div className="App">
         <p>
            {
               (pokeData.length > 0)
               ?  <p>{pokeData.length}</p> 
               :  <p>There is no data</p>
            }
         </p>
         <ActionsProvider value={{actions}}>
            <PokemonList />
         </ActionsProvider>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      pokeData: state.pokemon.list
   };
};
export default connect(mapStateToProps)(App);
