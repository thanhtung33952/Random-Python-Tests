import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Home from './layout/MenuItem/Home';
import Tours from './layout/MenuItem/Tours';
import FlightTickets from './layout/MenuItem/FlightTickets';
import Eating from './layout/MenuItem/Eating';
const useStyles = makeStyles(theme => ({
  menuActive: {
    color: 'red !important'
  },
  menu: {
    textDecoration: 'none',
    color: '#000'
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <nav style={{display: 'flex'}}>
          <div style={{padding: 20}}>
            <NavLink
              to="/Home"
              className={classes.menu}
              activeClassName={classes.menuActive}
            >
              Home
            </NavLink>
          </div>
          <div style={{padding: 20}}>
            <NavLink
              to="/Tours"
              className={classes.menu}
              activeClassName={classes.menuActive}
            >
              Tours
            </NavLink>
          </div>
          <div style={{padding: 20}}>
            <NavLink
              to="/FlightTickets"
              className={classes.menu}
              activeClassName={classes.menuActive}
            >
              FlightTickets
            </NavLink>
          </div>
          <div style={{padding: 20}}>
            <NavLink
              to="/Eating"
              className={classes.menu}
              activeClassName={classes.menuActive}
            >
              Eating
            </NavLink>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Eating">
            <Eating />
          </Route>
          <Route path="/FlightTickets">
            <FlightTickets />
          </Route>
          <Route path="/Tours">
            <Tours />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
