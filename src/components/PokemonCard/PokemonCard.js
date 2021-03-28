import {Card} from "./index.styled";

const PokemonCard = ({pokemon}) => {
    return (
       <Card>
            <span>{"#"+pokemon.id}</span>
            <h3>{pokemon.name}</h3>
       </Card>
    )
}

export default PokemonCard;