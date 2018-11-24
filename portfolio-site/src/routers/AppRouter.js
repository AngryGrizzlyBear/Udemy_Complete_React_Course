import React from "react";
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Portfolio from '../components/PortfolioPage';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;
