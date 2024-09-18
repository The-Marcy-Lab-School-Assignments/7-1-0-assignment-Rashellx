import { useState } from "react"
import handleFetch from '../utils/handleFetch';
import PokemonContext from "../context/PokemonContext";
import { useContext } from "react";

const PokemonForm = () => {
    const [name, setName] = useState('')
    const [hp, setHp] = useState('')
    const [frontUrl, setFrontUrl] = useState('')
    const [backUrl, setBackUrl] = useState('')

    const { allPokemon, setAllPokemon } = useContext(PokemonContext)

    const formSubmit = async (e) => {
        e.preventDefault();
        const options = {                         //information needed for this request
            method: "POST",
            headers: {
                "Content-Type": "apllication/j.son"
            },
            body: JSON.stringify({ name: name, hp: hp, front: frontUrl, back: backUrl })
        }

        const [data, error] = await handleFetch('http://localhost:4000/pokemon', options)
        if (data) setAllPokemon([...allPokemon, data])
    }

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={formSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={hp} onChange={(e) => setHp(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={frontUrl} onChange={(e) => setFrontUrl(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={backUrl} onChange={(e) => setBackUrl(e.target.value)} />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
