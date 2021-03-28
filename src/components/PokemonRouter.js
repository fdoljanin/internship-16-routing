import React from "react";
import {Switch, Route } from "react-router-dom";
import PokemonAdd from "./PokemonAdd/PokemonAdd";
import PokemonDetails from './PokemonDetails/PokemonDetails';
import PokemonEdit from "./PokemonEdit/PokemonEdit";
import PokemonList from "./PokemonList/PokemonList";

const PokemonRouter = () => {
    return (
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
            </Switch>
    )
}

export default PokemonRouter;