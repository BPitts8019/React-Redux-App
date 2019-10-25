import React, {useEffect, useContext} from "react";
import {connect} from "react-redux";

//context
import {ActionsContext} from "../contexts/ActionsContext";
import {usePokemonActions} from "../store/pokemon/useActions";

//components

function PokemonList({pokemon}) {
   const {actions: {fetchPokemon}} = useContext(ActionsContext);

   useEffect(() => {
      fetchPokemon();
   }, []);

   return (
      <div>hello world</div>
   );
}

const mapStateToProps = state => {
   return {
      pokemon: state.pokemon.list
   };
};
export default connect(mapStateToProps)(PokemonList);