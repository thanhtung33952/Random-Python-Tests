import React, { useState } from 'react';
import routes from '../routes';
import { Header, Sidebar, Workspace } from '../layout';
import PrivateRoute from '../component/PrivateRoute/PrivateRoute';

// jss
import useStyles from '../assets/jss/layout/dashboardStyle';

function Dashboard() {
  const classes = useStyles();
  const [opened, setOpened] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

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

  return (
    <div>
      <Header
        toggleDrawer={handleDrawerToggle}
        toogleNotifications={handleNotificationToggle}
        toggleFullscreen={handleFullscreenToggle}
      />
      <div className={classes.panel}>
        <Sidebar
          routes={routes}
          opened={opened}
          toggleDrawer={handleDrawerToggle}
        />
        <Workspace opened={opened}>
          <PrivateRoute routes={routes} />
        </Workspace>
      </div>
    </div>
  );
}
export default Dashboard;
