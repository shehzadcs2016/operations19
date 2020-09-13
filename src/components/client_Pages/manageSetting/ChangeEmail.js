import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CustomModal from "../../shared/modal";
import { Textfield } from "../../shared/formComponents";
import { validate } from "../../../utils";
import { axios } from "../../../config/axios";
import { store } from "../../../Redux/store";
import { addFlashMessage } from "../../../Redux/actions/flashMessages";

const ChangeEmail = (props) => {
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
      props.addFlashMessage({
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
            style={{ backgroundColor: "#2dced4", color: "white" }}
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

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(ChangeEmail)
);
