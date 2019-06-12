import React from "react";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route component={ErrorPage}/>
            </Switch>
        </Container>
    </main>
);

export default main;