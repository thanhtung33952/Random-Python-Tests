import React, { useState } from 'react';
import routes from '../routes';
import { Redirect, Switch } from 'react-router-dom';
import { Header, Sidebar, Workspace } from '../layout';
import { useCookies } from 'react-cookie';

import { folderRoot } from '../constant/index';
import { isNullOrUndefined } from '../utils/helpers';
// jss
import useStyles from '../assets/jss/layout/dashboardStyle';
// component
import PublicRoute from '../component/PublicRoute/PublicRoute';
// import PrivateRoute from '../component/PrivateRoute/PrivateRoute';

function Dashboard() {
  const classes = useStyles();
  const [opened, setOpened] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [cookies] = useCookies(['AuthenticationEcevn']);
  const userInfo = cookies.AuthenticationEcevn;
  // console.log(userInfo)

  const resizeDispatch = () => {
    if (typeof Event === 'function') {
      window.dispatchEvent(new Event('resize'));
    } else {
      const evt = window.document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(evt);
    }
  };

  const handleDrawerToggle = () => {
    setOpened(!opened);
    resizeDispatch();
  };

  const handleNotificationToggle = () =>
    setNotificationsOpen(!notificationsOpen);

  const handleFullscreenToggle = () => {
    const element = document.querySelector('#root');
    const isFullscreen =
      document.webkitIsFullScreen || document.mozFullScreen || false;

    element.requestFullScreen =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      function() {
        return false;
      };
    document.cancelFullScreen =
      document.cancelFullScreen ||
      document.webkitCancelFullScreen ||
      document.mozCancelFullScreen ||
      function() {
        return false;
      };
    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  };

  // logout
  const handleLogout = () => {
    // removeCookie('AuthenticationEcevn');
    document.cookie =
      'AuthenticationEcevn=; path=/; expires=' + new Date(0).toUTCString();
    window.location.href = `${folderRoot}signin`;
  };
  return (
    <div>
      <Header
        toggleDrawer={handleDrawerToggle}
        toogleNotifications={handleNotificationToggle}
        toggleFullscreen={handleFullscreenToggle}
        userInfo={userInfo}
        logout={handleLogout}
      />
      <div className={classes.panel}>
        <Sidebar
          routes={routes}
          opened={opened}
          toggleDrawer={handleDrawerToggle}
        />
        <Workspace opened={opened}>
          {isNullOrUndefined(userInfo) || userInfo === 'undefined' ? (
            <Switch>
              <Redirect push to="/signin" />
            </Switch>
          ) : (
            <PublicRoute userInfo={userInfo} routes={routes} />
          )}
        </Workspace>
      </div>
    </div>
  );
}
export default Dashboard;
