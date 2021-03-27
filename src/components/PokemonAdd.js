import {useHistory} from "react-router";
import { createPokemon } from "../data";
import PokemonForm from "./PokemonForm";

const PokemonAdd = () => {
    const history = useHistory();

    const handleSubmit = async (pokemon) => {
        let createdPokemon = await createPokemon(pokemon);
        history.push("/pokemons/"+createdPokemon.id);
    }

    return (
        <section>
            <h2>Add pokemon</h2>
            <PokemonForm onSubmit={(pokemon) => handleSubmit(pokemon)} />
        </section>
    )
}

export default PokemonAdd;