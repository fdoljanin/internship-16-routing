import {useState} from "react";
import '../../helpers';
import {Form} from "./index.styled";

const PokemonForm = ({ onSubmit, pokemon }) => {
    const [pokemonState, setPokemonState] = useState({
        id: pokemon?.id || null,
        name: pokemon?.name || "",
        description: pokemon?.description || ""
    });

    const handleChange = ({ target: { name, value } }) => {
        setPokemonState((prevState) => ({ ...prevState, [name]: value.trimStart() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let pokemonToSend = {...pokemonState};
        pokemonToSend.name = pokemonToSend.name.beautify();
        pokemonToSend.description = pokemonToSend.description.beautify();

        onSubmit(pokemonToSend);
    }
    return (
        <Form onSubmit={handleSubmit}>
                <div class="input-section">
                    <label for="name">Name</label>
                    <input name="name" value={pokemonState.name}
                     placeholder="Pokemon name" onChange={handleChange} required/>
                </div>
                <div class="input-section">
                    <label for="description">Description</label>
                    <textarea name="description" value={pokemonState.description}
                     placeholder="Pokemon description" onChange={handleChange}
                     rows="3" required/>
                </div>
                <button type="submit">Submit</button>
        </Form>
    )
}

export default PokemonForm;