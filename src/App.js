import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import InitialScreen from "./components/InitialScreen";
import PokemonRouter from "./components/PokemonRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/404">
                    <NotFound />
                </Route>
                <Route exact path="/">
                    <InitialScreen />
                </Route>
                <Route path="/pokemons">
                    <PokemonRouter />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default App;