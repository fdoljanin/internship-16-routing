export const fetchPokemons = () =>
    fetch(`http://localhost:5000/pokemons`).then(response => response.json());

export const fetchPokemonDetails = (pokemonId) =>
    fetch(`http://localhost:5000/pokemons/${pokemonId}`).then((response) => response.json());

export const createPokemon = (pokemon) =>
    fetch(`http://localhost:5000/pokemons`, {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => response.json())

export const updatePokemon = (pokemon) =>
    fetch(`http://localhost:5000/pokemons/${pokemon.id}`, {
        method: "PUT",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => response.json())


