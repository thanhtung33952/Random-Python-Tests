import React, { useState } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

// // jss
import useStyles from '../../assets/jss/layout/sidebarStyle';


export default function Sidebar(props) {
  const { opened, toggleDrawer, routes } = props;
  const classes = useStyles();
  const [activeRoute, setActiveRoute] = useState(undefined);
  // const [tabActive, setTabActive] = useState(0);
  const toggleMenu = index =>
    setActiveRoute(activeRoute === index ? undefined : index);

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="persistent"
          classes={{ paper: classes.drawerPaper }}
          open={opened}
          ModalProps={{
            keepMounted: false,
            className: classes.modal,
            BackdropProps: {
              className: classes.backdrop
            },
            onBackdropClick: toggleDrawer
          }}
        >
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                exact
                className={classes.menuLink}
                activeClassName={classes.menuActive}
                key={index}
              >
                {route.type !== 'hide' ? (
                    <ListItem
                    className={classes.menuItem}
                    button
                    onClick={() => toggleMenu(index)}
                  >
                    <Typography variant="body1">{route.name}</Typography>
                    {/*badge(route.badge)*/}
                  </ListItem>
                )
                : ''
                }
              </NavLink>
            )
          })}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          classes={{ paper: classes.drawerPaper }}
          open={opened}
          onOpen={toggleDrawer}
          ModalProps={{
            keepMounted: false,
            className: classes.modal,
            BackdropProps: {
              className: classes.backdrop
            }
          }}
          onClose={toggleDrawer}
        >
        {routes.map((route, index) => {
          return (
            <NavLink
              to={route.path}
              exact
              className={classes.menuLink}
              activeClassName={classes.menuActive}
              key={index}
            >
            {route.type !== 'hide' ? (
              <ListItem
                className={classes.menuItem}
                button
                onClick={() => toggleMenu(index)}
              >
                <Typography variant="body1">{route.name}</Typography>
                {/*badge(route.badge)*/}
              </ListItem>
            )
            : ''
            }
            </NavLink>
          )
        })}
          {/* end icon toggle menu */}
        </SwipeableDrawer>
      </Hidden>
    </>
  );
}

Sidebar.prototypes = {
  opened: PropTypes.func,
  toggleDrawer: PropTypes.func,
  closeDrawer: PropTypes.func,
  openDrawer: PropTypes.func,
  routes: PropTypes.object,
  userInfo: PropTypes.object
};


