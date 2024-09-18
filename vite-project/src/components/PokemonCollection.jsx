import PokemonCard from './PokemonCard';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    // const allPokemon = [];

    const { allPokemon, userInput } = useContext(PokemonContext);

    return (
        <div className="ui six cards">
            {allPokemon?.filter((pokemon) => pokemon.name.includes(userInput)).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}

export default PokemonCollection