import {useState} from "react";
import { createPokemon } from "../data";
import '../helpers';

const PokemonForm = ({ onSubmit, pokemon }) => {
    const [pokemonState, setPokemonState] = useState({
        id: pokemon?.id || null,
        name: pokemon?.name || "",
        description: pokemon?.description || ""
    });

    const handleChange = ({ target: { name, value } }) => {
        setPokemonState((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let pokemonToSend = {...pokemonState};
        pokemonToSend.name = pokemonToSend.name.beautify();
        pokemonToSend.description = pokemonToSend.description.beautify();

        onSubmit(pokemonToSend);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={pokemonState.name}
             placeholder="Pokemon name" onChange={handleChange}/>
            <input name="description" value={pokemonState.description}
             placeholder="Pokemon description" onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default PokemonForm;