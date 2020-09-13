import React from "react";
import { Stepper, Step, StepLabel, Button, Divider } from "@material-ui/core";
import { Card, CardHeader, CardBody } from "reactstrap";
import {
  Textfield,
  SelectMenu,
  UploadFiles,
} from "../../shared/formComponents";

const countryOptions = [
  { id: 1, value: "India" },
  { id: 2, value: "Paskistan" },
];

export const EditProfile = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getSteps() {
    return ["About You", "Work History", "Degrees and Certifications"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return AboutYou();
      case 1:
        return WorkHistory();
      case 2:
        return DegreesAndCertifications();
      default:
        return "Unknown stepIndex";
    }
  }

  const AboutYou = () => {
    return (
      <React.Fragment>
        <h4 className="h4">About You</h4>
        <p className="h6 text-justify">
          Enter information about yourself, the services you offer, and a
          profile image. This information will be seen by clients as you get
          introduced on job requests.
        </p>
        <Textfield
          required
          // value={formData.email}
          // error={emailErr ? true : false}
          // helperText={emailErr}
          name="fullname"
          label="Full Name"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
        />
        <SelectMenu
          required
          name="location"
          // value={formData.country_id}
          // onChange={formChangeHandler}
          label="Location"
          labelWidth={70}
          options={countryOptions}
        />
        <UploadFiles
          name="profile_image "
          label="Upload/edit your profile image"
        />
        <Textfield
          required
          label="About Me"
          name="aboutme"
          // onChange={formChangeHandler}
          multiline
          rows="3"
          // error={requiredFields.standOut ? true : false}
        />
        <Textfield
          required
          // value={formData.email}
          // error={emailErr ? true : false}
          name="expertise"
          label="Your Expertise"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
          helperText="Please separate multiple Expertise with a comma."
        />
        <Textfield
          required
          // value={formData.email}
          // error={emailErr ? true : false}
          name="skills"
          label="Your Skills and Knowledge"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
          helperText="Please separate multiple Skills with a comma."
        />
        <Textfield
          label="Profile links"
          name="profile_links"
          // onChange={formChangeHandler}
          multiline
          rows="3"
          required
          helperText="Please separate multiple links with a comma. Please no Upwork links."
        />
        <UploadFiles
          name="portfolio"
          label="Upload/edit your digital portfolio (only 1)"
        />
      </React.Fragment>
    );
  };

  const WorkHistory = () => {
    return (
      <React.Fragment>
        <h4 className="h4">Add New Work History</h4>
        <Textfield
          // value={formData.email}
          name="project_name"
          label="Project Name"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
        />
        <Textfield
          // value={formData.email}
          name="project_date"
          label="Project Date"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
          helperText="hint: Start date - End date
          "
        />
        <Textfield
          label="Desciption"
          name="project_description"
          // onChange={formChangeHandler}
          multiline
          rows="3"
        />
        <UploadFiles
          nmae="working_images"
          label="Click or drag your work images here to upload"
        />

        <Divider />
        <h4 className="h4 pt-5">Work History</h4>
        <Divider />
        <div className="row h6 text-muted border-bottom py-2">
          <span className="text-color col-lg-3 ">Project Name: </span>
          <p className="col-lg-9 mb-2">example</p>
          <span className="text-color col-lg-3">Project Date: </span>
          <p className="col-lg-9 mb-2"> 02-02-2020</p>
          <span className="text-color col-lg-3 text-justify">
            Project Desciption:
          </span>
          <p className="col-lg-9 mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </React.Fragment>
    );
  };
  const DegreesAndCertifications = () => {
    return (
      <React.Fragment>
        <h4 className="h4">Add New Degrees and Certifications</h4>
        <Textfield
          // value={formData.email}
          name="school"
          label="School or Institute"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
        />
        <Textfield
          // value={formData.email}
          name="degree"
          label="Degree Or Certification"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
        />
        <Textfield
          // value={formData.email}
          name="date_completed"
          label="Completed Date"
          // onChange={formChangeHandler}
          // onBlur={validateEmail}
        />

        <UploadFiles
          nmae="working_images"
          label="Click or drag your work images here to upload"
        />

        <Divider />
        <h4 className="h4 pt-5">Degrees and Certifications</h4>
        <Divider />
        <div className="row h6 text-muted border-bottom py-2">
          <span className="text-color col-lg-3 ">School Or Institute:</span>
          <p className="col-lg-9 mb-2">example</p>
          <span className="text-color col-lg-3">Degree Or Certification: </span>
          <p className="col-lg-9 mb-2"> example</p>
          <span className="text-color col-lg-3 text-justify">
            Completed Date:
          </span>
          <p className="col-lg-9 mb-2">02-02-2020</p>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="mt-5 mx-3">
      <div className="row pb-3 px-3">
        <div className="offset-xl-2 col-xl-6">
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4", color: "white" }}
          >
            View Your Profile
          </Button>
        </div>
      </div>
      <div className="row pb-3 px-3">
        <div className="offset-xl-2 col-xl-8 pb-3">
          <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Edit your freelancer profile</h3>
            </CardHeader>
            <CardBody>
              <div>
                <Stepper
                  activeStep={activeStep}
                  alternativeLabel
                  className="px-0"
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {activeStep === steps.length ? (
                    <div>{props.history.push("/freelancer-profile")}</div>
                  ) : (
                    <div>
                      {getStepContent(activeStep)}
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          // className={classes.backButton}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
