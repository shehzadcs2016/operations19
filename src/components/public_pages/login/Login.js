import React, { useState, useEffect } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { Alert } from "@material-ui/lab";

import {
  Textfield,
  PasswordField,
  CheckBox,
} from "../../shared/formComponents";
import { validate } from "../../../utils";
// import axios from "../../../config/axios";
import FlashMessage from "../../shared/FlashMessagesList";
import addFlashMessage from "../../../Redux/actions/flashMessages";
import loginAction from "../../../Redux/actions/loginAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "#1886c5",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#439ed2",
    "&:hover, &:focus, &:disabled": {
      background: "#1886c5",
      color: "#fff",
    },
  },
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

export const Login = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    // email: "usmansharif@argonteq.com",
    // password: "Password@1",
    email: "",
    password: "",
    showPassword: false,
  });

  const [errMsg, setErrMsg] = useState(null);
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   showPassword: false
  // });
  const [emailErr, setEmailErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const validateForm = (e) => {
    const validEmail = validateEmail();
    const validPwd = validatePwd();

    if (!validEmail || !validPwd) {
      // if(!validPwd){
      //   props.addFlashMessage({ type: "info", text: "Invalid Password." });
      // }else {
      props.addFlashMessage({
        type: "error",
        text: "Invalid form, please fill all required fields .",
      });
      return;
    }

    console.log("i should not be here");

    submitForm();
  };

  const submitForm = async () => {
    setIsLoggingIn(true);
    try {
      await props.loginAction(formData);
    } catch (error) {
      console.log("error occured", error.response);
      props.addFlashMessage({
        type: "error",
        text: "Invalid Email or Password.",
      });
    }
    setIsLoggingIn(false);
  };

  useEffect(() => {
    // if (props.login.isLoggedIn) {
    //   if (props.login.type === 2) {
    //     props.history.push("/clients-dashboard");
    //   } else if (props.login.type === 3) {
    //     props.history.push("/freelancer-dashboard");
    //   }
    // }
    // redirectToClient(props);
    if (props.login.isLoggedIn) {
      if (props.login.type === 2) {
        props.history.push("/clients-dashboard");
      } else if (props.login.type === 3) {
        props.history.push("/freelancer-dashboard");
      }
    }
    if (props.login.error) {
      // props.addFlashMessage({ type: "error", text: props.login.error });
      setErrMsg(props.login.error);
      console.log("props.login.error", props);
    }
  }, [props]);

  useEffect(() => {
    setErrMsg(null);
  }, [])

  const formChangeHandler = (e) => {
    const value =
      e.target.name === "email" || e.target.name === "password"
        ? e.target.value.trim()
        : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateEmail = () => {
    if (!validate("email", formData.email)) {
      setEmailErr("Email is not valid");
      return false;
    }

    setEmailErr("");
    return true;
  };

  const validatePwd = () => {
    // if (!validate("password", formData.password)) {
    if (!formData.password.trim().length) {
      setPwdErr("Invalid Password.");
      return false;
    }

    setPwdErr("");
    return true;
  };

  return (
    <React.Fragment>
      <Container  className="login_page_custom " component="main" maxWidth="xs">
        <FlashMessage />
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
           <Link className="company_logo" to="/">
            <img src="images/logo-black.png" alt="" style={{ maxWidth: "90%" }} />
          </Link>
          <Typography component="h1" variant="h5" className="mb-3">
            Sign In
          </Typography>
          {/* <form className={classes.form} noValidate> */}
          {errMsg && (
            <div className={classes.root}>
              <Alert severity="error">{errMsg}</Alert>
              <br />
            </div>
          )}
          <Textfield
            required
            value={formData.email}
            error={emailErr ? true : false}
            helperText={emailErr}
            name="email"
            onChange={formChangeHandler}
            onBlur={validateEmail}
            // autoFocus
            className="mb-4 w-100 "
          />

          <PasswordField
            show={formData.showPassword}
            onChange={formChangeHandler}
            value={formData.password}
            helperText={pwdErr}
            error={pwdErr ? true : false}
            label="Password"
            name="password"
            onBlur={validatePwd}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            labelWidth={80}
          />

          <CheckBox label="Remember me" value="discount" className="mr-auto" />
          <Button style={{ backgroundColor: "#3f51b5" }} 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={validateForm}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Please Wait..." : "Sign In"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="forgotpassword">Forgot password?</Link>
            </Grid>
            <Grid item>
              Don't have an account? <Link to="freelance-signup">Sign Up</Link>
            </Grid>
          </Grid>
          {/* </form> */}
        </div>
        {/* <Box mt={8}>
          <Copyright />
        </Box> */}
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps, { addFlashMessage, loginAction })(
  withRouter(Login)
);
