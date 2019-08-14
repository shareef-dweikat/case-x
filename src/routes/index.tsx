import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import Infographic from "./LandingPage/Infographic";
import ProductPage from "./ProductPage";
import { isDevEnvironment } from "src/utils/router";
import * as Client from "shopify-buy";
import { RouteChildrenProps } from "react-router";

const client = Client.buildClient({
  storefrontAccessToken: "d4bbe5aa0e952ac56fc46337a4a0adfb",
  domain: "casexindustries.myshopify.com"
});

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {isDevEnvironment ? (
          <Route
            key={"product"}
            path="/product*"
            render={(props: RouteChildrenProps) => (
              <ProductPage {...props} client={client} />
            )}
          />
        ) : (
          ""
        )}
        <Route key={"infographic"} path={"/landing"} component={Infographic} />
        <Route key={"home"} path={"/*"} component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
