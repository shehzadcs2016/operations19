import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
import addFlashMessage from "../../../Redux/actions/flashMessages";

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
      Freelnce market place
    </Link>
    {` ${new Date().getFullYear()}.`}
  </Typography>
);

export const Body = (props) => {
  const minimumLen = 6;
  const classes = useStyles();
  const [formData, setFormData] = useState({
    // email: "muhammad.umar@argonteq.co",
    email: "",
    code: "",
  });

  const [valueLenError, setValueLenError] = useState("");
  //   const [isSubmitted, setIsSubmitted] = useState(false);

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (e) => {
    e.preventDefault();
    const validLen = validateLength();
    if (!validLen) {
      //   setIsSubmitted(false);
      return false;
    }
    submitForm();
  };

  const validateLength = (e) => {
    if (formData.code.trim().length < minimumLen) {
      setValueLenError(`Minimum ${minimumLen} digits please`);
      props.addFlashMessage({
        type: "error",
        text: `Minimum ${minimumLen} digits please`,
      });
      return false;
    }

    setValueLenError("");
    return true;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Forgot Password?</Typography>
        <Typography className="mb-3 text-center">
          We have emaild a a {minimumLen} digit secret code.
          <br /> Enter your secret code here to reset your password.
        </Typography>
        <form className={classes.form} onSubmit={validateForm}>
          <Textfield
            required
            value={formData.code}
            name="code"
            onChange={formChangeHandler}
            className="mb-4 w-100 "
            onBlur={validateLength}
            error={valueLenError ? true : false}
            helperText={valueLenError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={formData.code.trim().length < minimumLen}
            // onClick={validateForm}
          >
            Verify
          </Button>
          <Grid container>
            <Grid item>
              Go Back to Login Page? <Link to="login">Log In</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps, { addFlashMessage })(Body);
