import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { updatePokemon, fetchPokemonDetails } from "../data";
import * as consts from '../enums';
import PokemonForm from "./PokemonForm";

const PokemonEdit = () => {
    const { id: pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(consts.fetchStatus.LOADING);

    useEffect(() => {
        fetchPokemonDetails(pokemonId).then(pokemon => {
            setPokemon(pokemon || consts.fetchStatus.NOTFOUND);
        });
    }, []);

    if (pokemon === consts.fetchStatus.LOADING) {
        return null;
    }

    return (
        <section>
            <h2>Edit pokemon</h2>
            <PokemonForm pokemon={pokemon} onSubmit={(pokemon) => updatePokemon(pokemon)} />
        </section>
    )
}

export default PokemonEdit;