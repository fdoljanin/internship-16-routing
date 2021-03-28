import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import {Link} from "react-router-dom";
import { fetchPokemonDetails } from "../../data";
import {fetchStatus} from '../../enums';
import Loading from "../Loading";
import {Pokemon} from "./index.styled";

const PokemonDetails = () => {
    const { id: pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(fetchStatus.LOADING);

    useEffect(() => {
        fetchPokemonDetails(pokemonId).then(pokemon => {
            setPokemon(pokemon || fetchStatus.NOTFOUND);
        });
    }, []);

    if (pokemon === fetchStatus.LOADING) {
        return <Loading />;
    }

    if (pokemon === fetchStatus.NOTFOUND) {
        return <Redirect to="/404" />
    }

    return (
        <Pokemon>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.description}</p>
            <Link to={"../pokemons/edit/"+pokemon.id}>
                <button>Edit</button>
            </Link>
        </Pokemon>
    )
}

export default PokemonDetails;