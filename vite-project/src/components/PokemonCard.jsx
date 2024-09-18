import { useState } from "react";

// TODO: This component should render a single pokemon's stats and image.

const PokemonCard = ({ pokemon }) => {
    const [spriteToggle, setSpriteToggle] = useState(true)
    const handleClick = () => {
        setSpriteToggle(!spriteToggle);
    }

    return (
        <div className="ui card">
            <div>
                <div className="image" onClick={handleClick}>
                    <img alt="pokemon name" src={spriteToggle ? pokemon.front : pokemon.back} />
                </div>
                <div className="content">
                    <div className="header">{pokemon.name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {pokemon.hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard