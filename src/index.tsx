import React, { createElement } from "react";
import { render } from "react-dom";
import { setup } from "goober";
import { shouldForwardProp } from "goober/should-forward-prop";
// order important
import App from "./App";
import "@/assets/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "@/componets/ErrorBoundary";
import { GlobalStyles } from "@/styles/base";
import { ApplicationStore, createApplicationStore } from "@/store";
import { Store } from "redux";
import { Provider } from "react-redux";

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp(prop => !prop.startsWith("$")),
);
const store: Store<ApplicationStore> = createApplicationStore();
render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path={"/"}>
            <GlobalStyles />
            <App />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root"),
);
