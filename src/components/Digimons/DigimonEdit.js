import { useEffect, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router";
import Loading from "../Loading";
import DigimonForm from "./DigimonForm";
import { updateDigimon, fetchDigimonDetails } from "../../data";
import { fetchStatus } from '../../consts/enums';
import { FormWrapper } from "../../index.styled";

const DigimonEdit = () => {
    const { id: digimonId } = useParams();
    const [digimon, setDigimon] = useState(fetchStatus.LOADING);
    const history = useHistory();

    useEffect(() => {
        fetchDigimonDetails(digimonId).then(digimon => {
            setDigimon(digimon || fetchStatus.NOTFOUND);
            document.title = "Edit " + digimon.name;
        });
    }, []);

    if (digimon === fetchStatus.LOADING) {
        document.title = "Loading...";
        return <Loading />;
    }

    if (digimon === fetchStatus.NOTFOUND) {
        return <Redirect to="/404" />
    }

    const handleSubmit = async (digimon) => {
        await updateDigimon(digimon);
        history.push("/digimons/" + digimon.id);
    }

    return (
        <FormWrapper>
            <h2>Edit digimon</h2>
            <DigimonForm digimon={digimon} onSubmit={(digimon) => handleSubmit(digimon)} />
        </FormWrapper>
    )
}

export default DigimonEdit;