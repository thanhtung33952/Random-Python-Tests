import { makeStyles } from '@material-ui/core/styles';
import { btnCance } from '../../../common';

export default makeStyles((theme) => ({
  root: {
  },
  dialogPopup: {
    '& .MuiDialog-paper':{
    borderTop: '10px solid #0072E5',
    borderBottom: '10px solid #0072E5',}
  },
  title: {
    borderBottom: 'solid 1px #ddd',
    padding: '6px 20px',
    textAlign: 'center',
    '& h2': {
      fontSize: 17,
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
    justifyContent: 'center',
    marginBottom: 8,
    '& button': {
      minWidth: 80,
      minHeight: 32,
      padding: '0 10px',
      margin: '0 10px',
      fontSize: 15,
    },
  },
  btnCance: {
    ...btnCance,
  },
  FW800: {
    fontWeight: 800,
    fontSize: '1.2rem'
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 5px 5px 5px',
    '& label': {
      width: '40%',
      fontSize: '0.8rem',
      fontWeight: 600,
      '& $inputControl': {
        '& input': {
          padding: '5px 8px',
        },
      },
    },
  },
  formGroupRow: {
    padding: 10
  },
  formGroupTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 600,
    alignItems: 'center',
    height: '5vh'
  },
  rowInline: {
    display: 'flex',
    width: '60%',
  },
  formControlSelect: {
    flex: 1,
    '& select': {
      padding: 6,
    },
    '& fieldset': {
      borderColor: theme.palette.grey.light + `${'!important'}`,
    },
  },
  inputControl: {
    flex: 1,
    '& p': {
      margin: '5px 0 0',
      fontSize: 10,
    },
  },
  rootInput: {
    height: 35,
    '& fieldset': {
      // borderColor: theme.palette.grey.light + `${'!important'}`,
      borderRadius: 4,
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
  W30: {
    width: '30vw'
  },
  container:{
    border: '0.5px solid #00000033',
    marginBottom: 20,
    height: 'calc(100vh - 225px) !important ',
  },
  JCBetween: {
    justifyContent: 'space-between'
  },
  btnEnd: {
    justifyContent: 'flex-end'
  },
  minWdith1000: {
    '& .MuiGrid-spacing-xs-1': {
      '& .MuiGrid-item': {
        padding: 0,
      }
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 890,
      display: 'flex',
      flex: '1 auto'
    },
    '& .MuiDialog-paperScrollPaper': {
      overflow: 'hidden'
    },
    '& .super-app-theme--header': {
      backgroundColor: '#4A4E69',
      color: '#fff',
      fontSize: '1rem',
      display: 'block',
      borderRight: '2px solid #fff !important',
      outline: 'none !important',
    },
    '& .MuiDataGrid-root':{
      '& .MuiDataGrid-columnsContainer': {
        background: '#4a4e69',
        cursor: 'pointer',
        lineHeight: '50px !important',
        minHeight: '50px !important',
        maxHeight: '50px !important',
      },
      '& .MuiDataGrid-window': {
        top: '50px !important'
      },
    },
    '& .super-app-theme--cell': {
      fontWeight: '600',
    },
    '& .super-app-theme--cell--underline': {
      textDecoration: 'underline',
    },
    '& .MuiDataGrid-footer': {
      minHeight: 25,
      height: 35
    },
    '& .MuiIconButton-root': {
      padding: 0
    },
    '& .MuiTablePagination-actions': {
      marginRight: 20
    },
    '& .super-app.negative': {
      color: 'red',
    },
    '& .super-app.positive': {
      color: '#000',
    },
  },
  btnCanceSample: {
    backgroundColor: 'yellow',
    position: 'absolute',
    top: 20,
  },
  marginTitle: {
    margin: '20px 0px 0px 0px',
    paddingBottom: 20
  },
  p0m0: {
    padding: 0,
    margin: 0
  },
  classification: {
    borderRadius: 4,
    minWidth: 90,
    color: '#fff',
    height: 30,
    lineHeight: '30px',
    margin: '5px 0px',
    '& .MuiSvgIcon-root': {
      fontSize: '1.3rem',
    },
  },
  btnEdit: {
    height: 30,
    borderRadius: '50%',
    minWidth: 0,
    minHeight: 0,
    maxHeight: 30,
    maxWidth: 30,
    textTransform: 'none',
    color: '#fff',
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#ffc107',
    '&:hover': {
      backgroundColor: '#ffa000',
    },
  },
  backgroundColorGreen: {
    background: '#0ade10',
    '&:hover': {
      background: '#09880e',
    }
  },
  iconProgress: {
    color: 'gray',
    position: 'absolute',
    top: '60%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  LoadingGridOverlay:{
    position: 'absolute',
    top: '40%',
    width: '100%',
  },
  backGroundYellow: {
    // backgroundColor: theme.palette.yellow.main,
    '&:hover': {
      // backgroundColor: theme.palette.yellow.light,
    },
  }
}));
