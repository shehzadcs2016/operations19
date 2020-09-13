import React, { useState } from "react";
import { Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import axios from "../../../config/axios";
import { buttonStyle, isValidDate } from "../../../utils";
import { store } from "../../../Redux/store";
import CustomModal from "../../shared/modal";
import { Textfield } from "../../shared/formComponents";
import CloseButtonMOdal from "./components/closeButtonModal"

export const ProjectModal = (props) => {
  const [formData, setFormData] = useState({
    client_project_id: "",
    name: "",
    description: "",
    start_date: "",
    end_date: "",
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [schoolErr, setNameErr] = useState("");
  const [degreeErr, setDescErr] = useState("");
  const [startDateErr, setStartDateErr] = useState("");
  const [endDateErr, setEndDateErr] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateSchool = (e) => {
    if (formData.name.length < 1) {
      setNameErr("Project Title is required.");
      return false;
    }

    setNameErr("");
    return true;
  };

  const validateDegree = (e) => {
    if (formData.description.length < 1) {
      setDescErr("Project Description is required.");
      return false;
    }

    setDescErr("");
    return true;
  };

  const validateStartDate = (e) => {
    if (!startDate) {
      setStartDateErr("Start date is required");
      return false;
    } else if (!isValidDate(startDate)) {
      setStartDateErr("Start date should be a valid date.");
      return false;
    }
    setStartDateErr("");
    setFormData({ ...formData, start_date: startDate });
    return true;
  };

  const validateEndDate = (e) => {
    if (!endDate) {
      setEndDateErr("End date is required");
      return false;
    } else if (!isValidDate(startDate)) {
      setEndDateErr("End date should be a valid date.");
      return false;
    }
    setEndDateErr("");
    setFormData({ ...formData, end_date: endDate });
    return true;
  };

  //   React.useEffect(() => {
  //     setFormData({
  //       user_id: store.getState().login.id,
  //       id: props.degree ? props.degree.id : "",
  //       school: props.degree ? props.degree.school : "",
  //       degree: props.degree ? props.degree.degree : "",
  //       completed: props.degree ? props.degree.completed : "",
  //     });
  //   }, [props]);

  const closeModal = () => {
    props.setismodalStatus(true)
    

    setNameErr("");
    setDescErr("");
    if(props.ismodalStatus===false){
    props.toggleModal()
  }
    
  };

  const handleSubmit = async () => {
    // console.log(props.degree);
    // console.log("state of add degree", formData);
    // console.log("start date", startDate);
    // console.log("end date", endDate);

    const validSchool = validateSchool();
    const validDegree = validateDegree();
    const validStartDate = validateStartDate();
    const validEndDate = validateEndDate();

    if (!validSchool || !validDegree || !validStartDate || !validEndDate) {
      props.extraProps.addFlashMessage({
        type: "info",
        text: "Please fill the required fields",
      });
      return;
    }

    if (formData.client_project_id) {
      updateProject();
    } else {
      createProject();
    }
  };

  const updateProject = async () => {
    try {
      const url = `project/task/${formData.client_project_id}`;

      const project = await axios.post(url, formData, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log("project data", project.data);
      if (project.data.status === 200) {
        closeModal();
        props.extraProps.addFlashMessage({
          type: "success",
          text: project.data.message || "Project Updated successfully",
        });
      } else {
        props.extraProps.addFlashMessage({
          type: "info",
          text: project.data.message || "Error Occured",
        });
      }
    } catch (err) {
      console.log("ERROR!!!!" + err, err.data);
      props.extraProps.addFlashMessage({
        type: "error",
        text: "Error Occured" + err,
      });
    }
  };

  const createProject = async () => {
    try {
      const project = await axios.post("project/task", formData, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log("project data", project.data);
      if (project.data.status === 200) {
        closeModal();
        props.extraProps.addFlashMessage({
          type: "success",
          text: project.data.message || "Project added successfully",
        });
      } else {
        props.extraProps.addFlashMessage({
          type: "info",
          text: project.data.message || "Error Occured",
        });
      }
    } catch (err) {
      console.log("ERROR!!!!" + err, err.data);
      props.extraProps.addFlashMessage({
        type: "error",
        text: "Error Occured" + err,
      });
    }
  };

  return (
    <CustomModal {...props} toggleModal={closeModal} title="Add a Project">
      <div>
        {startDateErr && <p>{startDateErr}</p>}
        <Textfield
          // required
          value={formData.name}
          name="name"
          label="Project Title"
          onChange={formChangeHandler}
          onBlur={validateSchool}
          error={schoolErr ? true : false}
          helperText={schoolErr}
        />
        <Textfield
          // required
          value={formData.description}
          error={degreeErr ? true : false}
          helperText={degreeErr}
          name="description"
          label="Project Description"
          onChange={formChangeHandler}
          onBlur={validateDegree}
          multiline
          rows={4}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="start-date"
            label="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              "aria-label": "start date",
            }}
            onBlur={validateStartDate}
            error={startDateErr ? true : false}
            helperText={startDateErr}
            style={{ width: "100%" }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="end-date"
            label="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              "aria-label": "end date",
            }}
            onBlur={validateEndDate}
            error={endDateErr ? true : false}
            helperText={endDateErr}
            style={{ width: "100%" }}
          />
        </MuiPickersUtilsProvider>
        <div className="clearfix">
          <Button
            variant="contained"
            style={buttonStyle}
            className="mx-auto"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <CloseButtonMOdal
      ismodalStatus={props.ismodalStatus}
      Button={Button}
      closeModal={closeModal}
      />
        </div>
      </div>
    </CustomModal>
  );
};

export default ProjectModal;
