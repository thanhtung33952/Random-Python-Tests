import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		padding: '0 16px',
		'& .super-app-theme--header': {
			// backgroundColor: '#4A4E69',
			color: '#000',
			fontSize: '1rem',
			display: 'block',
			borderRight: 'none !important',
			outline: 'none !important',
			padding: 0,
		},
		'& .MuiDataGrid-root':{
			'& .MuiDataGrid-columnsContainer': {
				// background: '#4a4e69',
				cursor: 'pointer',
				lineHeight: '50px !important',
				minHeight: '50px !important',
				maxHeight: '50px !important',
			},
			'& .MuiDataGrid-window': {
				top: '50px !important'
			},
			'& .MuiDataGrid-cell': {
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
        }
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
		// '& .makeStyles-root-31': {
		// 	padding: '8px 20px !important',
		// },
	},
  container: {
    height: 'calc(100vh - 132px)',
    boxShadow: 'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 10px 0px',
	borderLeft: '15px solid transparent !important',
	borderRight: '15px solid transparent !important'
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
    backgroundColor: '#4ca4fb',
    fontSize: 14,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#4ca4fb',
    },
  },
	btnColor: {
		background: '#1ebd1e',
    '&:hover': {
      backgroundColor: '#1ebd1e',
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
		marginRight: 20,
		marginBottom: 10,
		'& label': {
		  width: '35%',
		  fontSize: 13,
		},
		'& $inputControl': {
		  '& input': {
			padding: '5px 8px',
		  },
		},
  },
  search: {
    // border: '1px solid gray',
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 40,
    marginLeft: 0,
    marginTop: 20,
  },
  btnDelete: {
    // marginRight: 10,
    height: 30,
    borderRadius: '50%',
    minWidth: 0,
    minHeight: 0,
    maxHeight: 30,
    maxWidth: 30,
    color: '#fff',
    backgroundColor: '#f44336',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
}));
