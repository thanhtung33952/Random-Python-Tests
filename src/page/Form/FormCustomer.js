/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import classNames from 'classnames';
import clsx from "clsx";
// constant
// import { apiRoot } from 'constant/index.js';
import { useParams } from 'react-router-dom';
import { isEmail, isNullOrEmpty, isNullOrUndefined } from '../../utils/helpers';

// material component
// import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Typography,
  // Divider,
  TextField,
  // FormControl,
  // Select,
  // InputLabel,
  Button,
  // FormHelperText
} from '@material-ui/core';
// icons
import CircularProgress from '@material-ui/core/CircularProgress';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import LockIcon from '@mui/icons-material/LockOpen';
// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
//component customer
// import PopupDepartment from 'components/Users/PopupDepartment';
// import PopupStatus from 'components/Users/PopupStatus';
// import PopupQuestion from 'components/Popup/PopupQuestion';

// jss
import useStyles from '../../assets/jss/Page/FormCustomer';
// import { folderRoot } from '../../constant/index';

export default function FormCustomer() {
  const classes = useStyles();
  // mode insert/update
  let { customer_id } = useParams();
  const [isNew, setNewUser] = useState(true);
  const [userData, setUserData] = useState(''); // userName, email, role, departmentId, approvalGroupId
  // data form
  const deviceId = useFormInput(
    !isNullOrUndefined(userData) && !isNullOrEmpty(userData)
      ? userData : '',
      true
  );
  const firstName = useFormInput(
    !isNullOrUndefined(userData) && !isNullOrEmpty(userData)
      ? userData : '',
      true
  );
  
  const lastName = useFormInput(
    !isNullOrUndefined(userData) && !isNullOrEmpty(userData)
      ? userData : '',
      true
  );
  
  const email = useFormInput(
    !isNullOrUndefined(userData) && !isNullOrEmpty(userData)
      ? userData : '',
      true,
      true
  );
  
  const address = useFormInput(
    !isNullOrUndefined(userData) && !isNullOrEmpty(userData)
      ? userData : '',
      true
  );
  
  const phone = useFormInput(
    !isNullOrUndefined(userData) && !isNullOrEmpty(userData)
      ? userData : '',
      true
  );
  
  const description = useFormInput(
    !isNullOrUndefined(userData) && !isNullOrEmpty(userData)
      ? userData : '',
      true
  );
  // const status = useFormSelect(
  //   !isNullOrEmpty(userData) ? userData.status : undefined,
  //   true
  // );
  // const role = useFormSelect(
  //   !isNullOrUndefined(userData) && !isNullOrUndefined(userData.role)
  //     ? userData.role
  //     : 0,
  // );
  // const departmentId = useFormSelect(
  //   !isNullOrEmpty(userData) ? userData.departmentId : undefined,
  //   true
  // );
  // const password = useFormInput(
  //   !isNullOrEmpty(userData) ? userData.password : '',
  //   isNew ? true : false
  // );
  // const rePassWord = useFormInput(
  //   !isNullOrEmpty(userData) ? userData.password : '',
  //   true
  // );
  // group data
  // const [listGroup, setListGroup] = useState(null);
  // const [groupSelect, setGroupSelect] = useState([]);
  // // department data
  // const [listDepartment, setListDepartment] = useState(null);
  // // user status data
  // const [listStatus, setListStatus] = useState(null);
  // // list user
  // const [users, setUsers] = useState([]);
  // const [userSelect, setUserSelect] = useState([]);
  // // flag submit
  const [statusSubmit, setStatusSubmit] = useState({
    status: 0, // -1: error, 1: success
    isLoading: false,
    isLoading2: false,
    msg: ''
  });
  // get data on select box
  // useEffect(() => {
  //   // check isNew user
  //   !isNullOrUndefined(user_id) && setNewUser(false);
  //   // get data department
  //   async function getDataDepartment() {
  //     try {
  //       const res = await axios.get(`${apiRoot}/departments`);
  //       // error
  //       if (res.status !== 200) {
  //         return;
  //       }
  //       // success
  //       setListDepartment(res.data.data);
  //     } catch (error) {
  //       return;
  //     }
  //   }
  //   // get data user status
  //   async function getDataStatus() {
  //     try {
  //       const res = await axios.get(`${apiRoot}/userstatus`);
  //       // error
  //       if (res.status !== 200) {
  //         return;
  //       }
  //       // success
  //       // console.log(res);
  //       setListStatus(res.data.data);
  //     } catch (error) {
  //       return;
  //     }
  //   }
  //   // get data approvalGroup
  //   async function getListGroup() {
  //     try {
  //       const res = await axios.get(`${apiRoot}/approvalgroups`);
  //       // error
  //       if (res.status !== 200) {
  //         return;
  //       }
  //       // success
  //       // console.log(res)
  //       setListGroup(res.data.data);
  //     } catch (error) {
  //       return;
  //     }
  //   }

  //   // get list user
  //   async function getListUser() {
  //     try {
  //       const res = await axios.get(`${apiRoot}/users`);
  //       // error
  //       if (res.status !== 200) {
  //         return;
  //       }
  //       // success
  //       setUsers(res.data.data);
  //     } catch (error) {
  //       return;
  //     }
  //   }

  //   // get data user (nếu url có user id)
  //   async function getDataUser(userId) {
  //     try {
  //       const res = await axios.get(`${apiRoot}/users/${userId}`);
  //       // error
  //       if (res.status !== 200) {
  //         return;
  //       }
  //       // success
  //       const result = res.data.data;
  //       setUserData(result);

  //       if (!isNullOrUndefined(result.approvalGroup)) {
  //         setGroupSelect(result.approvalGroup);
  //       }

  //       if (!isNullOrUndefined(result.listBoss)) {
  //         setUserSelect(result.listBoss);
  //       }
  //     } catch (error) {
  //       return;
  //     }
  //   }
  //   if (!isNullOrEmpty(user_id)) {
  //     getDataUser(user_id);
  //   }

  //   getDataDepartment();
  //   getDataStatus();
  //   getListGroup();
  //   getListUser();
  // }, []);

//   useEffect(() => {
//     // console.log('user : ', name)
//     if (!isNew || isNullOrUndefined(name) || isNullOrUndefined(name.value)) return;

//     let newUsers = [...users];
//     let userTemp = newUsers.find(x => x.id === 'it-me');

//     // chưa gán chính nó
//     if (isNullOrUndefined(userTemp)) {
//       let newUserTemp = {
//         id: 'it-me',
//         userName: name.value
//       }
//       newUsers.push(newUserTemp);
//       setUsers(newUsers);
//       return;
//     }
//     // đã có chính nó trước đó
//     userTemp.userName = name.value;

//   }, [name])

  // const handleChange = name => e => {
  //   setUserData({
  //     ...userData,
  //     [name]: e.target.value
  //   });
  // };
  // callback from component PopupDepartment
//   const handleCallbackGroup = data => {
//     setListDepartment(data);
//   };
//   // callback from component PopupStatus
//   const handleCallbackGroupStatus = data => {
//     setListStatus(data);
//   };

  // save user data
//   const handleSave = async () => {
//     if (!validation()) return;

//     // show question mode update
//     if (!isNew) {
//       setOpenPopupQuestionUpdate(true);
//       return;
//     } else {
//       setOpenPopupQuestion(true);
//       return;
//     }

//     // // mode addnew user
//     // handleAddnew();
//   };
// console.log(userData)
// console.log(userData.password)
// console.log(password.value)
//   const handleUpdate = async flag => {
//     setOpenPopupQuestionUpdate(false);
//     if (flag === 'no' || isNullOrUndefined(user_id)) return;

//     // call api
//     setStatusSubmit({ ...statusSubmit, isLoading: true });
//     // console.log(userData.password)
//     // console.log(password.value)
//     // console.log(password)
//     const data = {
//       userName: name.value,
//       email: email.value,
//       password: !isNullOrUndefined(password.value) ? password.value : null,
//       // password: password.value,
//       role: role.value,
//         // !isNullOrUndefined(userData) && !isNullOrUndefined(userData.role)
//         //   ? userData.role
//         //   : 0, // 1,2 : admin;  0:user thường
//       status : status.value,
//       departmentId: departmentId.value,
//       approvalGroup: isNullOrEmpty(groupSelect)
//         ? []
//         : groupSelect.map(e => {
//             return {
//               id: e.id,
//               approvalGroupName: e.approvalGroupName
//             };
//           }),
//       listBoss: isNullOrEmpty(userSelect)
//       ? []
//       : userSelect.map(e => {
//           return {
//             id: e.id === 'it-me' ? 0 : e.id,
//             userName: e.userName
//           };
//         })
//     };
//     const result = await callAPIUser(data, user_id, password);
//     // console.log(password.value)
//     // error
//     if (!result) {
//       setStatusSubmit({
//         ...statusSubmit,
//         status: -1,
//         isLoading: false,
//         msg: '更新が失敗しました。'
//       });
//       return;
//     }
//     // success
//     setStatusSubmit({
//       ...statusSubmit,
//       status: 1,
//       isLoading: false,
//       msg: '更新が完了しました。'
//     });
//     location.reload();
//   };

  // handle add new user
//   const handleAddnew = async flag => {
//     setOpenPopupQuestion(false)
//     if (flag === 'no') return;
//     // call api
//     setStatusSubmit({ ...statusSubmit, isLoading: true });
//     let data = {
//       userName: name.value,
//       email: email.value,
//       // password: password.value !== userData.password ? password.value : null,
//       password: password.value,
//       role: role.value,
//         // !isNullOrUndefined(userData) && !isNullOrUndefined(userData.role)
//         //   ? userData.role
//         //   : 0, // 1,2 : admin;  0:user thường
//       status : status.value,
//       departmentId: departmentId.value,
//       approvalGroup: isNullOrEmpty(groupSelect)
//         ? []
//         : groupSelect.map(e => {
//             return {
//               id: e.id,
//               approvalGroupName: e.approvalGroupName
//             };
//           }),
//       listBoss: isNullOrEmpty(userSelect)
//         ? []
//         : userSelect.map(e => {
//             return {
//               id: e.id === 'it-me' ? 0 : e.id,
//               userName: e.userName
//             };
//           })
//     };
//     const result = await callAPIUser(data, null);
//     // console.log(result);
//     // error
//     if (!result) {
//       setStatusSubmit({
//         ...statusSubmit,
//         status: -1,
//         isLoading: false,
//         msg: '新規登録が失敗しました。'
//       });
//       return;
//     }
//     // error: Email đã tồn tại
//     if (result === -1) {
//       setStatusSubmit({
//         ...statusSubmit,
//         status: -1,
//         isLoading: false,
//         msg: 'メールはすでに存在します'
//       });
//       return;
//     }

//     setUserData({
//       ...userData,
//       id: result.id
//     });
//     setStatusSubmit({
//       ...statusSubmit,
//       status: 1,
//       isLoading: false,
//       msg: '新規登録が完了しました。'
//     });
//     // mode insert nên sau khi insert thành công show question redirect url update user or ridirect url list user
//     window.location.href = `${folderRoot}users/update/${result.id}`;
//     // setOpenPopupQuestion(true);
//   };

  // save user data in button back
//   const handleBack = async flag => {
//     setOpenPopupQuestionBack(false);
//     if (!validation() || flag === 'no') {
//       return window.location.href = `${folderRoot}users`;
//     }

//     setStatusSubmit({ ...statusSubmit, isLoading2: true });
//     const data = {
//       userName: name.value,
//       email: email.value,
//       password: !isNullOrUndefined(password.value) ? password.value : null,
//       // password: password.value,
//       role: role.value,
//         // !isNullOrUndefined(userData) && !isNullOrUndefined(userData.role)
//         //   ? userData.role
//         //   : 0, // 1,2 : admin;  0:user thường
//       status : status.value,
//       departmentId: departmentId.value,
//       approvalGroup: isNullOrEmpty(groupSelect)
//         ? []
//         : groupSelect.map(e => {
//             return {
//               id: e.id,
//               approvalGroupName: e.approvalGroupName
//             };
//           }),
//       listBoss: isNullOrEmpty(userSelect)
//       ? []
//       : userSelect.map(e => {
//           return {
//             id: e.id === 'it-me' ? 0 : e.id,
//             userName: e.userName
//           };
//         })
//     };
//     let userOrnull = isNew ? null : user_id;
//     const result = await callAPIUser(data, userOrnull);
//     // error
//     if (!result) {
//       setStatusSubmit({
//         ...statusSubmit,
//         status: -1,
//         isLoading2: false,
//         msg: isNew ? '新規登録が失敗しました。' : '更新が失敗しました。'
//       });
//       return;
//     }
//     // error: Email đã tồn tại
//     if (isNew) {
//       if (result === -1) {
//         setStatusSubmit({
//           ...statusSubmit,
//           status: -1,
//           isLoading2: false,
//           msg: 'メールはすでに存在します'
//         });
//         return;
//       }
//     }
//     // success
//     setUserData({
//       ...userData,
//       id: result.id
//     });
//     setStatusSubmit({
//       ...statusSubmit,
//       status: 1,
//       isLoading2: false,
//       msg: isNew ? '新規登録が完了しました。' : '更新が完了しました。'
//     });
//     if (isNew) {
//       // mode insert nên sau khi insert thành công cho redirect qua url users group theo users_id mới
//       window.location.href = `${folderRoot}users/update/${result.id}`;
//     } else {
//       window.location.href = `${folderRoot}users`;
//     }
//   };

  // validation
//   const validation = () => {
//     if (isNew) {
//       if (
//         !isNullOrEmpty(status.value) &&
//         !isNullOrEmpty(departmentId.value) &&
//         !isNullOrEmpty(name.value) &&
//         !isNullOrEmpty(email.value) &&
//         isEmail(email.value) &&
//         !isNullOrEmpty(password.value) &&
//         !isNullOrUndefined(rePassWord.value) &&
//         (password.value === rePassWord.value)
//       )
//       return true;
//     } else {
//       if (
//         (
//         userData.userName !== name.value ||
//         userData.status !== status.value ||
//         userData.departmentId !== departmentId.value||
//         userData.role !== role.value ||
//         JSON.stringify(userData.approvalGroup) !== JSON.stringify(groupSelect) ||
//         JSON.stringify(userData.listBoss) !== JSON.stringify(userSelect) ||
//         !isNullOrEmpty(password.value) && password.value === rePassWord.value
//         ) &&
//         (
//           !isNullOrEmpty(status.value) &&
//           !isNullOrEmpty(departmentId.value) &&
//           !isNullOrEmpty(name.value) 
//           &&
//           password.value === rePassWord.value
//         )
//       )
//       return true;
//     }
//   };
  // console.log(status.value)
  // console.log(userData.status)
//   const handleClosePopup = () => {
//     setOpen(false);
//   };

//   const handleClosePopupStatus = () => {
//     setStatus(false);
//   };

//   const getGroupSelected = list => {
//     let data = [];
//       // let resultFiles = res.data.data;
//       if (list && list.length > 0) {
//         list.forEach(function(item) {
//           data.push({
//             id: item.id,
//             approvalGroupName: item.approvalGroupName
//           });
//         });
//       }
//     setGroupSelect(data);
//   };

//   const handleSelectBoss = (value) => {
//     if (value.length > 20) return; // max 20 boss
//     let data = [];
//       // let resultFiles = res.data.data;
//       if (value && value.length > 0) {
//         value.forEach(function(item) {
//           data.push({
//             id: item.id,
//             userName: item.userName
//           });
//         });
//       }
//     setUserSelect(data)
//   }

  // cance
//   const handleCance = flag => {
//     setOpenPopupQuestionCance(false);
//     // no
//     if (flag === 'no') return;
//     // yes
//     window.location.href = `${folderRoot}users`;
//   };

  // rending option department
//   const optionDeparment = []
//     !isNullOrEmpty(listDepartment) &&
//     listDepartment.map(e => {
//       optionDeparment.push (
//         <option value={e.id} key={e.id}>
//           {e.departmentName}
//         </option>
//       );
//     });

//   // rending option user status
//   const optionStatus = []
//   !isNullOrEmpty(listStatus) &&
//   listStatus.map(e => {
//     optionStatus.push (
//       <option value={e.id} key={e.id}>
//         {e.userStatusName}
//       </option>
//     );
//   });

  //show pass
//   const handleClickShowPassword = () => {
//     setShowpass({ ...showPass, password : !showPass.password});
//   };
//   const handleClickShowRePassword = () => {
//     setShowpass({ ...showPass, rePassWord : !showPass.rePassWord});
//   };
//   const handleMouseDownPassword = event => {
//     event.preventDefault();
//   };
// console.log(userSelect)
// console.log(userData)
// console.log(status.value)
  return (
    <div className={classes.root}>
      <div className={classes.headFormGroup}>
        <Typography className={classes.titleForm}>
          {isNew ? `Thêm khach hàng mới` : `Chỉnh sửa thông tin khách hàng`}
        </Typography>
      </div>
      <div className={clsx(classes.formContent, classes.scrollPage)}>
        <div className={classes.formGroup}>
          <label>
            Id thiết bị <em>（Bắt Buộc）</em>
          </label>
          <TextField {...deviceId} />
        </div>
        <div className={classes.formGroup}>
          <label>
            FirstName <em>（Bắt Buộc）</em>
          </label>
          <TextField {...firstName} />
        </div>
        <div className={classes.formGroup}>
          <label>
            LastName <em>（Bắt Buộc）</em>
          </label>
          <TextField {...lastName} />
        </div>
        <div className={classes.formGroup}>
          <label>
            Email <em>（Bắt Buộc）</em>
          </label>
          <TextField {...email} disabled={isNew ? false : true} />
        </div>
        <div className={classes.formGroup}>
          <label>
            Địa chỉ <em>（Bắt Buộc）</em>
          </label>
          <TextField {...address} />
        </div>
        <div className={classes.formGroup}>
          <label>
            SĐT <em>（Bắt Buộc）</em>
          </label>
          <TextField {...phone} />
        </div>
        <div className={classes.formGroup}>
          <label>
            Miêu tả <em>（Bắt Buộc）</em>
          </label>
          <TextField {...description} />
        </div>
        
        {/* row submit */}
        <div className={classes.rowSubmit}>
          <Typography
            className={classNames({
              [classes.msgError]: statusSubmit.status === -1,
              [classes.msgSuc]: statusSubmit.status === 1
            })}
          >
            {statusSubmit.msg}
          </Typography>
          <div style={{ position: 'relative' }}>
            <Button
              variant="contained"
              color="primary"
              // onClick={handleSave}
              // disabled={!isValid || statusSubmit.isLoading}
            >
              {isNew ? `Thêm mới` : `Chỉnh sửa`}
            </Button>
            {statusSubmit.isLoading && (
              <CircularProgress size={24} className={classes.iconProgress} />
            )}
          </div>
          {/*<Button
            variant="contained"
            className={classes.btnCance}
            onClick={() => setOpenPopupQuestionCance(true)}
          >
            キャンセル
          </Button>*/}
        </div>
      </div>
    </div>
  );
}

