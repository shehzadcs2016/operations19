import React, { useState, useEffect } from "react";
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
import { Textfield, UploadFiles } from "../../shared/formComponents";

import { connect } from "react-redux";
import addFlashMessage from "../../../Redux/actions/flashMessages";
import CloseButton from './components/closeButtonModal'

export const ProjectModal = (props) => {
  const blankData = {
    id: null,
    project_name: "",
    project_date: "",
    project_description: "",
    // work_images: [], //[](array)
  }
  const [formData, setFormData] = useState(blankData);
  const [projectDate, setProjectDate] = useState("");
  const [work_images, setWorkImage] = useState([]);
  const [nameErr, setNameErr] = useState("");
  const [descErr, setDescErr] = useState("");
  const [projectDateErr, setProjectDateErr] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [isDeleting, setisDeleting] = useState(false);

  const handleProjectDateChange = (date) => {
    setProjectDate(date);
    setFormData({ ...formData, project_date: date });
  };

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateProjectName = (e) => {
    if (formData.project_name.length < 1) {
      setNameErr("Work/Project title is required.");
      return false;
    }
    setNameErr("");
    return true;
  };

  useEffect(() => {
    if (props.project) {
      setFormData({
        id: props.project.id,
        project_name: props.project.project_name,
        project_date: new Date(props.project.project_date),
        project_description: props.project.project_description,
      });
      setProjectDate(new Date(props.project.project_date));
    }
    else if (props.project === false){
      setFormData(blankData);
      setProjectDate("");
    }
  }, [props]);

  const validateProjectDesc = (e) => {
    if (!formData.project_description) {
      setDescErr("Work/Project description is required.");
      return false;
    }
    else if (formData.project_description.length < 1) {
      setDescErr("Work/Project description is required.");
      return false;
    }

    setDescErr("");
    return true;
  };

  const validateProjectDate = (e) => {
    if (!projectDate) {
      setProjectDateErr("Project date is required");
      return false;
    } else if (!isValidDate(projectDate)) {
      setProjectDateErr("Project date should be a valid date.");
      return false;
    }
    setProjectDateErr("");
    setFormData({ ...formData, start_date: projectDate });
    return true;
  };

  const closeModal = () => {
    props.setismodalStatus(true)
    setFormData(blankData);
    setNameErr("");
    setDescErr("");
    setProjectDateErr("");
    setWorkImage([]);
    props.extraProps.getWorkHistory();
if(props.ismodalStatus===false){
    props.toggleModal()
}
  };

  //   const handleSubmit = async () => {
  //     // console.log(props.degree);
  //     // console.log("state of add degree", formData);
  //     // console.log("start date", projectDate);
  //     // console.log("end date", endDate);

  //     const validSchool = validateProjectName();
  //     const validDegree = validateProjectDesc();
  //     const validStartDate = validateProjectDate();

  //     if (!validSchool || !validDegree || !validStartDate) {
  //       props.extraProps.props.addFlashMessage({
  //         type: "info",
  //         text: "Please fill the required fields",
  //       });
  //       return;
  //     }

  //     if (formData.client_project_id) {
  //       updateProject();
  //     } else {
  //       createProject();
  //     }
  //   };

  //   const updateProject = async () => {
  //     try {
  //       const url = `project/task/${formData.client_project_id}`;

  //       const project = await axios.post(url, formData, {
  //         headers: { Authorization: `Bearer ${store.getState().login.token}` },
  //       });
  //       console.log("project data", project.data);
  //       if (project.data.status === 200) {
  //         closeModal();
  //         props.extraProps.props.addFlashMessage({
  //           type: "success",
  //           text: project.data.message || "Project Updated successfully",
  //         });
  //       } else {
  //         props.extraProps.props.addFlashMessage({
  //           type: "info",
  //           text: project.data.message || "Error Occured",
  //         });
  //       }
  //     } catch (err) {
  //       console.log("ERROR!!!!" + err, err.data);
  //       props.extraProps.props.addFlashMessage({
  //         type: "error",
  //         text: "Error Occured" + err,
  //       });
  //     }
  //   };

  //   const createProject = async () => {
  //     try {
  //       const project = await axios.post("project/task", formData, {
  //         headers: { Authorization: `Bearer ${store.getState().login.token}` },
  //       });
  //       console.log("project data", project.data);
  //       if (project.data.status === 200) {
  //         closeModal();
  //         props.extraProps.props.addFlashMessage({
  //           type: "success",
  //           text: project.data.message || "Project added successfully",
  //         });
  //       } else {
  //         props.extraProps.props.addFlashMessage({
  //           type: "info",
  //           text: project.data.message || "Error Occured",
  //         });
  //       }
  //     } catch (err) {
  //       console.log("ERROR!!!!" + err, err.data);
  //       props.extraProps.props.addFlashMessage({
  //         type: "error",
  //         text: "Error Occured" + err,
  //       });
  //     }
  //   };

  const submitForm = async (e) => {
    e.preventDefault();
    
    const validPN = validateProjectName();
    const validPD = validateProjectDesc();
    const validPdt = validateProjectDate();

    if (!validPN || !validPD || !validPdt) {
      props.addFlashMessage({
        type: "info",
        text: "Please fill the required fields",
      });
      return;
    }
    setisSubmitting(true)
    // const formtag = document.querySelector("form");
    // const form_data = new FormData(formtag);
    const form_data = new FormData();

    Object.keys(formData).forEach((key) => {
      console.log("FORMDATA>>>>>>>",key, formData[key])
      form_data.append(key, formData[key]);
    });
    
    if (work_images){
      for (let index = 0; index < work_images.length; index++) {
        const element = work_images[index]; 
        console.log("appending work_images",element)
        form_data.append('work_images[]',element, element.name)
      }
    }

    /**Create a work history */
    if (formData.id) {
      updateWork(form_data);
    } else {
      createWork(form_data);
    }
    
  };

  const createWork = async (form_data) => {
    try {
      const project = await axios.post("freelancer/workhistory", form_data, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log("project data", project.data);
      
      if (project.data.status === 200) {
        closeModal();
        props.addFlashMessage({
          type: "success",
          text: project.data.message || "Project added successfully",
        });
      } else {
        props.addFlashMessage({
          type: "error",
          text: project.data.message || "Error Occured",
        });
      }
      setisSubmitting(false);
    } catch (err) {
      setisSubmitting(false);
      console.log("ERROR!!!!" + err, err.data);
      props.addFlashMessage({
        type: "error",
        text: "Error Occured" + err,
      });
    }
  };

  const updateWork = async (form_data) => {
    for (var [key, value] of form_data.entries()) { 
      console.log("====>>>>>>>>>>>>>>>>form_data.entries ",key, value);
     }
    form_data.append("_method", "patch") 
    try {
      const project = await axios.post(
        `freelancer/workhistory/${form_data.get("id")}`,
        form_data,
        {
          headers: { Authorization: `Bearer ${store.getState().login.token}` },
        }
      );
      console.log("project data", project.data);
     
      if (project.data.status === 200) {
        closeModal();
          props.addFlashMessage({
          type: "success",
          text: project.data.message || "Project added successfully",
        });
      } else {
        props.addFlashMessage({
          type: "error",
          text: project.data.message || "Error Occured",
        });
      }
      setisSubmitting(false);
    } catch (err) {
      setisSubmitting(false);
      console.log("ERROR!!!!" + err, err.data);
      props.addFlashMessage({
        type: "error",
        text: "Error Occured" + err,
      });
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    setisDeleting(true)
    try {
      const url = `freelancer/removeworkhistory/${formData.id}`;
      const res = await axios.delete(url, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      console.log("deleted", res);
      if (res.data.status === 200) {
        closeModal();
        props.addFlashMessage({
          type: "success",
          text: res.data.message || "Work history deleted successfully",
        });
      } else {
        props.addFlashMessage({
          type: "error",
          text: res.data.message || "Error Occured",
        });
      }
      setisDeleting(false);
    } catch (err) {
        setisDeleting(false);
        console.log("err" + err, err);
        props.addFlashMessage({
          type: "error",
          text: "Internal error please try again" + err,
        });
    }
  };
console.log(props.project,"projects")
  return (
    <CustomModal {...props} toggleModal={closeModal} title="Add a Project">
      <form encType="multipart/form-data" onSubmit={submitForm}>
        <div>
          {projectDateErr && <p>{projectDateErr}</p>}
          <Textfield
            required
            value={formData.project_name}
            name="project_name"
            label="Work/Project title"
            onChange={formChangeHandler}
            onBlur={validateProjectName}
            error={nameErr ? true : false}
            helperText={nameErr}
          />
          <Textfield
            required
            value={formData.project_description}
            error={descErr ? true : false}
            helperText={descErr}
            name="project_description"
            label="Work/Project description"
            onChange={formChangeHandler}
            onBlur={validateProjectDesc}
            multiline
            rows={4}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              required
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="start-date"
              label="Project Date"
              value={projectDate}
              onChange={handleProjectDateChange}
              KeyboardButtonProps={{
                "aria-label": "start date",
              }}
              //   onBlur={validateProjectDate}
              error={projectDateErr ? true : false}
              helperText={projectDateErr}
              style={{ width: "100%" }}
            />
          </MuiPickersUtilsProvider>
          <br />
          <br />
          <UploadFiles
            onChange={(e) => {
              const file = Array.from(e.target.files);
              console.log(file);
              if (file.length > 0) {
                setWorkImage([...work_images,...file]);
              }
            }}
            label="Share images/screenshots, if any..."
            name="work_images"
          />
            <div className="w-100">
              {work_images ? work_images.map((file, index)=>{
                let name_separator = ", "
                if (index === 0){
                  name_separator = ""
                }
                return <p className="fa-pull-left" key={file.name + index.toString()}>{name_separator}{file.name}</p>
              }) : null }
            </div>
          <div className="clearfix w-100" style={{display:"inline-block"}} >
            <Button
              variant="contained"
              style={buttonStyle}
              className="mx-auto"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please Wait..." : "Submit"}
            </Button>
            {"  "}
            { formData.id && (
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
      </form>
    </CustomModal>
  );
};

// export default ProjectModal;
const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};
export default connect(mapStateToProps, { addFlashMessage })(ProjectModal);