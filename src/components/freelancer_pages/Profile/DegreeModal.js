import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "../../../config/axios";
import { buttonStyle } from "../../../utils";
import { store } from "../../../Redux/store";
import { Textfield } from "../../shared/formComponents";
import CustomModal from "../../shared/modal";
import { connect } from "react-redux";
import addFlashMessage from "../../../Redux/actions/flashMessages";
import CloseButton from './components/closeButtonModal'
export const DegreeModal = (props) => {
  const [formData, setFormData] = useState({
    user_id: store.getState().login.id,
    // freelancer_profile_id: store.getState().login.id,
    id: "",
    school: "",
    degree: "",
    completed: "",
  });
  const [schoolErr, setSchoolErr] = useState("");
  const [degreeErr, setDegreeErr] = useState("");
  const [completedErr, setCompletedErr] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [isDeleting, setisDeleting] = useState(false);
  const formChangeHandler = (e) => {
    if (e.target.name === "completed") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.replace(/[^\d+]/, ""),
      })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateSchool = (e) => {
    if (formData.school.length < 1) {
      setSchoolErr(" required");
      return false;
    }

    setSchoolErr("");
    return true;
  };

  const validateDegree = (e) => {
    if (formData.degree.length < 1) {
      setDegreeErr(" required");
      return false;
    }

    setDegreeErr("");
    return true;
  };

  const validateCompleted = (e) => {
    const isValid = /^[0-9\b]+$/.test(formData.completed)
    if (!formData.completed) {
      setCompletedErr("required");
      return false;
    }
   if(formData.completed && !isValid){
     alert("hjhgb")

    setCompletedErr("Year completed should contain digits only");
    return false;
   }
   

    setCompletedErr("");
    return true;
  };

  useEffect(() => {
    setFormData({
      user_id: store.getState().login.id,
      // freelancer_profile_id: store.getState().login.id,
      id: props.degree ? props.degree.id : "",
      school: props.degree ? props.degree.school : "",
      degree: props.degree ? props.degree.degree : "",
      completed: props.degree ? props.degree.completed : "",
    });
  }, [props]);

  const closeModal = () => {
    props.setismodalStatus(true)

    setSchoolErr("");
    setDegreeErr("");
    setCompletedErr("");
    props.extraProps.getCertificates();
    if(props.ismodalStatus===false){
      props.toggleModal()
    };
  };

  const handleSubmit = async () => {
    // console.log(props.degree);
    // console.log("state of add degree", formData);

    const validSchool = validateSchool();
    const validDegree = validateDegree();
    // const validComplete = validateCompleted();

    // console.log("validSchool", validSchool);

    if (!validSchool || !validDegree || !formData.completed) {
      props.addFlashMessage({
        type: "info",
        text: "Please fill the required fields",
      });
      return;
    }
    setisSubmitting(true)
    if (formData.id) {
      await updateDegree();
    } else {
      await createDegree();
    }

    // props.extraProps.getCertificates();
  };

  const updateDegree = async () => {
    console.log("update here");
    try {
      const url = `freelancer/degreecertificate/${formData.id}`;
      const degree = await axios.patch(url, formData, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log("degree data", degree.data);
      if (degree.data.status === 200) {
        closeModal();
        props.addFlashMessage({
          type: "success",
          text: degree.data.message || "Degree Updated successfully",
        });
      } else {
        props.addFlashMessage({
          type: "info",
          text: degree.data.message || "Error Occured",
        });
      }
      setisSubmitting(false);
    } catch (err) {
      console.log("ERROR!!!!" + err, err.data);
      props.addFlashMessage({
        type: "error",
        text: err.data.message || "Error Occured" + err,
      });
    }
  };

  const createDegree = async () => {
    const data = {
      school: formData.school,
      degree: formData.degree,
      completed: formData.completed,
      // freelancer_profile_id: formData.freelancer_profile_id,
      user_id: formData.user_id,
    };

    console.log("FormData", JSON.stringify(formData, null, 4));
    console.log("Data", JSON.stringify(data, null, 4));
    try {
      const url = "freelancer/degreecertificate";
      const degree = await axios.post(url, data, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log("degree data", degree.data);
      
      if (degree.data.status === 200) {
        closeModal();
        props.addFlashMessage({
          type: "success",
          text: degree.data.message || "Degree added successfully",
        });
      } else {
        props.addFlashMessage({
          type: "info",
          text: degree.data.message || "Error Occured",
        });
      }
      setisSubmitting(false);
    } catch (err) {
      console.log("ERROR!!!!" + err);
      props.addFlashMessage({
        type: "error",
        text: "error" + err || "Error Occured" + err,
      });
    }
  };

  const handleDelete = async (e) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    setisDeleting(true);
    try {
      const url = `freelancer/removedegreecertificate/${formData.id}`;
      const res = await axios.delete(url, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log("deleted", res);
      
      if (res.data.status === 200) {
        closeModal();
        props.addFlashMessage({
          type: "success",
          text: res.data.message || "Degree deleted successfully",
        });
      } else {
        props.addFlashMessage({
          type: "error",
          text: res.data.message || "Error Occured",
        });
      }
      setisDeleting(false);
    } catch (err) {
      console.log("err" + err, err);
      props.addFlashMessage({
        type: "error",
        text: "Internal error please try again" + err,
      });
    }
  };

  return (
    <CustomModal
      {...props}
      toggleModal={closeModal}
      title={ "Add a Degree / Certificate "}
    >
      <div>
        <Textfield
          required
          value={formData.school}
          name="school"
          label="School / College / University"
          onChange={formChangeHandler}
          onBlur={validateSchool}
          error={schoolErr ? true : false}
          helperText={schoolErr}
        />
        <Textfield
          required
          value={formData.degree}
          error={degreeErr ? true : false}
          helperText={degreeErr}
          name="degree"
          label="Degree Title"
          onChange={formChangeHandler}
          onBlur={validateDegree}
        />

        <Textfield
          required
          name="completed"
          label="Completed year"
          value={formData.completed}
          onChange={formChangeHandler}
          // onBlur={validateCompleted}
          error={formData.completed ? true : false}
          helperText={"Required"}
          inputProps={{
            maxlength: 15,
          }}
        />
        <div className="clearfix">
          <Button
            variant="contained"
            style={buttonStyle}
            className="mx-auto"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Please Wait..." : "Submit"}
          </Button>
          {"  "}
          {formData.id && (
            <Button
              variant="contained"
              color="secondary"
              className="mx-auto"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          )}

<CloseButton
      ismodalStatus={props.ismodalStatus}
      Button={Button}
      closeModal={closeModal}
      />
        </div>
      </div>
    </CustomModal>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};
export default connect(mapStateToProps, { addFlashMessage })(DegreeModal);
