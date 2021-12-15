import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: '0 16px',
    '& .super-app-theme--header': {
      color: '#000',
      fontSize: '1rem',
      padding: '0 5px',
    },
    '& .MuiDataGrid-root': {
      '& .MuiDataGrid-columnsContainer': {
        cursor: 'pointer',
        lineHeight: '50px !important',
        minHeight: '50px !important',
        maxHeight: '50px !important',
      },
      '& .MuiDataGrid-window': {
        top: '50px !important'
      },
      '& .MuiDataGrid-cell': {
        padding: '0 10px',
        overflow: 'auto',
        overflowY: 'hidden !important',
        textOverflow: 'inherit',
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#CCCCCC',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          borderRadius: 10
        },
        '&::-webkit-scrollbar': {
          height: 5,
          backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 10,
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          backgroundColor: '#918f8f',
          outline: '1px solid slategrey'
        },
      }
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontSize: '18px'
    },
    '& .MuiDataGrid-toolbarContainer': {
      '& .MuiButton-textPrimary': {
        color: theme.palette.green.light
      }
    },
    '& .super-app-theme--cell': {
      fontWeight: '600',
    },
    '& .super-app-theme--cell--underline': {
      textDecoration: 'underline',
    },
    '& .super-app.negative': {
      color: 'red',
    },
    '& .MuiDataGrid-footer': {
      minHeight: 25,
      height: 35
    },
    '& .MuiIconButton-root': {
      padding: 6
    },
    '& .MuiTablePagination-actions': {
      marginRight: 20
    },
  },
  container: {
    padding: '0 28px',
    height: 'calc(100vh - 230px)',
    boxShadow: 'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 10px 0px',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 260px)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 230px)',
    },
  },
  titleTool: {
    fontWeight: 400,
    margin: '10px 40px 0 40px',
    fontSize: 24,
  },
  rowButtonAdd: {
    // margin: '10px 40px 0 0',
  },
  btnAdd: {
    height: 38,
    color: '#fff',
    margin: '10px 40px 10px 0',
    float: 'right',
    fontWeight: 600,
    backgroundColor: theme.palette.blue.main,
    fontSize: 14,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.palette.blue.light,
    },
  },
  btnIcon: {
    marginLeft: 15
  },
  formGroup: {
    marginLeft: 0,
    display: 'flex',
    // width: '100%',
    flex: 1,
    verticalAlign: 'middle',
    alignItems: 'center',
    // marginRight: 22,
    marginBottom: 10,
    '& label': {
      width: '35%',
      fontSize: 13,
    },
    // '& $inputControl': {
    //   '& input': {
    //   padding: '5px 8px',
    //   },
    // },
  },
  search: {
    border: '1px solid gray',
    position: 'relative',
    borderRadius: 10,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 40,
    marginLeft: 40,
    marginTop: 60,
  },
  btnDelete: {
    height: 30,
    minWidth: 0,
    minHeight: 0,
    maxHeight: 30,
    maxWidth: 30,
    // color: '#fff',
    color: theme.palette.redColor.main,
    background: 'transparent',
    textTransform: 'none',
    borderRadius: "50rem",
    '&:hover': {
      color: theme.palette.redColor.light,
    },
    '& span': {
      padding: '0 10px'
    }
  },
  mRight10: {
    marginRight: 10,
    color: theme.palette.blue.main,
    maxWidth: 30,
    '&:hover': {
      color: theme.palette.blue.light,
    },
  },
  msgSuc: {
    color: theme.palette.green.main
  },
  msgError: {
    color: theme.palette.redColor.main
  },
  gridContainer: {
    boxShadow: 'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 10px 0px',
    borderRadius: 4,
    marginTop: 10
  },
  heightDashboard: {
    height: 'calc(100vh - 230px)',
    margin: 10,
  },
  heightDashboard2: {
    height: 'calc(100vh - 290px)',
  },
  breakpoint: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 320px)',
      // height: '100vh'
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 310px)',
    },
  },
  breakpoint2: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 320px)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 290px)',
    },
  },
  containerDas: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // marRight20: {
  //   marginRight: 20
  // },
  borderBot: {
    borderBottom: '1px solid grey',
    marginBottom: 0,
    justifyContent: 'end',
    padding: '10px 0px'

  },
  Offline: {
    background: 'green',
    padding: '1px 8px',
    color: '#fff',
    marginRight: 10,
    borderRadius: 4
  },
  btnDetails: {
    textTransform: 'none',
    color: theme.palette.blue.main,
    padding: 0,
    '&:hover': {
      background: 'none'
    }
  },
  spanDevice: {
    margin: '15px 0',
    fontSize: '1.1rem',
    fontƯeight: '600'
  },
  deviceCodeForm: {
    // paddingTop: '0px !important',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    // justifyContent: 'center',
    marginLeft: 30,
    marginTop: 50,
    flexWrap: 'wrap',
    '& .MuiTabPanel': {
      padidng: '0px !important'
    }
  },
  marTop0: {
    marginTop: 0,
    marginLeft: 20,
    flex: 1
  },
  marTop20: {
    marginTop: 20,
  },
  switch: {
    margin: 'auto !important'
  },
  formContent: {
    // padding: 40,
    position: 'relative',
  },
  scrollPage: {
    overflowY: 'auto',
    // height: 'calc(100vh - 220px)'
  },

  formGroup2: {
    display: 'flex',
    margin: '10px 40px 0 40px',
    alignItems: 'center',
    '& label': {
      width: '15%',
      fontSize: '1.2rem',
      '& em': {
        color: 'red',
        fontStyle: 'inherit',
      },
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
    [theme.breakpoints.up('xs')]: {
      '& label': {
        width: '35%',
      },
    },
    [theme.breakpoints.up('sm')]: {
      '& label': {
        width: '15%',
      },
    }
  },
  rowInline: {
    display: 'flex',
    // width: '90%',
    flex: 1,
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
  tabList: {
    '& .css-heg063-MuiTabs-flexContainer': {
      justifyContent: 'space-around',
    }
  }
}));
