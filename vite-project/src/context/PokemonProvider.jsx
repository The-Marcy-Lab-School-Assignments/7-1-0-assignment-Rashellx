import { useState } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "./PokemonContext";
import { useEffect } from "react";

// TODO: Import the PokemonContext

const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch("http://localhost:4000/pokemon");
            if (data) setAllPokemon(data);
        }
        doFetch()
    }, [])

    console.log(allPokemon)

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)

    // TODO: Add values to be included in the context here
    let contextValues = {
        allPokemon, setAllPokemon, userInput, setUserInput
    }

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <PokemonContext.Provider value={contextValues}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;