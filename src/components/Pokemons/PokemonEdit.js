import { useEffect, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router";
import Loading from "./../Loading";
import PokemonForm from "./PokemonForm";
import { updatePokemon, fetchPokemonDetails } from "../../data";
import { fetchStatus } from '../../consts/enums';
import { FormWrapper } from "../../index.styled";

const PokemonEdit = () => {
    const { id: pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(fetchStatus.LOADING);
    const history = useHistory();

    useEffect(() => {
        fetchPokemonDetails(pokemonId).then(pokemon => {
            setPokemon(pokemon || fetchStatus.NOTFOUND);
            document.title = "Edit " + pokemon.name;
        });
    }, []);

    if (pokemon === fetchStatus.LOADING) {
        document.title = "Loading...";
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
        <FormWrapper>
            <h2>Edit pokemon</h2>
            <PokemonForm pokemon={pokemon} onSubmit={(pokemon) => handleSubmit(pokemon)} />
        </FormWrapper>
    )
}

export default PokemonEdit;