import React from "react";
import { Route } from "react-router-dom";

// components
import Home from "./components/Home";

export const routes = [
  {
    path: "/",
    component: Home,
    routes: []
  }
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

