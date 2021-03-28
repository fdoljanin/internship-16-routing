import { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "./../Loading";
import Confirm from "./../Confirm";
import { deletePokemon, fetchPokemonDetails } from "../../data";
import { fetchStatus } from '../../consts/enums';
import { DetailsWrapper } from "../../index.styled";

const PokemonDetails = () => {
    const { id: pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(fetchStatus.LOADING);
    const [shouldShowDeletePopup, setShouldShowDeletePopup] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetchPokemonDetails(pokemonId).then(pokemon => {
            setPokemon(pokemon || fetchStatus.NOTFOUND);
            document.title = pokemon?.name;
        });
    }, []);

    if (pokemon === fetchStatus.LOADING) {
        document.title = "Loading";
        return <Loading />;
    }

    if (pokemon === fetchStatus.NOTFOUND) {
        return <Redirect to="/404" />

    }

    const showDeletePopup = () => {
        if (shouldShowDeletePopup)
            return <Confirm
                text="Do you really want to delete?"
                accept={async () => {
                    await deletePokemon(pokemon);
                    history.push("/pokemons");
                }}
                cancel={() => setShouldShowDeletePopup(false)}
            />
    }

    return (
        <DetailsWrapper type="pokemon">
            <h2>{pokemon.name}</h2>
            <p>{pokemon.description}</p>
            <Link to={"../pokemons/edit/" + pokemon.id}>
                <button>Edit</button>
            </Link>
            <button className="button-delete" onClick={() => setShouldShowDeletePopup(true)}>Delete</button>
            {showDeletePopup()}
        </DetailsWrapper>
    )
}

export default PokemonDetails;