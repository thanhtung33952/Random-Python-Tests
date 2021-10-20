/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import clsx from "clsx";

// constant
import { apiRoot, folderRoot } from '../../constant/index';
import { useParams } from 'react-router-dom';
import { isEmail, isNullOrEmpty, isNullOrUndefined } from '../../utils/helpers';

// material component
import {
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  FormHelperText
} from '@material-ui/core';
// icons
import CircularProgress from '@material-ui/core/CircularProgress';

// jss
import useStyles from '../../assets/jss/Page/FormCustomer';

// custom component
import PopupQuestion from '../../component/Popup/PopupQuestion';

export default function FormCustomer() {
  const classes = useStyles();
  // mode insert/update
  let { customer_id } = useParams();
  const [ isNew, setNewCustomer ] = useState(true);
  const [ customersData, setCustomersData ] = useState(''); // userName, email, role, departmentId, approvalGroupId
  // list  Device type
  const [listCustomer, setListCustomer] = useState(null);
  // console.log(customersData)
  // console.log(customersData.data.firstName)
  // data form
  const deviceId = useFormSelect(
    !isNullOrUndefined(customersData) && !isNullOrEmpty(customersData)
      ? customersData.deviceId : undefined,
      true
  );
  const firstName = useFormInput(
    !isNullOrUndefined(customersData) && !isNullOrEmpty(customersData)
      ? customersData.firstName : '',
      true
  );
  
  const lastName = useFormInput(
    !isNullOrUndefined(customersData) && !isNullOrEmpty(customersData)
      ? customersData.lastName : '',
      true
  );
  
  const email = useFormInput(
    !isNullOrUndefined(customersData) && !isNullOrEmpty(customersData)
      ? customersData.email : '',
      true,
      true
  );
  
  const address = useFormInput(
    !isNullOrUndefined(customersData) && !isNullOrEmpty(customersData)
      ? customersData.address : '',
      true
  );
  
  const phone = useFormInput(
    !isNullOrUndefined(customersData) && !isNullOrEmpty(customersData)
      ? customersData.phone : '',
      true
  );
  
  const description = useFormInput(
    !isNullOrUndefined(customersData) && !isNullOrEmpty(customersData)
      ? customersData.description : '',
      true
  );
  // flag submit
  const [statusSubmit, setStatusSubmit] = useState({
    status: 0, // -1: error, 1: success
    isLoading: false,
    isLoading2: false,
    msg: ''
  });
  // check input
  const [isValid, setInValid] = useState(false);
  // is open popup after save customer
  const [isOpenQuestion, setOpenPopupQuestion] = useState(false);
  // is open popup question update
  const [isOpenQuestionUpdate, setOpenPopupQuestionUpdate] = useState(false);
// console.log(customer_id)
  useEffect(() => {
    // check isNew user
    !isNullOrUndefined(customer_id) && setNewCustomer(false);
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
        setListCustomer(res.data.data.items);
      } catch (error) {
        return;
      }
    }
    // get data customer (nếu url có CustomerId id)
    async function getDataCustomer(CustomerId) {
      // console.log(CustomerId)
      try {
        const res = await axios.get(`${apiRoot}/users/${CustomerId}`);
        // console.log(res)
        // error
        if (res.status !== 200) {
          return;
        }
        // success
        const result = res.data.data;
        // console.log(res.data.data)
        console.log(result)
        setCustomersData(result);
      } catch (error) {
        return;
      }
    }
    if (!isNullOrEmpty(customer_id)) {
      getDataCustomer(customer_id);
    }

    getDataDevice();
    getDataCustomer();
  }, [customer_id]);

  // check validation
  useEffect(() => {
    // check validation input
    function checkValid() {
      if (!validation()) {
        setInValid(false);
        return;
      }

      setInValid(true);
    }

    checkValid();
  });
  // save customer data
  const handleSave = async () => {
    if (!validation()) return;

    // show question mode update
    if (!isNew) {
      setOpenPopupQuestionUpdate(true);
      return;
    } else {
      setOpenPopupQuestion(true);
      return;
    }

    // // mode addnew customer
    // handleAddnew();
  };

  // handle Update Customers
  const handleUpdate = async flag => {
    setOpenPopupQuestionUpdate(false);
    if (flag === 'no' || isNullOrUndefined(customer_id)) return;

    // call api
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    const data = {
      deviceId: deviceId.value,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
      description: description.value

    };
    const result = await callAPICustomers(data, customer_id);
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

  // handle add new Customers
  const handleAddnew = async flag => {
    setOpenPopupQuestion(false)
    if (flag === 'no') return;
    // call api
    setStatusSubmit({ ...statusSubmit, isLoading: true });
    let data = {
      deviceId: deviceId.value,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
      description: description.value
    };
    // console.log(data)
    const result = await callAPICustomers(data);
    // console.log(result.data);
    // console.log(result);
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
    setStatusSubmit({
      ...statusSubmit,
      status: 1,
      isLoading: false,
      msg: 'Đăng ký mới đã hoàn tất.'
    });
    // mode insert nên sau khi insert thành công show question redirect url update user or ridirect url list customer
    window.location.href = `${folderRoot}Khach-Hang/update/${result.data.id}`;
    // setOpenPopupQuestion(true);
  };
  const handleChange = name => e => {
    setCustomersData({
      ...customersData,
      [name]: e.target.value
    });
  };
  // rending option user status
  const optionCustomers = []
  !isNullOrEmpty(listCustomer) &&
  listCustomer.map(e => {
    optionCustomers.push (
      <option value={e.id} key={e.id}>
        {e.imei}
      </option>
    );
  });
  // validation
  const validation = () => {
    if (isNew) {
      if (
        !isNullOrEmpty(deviceId.value) &&
        !isNullOrEmpty(firstName.value) &&
        !isNullOrEmpty(lastName.value) &&
        !isNullOrEmpty(email.value) &&
        isEmail(email.value) &&
        !isNullOrEmpty(address.value) &&
        !isNullOrEmpty(phone.value) &&
        !isNullOrEmpty(description.value)
      )
      return true;
    } else {
      if (
        customersData.firstName !== firstName.value ||
        customersData.lastName !== lastName.value ||
        customersData.address !== address.value ||
        customersData.phone !== phone.value ||
        customersData.description !== description.value
      )
      return true;
    }
  };
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
            Tên thiết bị <em>（*）</em>
          </label>
          <div className={classes.rowInline}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControlSelect, classes.dContents)}
            >
              <Select
                native
                style={{width: '100%'}}
                onChange={handleChange('deviceId')}
                {...deviceId}
                disabled={isNew ? false : true}
              >
                <option aria-label="None" value="" />
                {optionCustomers}
              </Select>
            </FormControl>
          </div>
        </div>
        {deviceId.value === '' ? 
          <FormHelperText className={classes.selectErro}>
            Đây là một mục bắt buộc.
          </FormHelperText>
          : '' 
        }
        <div className={classes.formGroup}>
          <label>
            FirstName <em>（*）</em>
          </label>
          <TextField {...firstName} />
        </div>
        <div className={classes.formGroup}>
          <label>
            LastName <em>（*）</em>
          </label>
          <TextField {...lastName} />
        </div>
        <div className={classes.formGroup}>
          <label>
            Email <em>（*）</em>
          </label>
          <TextField {...email} disabled={isNew ? false : true} />
        </div>
        <div className={classes.formGroup}>
          <label>
            Địa chỉ <em>（*）</em>
          </label>
          <TextField {...address} />
        </div>
        <div className={classes.formGroup}>
          <label>
            SĐT <em>（*）</em>
          </label>
          <TextField {...phone} />
        </div>
        <div className={classes.formGroup}>
          <label>
            Mô tả <em>（*）</em>
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
              disabled={!isValid || statusSubmit.isLoading}
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
function useFormSelect(initValue, isRequire) {
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
  return {
    value: value,
    error: error,
    onChange: handleChange,
    variant: 'outlined',
    className: classes.inputControl2,
  };
}
// insert new Customer
async function callAPICustomers(data, CustomerId) {
  // console.log(CustomerId)
  try {
    let res;
    if (CustomerId) {
      // update
      res = await axios.put(`${apiRoot}/users/${CustomerId}/devices`, data);
    } else {
      // insert
      res = await axios.post(`${apiRoot}/users`, data);
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
