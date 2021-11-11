import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './App';
import Dashboard from './layout/Dashboard';
import Signin from './page/Authentication/Signin';
import theme from './theme';

ReactDOM.render(
  <StyledEngineProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector("#root")
);