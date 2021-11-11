/* eslint-disable no-unused-vars */
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
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {
  DataGrid,
  GridOverlay,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarColumnsButton
} from '@material-ui/data-grid';

// constant
import { apiRoot, folderRoot } from '../../constant/index';
// helpers
import { isNullOrUndefined, isNullOrEmpty } from '../../utils/helpers';
// component common
import Wrapper from '../../component/Wrapper/Wrapper';
import PopupQuestion from '../../component/Popup/PopupQuestion';
// import PopupListRequestSample from 'components/Popup/PopupListRequestSample';

// helpers
// import { isNullOrUndefined } from '../../utils/helpers';

//component customer
import SearchInput from '../../component/SearchForm/SearchInput';

// jss
import useStyles from '../../assets/jss/layout/MenuItemStyle';

export default function Device() {
  const classes = useStyles();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [deviceSelected, setDeviceSelected] = useState();
  const [pageSize, setPageSize] = useState(20)
  // const [cookies] = useCookies(['AuthenticationWorkflow']);
  // const userInfo = cookies.AuthenticationWorkflow;
  // const [flagApi, setFlagApi] = useState({openMsg: false, msg: '', loading: false, status: 0});
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
    const result = await getDevices();

    // hide loading
    setisLoading(false);

    // faild
    if (!result) return;

    // success
    // console.log(result.items)
    setData(result.items);
    }

    getData();
  }, []);

  // delete Device
  const deteleDevice = async () => {
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    if (isNullOrUndefined(deviceSelected)) return;
    // console.log(deviceSelected);
    // call api delete
    const result = await callAPIDeleteDevices(deviceSelected.id);
    // Failed
    if (!result) {
      setStatusSubmit({ ...statusSubmit, status: -1, isLoading: false });
      setOpen(false);
      return;
    }

    // success
    setStatusSubmit({ ...statusSubmit, status: 1, isLoading: false });
    let newArr = [...data]; // copying the old data array
    let index = newArr.findIndex(x => x.id === deviceSelected.id);
    if (index !== -1) {
      newArr.splice(index, 1);
      setData(newArr);
      setOpen(false);
    }
  };

  // on submit search Device by key
  const handleSearchDevice = async (formValue, callback) => {
    // call api search user
    const result = await getDevices(formValue);
    // console.log(result)
    if (!result) {
      callback();
      return;
    }
    callback();
    setData(result.items);
  };
  // open popup
  const handleClickOpen = (deive) => {
    setDeviceSelected(deive);
    // console.log(request);
    setOpen(true);
  };
  const handleAfterDelete = flag => {
    setOpen(false);
    // flag: yes||no
    if (flag === 'yes') {
      deteleDevice();
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

  const renderChangleButton = (params) => {
    return (
      <React.Fragment>
        <Button
          components={Link}
          variant="contained"
          className={clsx(classes.btnDelete, classes.mRight10)}
          href={`${folderRoot}Thiet-Bi/update/${params.row.id}`}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          className={classes.btnDelete}
          onClick={() => handleClickOpen(params.row)}
        >
          <DeleteIcon />
        </Button>
      </React.Fragment>
    )
  }
  // render Devices
  const Devices = [];
  data.length > 0 &&
  data.map((row, i) => (
    Devices.push (row = {
      id: row.id,
      stt: i + 1,
      deviceTypeId: row.deviceType.name,
      code: row.code,
      imei: row.imei
    })
  ));
  // render columns
  const columns = [
    {
      field: 'stt',
      headerName: 'No.',
      // headerAlign: 'center',
      // align: 'center',
      width: 100,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'deviceTypeId',
      headerName: 'Tên loại thiết bị',
      // headerAlign: 'center',
      // align: 'center',
      width: 200,
      headerClassName: 'super-app-theme--header',
      // renderCell: renderTitleLink,
    },
    {
      field: 'code',
      headerName: 'Code',
      // headerAlign: 'center',
      // align: 'center',
      width: 200,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'imei',
      headerName: 'Imei',
      // headerAlign: 'center',
      // align: 'center',
      flex: 1,
      minWidth: 200,
      headerClassName: 'super-app-theme--header',
      // cellClassName: 'super-app-theme--cell--underline',
    },
    {
      field: 'Hành động',
      headerAlign: 'center',
      align: 'center',
      width: 120,
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
        không có dữ liệu.
      </div>
    </GridOverlay>
    );
  };

  // Tool bar
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer className={classes.justEnd}>
        <GridToolbarColumnsButton className={classes.marTop20} />
        <GridToolbarExport className={classes.marTop20} csvOptions={{
          utf8WithBom: true,
        }}/>
      </GridToolbarContainer>
    );
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.titleTool}>
        Danh sách thiết bị ({Devices.length})
      </Typography>
      <div className={classes.rowButtonAdd}>
        <Button
          variant="contained"
          className={classes.btnAdd}
          href={`${folderRoot}Thiet-Bi/addnew`}
        >
          tạo thiết bị
          <PersonAddIcon className={classes.btnIcon}/>
        </Button>
      </div>
      <div className={classes.search}>
        <SearchInput
          autoFocus
          styleSearch="enter"
          placeholder="Tìm trên danh sách thiết bị"
          onSubmit={handleSearchDevice}
          onChange={handleChangeField('search')}
        />
      </div>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.contentForm}>
              <DataGrid
                  pageSize={pageSize}
                  pagination
                  rowHeight={36}
                  disableColumnMenu
                  className={classes.container}
                  columns={columns}
                  rows={Devices}
                  // onRowSelected={handleSelectRow}
                  loading={isLoading}
                  hideFooterSelectedRowCount={true}
                  rowsPerPageOptions = {[20]}
                  onPageSizeChange={(params) => setPageSize(params.pageSize)}
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
//  get Devices
async function getDevices(data) {
  // console.log(data)
  let url = `${apiRoot}/devices?page=-1`;
  if (!isNullOrUndefined(data)) {
    url = `${apiRoot}/devices?Search=${data.searchTerm}`;
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

//  call API Delete Devices
async function callAPIDeleteDevices(id, data) {
  if (isNullOrEmpty(id)) return;
  try {
    const res = await axios.delete(`${apiRoot}/devices/${id}`, data);
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
