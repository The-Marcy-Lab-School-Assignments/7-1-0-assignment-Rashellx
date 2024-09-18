// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import PokemonContext from "../context/PokemonContext"
import { useContext } from "react"

const Filter = () => {
    const { userInput, setUserInput } = useContext(PokemonContext);
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..."
                    value={userInput} onChange={(e) => setUserInput(e.target.value)}
                />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter