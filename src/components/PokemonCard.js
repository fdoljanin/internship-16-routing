const PokemonCard = ({pokemon}) => {
    return (
       <article>
            <span>{pokemon.id}</span>
            <h3>{pokemon.name}</h3>
       </article>
    )
}

export default PokemonCard;