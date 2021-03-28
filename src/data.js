export const fetchPokemons = () =>
    fetch(`http://localhost:5000/pokemons`)
        .then(response => response.json());

export const fetchPokemonDetails = (pokemonId) =>
    fetch(`http://localhost:5000/pokemons/${pokemonId}`)
        .then((response) => {
            if (response.ok) return response.json();
            return undefined;
        });

export const createPokemon = (pokemon) =>
    fetch(`http://localhost:5000/pokemons`, {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json());

export const updatePokemon = (pokemon) =>
    fetch(`http://localhost:5000/pokemons/${pokemon.id}`, {
        method: "PUT",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => response.json());


export const deletePokemon = (pokemon) =>
    fetch(`http://localhost:5000/pokemons/${pokemon.id}`, {
        method: "DELETE",
    });

export const fetchDigimons = () =>
    fetch(`http://localhost:5000/digimons`)
        .then(response => response.json());

export const fetchDigimonDetails = (digimonId) =>
    fetch(`http://localhost:5000/digimons/${digimonId}`)
        .then((response) => {
            if (response.ok) return response.json();
            return undefined;
        });

export const createDigimon = (digimon) =>
    fetch(`http://localhost:5000/digimons`, {
        method: "POST",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json());

export const updateDigimon = (digimon) =>
    fetch(`http://localhost:5000/digimons/${digimon.id}`, {
        method: "PUT",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => response.json());


export const deleteDigimon = (digimon) =>
    fetch(`http://localhost:5000/digimons/${digimon.id}`, {
        method: "DELETE",
    });