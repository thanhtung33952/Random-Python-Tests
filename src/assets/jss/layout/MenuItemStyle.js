import { alpha , makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		padding: '0 16px',
		'& .super-app-theme--header': {
			color: '#000',
			fontSize: '1rem',
			padding: '0 5px',
		},
		'& .MuiDataGrid-root':{
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
				'&::-webkit-scrollbar' :{
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
    height: 'calc(100vh - 132px)',
    boxShadow: 'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 10px 0px',
  },
	rowTitle: {
		display: 'flex',
		justifyContent: 'space-between'
	},
  titleTool: {
    fontWeight: 400,
    margin: '10px 0 0 40px',
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
    // border: '1px solid gray',
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    backgroundColor: alpha (theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha (theme.palette.common.white, 0.25),
    },
    marginRight: 40,
    marginLeft: 0,
    marginTop: 20,
  },
  btnDelete: {
    height: 30,
    minWidth: 0,
    minHeight: 0,
    maxHeight: 30,
    maxWidth: 50,
    color: '#fff',
    backgroundColor: theme.palette.redColor.main,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.redColor.light,
    },
    '& span': {
      padding: '0 10px'
    }
  },
  mRight10: {
    marginRight: 10,
    backgroundColor: theme.palette.blue.main,
    maxWidth: 90,
    '&:hover': {
      backgroundColor: theme.palette.blue.light,
    },
  },
  msgSuc: {
	color: theme.palette.green.main
  },
  msgError: {
	color: theme.palette.redColor.main
  }
}));
