import React, { useState } from 'react';
import clsx from "clsx";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import { instanceOf } from 'prop-types';
import { useHistory } from "react-router-dom";

import { withCookies, Cookies, useCookies } from 'react-cookie';
// icon
import MailIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/LockOpen';
import CircularProgress from '@material-ui/core/CircularProgress';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
// image
import logo from '../../assets/img/logos.jpg';
// constant
// import { folderRoot } from '../../constant/index';
// import axios from 'axios';

// jss
import useStyles from '../../assets/jss/Page/Authentication/Authentication';

function Signin() {
  const classes = useStyles();
  const [isCheck, setCheck] = useState();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['AuthenticationNowpay']);
  const [data, setData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [submit, setSubmit] = useState({
    isLoading: false,
    status: 0, // 0: normar, -1 error, 1 success
    msg: ''
  });

  const [showPass, setShowpass] = useState(false);
  let history = useHistory();

  // isValid isEmail
  const isEmail = () => {
    if (!data.email) {
      return false;
    }
    // eslint-disable-next-line no-useless-escape
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(data.email).toLowerCase())) {
      return false;
    } else {
      return true;
    }
  };
  // handle Change Field TextField
  const handleChangeField = name => e => {
    let val = e.target.value;
    if (name === 'remember') val = e.target.checked;
    setData({ ...data, [name]: val });
  };

  // isValid email, password in data
  const isValid = () => {
    if (!data.email || !data.password || !isEmail()) {
      setCheck(-1);
      return false;
    } else {
      setCheck(1);
      return true;
    }
  };

  // handel Login
  const handelLogin = async () => {
    const isValidation = isValid();
    if (!isValidation) return;
    setSubmit({ ...submit, isLoading: true });
    if (data.email === "admin@gmail.com" && data.password === 'P@ss123') {
      setCookie(
        'AuthenticationNowpay',
        {
          email: data.email,
        },
        { path: '/' }
      );
      setSubmit({
        ...submit,
        isLoadding: false,
        status: 1,
        msg: 'Đăng nhập thành công'
      });
      history.push("/Khach-hang");
    }
    else {
      setSubmit({
        ...submit,
        isLoadding: false,
        status: -1,
        msg: 'Email hoặc mật khẩu không chính xác.'
      });
      return;
    }
  }

  // enter login
  const onKeyPressLogin = e => {
    if (e.key === 'Enter') {
      handelLogin();
    }
  };
  //show pass
  const handleClickShowPassword = () => {
    setShowpass({ ...showPass, password: !showPass.password });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <div className={classNames(classes.session)}>
      <div className={classes.content}>
        <Box className={classes.wrapper} boxShadow={2}>
          <Card className={classes.cardForm}>
            <CardContent>
              {/* logo */}
              <div className={classes.logo}>
                <img src={logo} alt="Nowpay" />
                <span> Hệ Thống Nowpay</span>
              </div>
              {/* form signin */}
              <form className={classes.form}>
                {/* email */}
                <TextField
                  error={!isEmail() && isCheck === -1 ? true : false}
                  className={classes.inputLogin}
                  helperText={
                    !isEmail() &&
                    isCheck === -1 &&
                    'Địa chỉ email không hợp lệ.'
                  }
                  placeholder="Email"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      root: classes.rootInput,
                      input: classes.thisInput,
                      error: classes.thisInputError
                    },
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        className={classes.iconInput}
                      >
                        <MailIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={handleChangeField('email')}
                  onKeyPress={onKeyPressLogin}
                />
                <TextField
                  error={!data.password && isCheck === -1 ? true : false}
                  className={classes.inputLogin}
                  helperText={
                    !data.password && isCheck === -1 && 'Hãy chắc chắn để đầu vào.'
                  }
                  type={showPass.password ? 'text' : 'password'}
                  placeholder="Mật khẩu"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      root: classes.rootInput,
                      input: classes.thisInput,
                      error: classes.thisInputError
                    },
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        className={classes.iconInput}
                      >
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          className={clsx(classes.iconInput, classes.p0)}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {!showPass.password ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  onChange={handleChangeField('password')}
                  onKeyPress={onKeyPressLogin}
                  style={{ marginBottom: 10 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.remember}
                      className={classes.checkbox}
                      onChange={handleChangeField('remember')}
                    />
                  }
                  label="Lưu thông tin đăng nhập"
                  className={classes.checkRemember}
                />
                {/* message */}
                <Typography
                  className={classNames(classes.message, {
                    [classes.msgError]: submit.status === -1,
                    [classes.msgSuc]: submit.status === 1
                  })}
                >
                  {submit.msg}
                </Typography>
                {/* submit */}
                <div className={classes.rowSubmit}>
                  <Button
                    disabled={submit.isLoading}
                    type="button"
                    variant="contained"
                    // color="primary"
                    fullWidth
                    className={classes.submit}
                    onClick={handelLogin}
                  >
                    Đăng nhập
                  </Button>
                  {submit.isLoading && (
                    <CircularProgress
                      size={24}
                      className={classes.iconProgress}
                    />
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
}

Signin.prototypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(Signin);
