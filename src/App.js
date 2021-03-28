import React from "react";
import InitialScreen from "./components/InitialScreen";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import PokemonAdd from "./components/PokemonAdd";
import PokemonDetails from './components/PokemonDetails';
import PokemonEdit from "./components/PokemonEdit";
import PokemonList from "./components/PokemonList";

const App = () => {
    return (
        /*<BrowserRouter>
            <Switch>
                <Route exact path="/pokemons">
                    <PokemonList />
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
                <Route path="/404">
                    <NotFound/>
                </Route>
            
            </Switch>
        </BrowserRouter>*/
        <InitialScreen />
    )
}

export default App;