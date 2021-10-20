import { makeStyles } from '@material-ui/core/styles';
import { btnCance, rowSubmitPopup  } from '../../../common';

export default makeStyles((theme) => ({
  root: {
  },
  // dialogPopup: {
  //   '& .MuiDialog-paper':{
  //   borderTop: '10px solid #0072E5',
  //   borderBottom: '10px solid #0072E5',}
  // },
  title: {
    borderBottom: 'solid 1px #ddd',
    padding: '6px 20px',
    textAlign: 'center',
    '& h2': {
      fontSize: 18,
      fontWeight:500
    },
  },
  content: {
    textAlign: 'center',
    margin: '15px 0',
    fontSize: 16,
    fontWeight: '500',
    padding: '0 30px',
  },
  rowSubmit: {
    ...rowSubmitPopup
  },
  btnCance: {
    ...btnCance,
  },
  btnYes: {
    backgroundColor: theme.palette.redColor.main,
    color: theme.palette.white.main,
    '&:hover': {
      background: theme.palette.redColor.light
    }
  }
}));
