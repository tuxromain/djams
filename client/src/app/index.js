import React from "react";
import reactDOM from "react-dom";

import { Router, Switch } from "react-router-dom";
import routes from "./routes";
import history from "./history";

import App from "./App.jsx";

reactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                {routes}
            </Switch>
        </App>
    </Router>,
    document.getElementById('app')
)