import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import CustomModal from "../../shared/modal";
import { PasswordField } from "../../shared/formComponents";
import { validate } from "../../../utils";
import { axios } from "../../../config/axios";
import { store } from "../../../Redux/store";
import { addFlashMessage } from "../../../Redux/actions/flashMessages";

const ChangePassword = (props) => {
  const [modal, setModal] = useState(false);
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

  const toggleModal = () => {
    setModal(!modal);
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
      props.addFlashMessage({
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
      props.addFlashMessage(msg);
    } catch (err) {
      console.log("Error->" + err, err.data);
      props.addFlashMessage({
        type: "error",
        text: "Sorry, Error Occured",
      });
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Change your password</ModalHeader>
      <ModalBody>
        <div>
          <p className="pb-2">
            Please enter your old password, new password and confirm password
            and click the Confirm button.
          </p>
          <p className="pb-2">
            Note: Password must contain one uppercase letter, one lowercase
            letter, one special character and one digit and minimum of 8
            characters.
          </p>
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
              style={{ backgroundColor: "#2dced4", color: "white" }}
              className="mx-auto float-left"
              onClick={handleChangePwd}
            >
              Change Password
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
      </ModalBody>
    </Modal>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(ChangePassword)
);
