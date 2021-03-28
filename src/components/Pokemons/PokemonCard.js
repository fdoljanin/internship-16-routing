import {Card} from "../../index.styled";

const PokemonCard = ({pokemon}) => {
    return (
       <Card type="pokemon">
            <span>{"#"+pokemon.id}</span>
            <h3>{pokemon.name}</h3>
       </Card>
    )
}

export default PokemonCard;