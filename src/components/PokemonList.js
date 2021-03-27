import { useEffect, useState } from "react";
import PokemonCard from './PokemonCard';
import { fetchStatus } from '../enums';
import { fetchPokemons } from '../data';
import { Link } from "react-router-dom";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState(fetchStatus.LOADING);

    useEffect(() => {
        fetchPokemons().then(pokemons => {
            setPokemonList(pokemons);
        });
    }, []);

    if (pokemonList === fetchStatus.LOADING) {
        return null;
    }

    return (
        <section>
            {pokemonList.map(pokemon =>
                <Link key={pokemon.id} to={""+pokemon.id}>
                    <PokemonCard pokemon={pokemon} />
                </Link>)}
        </section>
    )
}

export default PokemonList;