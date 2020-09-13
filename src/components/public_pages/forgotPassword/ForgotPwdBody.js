import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Container,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Textfield } from "../../shared/formComponents";
import { Link } from "react-router-dom";
import { validate } from "../../../utils";
// import axios from "../../../config/axios";

const useStyles = makeStyles((theme) => ({
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
      Operations-19
    </Link>
    {` ${new Date().getFullYear()}.`}
  </Typography>
);

export const ForgotPwdBody = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "muhammad.umar@argonteq.co",
  });
  const [emailErr, setEmailErr] = useState("");

  const validateForm = (e) => {
    const validEmail = validateEmail();

    if (!validEmail) {
      console.log("form is not valid");
      return false;
    }
    console.log("valid form", formData);
    submitForm();
  };

  const submitForm = async () => {
    // try {
    //   const signUpReq = await axios.post("http://3.211.37.133/api/password/forget", {
    //     email: formData.email,
    //     password: formData.password
    //   });
    //   console.log("signUpReq", signUpReq);
    // } catch (error) {
    //   console.log("errors:", error);
    // }
  };

  const formChangeHandler = (e) => {
    const value =
      e.target.name === "email" ? e.target.value.trim() : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const validateEmail = () => {
    if (!validate("email", formData.email)) {
      setEmailErr("Email is not valid");
      return false;
    }

    setEmailErr("");
    return true;
  };
  return (
    <Container  className="login_page_custom "  component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
         <Link className="company_logo" to="/">
            <img src="images/logo-black.png" alt="" style={{ maxWidth: "90%" }}/>
          </Link>
        <Typography variant="h5">Forgot Password?</Typography>
        <Typography className="mb-3">
          Please enter your email to reset your Password.
        </Typography>
        {/* <form className={classes.form} noValidate> */}

        <Textfield
          required
          value={formData.email}
          error={emailErr ? true : false}
          helperText={emailErr}
          name="email"
          onChange={formChangeHandler}
          onBlur={validateEmail}
          autoFocus
          className="mb-4 w-100 "
        />
        <Button style={{ backgroundColor: "#3f51b5" }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={validateForm}
        >
          Send Email
        </Button>
        <Grid container>
          <Grid item>
            Go Back to Login Page? <Link to="login">Log In</Link>
          </Grid>
        </Grid>
        {/* </form> */}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default connect(null)(ForgotPwdBody);
