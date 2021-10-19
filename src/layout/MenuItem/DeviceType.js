import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import * as moment from 'moment';
import { Link } from "react-router-dom";
import clsx from 'clsx';
// import { useCookies } from 'react-cookie';

//component material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import Notification from 'components/Notification';
import CircularProgress from '@material-ui/core/CircularProgress';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import {
  DataGrid,
  GridOverlay,
  GridToolbarExport,
  GridToolbarContainer
} from '@material-ui/data-grid';

// constant
import { apiRoot, folderRoot } from '../../constant/index';

// component common
import Wrapper from '../../component/Wrapper/Wrapper';
import PopupQuestion from '../../component/Popup/PopupQuestion';
// import PopupListRequestSample from 'components/Popup/PopupListRequestSample';

// helpers
import { isNullOrUndefined, isNullOrEmpty } from '../../utils/helpers';

//component custom
import SearchInput from '../../component/SearchForm/SearchInput';

// jss
import useStyles from '../../assets/jss/layout/MenuItemStyle';

export default function DeviceType() {
  const classes = useStyles();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [deviceTypeSelected, setDeviceTypeSelected] = useState();
  // const [cookies] = useCookies(['AuthenticationWorkflow']);
  // const userInfo = cookies.AuthenticationWorkflow;
  // let token = cookies.AuthenticationWorkflow.tokenAccess;

  // flag submit
  const [statusSubmit, setStatusSubmit] = useState({
    status: 0, // -1: error, 1: success
    isLoading: false,
    isLoading2: false,
    msg: ''
  });

  useEffect(() => {
    async function getData() {
    // if (isNullOrUndefined(token)) return;
    // show loading
    setisLoading(true);

    // call api get data
    const result = await getDeviceTypes();

    // hide loading
    setisLoading(false);

    // faild
    if (!result) return;

    // success
    setData(result.items);
    }

    getData();
  }, []);

  // console.log(deviceTypeSelected)
  // delete User
  const deteleDeviceType = async () => {
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    if (isNullOrUndefined(deviceTypeSelected)) return;
    // console.log(deviceTypeSelected);
    // call api delete
    const result = await callAPIDeleteDeviceTypes(deviceTypeSelected.id);
    // Failed
    if (!result) {
      setStatusSubmit({ ...statusSubmit, status: -1, isLoading: false });
      setOpen(false);
      return;
    }

    // success
    setStatusSubmit({ ...statusSubmit, status: 1, isLoading: false });
    let newArr = [...data]; // copying the old data array
    let index = newArr.findIndex(x => x.id === deviceTypeSelected.id);
    if (index !== -1) {
      newArr.splice(index, 1);
      setData(newArr);
      setOpen(false);
    }
  };

  // on submit search DeviceType by key
  const handleSearchDeviceType = async (formValue, callback) => {
    // call api search user
    const result = await getDeviceTypes(formValue);
    // console.log(result)
    if (!result) {
      callback();
      return;
    }
    callback();
    setData(result.items);
  };
  // open popup
  const handleClickOpen = deviceType => {
    setDeviceTypeSelected(deviceType);
    // console.log(deviceType);
    setOpen(true);
  };
  const handleAfterDelete = flag => {
    setOpen(false);
    // flag: yes||no
    if (flag === 'yes') {
      deteleDeviceType();
    }
  };
  // Close popup
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeField = name => e => {
      let val = e.target.value;
      setData({ ...data, [name]: val });
  };
  const renderTitleLink = (params) => {
      return (
      <Link
          to={`${folderRoot}Loai-Thiet-Bi/update/${params.row.id}`}
          // target="_blank"
          style={{color: '#4ca4fb', textDecoration: 'none'}}
      >
          {params.value}
      </Link>
      )
  };
  const renderChangleButton = (params) => {
    return (
      <Button
        variant="contained"
        className={clsx(classes.btnDelete, classes.mLeft10)}
        onClick={() => handleClickOpen(params.row)}
      >
        <DeleteIcon />
      </Button>
    )
  }

  // render DeviceTypes
  const DeviceTypes = [];
  data.length > 0 &&
  data.map((row, i) => (
    DeviceTypes.push (row = {
      id: row.id,
      stt: i + 1,
      name: row.name,
      description: row.description,
    })
  ));

  // render columns
  const columns = [
    {
      field: 'stt',
      headerName: 'No.',
      headerAlign: 'center',
      align: 'center',
      width: 100,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'name',
      headerName: 'Loại Thiết Bị',
      headerAlign: 'center',
      align: 'center',
      width: 250,
      headerClassName: 'super-app-theme--header',
      renderCell: renderTitleLink,
    },
    {
      field: 'description',
      headerName: 'Miêu Tả',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 300,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Xóa',
      headerAlign: 'center',
      align: 'center',
      width: 150,
      renderCell: renderChangleButton,
      headerClassName: 'super-app-theme--header',
      sortable: false,
    },
  ];

  const CustomLoadingOverlay = () => {
    return (
    <GridOverlay>
      <div className={classes.LoadingGridOverlay}>
        <CircularProgress
          size={50}
          className={classes.iconProgress}
        />
      </div>
    </GridOverlay>
    );
  };
  const CustomNoRowsOverlay = () => {
    return (
      <GridOverlay>
        <div style={{align: 'center'}}>
          không có dữ liệu của loại thiết bị.
        </div>
      </GridOverlay>
    );
  };
  // Tool bar
  const CustomToolbar = () => {
    return (
      <div className={classes.formGroup}>
        <div className={classes.search}>
          <SearchInput
            autoFocus
            placeholder="Tìm trên danh sách loại thiết bị"
            // styleSearch="enter"
            onSubmit={handleSearchDeviceType}
            onChange={handleChangeField('search')}
          />
        </div>
        <GridToolbarContainer>
          <GridToolbarExport style={{marginTop: 20}} csvOptions={{
            utf8WithBom: true,
          }}/>
        </GridToolbarContainer>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.rowTitle}>
        <Typography className={classes.titleTool}>
          Danh sách loại thiết bị ({DeviceTypes.length})
        </Typography>
        <div className={classes.rowButtonAdd}>
          <Button
            variant="contained"
            className={classes.btnAdd}
            href={`${folderRoot}Loai-Thiet-Bi/addnew`}
            // target="_blank"
          >
            tạo loại thiết bị
            <PersonAddIcon className={classes.btnIcon}/>
          </Button>
        </div>
      </div>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.contentForm}>
              <DataGrid
                  pageSize={25}
                  pagination
                  rowHeight={36}
                  disableColumnMenu
                  className={classes.container}
                  columns={columns}
                  rows={DeviceTypes}
                  // onRowSelected={handleSelectRow}
                  loading={isLoading}
                  // hideFooterSelectedRowCount={true}
                  components={{
                    LoadingOverlay: CustomLoadingOverlay,
                    NoRowsOverlay: CustomNoRowsOverlay,
                    Toolbar: CustomToolbar,
                  }}
                  // onEditCellChange= {deteleUser}
              />
              {/* popup action after call api delete */}
              <PopupQuestion
                open={open}
                title="Xác nhận thông tin xóa"
                content="Bạn có chắc muốn xóa thiết bị này"
                callback={handleAfterDelete}
                handleClose={handleClose}
              />
              {/* end popup */}
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </div>
  );
}
//  get DeviceTypes
async function getDeviceTypes(data) {
  // console.log(data)
  let url = `${apiRoot}/device-types?limit=1000000000`;
  if (!isNullOrUndefined(data)) {
    url = `${apiRoot}/device-types?Search=${data.searchTerm}&limit=1000000000`;
  }
  try {
    const res = await axios.get( url );
    // error
    if (res.status !== 200) {
      return null;
    }
    // console.log(res.data.data.items);
    return res.data.data;
  } catch (error) {
    // console.log(error);
    return null;
  }
}

//  call API Delete DeviceTypes
async function callAPIDeleteDeviceTypes(id, data) {
  if (isNullOrEmpty(id)) return;
  try {
    const res = await axios.delete(`${apiRoot}/device-types/${id}`, data);
    // error
    if (res.status !== 200) {
      return false;
    }
    // success
    return true;
  } catch (error) {
    if (error.response.status === 400 && error.response.data.code === -2) {
      return -2;
    }
    return false;
  }
}

