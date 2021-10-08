import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
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
		'& .MuiDataGrid-colCellTitle': {
			// fontWeight: 600
		}
	},
  container: {
    height: 'calc(100vh - 171px)',
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
	}
}));
