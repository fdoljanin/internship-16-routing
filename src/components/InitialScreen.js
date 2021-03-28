import pikachu from "./../assets/pikachu.svg";
import gatomon from "./../assets/gatomon.png";
import "./style.css";

const InitialScreen = () => {
    return (
        <main>
            <h1 className="main-title">Pokemons & Digimons</h1>
            <section className="pokemon">
                <button>
                    Pokemons
                </button>
                <img src={pikachu} alt="Pikachu image" />
            </section>
            <section className="digimon">
                <button>
                    Digimons
                </button>
                <img src={gatomon} alt="Gatomon image" />
            </section>
        </main>
    );
}

export default InitialScreen;