function useFormInput(initValue, isRequire, isEmailControl = false) {
  const classes = useStyles();
  const [value, setValue] = useState(initValue);
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    if (!isNullOrEmpty(initValue)) {
      setValue(initValue);
    }
  }, [initValue]);

  function handleChange(e) {
    setValue(e.target.value);

    // check first time
    if (isFirst) {
      setIsFirst(!isFirst);
    }
  }
  let error = isRequire && isNullOrEmpty(value) && !isFirst ? true : false;
  let errorMsg =
    isRequire && isNullOrEmpty(value) && !isFirst ? 'Đây là một mục bắt buộc.' : null;

  if (!isFirst && !isNullOrEmpty(value) && isEmailControl && !isEmail(value)) {
    error = true;
    errorMsg = 'Địa chỉ email không hợp lệ.';
  }

  return {
    value: value,
    error: error,
    helperText: errorMsg,
    onChange: handleChange,
    variant: 'outlined',
    className: classes.inputControl,
    InputProps: {
      classes: {
        root: classes.rootInput,
        input: classes.thisInput,
        error: classes.thisInputError
      }
    }
  };
}
// function useFormSelect(initValue, isRequire) {
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
//   };
// }

// // insert new user
// async function callAPIUser(data, userId) {
//   try {
//     let res;
//     if (userId) {
//       // update
//       res = await axios.put(`${apiRoot}/users/${userId}`, data);
//     } else {
//       // insert
//       res = await axios.post(`${apiRoot}/users`, data);
//     }
//     // error
//     if (res.data.code !== 1 || res.status !== 200) {
//       return false;
//     }
//     // success
//     // console.log(res)
//     return res.data.data;
//   } catch (error) {
//     const result = error.response;
//     if (result.status === 400 && result.data.code === -1) {
//       // email đã tồn tại
//       return -1;
//     }
//     return false;
//   }
// }
