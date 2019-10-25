import {FETCH_POKEMON_START, FETCH_POKEMON_DONE, FETCH_POKEMON_ERROR} from "./actionTypes";

const initialState = {
   pokemon: [],
   isloading: false,
   error: null
};

export default function (state = initialState, action) {
   switch (action.type) {
      case FETCH_POKEMON_START:
         return {
            ...state,
            pokemon: [],
            isloading: true,
            error: null
         }
      case FETCH_POKEMON_DONE:
         return {
            ...state,
            pokemon: action.payload,
            isloading: false
         }
      case FETCH_POKEMON_ERROR:
         return {
            ...state,
            pokemon: [],
            isloading: false,
            error: action.payload
         }
      default:
         return state;
   }
}