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
const [requestSelected, setRequestSelected] = useState();
// const [cookies] = useCookies(['AuthenticationWorkflow']);
// const userInfo = cookies.AuthenticationWorkflow;
// const [openSampleRequest, setOpenSampleRequest] = useState(false);
// const [flagApi, setFlagApi] = useState({openMsg: false, msg: '', loading: false, status: 0});
// let token = cookies.AuthenticationWorkflow.tokenAccess;

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
    setData(result.items);
    }

    getData();
  }, []);

  // open popup
  // const handleClickOpenSample = () => {
  //     setOpenSampleRequest(true);
  // };

  // Close popup
  // const handleCloseSample = () => {
  //     setOpenSampleRequest(false);
  // };

  // const handleClickOpen = draft => {
  //   setDraftSelected(draft);
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  // delete User
  // const deteleDraft = async () => {
  //   setStatusSubmit({ ...statusSubmit, isLoading: true });
  //   if (isNullOrUndefined(draftSelected)) return;
  //   // call api delete
  //   const result = await callAPIDeleteDraft(draftSelected.id);
  //   // console.log(data);
  //   // Failed
  //   if (!result) {
  //     setStatusSubmit({ ...statusSubmit, status: -1, isLoading: false });
  //     setOpen(false);
  //     return;
  //   }

  //   // success
  //   setStatusSubmit({ ...statusSubmit, status: 1, isLoading: false });
  //   let newArr = [...data]; // copying the old data array
  //   let index = newArr.findIndex(x => x.id === draftSelected.id);
  //   if (index !== -1) {
  //     newArr.splice(index, 1);
  //     setData(newArr);
  //     setOpen(false);
  //   }
  // };
  // const handleAfterDelete = flag => {
  //   setOpen(false);
  //   // flag: yes||no
  //   if (flag === 'yes') {
  //     deteleDraft();
  //   }
  // };

  // on submit search draft by key
  // const handleSearchDraft = async (formValue, callback) => {
  //     // if (isNullOrUndefined(token)) return;
  //     // console.log(token)
  //     // call api search draft
  //     const result = await callApiSearch(formValue);
  //     if (!result) {
  //     callback();
  //     return;
  //     }
  //     callback();
  //     setData(result);
  // };
  // open popup
  const handleClickOpen = request => {
    setRequestSelected(request);
    // console.log(request);
    setOpen(true);
  };
  const handleAfterDelete = flag => {
    setOpen(false);
    // flag: yes||no
    if (flag === 'yes') {
      // deteleRequests();
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

  //component button in list
  // const renderClassification = (params) => {
  //     return (
  //     <span
  //         className={classes.classification}
  //         style={{backgroundColor: !isNullOrUndefined(params.row.color) ? params.row.color : '#f3f3f3'}}
  //     >
  //         {params.value}
  //     </span>
  //     )
  // };
  const renderTitleLink = (params) => {
      return (
      <Link
          to={`${folderRoot}Thiet-Bi/${params.row.id}`}
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
  // select request
  const handleSelectRow = target => {
    setRequestSelected(target.data);
  }
  // render Devices
  const Devices = [];
  data.length > 0 &&
  data.map((row, i) => {
    Devices.push (row = {
      id: row.id,
      stt: i + 1,
      deviceTypeId: row.deviceTypeId,
      code: row.code,
      imei: row.imei
    });
  });
  // render columns
  // console.log(data)
  const columns = [
    {
      field: 'stt',
      headerName: 'No.',
      headerAlign: 'center',
      align: 'center',
      width: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'deviceTypeId',
      headerName: 'Id loại thiết bị',
      headerAlign: 'center',
      align: 'center',
      width: 200,
      headerClassName: 'super-app-theme--header',
      renderCell: renderTitleLink,
    },
    {
      field: 'code',
      headerName: 'Code',
      headerAlign: 'center',
      align: 'center',
      width: 200,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'imei',
      headerName: 'Imei',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 200,
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--cell--underline',
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
        không có dữ liệu.
      </div>
    </GridOverlay>
    );
  };
  // const handleSelectRow = target => {
  //   setDraftSelected(target.data);
  // }  
  // const closeNotification = () => {
  //     setFlagApi({ ...flagApi, openMsg: false, msg: '' });
  // };
  // console.log(Devices.length)
  const CustomToolbar = () => {
    return (
      <div className={classes.formGroup}>
        <div className={classes.search}>
          <SearchInput
            autoFocus
            placeholder="Tìm trên danh sách thiết bị"
            // onSubmit={handleSearchDraft}
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
          Danh sách thiết bị ({Devices.length})
        </Typography>
        <div className={classes.rowButtonAdd}>
          {/*<Button
            variant="contained"
            className={clsx(classes.btnAdd, classes.btnColor)}
            // href={`${folderRoot}admin/request`}
            // onClick={() => handleClickOpenSample()}
            // target="_blank"
          >
            nhập đại lý
            <GroupAddIcon className={classes.btnIcon}/>
          </Button>*/}
          <Button
            variant="contained"
            className={classes.btnAdd}
            href={`${folderRoot}Thiet-Bi/addnew`}
            // href={`${folderRoot}admin/request`}
            // onClick={() => handleClickOpenSample()}
            // target="_blank"
          >
            tạo thiết bị
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
                  rows={Devices}
                  onRowSelected={handleSelectRow}
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
//  get Devices
async function getDevices() {
  try {
    const res = await axios.get(`${apiRoot}/`);
    // error
    if (res.status !== 200) {
      return null;
    }
    // console.log(res.data);
    return res.data.data;
  } catch (error) {
    // console.log(error);
    return null;
  }
}