import pikachu from "./../../assets/pikachu.svg";
import gatomon from "./../../assets/gatomon.png";
import Main from "./index.styled";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import PokemonRouter from "./../PokemonRouter";
import NotFound from "../NotFound/NotFound";

const InitialScreen = () => {
    return (
        <Main>
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
                <button>
                    Digimons
                    </button>
                <img src={gatomon} alt="Gatomon image" />
            </section>
        </Main>
    );
}

export default InitialScreen;