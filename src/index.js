import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './App';
import Dashboard from './layout/Dashboard';

ReactDOM.render(
  <StyledEngineProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </StyledEngineProvider>,
  document.querySelector("#root")
);