import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import * as moment from 'moment';
// import { Link } from "react-router-dom";
import clsx from 'clsx';
// import { useCookies } from 'react-cookie';ss
import { database } from '../../component/filebase/config';
import { getDatabase, ref, onValue, update } from "firebase/database";
// import { collection, getDocs } from "firebase/firestore";
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
// material component
import {
  Button,
  FormControl,
  Select,
} from '@material-ui/core';
import {
  DataGrid,
  GridOverlay,
  // GridToolbarExport,
  // GridToolbarContainer
} from '@material-ui/data-grid';


// constant
import {
  apiRoot,
  // folderRoot 
} from '../../constant/index';

// component common
import Wrapper from '../../component/Wrapper/Wrapper';
// import PopupQuestion from '../../component/Popup/PopupQuestion';

// helpers
import {
  isNullOrUndefined,
  isNullOrEmpty,
  ROOT_URL,
} from '../../utils/helpers';

//component custom
import SearchInput from '../../component/SearchForm/SearchInput';

// jss
import useStyles from '../../assets/jss/layout/MenuItemStyle';
export default function Dashboard() {
  const classes = useStyles();
  // const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [realtimeDB, setRealtimeDB] = useState([]);
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
  // const [isdb, setIsdb] = useState();  
  // console.log("analytics: ", analytics);
  // console.log("app: ", app);
  // console.log("analytics: ", analytics);
  // console.log("getAll: ", getAll);
  // console.log("DB: ", db);
  // console.log("realtimeDB: ", database.ref("device"));

  // const [status, setStatus] = useState();
  const [realtimeDB, setRealtimeDB] = useState([]);

  // const [dataReal, setDataReal] = useState([]);

  // list  Device type
  const [listDevice, setListDevice] = useState(null);

  const [deviceId, setDeviceID] = useState('14E563F7AA094577');

  useEffect(() => {
    // get data Device type
    async function getDataDevice() {
      try {
        const res = await axios.get(`${apiRoot}/devices`);
        // error
        if (res.status !== 200) {
          return;
        }
        // success
        // console.log(res.data.data.items);
        setListDevice(res.data.data.items);
      } catch (error) {
        return;
      }
    }


    getDataDevice();
  }, [deviceId]);


  useEffect(() => {
    // setIsdb(db);
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
  const db = getDatabase();
  React.useEffect(() => {
    if (isNullOrUndefined(db || realtimeDB)) return;
    const starCountRef = ref(db, deviceId);
    // console.log("starCountRef: ", starCountRef);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      if (isNullOrUndefined(data)) return setRealtimeDB([]), alert("Thiết bị chưa kết nối đến server");
      const dataMap = Object.keys(data).map((key, i) => (
        {
          id: i,
          name: key,
          stt: i + 1,
          value: data[key]
        })
      );
      console.log(dataMap)
      setRealtimeDB(dataMap);

      // setDataReal(dataMap);
      // console.log(database)
    });
  }, [database, deviceId]);
  // console.log(database)
  // console.log("realtimeDB: ", realtimeDB);
  // useEffect(() => {
  //   // console.log(realtimeDB)
  // }, [realtimeDB]);
  // React.useEffect(() => {
  //   // database.ref("device").on("value", (snapshot) => {
  //   //   setAge(snapshot.val());
  //   // });
  //   async function getDataFirebase() {
  //     const querySnapshot = await getDocs(collection(database, "device"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //       console.log(doc.data());
  //       console.log(doc.data().relay1);
  //       console.log(doc);
  //     })
  //     console.log(querySnapshot);

  //     // setData(querySnapshot);
  //   }
  //   getDataFirebase();
  // }, []);
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
    // console.log(result)
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
  // const s = realtimeDB.map(item => item.value);
  // console.log(s)

  // console.log(arr);
  const handleChangeSwitch = val => {
    // console.log(val);
    let newKey = val.value;
    if (val.value === 1) {
      newKey = 0
    } else if (val.value === 0) {
      newKey = 1
    }
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/' + deviceId + '/' + val.name] = newKey;
    update(ref(db), updates);

    // console.log('real:', realtimeDB)
    // let arrdt = [...realtimeDB];
    // // setRealtimeDB(arrdt)
    // let arr = arrdt.map(item => item.value);
    // axios.post(`${ROOT_URL}/SendComand`, {
    //   imei: '14E563F7AA094577',
    //   relay1: Boolean(arr[0]),
    //   relay2: Boolean(arr[1]),
    //   relay3: Boolean(arr[2]),
    //   relay4: Boolean(arr[3]),
    //   relay5: Boolean(arr[4]),
    //   relay6: Boolean(arr[5]),
    //   relay7: Boolean(arr[6]),
    //   relay8: Boolean(arr[7]),
    // })
    const starCountRef = ref(db, deviceId);
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (isNullOrUndefined(data)) return alert('Thiết bị chưa kết nối server')
      const dataMap = Object.keys(data).map((key, i) => (
        {
          id: i,
          name: key,
          stt: i + 1,
          value: data[key]
        })
      )
      let arrr = dataMap.map(item => item.value);
      return arr = arrr;

    });
    axios.post(`${ROOT_URL}/SendComand`, {
      imei: deviceId,
      relay1: Boolean(arr[0]),
      relay2: Boolean(arr[1]),
      relay3: Boolean(arr[2]),
      relay4: Boolean(arr[3]),
      relay5: Boolean(arr[4]),
      relay6: Boolean(arr[5]),
      relay7: Boolean(arr[6]),
      relay8: Boolean(arr[7]),
      relay9: Boolean(arr[8]),
    })
  };
  // useEffect(() => {
  //   axios.post(`${ROOT_URL}/SendComand`, {
  //     imei: '14E563F7AA094577',
  //     relay1: Boolean(arr[0]),
  //     relay2: Boolean(arr[1]),
  //     relay3: Boolean(arr[2]),
  //     relay4: Boolean(arr[3]),
  //     relay5: Boolean(arr[4]),
  //     relay6: Boolean(arr[5]),
  //     relay7: Boolean(arr[6]),
  //     relay8: Boolean(arr[7]),
  //   })
  // }, [arr]);

  // console.log(realtimeDB);
  // console.log(status);
  const renderChangleButton = (params) => {
    // console.log(params.row.value)
    return (
      <React.Fragment>
        <FormControlLabel
          control={<Android12Switch
            name={params.row.name}
            onChange={() => handleChangeSwitch(params.row)}
            checked={params.row.value === 1 ? true : false}
          />}
          label=""
          className={classes.switch}
        />
      </React.Fragment>
    )
  }
  const renderChangleButton2 = (params) => {
    // console.log(params.row.value)
    return (
      <React.Fragment>
        <FormControlLabel
          control={<Android12Switch
            name={params.row.name}
          // onChange={() => handleChangeSwitch(params.row)}
          // checked={params.row.value === 1 ? true : false}
          />}
          label=""
          className={classes.switch}
        />
      </React.Fragment>
    )
  }
  // render Dashboards
  const Dashboards = [];
  data.length > 0 &&
    data.map((row, i) => (
      Dashboards.push(row = {
        id: row.id,
        stt: i + 1,
        name: row.firstName + " " + row.lastName,
      })
    ));
  // console.log(Dashboards)
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
      field: 'value',
      headerName: 'value',
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
  const columns2 = [
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
      field: 'value',
      headerName: 'value',
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
      renderCell: renderChangleButton2,
      headerClassName: 'super-app-theme--header',
      sortable: false,
    },
  ];
  // rending option user status
  const optionDevice = []
  !isNullOrEmpty(listDevice) &&
    listDevice.map(e => {
      optionDevice.push(
        <option value={e.imei} key={e.id}>
          {e.imei}
        </option>
      );
    });
  // console.log("optionDevice: ", optionDevice);
  const handleChangeList = (event) => {
    setDeviceID(event.target.value);
  };
  console.log(deviceId)
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
        <div style={{ align: 'center' }}>
          không có dữ liệu của loại thiết bị.
        </div>
      </GridOverlay>
    );
  };
  // Tool bar
  const CustomToolbar = () => {
    return (
      <div className={clsx(classes.formGroup, classes.borderBot)}>

        <div style={{ display: 'flex' }}>
          <Typography className={classes.Offline}>Online</Typography>
          <Button className={classes.btnDetails}>Chi tiết</Button>
        </div>
      </div >
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
                  <TabList onChange={handleChange} aria-label="lab API tabs example" className={classes.tabList}>
                    <Tab label="Điều khiển thường xuyên" value="1" />
                    <Tab label="Tìm kiếm và điều khiển" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div style={{ marginTop: '-20px' }}>
                    <div className={clsx(classes.formContent, classes.scrollPage)}>
                      <div className={classes.formGroup2}>
                        <label>
                          Tên thiết bị:
                        </label>
                        <div className={classes.rowInline}>
                          <FormControl
                            variant="outlined"
                            className={clsx(classes.formControlSelect, classes.dContents)}
                          >
                            <Select
                              native
                              style={{ width: '100%' }}
                              onChange={handleChangeList}
                              value={deviceId}
                            >
                              {optionDevice}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <DataGrid
                      pagination
                      rowHeight={36}
                      disableColumnMenu
                      className={clsx(classes.container, classes.heightDashboard, classes.breakpoint)}
                      columns={columns}
                      rows={realtimeDB}
                      hideFooter={true}
                      components={{
                        LoadingOverlay: CustomLoadingOverlay,
                        NoRowsOverlay: CustomNoRowsOverlay,
                        Toolbar: CustomToolbar,
                      }}
                    />
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div style={{ marginTop: '-60px' }}>
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
                        columns={columns2}
                        rows={Dashboards}
                        hideFooter={true}
                        components={{
                          LoadingOverlay: CustomLoadingOverlay,
                          NoRowsOverlay: CustomNoRowsOverlay,
                          Toolbar: CustomToolbar,
                        }}
                      />) : ''}
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

// function useFormSelect(initValue, isRequire) {
//   const classes = useStyles();
//   const [value, setValue] = useState(initValue);
//   const [isFirst, setIsFirst] = useState(true);
//   useEffect(() => {
//     if (!isNullOrEmpty(initValue)) {
//       setValue(initValue);
//     }
//   }, [initValue]);

//   function handleChange(e) {
//     setValue(e.target.value);

//     // check first time
//     if (isFirst) {
//       setIsFirst(!isFirst);
//     }
//   }
//   let error = isRequire && isNullOrEmpty(value) && !isFirst ? true : false;
//   return {
//     value: value,
//     error: error,
//     onChange: handleChange,
//     variant: 'outlined',
//     className: classes.inputControl2,
//   };
// }
//  get Dashboards
async function getDashboards(data) {
  // console.log(data)
  let url = `${apiRoot}/users`;
  if (!isNullOrUndefined(data)) {
    url = `${apiRoot}/users?Search=${data.searchTerm}`;
  }
  try {
    const res = await axios.get(url);
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
//     // errora
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

