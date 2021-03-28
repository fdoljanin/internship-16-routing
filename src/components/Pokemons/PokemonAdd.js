import { useHistory } from "react-router";
import PokemonForm from "./PokemonForm";
import { createPokemon } from "../../data";
import {FormWrapper} from "../../index.styled";

const PokemonAdd = () => {
    const history = useHistory();
    document.title = "Add pokemon";

    const handleSubmit = async (pokemon) => {
        let createdPokemon = await createPokemon(pokemon);
        history.push("/pokemons/" + createdPokemon.id);
    }

    return (
        <FormWrapper>
            <h2>Add pokemon</h2>
            <PokemonForm onSubmit={(pokemon) => handleSubmit(pokemon)} />
        </FormWrapper>
    )
}

export default PokemonAdd;