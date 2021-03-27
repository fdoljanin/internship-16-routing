import { createPokemon } from "../data";
import PokemonForm from "./PokemonForm";

const PokemonAdd = () => {
    return (
        <section>
            <h2>Add pokemon</h2>
            <PokemonForm onSubmit={(pokemon) => createPokemon(pokemon)}/>
        </section>
    )
}

export default PokemonAdd;