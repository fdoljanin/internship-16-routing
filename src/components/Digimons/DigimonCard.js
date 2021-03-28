import { Card } from "../../index.styled";

const DigimonCard = ({ digimon }) => {
    return (
        <Card type="digimon">
            <span>{"#" + digimon.id}</span>
            <h3>{digimon.name}</h3>
        </Card>
    )
}

export default DigimonCard;