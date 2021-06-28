import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { MainPage } from "./pages";
import { Provider } from 'react-redux';
import store from './store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: arial;
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </Router>
        </Provider>
        <GlobalStyle />
    </React.StrictMode>,
    document.getElementById("search-users-app")
);