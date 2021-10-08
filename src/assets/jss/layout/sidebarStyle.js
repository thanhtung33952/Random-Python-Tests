import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../common';

export default makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    maxWidth: drawerWidth,
    height: '100%',
    zIndex: theme.zIndex.drawer + 99,
  },
  modal: {
    [theme.breakpoints.down('sm')]: {
      top: '56px!important',
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px!important',
    },
    zIndex: '1000!important',
  },
  backdrop: {
    [theme.breakpoints.down('sm')]: {
      top: '56px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px',
    },
  },
  menuActive: {
    backgroundColor: '#e1dbdb'
  },
  menuLink: {
    textDecoration: 'none',
    color: '#000'
  },
}));
