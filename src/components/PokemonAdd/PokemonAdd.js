import { useHistory } from "react-router";
import { createPokemon } from "../../data";
import PokemonForm from "../PokemonForm/PokemonForm";
import {AddWrapper} from "./index.styled";

const PokemonAdd = () => {
    const history = useHistory();
    document.title = "Add pokemon";

    const handleSubmit = async (pokemon) => {
        let createdPokemon = await createPokemon(pokemon);
        history.push("/pokemons/" + createdPokemon.id);
    }

    return (
        <AddWrapper>
            <h2>Add pokemon</h2>
            <PokemonForm onSubmit={(pokemon) => handleSubmit(pokemon)} />
        </AddWrapper>
    )
}

export default PokemonAdd;