import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux";

import FootballMatchesData from './components/football-data/index.js';
import store from "./store";
import logo from './logo.svg';
import './App.css';

const title = "Football Comptetions";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <nav className="app-header layout-row align-items-center justify-content-center">
                        <div className="layout-row align-items-center">
                            <img alt="" src={logo} className="logo" />
                            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
                        </div>
                    </nav>
                    <FootballMatchesData />
                </Fragment>
            </Provider>
        );
    }
}

export default App;




