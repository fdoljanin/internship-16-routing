import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonAdd from "./components/PokemonAdd";
import PokemonDetails from './components/PokemonDetails';
import PokemonEdit from "./components/PokemonEdit";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pokemon">
                </Route>
                <Route exact path="/pokemons/add">
                    <PokemonAdd />
                </Route>
                <Route exact path="/pokemons/edit/:id">
                    <PokemonEdit />
                </Route>
                <Route exact path="/pokemons/:id">
                    <PokemonDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;