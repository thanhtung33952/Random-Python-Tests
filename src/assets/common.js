const lightBlue = require('@material-ui/core/colors/lightBlue');
const yellow = require('@material-ui/core/colors/yellow');
const muiTheme = require('../theme');
const theme = muiTheme.default;
// Colors
const infoColor = lightBlue.default[500];
const warningColor = yellow.default[500];

// Spacing
const drawerWidth = 240;
const notificationCenterWidth = 300;
const MobileBreakpoint = 960;

// style row and button action form
const rowSubmit = {
  display: 'flex',
  marginTop: 50,
  justifyContent: 'flex-end',
  '& button': {
    minHeight: 40,
    minWidth: 120,
    fontSize: '1rem',
  },
};
const btnCance = {
  backgroundColor: theme.palette.blue.main,
  color: '#fff',
  marginLeft: 15,
  '&:hover': {
    backgroundColor: theme.palette.blue.light,
  },
};

const rowSubmitPopup = {
  justifyContent: 'center',
  marginBottom: 8,
  '& button': {
    minWidth: 80,
    minHeight: 32,
    padding: '0 10px',
    margin: '0 10px',
    fontSize: 15,
  },
};

export {
  infoColor,
  warningColor,
  drawerWidth,
  notificationCenterWidth,
  MobileBreakpoint,
  rowSubmit,
  btnCance,
  rowSubmitPopup,
};
