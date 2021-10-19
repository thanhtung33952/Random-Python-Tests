/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import clsx from "clsx";
// constant
import { apiRoot } from '../../constant/index';
import { useParams } from 'react-router-dom';
import { isNullOrEmpty, isNullOrUndefined } from '../../utils/helpers';

// material component
import {
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

// icons
import CircularProgress from '@material-ui/core/CircularProgress';

// custom component
import PopupQuestion from '../../component/Popup/PopupQuestion';

// jss
import useStyles from '../../assets/jss/Page/FormCustomer';
// import { folderRoot } from '../../constant/index';

export default function FormDeviceType() {
  const classes = useStyles();
  // mode insert/update
  let { deviceType_id } = useParams();
  const [isNew, setNewDeviceType] = useState(true);
  const [deviceTypeData, setDeviceTypeData] = useState(''); // name, description
  // console.log(deviceTypeData)
  // data form
  const name = useFormInput(
    !isNullOrUndefined(deviceTypeData) && !isNullOrEmpty(deviceTypeData)
      ? deviceTypeData : '',
      true
  );
  const description = useFormInput(
    !isNullOrUndefined(deviceTypeData) && !isNullOrEmpty(deviceTypeData)
      ? deviceTypeData : '',
      true
  );
  // flag submit
  const [statusSubmit, setStatusSubmit] = useState({
    status: 0, // -1: error, 1: success
    isLoading: false,
    isLoading2: false,
    msg: ''
  });
  // is open popup after save deviceType
  const [isOpenQuestion, setOpenPopupQuestion] = useState(false);
  // is open popup question update
  const [isOpenQuestionUpdate, setOpenPopupQuestionUpdate] = useState(false);
// console.log(deviceType_id)
  useEffect(() => {
    // check isNew user
    !isNullOrUndefined(deviceType_id) && setNewDeviceType(false);

    // get data DeviceType (nếu url có DeviceType id)
    async function getDataDeviceType(DeviceTypeId) {
      console.log(DeviceTypeId)
      try {
        const res = await axios.get(`${apiRoot}/device-types/${DeviceTypeId}`);
        console.log(res)
        // error
        if (res.status !== 200) {
          return;
        }
        // success
        const result = res.data;
        console.log(res.data.data)
        console.log(result)
        setDeviceTypeData(result);
      } catch (error) {
        return;
      }
    }
    if (!isNullOrEmpty(deviceType_id)) {
      getDataDeviceType(deviceType_id);
    }

    getDataDeviceType();
  }, []);

// console.log(deviceTypeData)
  // save deviceType data
  const handleSave = async () => {
    // if (!validation()) return;

    // show question mode update
    if (!isNew) {
      setOpenPopupQuestionUpdate(true);
      return;
    } else {
      setOpenPopupQuestion(true);
      return;
    }

    // // mode addnew deviceType
    // handleAddnew();
  };

  // handle Update deviceType
  const handleUpdate = async flag => {
    setOpenPopupQuestionUpdate(false);
    if (flag === 'no' || isNullOrUndefined(deviceType_id)) return;

    // call api
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    const data = {
      name: name.value,
      description: description.value,
    };
    const result = await callAPIDeviceType(data, deviceType_id);
    // error
    if (!result) {
      setStatusSubmit({
        ...statusSubmit,
        status: -1,
        isLoading: false,
        msg: 'Cập nhật không thành công.'
      });
      return;
    }
    // success
    setStatusSubmit({
      ...statusSubmit,
      status: 1,
      isLoading: false,
      msg: 'Cập nhật đã hoàn tất.'
    });
    location.reload();
  };

  // handle add new deviceType
  const handleAddnew = async flag => {
    setOpenPopupQuestion(false)
    if (flag === 'no') return;
    // call api
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    let data = {
      name: name.value,
      description: description.value,
    };
    console.log(data)
    const result = await callAPIDeviceType(data);
    console.log(result.data);
    // error
    if (!result) {
      setStatusSubmit({
        ...statusSubmit,
        status: -1,
        isLoading: false,
        msg: 'Đăng ký mới không thành công.'
      });
      return;
    }
    // error: Email đã tồn tại
    // if (result === -1) {
    //   setStatusSubmit({
    //     ...statusSubmit,
    //     status: -1,
    //     isLoading: false,
    //     msg: 'メールはすでに存在します'
    //   });
    //   return;
    // }

    setDeviceTypeData({
      ...deviceTypeData,
      id: result.id
    });
    setStatusSubmit({
      ...statusSubmit,
      status: 1,
      isLoading: false,
      msg: 'Đăng ký mới đã hoàn tất.'
    });
    // mode insert nên sau khi insert thành công show question redirect url update user or ridirect url list deviceType
    // window.location.href = `${folderRoot}/device-types/${result.id}`;
    // setOpenPopupQuestion(true);
  };
  
// console.log(deviceTypeData)

  // validation
//   const validation = () => {
//     if (isNew) {
//       if (
//         !isNullOrEmpty(status.value) &&
//         !isNullOrEmpty(departmentId.value) &&
//       )
//       return true;
//     } else {
//       if (
//         (
//         userData.userName !== name.value ||
//         userData.status !== status.value ||
//       )
//       return true;
//     }
//   };

  return (
    <div className={classes.root}>
      <div className={classes.headFormGroup}>
        <Typography className={classes.titleForm}>
          {isNew ? `Thêm loại thiết bị mới` : `Chỉnh sửa thông tin loại thiết bị`}
        </Typography>
      </div>
      <div className={clsx(classes.formContent, classes.scrollPage)}>
        <div className={classes.formGroup}>
          <label>
            Loại thiết bị <em>（Bắt Buộc）</em>
          </label>
          <TextField {...name} />
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
              onClick={handleSave}
              // disabled={!isValid || statusSubmit.isLoading}
            >
              {isNew ? `Thêm mới` : `Chỉnh sửa`}
            </Button>
            {statusSubmit.isLoading && (
              <CircularProgress size={24} className={classes.iconProgress} />
            )}
          </div>

          {/* popup action after call api user */}
          <PopupQuestion
            open={isOpenQuestion}
            content="Bạn muốn thêm mới?"
            callback={handleAddnew}
            handleClose={() => setOpenPopupQuestion(false)}
          />
          {/*  end popup */}

          {/* popup question update data */}
          <PopupQuestion
          open={isOpenQuestionUpdate}
          content="Bạn có muốn lưu các thay đổi của bạn?"
          callback={handleUpdate}
          handleClose={() => setOpenPopupQuestionUpdate(false)}
        />
        {/* end popup */}
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

// insert new DeviceType
async function callAPIDeviceType(data, DeviceTypeId) {
  console.log(DeviceTypeId)
  try {
    let res;
    if (DeviceTypeId) {
      // update
      res = await axios.put(`${apiRoot}/device-types/${DeviceTypeId}`, data);
    } else {
      // insert
      res = await axios.post(`${apiRoot}/device-types`, data);
    }
    // error
    if (res.status !== 200) {
      return false;
    }
    // success
    console.log(res.data)
    return res.data;
  } catch (error) {
    const result = error.response;
    if (result.status === 400) {
      // email đã tồn tại
      return -1;
    }
    return false;
  }
}
