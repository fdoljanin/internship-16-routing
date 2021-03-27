import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPokemonDetails } from "../data";
import * as consts from '../enums';

const PokemonDetails = () => {
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
            <h2>{pokemon.name}</h2>
            <p>{pokemon.description}</p>
        </section>
    )
}

export default PokemonDetails;