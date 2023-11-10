import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { create } from "domain";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});
export default () => {
  console.log("render app nha");
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
