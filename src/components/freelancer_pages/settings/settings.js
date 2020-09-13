import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
// import DeleteIscon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import CustomModal from "../../shared/modal";
import { Textfield, PasswordField } from "../../shared/formComponents";
import { store } from "../../../Redux/store";
import { validate, buttonStyle } from "../../../utils";
import axios from "../../../config/axios";
import { addFlashMessage } from "../../../Redux/actions/flashMessages";

const pointerCSS = { cursor: "pointer" };

const ChangePasswordModal = (props) => {
  const [pwdErr, setPwdErr] = useState("");
  const [pwdMatchErr, setPwdMatchErr] = useState("");
  const [oldPwdErr, setOldPwdErr] = useState("");

  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
    user_id: store.getState().login.id,
  });

  const [showHidePwd, setShowHidePwd] = useState({
    showPassword: false,
    showConfirmPassword: false,
    showOldPwd: false,
  });

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleClickShowPassword = () => {
    setShowHidePwd({
      ...showHidePwd,
      showPassword: !showHidePwd.showPassword,
    });
  };

  const handleShowOldPwd = () => {
    setShowHidePwd({
      ...showHidePwd,
      showOldPwd: !showHidePwd.showOldPwd,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setShowHidePwd({
      ...showHidePwd,
      showConfirmPassword: !showHidePwd.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateOldPwd = () => {
    if (!formData.old_password.trim()) {
      setOldPwdErr("Old Password is required");
      return false;
    }
    setOldPwdErr("");
    return true;
  };

  const validatePassword = () => {
    if (!validate("password", formData.new_password)) {
      setPwdErr(
        "Password must contain one uppercase letter, one lowercase letter, one special character and one digit and minimum of 8 characters."
      );
      return false;
    }
    setPwdErr("");
    return true;
  };

  const validateConfirmPassword = () => {
    const compared = formData.new_password.localeCompare(
      formData.confirm_password
    );

    if (!formData.confirm_password.length) {
      setPwdMatchErr("Please Enter Confirm Password");
      return false;
    } else if (compared) {
      setPwdMatchErr("Password did not match");
      return false;
    }
    setPwdMatchErr("");
    return true;
  };

  const handleChangePwd = async (e) => {
    const validOldPwd = validateOldPwd();
    const validNewPwd = validatePassword();
    const validConfirmPwd = validateConfirmPassword();

    if (!validOldPwd || !validNewPwd || !validConfirmPwd) {
      props.extraProps.addFlashMessage({
        type: "info",
        text: "Please fill the required fields",
      });
      return;
    }

    try {
      const res = await axios.patch("/password/edit", formData, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log(res.data);
      const msg = { type: "success", text: res.data.message };
      if (res.data.status !== 200) {
        msg.type = "error";
      }
      props.extraProps.addFlashMessage(msg);
      if (res.data.status === 200) {
        closeModal();
      }
    } catch (err) {
      console.log("Error->" + err, err.data);
      props.extraProps.addFlashMessage({
        type: "error",
        text: "Sorry, Error Occured",
      });
    }
  };

  const closeModal = () => {
    setPwdErr("");
    setPwdMatchErr("");
    setOldPwdErr("");

    setFormData({
      old_password: "",
      new_password: "",
      confirm_password: "",
      user_id: store.getState().login.id,
    });
    props.toggleModal();
  };

  return (
    <CustomModal {...props} title="Change your password">
      <div>
        <p className="pb-2">
          Please enter your old password, new password and confirm password and
          click the Confirm button.
        </p>
        <p className="pb-2">
          Note: Password must contain one uppercase letter, one lowercase
          letter, one special character and one digit and minimum of 8
          characters.
        </p>
        {/* <Textfield
          required
          label="Old Password"
          name="old_password"
          type="password"
          value={formData.old_password}
          onChange={formChangeHandler}
          onBlur={validateOldPwd}
        /> */}
        <PasswordField
          show={showHidePwd.showOldPwd}
          value={formData.old_password}
          onChange={formChangeHandler}
          label="Old Password"
          name="old_password"
          handleClickShowPassword={handleShowOldPwd}
          handleMouseDownPassword={handleMouseDownPassword}
          onBlur={validateOldPwd}
          labelWidth={120}
          error={oldPwdErr ? true : false}
          helperText={oldPwdErr}
        />

        {/* <Textfield
          required
          label="New Password"
          name="new_password"
          type="password"
        /> */}
        <PasswordField
          show={showHidePwd.showPassword}
          value={formData.new_password}
          onChange={formChangeHandler}
          label="New Password"
          name="new_password"
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          onBlur={validatePassword}
          labelWidth={120}
          error={pwdErr ? true : false}
          helperText={pwdErr}
        />
        <PasswordField
          show={showHidePwd.showConfirmPassword}
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
        <div className="clearfix">
          <Button
            variant="contained"
            style={buttonStyle}
            className="mx-auto float-left"
            onClick={handleChangePwd}
          >
            Change Password
          </Button>
          <Button
            variant="contained"
            className="mx-auto float-right"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

const ChangeEmailModal = (props) => {
  // user_id, current_email, new_email, confirm_new_email
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [oldEmailErr, setOldEmailErr] = useState("");
  const [newEmailErr, setNewEmailErr] = useState("");
  const [confirmEmailErr, setConfirmEmailErr] = useState("");

  const validateOldEmail = () => {
    if (!validate("email", oldEmail)) {
      setOldEmailErr("Invalid Old Email");
      return false;
    }

    setOldEmailErr("");
    return true;
  };

  const validateNewEmail = () => {
    if (!validate("email", newEmail)) {
      setNewEmailErr("Invalid New Email");
      return false;
    }

    setNewEmailErr("");
    return true;
  };

  const validateConfirmEmail = () => {
    if (!validate("email", confirmEmail)) {
      setConfirmEmailErr("Invalid Confirm Email");
      return false;
    }

    setConfirmEmailErr("");
    return true;
  };

  const validateEmail = (value, cb, message = "Invalid Email") => {
    if (!validate("email", value)) {
      cb(message);
      return false;
    }

    cb("");
    return true;
  };

  const handleChangeEmail = async () => {
    const isValidOld = validateOldEmail();
    const isValidNew = validateNewEmail();
    const isValidConfirm = validateConfirmEmail();

    if (!isValidOld || !isValidNew || !isValidConfirm) {
      props.extraProps.addFlashMessage({
        type: "info",
        text: "Please fill the required fields",
      });
      return;
    }

    try {
      const data = {
        user_id: store.getState().login.id,
        current_email: oldEmail,
        new_email: newEmail,
        confirm_new_email: confirmEmail,
      };
      const res = await axios.patch("email/change", data, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log(res.data);
      const msg = { type: "success", text: res.data.message };
      if (res.data.status !== 200) {
        msg.type = "error";
      }
      props.extraProps.addFlashMessage(msg);
    } catch (err) {
      console.log("Error->" + err, err.data);
      props.extraProps.addFlashMessage({
        type: "error",
        text: "Sorry, Error Occured",
      });
    }
  };

  return (
    <CustomModal {...props} title="Change your email address">
      <div>
        <p className="pb-2">
          Enter your old email address then the new email address you want twice
          and click the Change email button.
        </p>
        <p className="pb-2">
          Note: The new email is what you'll use to log in and where you will
          receive notifications from FreeeUp.
        </p>
        <Textfield
          required
          label="Old Email"
          name="oldEmail"
          type="email"
          value={oldEmail}
          onChange={(e) => setOldEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value, setOldEmailErr)}
          error={oldEmailErr ? true : false}
          helperText={oldEmailErr}
        />
        <Textfield
          required
          label="New Email"
          name="newEmail"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value, setNewEmailErr)}
          error={newEmailErr ? true : false}
          helperText={newEmailErr}
        />
        <Textfield
          required
          label="Confirm Email"
          name="confirmEmail"
          type="email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value, setConfirmEmailErr)}
          error={confirmEmailErr ? true : false}
          helperText={confirmEmailErr}
        />
        <div className="clearfix">
          <Button
            variant="contained"
            style={buttonStyle}
            className="mx-auto float-left"
            onClick={handleChangeEmail}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            className="mx-auto float-right"
            onClick={props.toggleModal}
          >
            Close
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

const RecoveryEmailModal = (props) => {
  // const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState(props.email);
  const [recoveryEmailErr, setRecoveryEmailErr] = useState("");

  useEffect(() => {
    setRecoveryEmail(props.email);
    console.log("props please", props);
  }, [props]);

  const validateOldEmail = () => {
    if (!validate("email", recoveryEmail)) {
      setRecoveryEmailErr("Invalid Email");
      return false;
    }

    setRecoveryEmailErr("");
    return true;
  };

  const handleSubmitRecovery = async () => {
    console.log("submitting", recoveryEmail);
    if (!validateOldEmail()) {
      props.extraProps.addFlashMessage({
        type: "info",
        text: "Please fill the required fields",
      });
      return;
    }
    try {
      const data = {
        user_id: store.getState().login.id,
        recovery_email: recoveryEmail,
      };
      const res = await axios.post("email/recovery", data, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log(res.data);
      const msg = { type: "success", text: res.data.message };
      if (res.data.status !== 200) {
        msg.type = "error";
      }
      props.extraProps.addFlashMessage(msg);
      if (res.data.status === 200) {
        closeModal();
      }
    } catch (err) {
      console.log("error", err);
      props.extraProps.addFlashMessage({
        type: "error",
        text: "Sorry, Error Occured" + err,
        err,
      });
    }
  };

  const closeModal = () => {
    console.log("props", props.email);
    props.recoverEmIlProps.getData();
    setRecoveryEmail("");
    setRecoveryEmailErr("");
    props.toggleModal();
  };

  const handleDeleteRecoverEmail = async () => {
    console.log("deleting...");
    setRecoveryEmail("");
    const recoverEmail = recoveryEmail;
    setRecoveryEmailErr("");

    try {
      const data = { user_id: store.getState().login.id };
      const res = await axios.patch("email/recovery", data, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      // console.log(res.data);
      const msg = { type: "success", text: res.data.message };
      if (res.data.status !== 200) {
        msg.type = "error";
        setRecoveryEmail(recoverEmail);
      }
      props.extraProps.addFlashMessage(msg);
      if (res.data.status === 200) {
        closeModal();
      }
    } catch (err) {
      // console.log("error", err);
      props.extraProps.addFlashMessage({
        type: "error",
        text: "Sorry, Error Occured" + err,
        err,
      });
    }
  };

  return (
    <CustomModal
      {...props}
      toggleModal={closeModal}
      title="Add a recovery email"
    >
      <div>
        <p className="pb-2">Enter a recovery email address below.</p>
        <p className="pb-2">
          Note: This email address will also receive notifications from FreeeUp
          the same way as your main email address.
        </p>
        <Textfield
          required
          label="Recovery Email"
          name="recoveryEmail"
          type="email"
          value={recoveryEmail}
          onChange={(e) => setRecoveryEmail(e.target.value)}
          onBlur={validateOldEmail}
          error={recoveryEmailErr ? true : false}
          helperText={recoveryEmailErr}
        />
        <div className="clearfix">
          <div className="float-left">
            <Button
              variant="contained"
              style={buttonStyle}
              className="mx-auto"
              onClick={handleSubmitRecovery}
            >
              Submit
            </Button>
            {props.email && (
              <Button
                variant="contained"
                className="ml-3"
                color="secondary"
                onClick={handleDeleteRecoverEmail}
              >
                Delete
              </Button>
            )}
          </div>
          <Button
            variant="contained"
            className="mx-auto float-right"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

const ManageSeting = (props) => {
  const [modalChangePassword, setModalChangePassword] = useState(false);
  const [modalChangeEmail, setModalChangeEmail] = useState(false);
  const [modalRecoveryEmail, setModalRecoveryEmail] = useState(false);
  const [clientData, setClientData] = useState({
    about_recent_project: "",
    address: "",
    already_member: "",
    business_type: "",
    citizen_of_id: "",
    communication_with_client: "",
    company_name: "",
    company_website: "",
    country_id: 2,
    first_name: "",
    full_name: "",
    goals: "",
    hear_about_us: "",
    id: 19,
    incident_with_client: "",
    last_name: "",
    linkedin: "",
    minimum_hourly_wage: "",
    non_us_id_document: "",
    non_us_id_document_folder_name: "",
    other_profiles: "",
    payment_provider: "",
    phone_number: "",
    plan_for_future: "",
    profile_image_folder_name: "",
    reason_to_join: "",
    receive_weekly_updates: false,
    recovery_email: "",
    service_intro: "",
    services_to_other_sites: "",
    skype_id: "",
    speed_test_screenshot: "",
    speed_test_screenshot_folder_name: "",
    user_id: 64,
    user_profile_image: "",
    user_skills: "",
    why_hire_you: "",
  });
  const changePasswordToggleModal = () => {
    setModalChangePassword(!modalChangePassword);
  };
  const changeEmailToggleModal = () => {
    setModalChangeEmail(!modalChangeEmail);
  };
  const recoveryEmailToggleModal = () => {
    setModalRecoveryEmail(!modalRecoveryEmail);
  };

  const getData = async () => {
    const id = store.getState().login.id;
    axios
      .get("client/profile/" + id, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      .then((res) => {
        console.log("res.data", res.data.data);
        setClientData(res.data.data);
      })
      .catch((err) => {
        console.log("get error", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const recoverEmIlProps = { getData };

  return (
    <React.Fragment>
      <ChangePasswordModal
        modal={modalChangePassword}
        toggleModal={changePasswordToggleModal}
        extraProps={props}
      />
      <ChangeEmailModal
        modal={modalChangeEmail}
        toggleModal={changeEmailToggleModal}
        extraProps={props}
      />
      {/* <RecoveryEmailModal
        modal={modalRecoveryEmail}
        toggleModal={recoveryEmailToggleModal}
        extraProps={props}
      /> */}
      <RecoveryEmailModal
        modal={modalRecoveryEmail}
        toggleModal={recoveryEmailToggleModal}
        extraProps={props}
        recoverEmIlProps={recoverEmIlProps}
        email={clientData.recovery_email || ""}
      />
      <div className="container mt-5 px-3">
        <h3 className="ml-3 mb-3 h4">Manage Your Settings</h3>

        <div className="row mx-0">
          <div className="col-xl-12">
            <Card className="mb-3">
              <CardHeader>
                <div className="clearfix">
                  <p className="h4 float-left">Your Account </p>
                  <EditIcon
                    className="text-info float-right"
                    style={pointerCSS}
                    onClick={(e) => {
                      // console.log("edit your account clicked", e);
                      props.history.push("clients-updateprofile");
                    }}
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className=" d-flex flex-column flex-lg-row mb-3">
                  <Button
                    variant="contained"
                    style={buttonStyle}
                    className="ml-0 ml-lg-auto mr-0 mr-lg-3 mb-2"
                    onClick={changePasswordToggleModal}
                  >
                    Change Password
                  </Button>
                  <Button
                    variant="contained"
                    style={buttonStyle}
                    className="mr-lg-3 mb-2"
                    onClick={changeEmailToggleModal}
                  >
                    Change email
                  </Button>
                  <Button
                    variant="contained"
                    style={buttonStyle}
                    className="mb-2"
                    onClick={recoveryEmailToggleModal}
                  >
                    Add recovery email
                  </Button>
                </div>
                <div className="row h5 text-muted">
                  <span className="text-color col-lg-3 ">Username: </span>
                  <p className="col-lg-9 mb-2">
                    {clientData.email || store.getState().login.email}
                  </p>
                  <span className="text-color col-lg-3">Full name: </span>
                  <p className="col-lg-9 mb-2">{clientData.full_name}</p>
                  <span className="text-color col-lg-3">Company: </span>
                  <p className="col-lg-9 mb-2">{clientData.company_name}</p>
                  <span className="text-color col-lg-3"> Phone: </span>
                  <p className="col-lg-9 mb-2"> {clientData.phone_number} </p>
                  <span className="text-color col-lg-3">SkypeId: </span>
                  <p className="col-lg-9 mb-2"> {clientData.skype_id}</p>

                  <span className="text-color col-lg-3">Recovery Email </span>
                  <p className="clearfix col-lg-9 mb-2">
                    <span className="float-left">
                      {clientData.recovery_email}
                    </span>
                    {clientData.recovery_email ? (
                      <EditIcon
                        style={pointerCSS}
                        onClick={(e) => {
                          console.log("Edit recovery email clicked", e);
                          recoveryEmailToggleModal(e);
                        }}
                        className="text-danger float-right"
                      />
                    ) : (
                      <AddIcon
                        style={pointerCSS}
                        onClick={(e) => {
                          recoveryEmailToggleModal(e);
                        }}
                        className="text-success float-right"
                      />
                    )}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// export default ManageSeting;

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(ManageSeting)
);
