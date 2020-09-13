import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Typography
} from "@material-ui/core";
import { PasswordField } from "../../shared/formComponents";
import { validate } from "../../../utils";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "#1886c5"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#439ed2",
    "&:hover, &:focus, &:disabled": {
      background: "#1886c5",
      color: "#fff"
    }
  }
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link style={{ color: "inherit" }} to="/">
      Freelnce market place
    </Link>
    {` ${new Date().getFullYear()}.`}
  </Typography>
);

export const ResetPasswordBody = props => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    // email: "muhammad.umar@argonteq.co",
    password: "Umarhuman@1",
    showPassword: false,
    confirm_password: "Umarhuman@1",
    showConfirmPassword: false
  });

  const [pwdErr, setPwdErr] = useState("");
  const [pwdMatchErr, setPwdMatchErr] = useState("");

  const validateForm = e => {
    //   const validEmail = validateEmail();
    const validPwd = validatePassword();
    const validCPwd = validateConfirmPassword();

    if (!validCPwd || !validPwd) {
      console.log("form is not valid");
      return false;
    }
    console.log("valid form", formData);
    submitForm();
  };

  const submitForm = async () => {
    // try {
    //   const signUpReq = await axios.post("http://3.211.37.133/api/password/reset", {
    //     email: formData.email,
    //     password: formData.password
    //   });
    //   console.log("signUpReq", signUpReq);
    // } catch (error) {
    //   console.log("errors:", error);
    // }
  };

  const formChangeHandler = e => {
    const value =
      e.target.name === "password" || e.target.name === "confirm_password"
        ? e.target.value.trim()
        : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };
  const handleClickShowConfirmPassword = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword
    });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const validatePassword = () => {
    if (!validate("password", formData.password)) {
      setPwdErr(
        "Password must contain one uppercase letter, one lowercase letter, and one digit and minimum of 8 character"
      );
      return false;
    }
    setPwdErr("");
    return true;
  };

  const validateConfirmPassword = () => {
    const compared = formData.password.localeCompare(formData.confirm_password);
    if (compared) {
      setPwdMatchErr("Password did not match");
      return false;
    } else if (!formData.confirm_password.length) {
      setPwdMatchErr("Please Enter Confirm Password");
      return false;
    }
    setPwdMatchErr("");
    return true;
  };

  return (
    <Container  className="login_page_custom " component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
         <Link className="company_logo" to="/">
            <img src="images/logo2.png" alt="" />
          </Link>
        <Typography component="h1" variant="h5" className="mb-3">
          Reset Password
        </Typography>
        {/* <form className={classes.form} noValidate> */}

        <PasswordField
          show={formData.showPassword}
          value={formData.password}
          onChange={formChangeHandler}
          label="Password"
          name="password"
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          onBlur={validatePassword}
          labelWidth={80}
          error={pwdErr ? true : false}
          helperText={pwdErr}
        />
        <PasswordField
          show={formData.showConfirmPassword}
          value={formData.confirm_password}
          onChange={formChangeHandler}
          label="Confirm Password"
          name="confirm_password"
          handleClickShowPassword={handleClickShowConfirmPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          labelWidth={140}
          onBlur={validateConfirmPassword}
          error={pwdMatchErr ? true : false}
          helperText={pwdMatchErr}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={validateForm}
        >
          Reset
        </Button>
        {/* </form> */}
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
};

export default connect(null)(ResetPasswordBody);
