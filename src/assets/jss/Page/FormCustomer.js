import { makeStyles } from '@material-ui/core/styles';
import { rowSubmit, btnCance } from '../../common';
export default makeStyles((theme) => ({
  root: {},
  titleForm: {
    fontWeight: 600,
    margin: '20px 20px 20px 40px',
    fontSize: '1rem',
  },
  formContent: {
    padding: 40,
    position: 'relative',
  },
  formGroup: {
    display: 'flex',
    marginBottom: 20,
    alignItems: 'center',
    '& label': {
      width: '20%',
      '& em': {
        color: 'red',
        fontStyle: 'inherit',
      },
    },
  },
  inputControl: {
    width: '80%',
    '& p': {
      margin: '5px 0 0',
      fontSize: 10,
    },
  },
  rootInput: {
    '& fieldset': {
      // borderColor: theme.palette.grey.light + `${'!important'}`,
    },
  },
  thisInputError: {
    '& fieldset': {
      // borderColor: theme.palette.pink.main + `${'!important'}`,
    },
  },
  thisInput: {
    padding: 10,
  },
  rowInline: {
    display: 'flex',
    width: '80%',
  },
  formControlSelect: {
    flex: '1 auto',
    '& select': {
      padding: 10,
    },
    '& fieldset': {
      // borderColor: theme.palette.grey.light
    },
  },
  chip: {
    // backgroundColor: theme.palette.secondary.main,
    color: '#fff',
  },
  btnOpen: {
    marginLeft: 20,
    minWidth: 200,
    fontSize: '1rem',
  },
  rowSubmit: {
    ...rowSubmit,
  },
  btnCance: {
    ...btnCance,
  },
  boxLoading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    zIndex: 99999,
  },
  iconProgress: {
    color: theme.palette.grey.light,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  msgError: {
    color: theme.palette.pink.main,
    paddingRight: 50,
    paddingTop: 15,
  },
  msgSuc: {
    color: theme.palette.green.main,
    paddingRight: 50,
    paddingTop: 15,
  },
  bGround: {
    backgroundColor: 'yellow',
    margin: '20px 40px 20px 20px',
  },
  headFormGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  marginIcon: {
    marginLeft: -22,
  },
  selectErro: {
    color: 'red',
    marginLeft: '20%',
    marginTop: -15,
    fontSize: 10,
    marginBottom: 20,
  },
  scrollPage :{
    overflowY: 'auto',
    height: 'calc(100vh - 220px)'
  },
}));
