import {React} from "react";

function PokemonCard ({pokemon}) {
   return (
      <div>
         <p>{pokemon.name}</p>
      </div>
   );
}

export default PokemonCard;