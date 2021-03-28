import {useState} from "react";
import {Form} from "../../index.styled";
import '../../consts/helpers';

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
        <Form onSubmit={handleSubmit} type="pokemon">
                <div className="input-section">
                    <label htmlFor="name">Name</label>
                    <input name="name" value={pokemonState.name}
                     placeholder="Pokemon name" onChange={handleChange} required/>
                </div>
                <div className="input-section">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={pokemonState.description}
                     placeholder="Pokemon description" onChange={handleChange}
                     rows="3" required/>
                </div>
                <button type="submit">Submit</button>
        </Form>
    )
}

export default PokemonForm;