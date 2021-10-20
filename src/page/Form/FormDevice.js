/* eslint-disable no-unused-vars */
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

// jss
import useStyles from '../../assets/jss/Page/FormCustomer';
import { folderRoot } from '../../constant/index';

// custom component
import PopupQuestion from '../../component/Popup/PopupQuestion';

export default function FormDevice() {
  const classes = useStyles();
  // mode insert/update
  let { device_id } = useParams();
  const [isNew, setNewDevice] = useState(true);
  const [deviceData, setDeviceData] = useState(''); // deviceTypeId, code, imei
  // console.log(deviceData)
  // data form
  const deviceTypeId = useFormInput(
    !isNullOrUndefined(deviceData) && !isNullOrEmpty(deviceData)
      ? deviceData.data.deviceTypeId : '',
      true
  );
  const code = useFormInput(
    !isNullOrUndefined(deviceData) && !isNullOrEmpty(deviceData)
      ? deviceData.data.code : '',
      true
  );
  
  const imei = useFormInput(
    !isNullOrUndefined(deviceData) && !isNullOrEmpty(deviceData)
      ? deviceData.data.imei : '',
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

  useEffect(() => {
    // check isNew user
    !isNullOrUndefined(device_id) && setNewDevice(false);

    // get data DeviceType (nếu url có DeviceType id)
    async function getDataDevice(DeviceId) {
      // console.log(DeviceId)
      try {
        const res = await axios.get(`${apiRoot}/devices/${DeviceId}`);
        // console.log(res)
        // error
        if (res.status !== 200) {
          return;
        }
        // success
        const result = res.data;
        // console.log(res.data.data)
        // console.log(result)
        setDeviceData(result);
      } catch (error) {
        return;
      }
    }
    if (!isNullOrEmpty(device_id)) {
      getDataDevice(device_id);
    }

    getDataDevice();
  }, [device_id]);

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
  };
  // handle Update device
  const handleUpdate = async flag => {
    setOpenPopupQuestionUpdate(false);
    if (flag === 'no' || isNullOrUndefined(device_id)) return;

    // call api
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    const data = {
      deviceTypeId: deviceTypeId.value,
      code: code.value,
      imei: imei.value
    };
    const result = await callAPIDevice(data, device_id);
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
    // location.reload();
  };

  // handle add new device
  const handleAddnew = async flag => {
    setOpenPopupQuestion(false)
    if (flag === 'no') return;
    // call api
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    let data = {
      deviceTypeId: deviceTypeId.value,
      code: code.value,
      imei: imei.value
    };
    // console.log(data)
    const result = await callAPIDevice(data);
    // console.log(result.data);
    // console.log(result);
    // console.log(result.data);
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

    // setDeviceData({
    //   ...deviceData,
    //   id: result.id
    // });
    setStatusSubmit({
      ...statusSubmit,
      status: 1,
      isLoading: false,
      msg: 'Đăng ký mới đã hoàn tất.'
    });
    // mode insert nên sau khi insert thành công show question redirect url update user or ridirect url list deviceType
    window.location.href = `${folderRoot}Thiet-Bi/update/${result.data.id}`;
  };

  return (
    <div className={classes.root}>
      <div className={classes.headFormGroup}>
        <Typography className={classes.titleForm}>
          {isNew ? `Thêm thiết bị mới` : `Chỉnh sửa thông tin thiết bị`}
        </Typography>
      </div>
      <div className={clsx(classes.formContent, classes.scrollPage)}>
        <div className={classes.formGroup}>
          <label>
            Id loại thiết bị <em>（Bắt Buộc）</em>
          </label>
          <TextField {...deviceTypeId} disabled={isNew ? false : true}/>
        </div>
        <div className={classes.formGroup}>
          <label>
            Code <em>（Bắt Buộc）</em>
          </label>
          <TextField {...code} />
        </div>
        <div className={classes.formGroup}>
          <label>
            Imei <em>（Bắt Buộc）</em>
          </label>
          <TextField {...imei} />
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

function useFormInput(initValue, isRequire) {
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
async function callAPIDevice(data, DeviceId) {
  // console.log(DeviceId)
  try {
    let res;
    if (DeviceId) {
      // update
      res = await axios.put(`${apiRoot}/devices/${DeviceId}`, data);
    } else {
      // insert
      res = await axios.post(`${apiRoot}/devices`, data);
    }
    // error
    if (res.status !== 200) {
      return false;
    }
    // success
    // console.log(res.data)
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