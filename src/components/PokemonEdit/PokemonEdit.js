import { useEffect, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router";
import { updatePokemon, fetchPokemonDetails } from "../../data";
import { fetchStatus } from '../../enums';
import Loading from "../Loading";
import PokemonForm from "./../PokemonForm/PokemonForm";
import {EditPokemon} from "./index.styled";

const PokemonEdit = () => {
    const { id: pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(fetchStatus.LOADING);
    const history = useHistory();

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

    const handleSubmit = async (pokemon) => {
        await updatePokemon(pokemon);
        history.push("/pokemons/" + pokemon.id);
    }

    return (
        <EditPokemon>
            <h2>Edit pokemon</h2>
            <PokemonForm pokemon={pokemon} onSubmit={(pokemon) => handleSubmit(pokemon)} />
        </EditPokemon>
    )
}

export default PokemonEdit;