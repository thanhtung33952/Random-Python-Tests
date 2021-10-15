import React, { useState, useEffect } from 'react';
// import axios from 'axios';
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
import DeleteIcon from '@mui/icons-material/DeleteForever';
import {
  DataGrid,
  GridOverlay,
  GridToolbarExport,
  GridToolbarContainer
} from '@material-ui/data-grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


// constant
import { apiRoot, folderRoot } from '../../constant/index';

// component common
import Wrapper from '../../component/Wrapper/Wrapper';
import PopupQuestion from '../../component/Popup/PopupQuestion';
// import PopupListRequestSample from 'components/Popup/PopupListRequestSample';

// helpers
import { isNullOrUndefined } from '../../utils/helpers';

//component customer
import SearchInput from '../../component/SearchForm/SearchInput';

// jss
import useStyles from '../../assets/jss/layout/MenuItemStyle';

export default function Customer() {
const classes = useStyles();
// const [isLoading, setisLoading] = useState(false);
const [data, setData] = useState([]);
const [open, setOpen] = useState(false);
const [requestSelected, setRequestSelected] = useState();
// const [cookies] = useCookies(['AuthenticationWorkflow']);
// const userInfo = cookies.AuthenticationWorkflow;
// const [openSampleRequest, setOpenSampleRequest] = useState(false);
// const [flagApi, setFlagApi] = useState({openMsg: false, msg: '', loading: false, status: 0});
// let token = cookies.AuthenticationWorkflow.tokenAccess;

// useEffect(() => {

//     async function getData() {
//     if (isNullOrUndefined(token)) return;
//     // show loading
//     setisLoading(true);

//     // call api get data
//     const result = await getDataDraft(null, token);

//     // hide loading
//     setisLoading(false);

//     // faild
//     if (!result) return;

//     // success
//     setData(result.data);
//     }

//     getData();
// }, []);

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
const renderClassification = (params) => {
    return (
    <span
        className={classes.classification}
        style={{backgroundColor: !isNullOrUndefined(params.row.color) ? params.row.color : '#f3f3f3'}}
    >
        {params.value}
    </span>
    )
};
const renderTitleLink = (params) => {
    return (
    <Link
        to={`${folderRoot}Khach-Hang/${params.row.id}`}
        // target="_blank"
        style={{color: '#4ca4fb', textDecoration: 'none'}}
    >
        {params.value}
    </Link>
    )
}
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
// render draft
const customer = [
  {
    id: 1,
    Distributor: 'Đại lý f',
    Customers: 25,
    Phone: '0123',
    Email: '@dgdfgfg',
    Address: 'abc',
    VehicleNumber: 0,
    DeviceNumber: 1,
    NumberOfSims: 1
  },
  {
    id: 2,
    Distributor: 'Đại lý a',
    Customers: 36,
    Phone: '0321',
    Email: '@qrqwdasf',
    Address: 'abc',
    VehicleNumber: 0,
    DeviceNumber: 1,
    NumberOfSims: 1
  },
  {
    id: 3,
    Distributor: 'Đại lý b',
    Customers: 19,
    Phone: '099999',
    Email: '@adfarw',
    Address: 'abc',
    VehicleNumber: 0,
    DeviceNumber: 1,
    NumberOfSims: 1
  },
  {
    id: 4,
    Distributor: 'Đại lý c',
    Customers: 28,
    Phone: '012349898',
    Email: '@sfgsdfsd',
    Address: 'abc',
    VehicleNumber: 0,
    DeviceNumber: 1,
    NumberOfSims: 1
  },
  {
    id: 5,
    Distributor: 'Đại lý d',
    Customers: 23,
    Phone: '03246546846',
    Email: '@jaghsdjashdja0000000000000000000000000000000000000000000',
    Address: 'abc',
    VehicleNumber: 0,
    DeviceNumber: 1,
    NumberOfSims: 1
  },
];
// render columns
// console.log(data)
const columns = [
    {
      field: 'Distributor',
      headerName: 'Nhà phân phối/Đại lý',
      // headerAlign: 'center',
      // align: 'center',
      width: 210,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Customers',
      headerName: 'KHách hàng',
      // headerAlign: 'center',
      // align: 'center',
      width: 150,
      headerClassName: 'super-app-theme--header',
      renderCell: renderTitleLink,
    },
    {
      field: 'Phone',
      headerName: 'SĐT',
      // headerAlign: 'center',
      // align: 'center',
      width: 150,
      renderCell: renderClassification,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Email',
      headerName: 'Email',
      // flex: 1,
      width: 150,
      // headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--cell--underline',
    },
    {
      field: 'Address',
      headerName: 'Địa chỉ',
      // headerAlign: 'center',
      // align: 'center',
      minWidth: 150,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'VehicleNumber',
      headerName: 'Số xe',
      width: 90,
      // headerAlign: 'center',
      // align: 'center',
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'DeviceNumber',
      headerName: 'Số thiết bị',
      width: 120,
      // headerAlign: 'center',
      // align: 'center',
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'NumberOfSims',
      headerName: 'Số lượng sim',
      width: 150,
      // headerAlign: 'center',
      // align: 'center',
      headerClassName: 'super-app-theme--header',
    },
    {
      field: '編集', 
      headerName: 'Xóa',
      headerAlign: 'center',
      align: 'center',
      width: 100,
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
        データがありません。
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
// console.log(customer.length)
const CustomToolbar = () => {
  return (
    <div className={classes.formGroup}>
      <div className={classes.search}>
        <SearchInput
          autoFocus
          placeholder="Tìm trên danh sách khách hàng"
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
          Danh sách khách hàng ({customer.length})
        </Typography>
        <div className={classes.rowButtonAdd}>
          <Button
            variant="contained"
            className={clsx(classes.btnAdd, classes.btnColor)}
            // href={`${folderRoot}admin/request`}
            // href={`${folderRoot}Customer/addnew`}
            // onClick={() => handleClickOpenSample()}
            // target="_blank"
          >
            nhập đại lý
            <GroupAddIcon className={classes.btnIcon}/>
          </Button>
          <Button
            variant="contained"
            className={classes.btnAdd}
            href={`${folderRoot}Khach-Hang/addnew`}
            // href={`${folderRoot}admin/request`}
            // onClick={() => handleClickOpenSample()}
            // target="_blank"
          >
            tạo khách hàng
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
                  rows={customer}
                  // loading={isLoading}
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
                content="Bạn có chắc muốn xóa Khách hàng này"
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