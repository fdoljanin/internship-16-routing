import { useHistory } from "react-router";
import { createPokemon } from "../../data";
import PokemonForm from "../PokemonForm/PokemonForm";
import {AddPokemon} from "./index.styled";

const PokemonAdd = () => {
    const history = useHistory();

    const handleSubmit = async (pokemon) => {
        let createdPokemon = await createPokemon(pokemon);
        history.push("/pokemons/" + createdPokemon.id);
    }

    return (
        <AddPokemon>
            <h2>Add pokemon</h2>
            <PokemonForm onSubmit={(pokemon) => handleSubmit(pokemon)} />
        </AddPokemon>
    )
}

export default PokemonAdd;