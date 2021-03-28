import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from './PokemonCard';
import Loading from "./../Loading";
import { fetchPokemons } from '../../data';
import { fetchStatus } from '../../consts/enums';
import { List } from "../../index.styled";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState(fetchStatus.LOADING);
    document.title = "Pokemons";

    useEffect(() => {
        fetchPokemons().then(pokemons => {
            setPokemonList(pokemons);
        });
    }, []);

    if (pokemonList === fetchStatus.LOADING) {
        return <Loading />
    }

    return (
        <List type="pokemon">
            <h2>List of pokemons:</h2>
            <div>
                {pokemonList.length === 0 ?
                    <p>No pokemons to show.</p>
                    :
                    <section>
                        {pokemonList.map(pokemon =>
                            <Link key={pokemon.id} to={"/pokemons/" + pokemon.id}>
                                <PokemonCard pokemon={pokemon} />
                            </Link>)}
                    </section>
                }
                <Link to="/pokemons/add">
                    <button>Add new</button>
                </Link>
            </div>
        </List>
    )
}

export default PokemonList;