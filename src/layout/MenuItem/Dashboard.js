import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import * as moment from 'moment';
// import { Link } from "react-router-dom";
import clsx from 'clsx';
// import { useCookies } from 'react-cookie';

//component material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import DeleteIcon from '@mui/icons-material/DeleteForever';
// import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  DataGrid,
  GridOverlay,
  // GridToolbarExport,
  // GridToolbarContainer
} from '@material-ui/data-grid';

// constant
import { apiRoot,
  // folderRoot 
} from '../../constant/index';

// component common
import Wrapper from '../../component/Wrapper/Wrapper';
// import PopupQuestion from '../../component/Popup/PopupQuestion';

// helpers
import { isNullOrUndefined,
  // isNullOrEmpty
} from '../../utils/helpers';

//component custom
import SearchInput from '../../component/SearchForm/SearchInput';

// jss
import useStyles from '../../assets/jss/layout/MenuItemStyle';
import { Button } from '@material-ui/core';

export default function Dashboard() {
  const classes = useStyles();
  // const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [dashboardSelected, setDashboardSelected] = useState();
  // const [pageSize, setPageSize] = useState(20)
  const [tab, setTab] = useState('1');
  // const [cookies] = useCookies(['AuthenticationWorkflow']);
  // const userInfo = cookies.AuthenticationWorkflow;
  // let token = cookies.AuthenticationWorkflow.tokenAccess;
  // flag submit
  // const [statusSubmit, setStatusSubmit] = useState({
  //   status: 0, // -1: error, 1: success
  //   isLoading: false,
  //   isLoading2: false,
  //   msg: ''
  // });

  useEffect(() => {
    async function getData() {
    // if (isNullOrUndefined(token)) return;
    // show loading
    // setisLoading(true);

    // call api get data
    const result = await getDashboards();

    // hide loading
    // setisLoading(false);

    // faild
    if (!result) return;

    // success
    setData(result.items);
    }

    getData();
  }, []);
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  // delete Device type
  // const deteleDashboard = async () => {
  //   setStatusSubmit({ ...statusSubmit, isLoading: true });
  //   if (isNullOrUndefined(dashboardSelected)) return;
  //   // console.log(dashboardSelected);
  //   // call api delete
  //   const result = await callAPIDeleteDashboards(dashboardSelected.id);
  //   // Failed
  //   if (!result) {
  //     setStatusSubmit({ ...statusSubmit, status: -1, isLoading: false });
  //     setOpen(false);
  //     return;
  //   }

  //   // success
  //   setStatusSubmit({ ...statusSubmit, status: 1, isLoading: false });
  //   let newArr = [...data]; // copying the old data array
  //   let index = newArr.findIndex(x => x.id === dashboardSelected.id);
  //   if (index !== -1) {
  //     newArr.splice(index, 1);
  //     setData(newArr);
  //     setOpen(false);
  //   }
  // };

  // on submit search Dashboard by key
  const handleSearchDashboard = async (formValue, callback) => {
    // call api search user
    const result = await getDashboards(formValue);
    console.log(result)
    if (!result) {
      callback();
      return;
    }
    callback();
    setData(result.items);
  };
  // open popup
  // const handleClickOpen = dashboard => {
  //   setDashboardSelected(dashboard);
  //   // console.log(dashboard);
  //   setOpen(true);
  // };
  // const handleAfterDelete = flag => {
  //   setOpen(false);
  //   // flag: yes||no
  //   if (flag === 'yes') {
  //     deteleDashboard();
  //   }
  // };
  // Close popup
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleChangeField = name => e => {
      let val = e.target.value;
      setData({ ...data, [name]: val });
  };
  const renderChangleButton = () => {
    return (
      <React.Fragment>
        <FormControlLabel
          control={<Android12Switch defaultChecked />}
          label=""
        />
      </React.Fragment>
    )
  }

  // render Dashboards
  const Dashboards = [];
  data.length > 0 &&
  data.map((row, i) => (
    Dashboards.push (row = {
      id: row.id,
      stt: i + 1,
      name: row.firstName + " " + row.lastName,
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
      field: 'name',
      headerName: 'Khách hàng',
      // headerAlign: 'center',
      // align: 'center',
      minWidth: 150,
      flex: 1,
      headerClassName: 'super-app-theme--header',
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
          không có dữ liệu của loại thiết bị.
        </div>
      </GridOverlay>
    );
  };
  // Tool bar
  const CustomToolbar = () => {
    return (
      <div className={clsx(classes.formGroup, classes.borderBot)}>
        <Typography className={classes.spanDevice}>Thiết bị 1</Typography>
        <div style={{display: 'flex'}}>
          <Typography className={classes.Offline}>Offline</Typography>
          <Button className={classes.btnDetails}>Chi tiết</Button>
        </div>
      </div>
    );
  };
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.rowTitle}>
        <Typography className={classes.titleTool}>
          Bảng điều khiển
        </Typography>
      </div>
      <Wrapper>
        <Grid container spacing={1} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.contentForm}>
              <TabContext value={tab} className={classes.container}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Điều khiển thường xuyên" value="1" />
                    <Tab label="Tìm kiếm và điều khiển" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" className={classes.containerDas}>
                  <DataGrid
                    pagination
                    rowHeight={36}
                    disableColumnMenu
                    className={clsx(classes.container, classes.heightDashboard, classes.breakpoint)}
                    columns={columns}
                    rows={Dashboards}
                    hideFooter={true}
                    components={{
                      LoadingOverlay: CustomLoadingOverlay,
                      NoRowsOverlay: CustomNoRowsOverlay,
                      Toolbar: CustomToolbar,
                    }}
                  />
                  <DataGrid
                    pagination
                    rowHeight={36}
                    disableColumnMenu
                    className={clsx(classes.container, classes.heightDashboard, classes.breakpoint)}
                    columns={columns}
                    rows={Dashboards}
                    hideFooter={true}
                    components={{
                      LoadingOverlay: CustomLoadingOverlay,
                      NoRowsOverlay: CustomNoRowsOverlay,
                      Toolbar: CustomToolbar,
                    }}
                  />
                </TabPanel>
                <TabPanel value="2">
                  <div style={{marginTop: '-60px'}}>
                    <div className={classes.deviceCodeForm}>
                      <Typography>Mã thiết bị: </Typography>
                      <div className={clsx(classes.search, classes.marTop0)}>
                        <SearchInput
                          autoFocus
                          placeholder="Tìm trên danh sách loại thiết bị"
                          styleSearch="enter"
                          styleBorder="ok"
                          onSubmit={handleSearchDashboard}
                          onChange={handleChangeField('search')}
                        />
                      </div>
                    </div>
                    {Dashboards ? (
                    <DataGrid
                      pagination
                      rowHeight={36}
                      disableColumnMenu
                      className={clsx(classes.container, classes.heightDashboard2, classes.breakpoint2)}
                      columns={columns}
                      rows={Dashboards}
                      hideFooter={true}
                      components={{
                        LoadingOverlay: CustomLoadingOverlay,
                        NoRowsOverlay: CustomNoRowsOverlay,
                        Toolbar: CustomToolbar,
                      }}
                    />) : '' }
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </div>
  );
}
//  get Dashboards
async function getDashboards(data) {
  // console.log(data)
  let url = `${apiRoot}/users?page=-1`;
  if (!isNullOrUndefined(data)) {
    url = `${apiRoot}/users?Search=${data.searchTerm}&page=-1`;
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

//  call API Delete Dashboards
// async function callAPIDeleteDashboards(id, data) {
//   if (isNullOrEmpty(id)) return;
//   try {
//     const res = await axios.delete(`${apiRoot}/device-types/${id}`, data);
//     // error
//     if (res.status !== 200) {
//       return false;
//     }
//     // success
//     return true;
//   } catch (error) {
//     if (error.response.status === 400 && error.response.data.code === -2) {
//       return -2;
//     }
//     return false;
//   }
// }

