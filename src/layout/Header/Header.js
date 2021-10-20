import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';

// @material-ui components
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@mui/material/Typography';
import AppsIcon from '@mui/icons-material/Apps';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountDown from '@mui/icons-material/KeyboardArrowDown';

// jss
import useStyles from '../../assets/jss/layout/headerStyle';
// import { isNullOrUndefined } from '../../utils/helpers';

// helpers
// component custommer
// import PopupChangePassword from 'components/Authentication/PopupChangePassword';

export default function Header(props) {
  const {
    // userInfo, logo, logoAltText, 
    toggleDrawer,
    logout
  } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const handleSettingdToggle = event => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleSearchExpandToggle = () => setSearchExpanded(!searchExpanded);

  const handleDrawerToggle = () => {
    toggleDrawer();
    if (searchExpanded) handleSearchExpandToggle();
  };
  // const handleClickOpen = () => {
  //   setAnchorEl(null);
  //   setOpen(true);
  // };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        {/* logo */}
        <div className={classes.logo}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
              className={classes.iconMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div" 
              className={classes.textHeader}
            >
              Ecevn
            </Typography>
          </Toolbar>
        </div>
        {/* account */}
        <ListItem
          className={classes.account}
          aria-label="User Settings"
          aria-owns={anchorEl ? 'user-menu' : null}
          aria-haspopup="true"
          color="inherit"
          onClick={handleSettingdToggle}
        >
          <ListItemAvatar className={classes.avatar}>
            <AppsIcon />
          </ListItemAvatar>
          <Hidden mdDown>
            <ListItemText
              primary={
                // !isNullOrUndefined(userInfo) &&
                // !isNullOrUndefined(userInfo.email)
                //   ? userInfo.email
                //   : ''
                '01900633442'
              }
            />
            <AccountDown />
          </Hidden>
        </ListItem>
        {/* option menu account */}
        <Menu
          className={classes.menuOption}
          getContentAnchorEl={null}
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {/*<MenuItem onClick={handleClickOpen}>
            <ListItemText primary="パスワード変更" />
        </MenuItem>*/}
          <MenuItem onClick={logout}>
            <ListItemText primary="logout" />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
};
