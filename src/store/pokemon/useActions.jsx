import axios from "axios";
import {
   FETCH_POKEMON_START,
   FETCH_POKEMON_DONE, 
   FETCH_POKEMON_ERROR 
} from "./actionTypes";

export function usePokemonActions () {
   const fetchPokemon = dispatch => {
      dispatch({type: FETCH_POKEMON_START});

      axios
         .get("https://reqres.in/api/pokemon")
         .then(response => {
            dispatch({type: FETCH_POKEMON_DONE, payload: response.data});
         })
         .catch(error => {
            dispatch({type: FETCH_POKEMON_ERROR, payload: error.response});
            console.error(error.response);
         })
   };
   
   return {fetchPokemon};
}