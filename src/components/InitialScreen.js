import pikachu from "./../assets/pikachu.svg";
import gatomon from "./../assets/gatomon.png";
import { MainScreen } from "../index.styled";
import { Link} from "react-router-dom";
const InitialScreen = () => {
    return (
        <MainScreen>
            <h1 className="main-title">Pokemons & Digimons</h1>
            <section className="pokemon">
                <Link to="/pokemons">
                    <button>
                        Pokemons
                    </button>
                </Link>
                <img src={pikachu} alt="Pikachu image" />
            </section>
            <section className="digimon">
                <Link to="/digimons">
                    <button>
                        Digimons
                </button>
                </Link>
                <img src={gatomon} alt="Gatomon image" />
            </section>
        </MainScreen>
    );
}

export default InitialScreen;