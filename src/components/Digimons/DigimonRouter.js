import React from "react";
import {Switch, Route } from "react-router-dom";
import DigimonAdd from "./DigimonAdd";
import DigimonDetails from './DigimonDetails';
import DigimonEdit from "./DigimonEdit";
import DigimonList from "./DigimonList";

const DigimonRouter = () => {
    return (
            <Switch>
                <Route exact path="/digimons">
                    <DigimonList />
                </Route>
                <Route exact path="/digimons/add">
                    <DigimonAdd />
                </Route>
                <Route exact path="/digimons/edit/:id">
                    <DigimonEdit />
                </Route>
                <Route exact path="/digimons/:id">
                    <DigimonDetails />
                </Route>
            </Switch>
    )
}

export default DigimonRouter;