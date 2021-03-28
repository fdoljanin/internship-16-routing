import { useHistory } from "react-router";
import DigimonForm from "./DigimonForm";
import { createDigimon } from "../../data";
import {FormWrapper} from "../../index.styled";

const DigimonAdd = () => {
    const history = useHistory();
    document.title = "Add digimon";

    const handleSubmit = async (digimon) => {
        let createdDigimon = await createDigimon(digimon);
        history.push("/digimons/" + createdDigimon.id);
    }

    return (
        <FormWrapper>
            <h2>Add digimon</h2>
            <DigimonForm onSubmit={(digimon) => handleSubmit(digimon)} />
        </FormWrapper>
    )
}

export default DigimonAdd;