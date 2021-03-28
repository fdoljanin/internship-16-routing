import { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Confirm from "../Confirm";
import { deleteDigimon, fetchDigimonDetails } from "../../data";
import { fetchStatus } from '../../consts/enums';
import { DetailsWrapper } from "../../index.styled";

const DigimonDetails = () => {
    const { id: digimonId } = useParams();
    const [digimon, setDigimon] = useState(fetchStatus.LOADING);
    const [shouldShowDeletePopup, setShouldShowDeletePopup] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetchDigimonDetails(digimonId).then(digimon => {
            setDigimon(digimon || fetchStatus.NOTFOUND);
            document.title=digimon?.name;
        });
    }, []);

    if (digimon === fetchStatus.LOADING) {
        document.title="Loading";
        return <Loading />;
    }

    if (digimon === fetchStatus.NOTFOUND) {
        return <Redirect to="/404" />

    }

    const showDeletePopup = () => {
        if (shouldShowDeletePopup)
            return <Confirm
                text="Do you really want to delete?"
                accept={async () => {
                    await deleteDigimon(digimon);
                    history.push("/digimons");
                }}
                cancel={() => setShouldShowDeletePopup(false)}
            />
    }

    return (
        <DetailsWrapper>
            <h2>{digimon.name}</h2>
            <p>{digimon.description}</p>
            <Link to={"../digimons/edit/" + digimon.id}>
                <button>Edit</button>
            </Link>
            <button className="button-delete" onClick={() => setShouldShowDeletePopup(true)}>Delete</button>
            {showDeletePopup()}
        </DetailsWrapper>
    )
}

export default DigimonDetails;