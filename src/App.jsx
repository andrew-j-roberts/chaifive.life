import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RouteWithSubRoutes, routes } from "./Routes";
import { Grommet, Box, Grid, ResponsiveContext } from "grommet";

import styled from 'styled-components'

const theme = {
  global: {
    font: {
      family: "Lato",
      size: "14px",
      height: "20px"
    }
  }
};

const demoBox = styled.div`
  background-color: #0000FF;
`

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <Grid>
          
        </Grid>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Router>
    </Grommet>
  );
}

export default App;
