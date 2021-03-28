import {useState} from "react";
import {Form} from "../../index.styled";
import '../../consts/helpers';

const DigimonForm = ({ onSubmit, digimon }) => {
    const [digimonState, setDigimonState] = useState({
        id: digimon?.id || null,
        name: digimon?.name || "",
        description: digimon?.description || ""
    });

    const handleChange = ({ target: { name, value } }) => {
        setDigimonState((prevState) => ({ ...prevState, [name]: value.trimStart() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let digimonToSend = {...digimonState};
        digimonToSend.name = digimonToSend.name.beautify();
        digimonToSend.description = digimonToSend.description.beautify();

        onSubmit(digimonToSend);
    }
    return (
        <Form onSubmit={handleSubmit}>
                <div className="input-section">
                    <label htmlFor="name">Name</label>
                    <input name="name" value={digimonState.name}
                     placeholder="Digimon name" onChange={handleChange} required/>
                </div>
                <div className="input-section">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={digimonState.description}
                     placeholder="Digimon description" onChange={handleChange}
                     rows="3" required/>
                </div>
                <button type="submit">Submit</button>
        </Form>
    )
}

export default DigimonForm;