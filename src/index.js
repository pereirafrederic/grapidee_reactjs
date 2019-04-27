//react
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./component/accueil/accueil";
import AccueilIdees from "./component/accueil-idees/accueil-idees";
import AccueilGrappes from "./component/accueil-grappes/accueil-grappes";

//import redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// component

import "./style/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

//redux

// Add the reducer to your store on the `routing` key
import { reducers } from "./redux/reducers";
import thunk from "redux-thunk";
import accueilIdee from "./component/accueil-idee/accueil-idee";
import accueilGrappe from "./component/accueil-grappe/accueil-grappe";

const store = createStore(reducers, applyMiddleware(thunk));

/*
        <Route
          exact
          path="/grappe/:id"
          render={props => <Grappe {...props} />}
        />
        <Route exact path="/idee/:id" render={props => <Idee {...props} />} />
*/
// Create an enhanced history that syncs navigation events with the store
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/idees" component={AccueilIdees} />
        <Route exact path="/idee/:id" component={accueilIdee} />
        <Route exact path="/grappes" component={AccueilGrappes} />
        <Route exact path="/grappe/:id" component={accueilGrappe} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
