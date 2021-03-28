import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DigimonCard from './DigimonCard';
import Loading from "../Loading";
import { fetchDigimons } from '../../data';
import { fetchStatus } from '../../consts/enums';
import { List } from "../../index.styled";

const DigimonList = () => {
    const [digimonList, setDigimonList] = useState(fetchStatus.LOADING);
    document.title = "Digimons";

    useEffect(() => {
        fetchDigimons().then(digimons => {
            setDigimonList(digimons);
        });
    }, []);

    if (digimonList === fetchStatus.LOADING) {
        return <Loading />
    }

    return (
        <List>
            <h2>List of digimons:</h2>
            <div>
                {digimonList.length === 0 ?
                    <p>No digimons to show.</p> 
                    :
                    <section>
                        {digimonList.map(digimon =>
                            <Link key={digimon.id} to={"/digimons/" + digimon.id}>
                                <DigimonCard digimon={digimon} />
                            </Link>)}
                    </section>
                }
                <Link to="/digimons/add">
                    <button>Add new</button>
                </Link>
            </div>
        </List>
    )
}

export default DigimonList;