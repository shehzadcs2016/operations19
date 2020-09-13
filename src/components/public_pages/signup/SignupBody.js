import React, { useEffect } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import {
  Textfield,
  SelectMenu,
  RadioButton,
  UploadFiles,
  PasswordField,
} from "../../shared/formComponents";
import * as data from "./signupData";
import { isEmpty } from "../../../utils";
import { getCountries } from "../../shared/countries";
// import axios from "../../../config/axios";
import { withRouter } from "react-router-dom";

class FreelancerSignUp extends React.Component {
  state = {
    formData: {
        first_name: "example",
    last_name: "example",
    hear_about_us: "Referral",
    referral_name: "",
    country_id: "",
    citizen_of_id: "",
    email: "example@ex.com",
    password: "Umarhuman@1",
    showPassword: false,
    confirm_password: "Umarhuman@1",
    showConfirmPassword: false,
    phone_number: "031156487467",
    skype_id: "",
    linkedin: "",
    other_profile: "",
    resume_files: [],
    other_files: [],
    portfolio_files: [],
    agencyOrfreelancer: "I Am A Freelancer",
    agencyPeople: 0,
    asClient: "yes",
    experience: "",
    receivePayment: "I Will Provide An EIN",
    proofOption: "Yes I Can Provide Proof",
    aboutService: "a",
    primarySkill: "a",
    offerService: "a",
    billingRate: "a",
    joinFreelancer: "a",
    twoYearPlan: "a",
    recentProject: "a",
    messedWithClient: "a",
    communication: "a",
    standOut: "a",
    type: 3,
    }
  }

  /*state = {
   formData: {first_name: "",
   last_name: "",
   hear_about_us: "Referral",
   country_id: "",
   citizen_of_id: "",
   email: "",
   password: "",
   showPassword: false,
   confirm_password: "",
   showConfirmPassword: false,
   phone_number: "",
   skype_id: "",
   linkedin: "",
   other_profile: "",
   agencyOrfreelancer: "I Am A Freelancer",
   agencyPeople: 0,
   asClient: "yes",
   experience: "",
   receivePayment: "I Will Provide An EIN",
   proofOption: "Yes I Can Provide Proof",
   aboutService: "",
   primarySkill: "",
   offerService: "",
   billingRate: "",
   joinFreelancer: "",
   twoYearPlan: "",
   recentProject: "",
   messedWithClient: "",
   communication: "",
   standOut: "",
   resume_files: [],
   other_files: [],
   portfolio_files: [],
   type: 3,} 
  };*/
  // const [countries, setCountries] = React.useState([]);
  const [aboutRequiredFields, setAboutRequiredFields] = React.useState({
    first_name: "",
    last_name: "",
  });
  const [contactRequiredFields, setContactRequiredFields] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  });
  const [serviceRequiredFields, setServiceRequiredFields] = React.useState({
    aboutService: "",
    primarySkill: "",
    offerService: "",
    billingRate: "",
  });
  const [
    runBusinessRequiredFields,
    setRunBusinessRequiredFields,
  ] = React.useState({
    joinFreelancer: "",
    twoYearPlan: "",
    recentProject: "",
    messedWithClient: "",
    communication: "",
    standOut: "",
  });

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await getCountries();
        console.log(res);
        // setCountries((countries = countryRes.data.data));
      } catch (err) {
        // console.log(err.response.data.message);
      }
    };
    getCountry();
  }, []);

  // const submitForm = async () => {
  //   // try {
  //   //   const freelanceRes = await axios.post("user/register", {
  //   //     ...formData,
  //   //   });
  //   //   console.log(freelanceRes);
  //   // } catch (err) {
  //   //   // console.log(err.response.data.message);
  //   // }
  //   console.log("form Submit");
  //   props.history.push("/login");
  // };

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getSteps() {
    return [
      "About You",
      "Contact Info",
      "About Business",
      "About Services",
      "How to Run ",
    ];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return AboutYou();
      case 1:
        return ContactInformation();
      case 2:
        return AboutYourBusiness();
      case 3:
        return AboutYourServices();
      case 4:
        return HowRunBusiness();
      default:
        return "Unknown stepIndex";
    }
  }

  const stepperValidation = () => {
    console.log(formData);
    switch (activeStep) {
      case 0:
        return aboutValidateForm();
      case 1:
        return contactValidateForm();
      case 2:
        return handleNext();
      case 3:
        return serviceValidateForm();
      case 4:
        return runBusinessValidationForm();
      default:
        return "Unknown stepIndex";
    }
  };

  const AboutYou = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto">
        <Card>
          <CardHeader>
            <h3 className="h4">About You</h3>
          </CardHeader>
          <CardBody className="mx-3 row px-0">
            <Textfield
              required
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={formChangeHandler}
              error={aboutRequiredFields.first_name ? true : false}
            />
            <Textfield
              required
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={formChangeHandler}
              error={aboutRequiredFields.last_name ? true : false}
            />
            <RadioButton
              options={data.options}
              onChange={formChangeHandler}
              value={formData.hear_about_us}
              name="aboutFreelancer"
              label="How did you hear about Freelancer?"
            />
            <Textfield
              label="Referral name (optional)"
              onChange={formChangeHandler}
              value={formData.referral_name}
              name="referral_name"
            />
            <SelectMenu
              name="country_id"
              value={formData.country_id}
              onChange={formChangeHandler}
              label=" Country  you living in?"
              labelWidth={160}
              options={data.countryOptions}
              cr={true}
            />

            <SelectMenu
              name="citizen_of_id"
              value={formData.citizen_of_id}
              onChange={formChangeHandler}
              label="In which country are you citizen?"
              labelWidth={240}
              options={data.countryOptions}
              cr={true}
            />
          </CardBody>
        </Card>
      </div>
    );
  };

  const ContactInformation = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto">
        <Card>
          <CardHeader>
            <h3 className="h4">Contact Information</h3>
          </CardHeader>
          <CardBody className="mx-3 row px-0">
            <Textfield
              required
              label="What's your email address?"
              value={formData.email}
              name="email"
              onChange={formChangeHandler}
              error={contactRequiredFields.email ? true : false}
            />
            <PasswordField
              show={formData.showPassword}
              value={formData.password}
              onChange={formChangeHandler}
              label="Password"
              name="password"
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              labelWidth={80}
              error={contactRequiredFields.password ? true : false}
            />
            <PasswordField
              show={formData.showConfirmPassword}
              value={formData.confirm_password}
              onChange={formChangeHandler}
              label="Confirm Password"
              name="confirm_password"
              handleClickShowPassword={handleClickShowConfirmPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              labelWidth={140}
              error={contactRequiredFields.confirm_password ? true : false}
            />
            <Textfield
              required
              label="What's your phone number?"
              name="phone_number"
              value={formData.phone_number}
              onChange={formChangeHandler}
              error={contactRequiredFields.phone_number ? true : false}
            />
            <Textfield
              label="What's your Skype ID?"
              name="skype_id"
              value={formData.skype_id}
              onChange={formChangeHandler}
            />
            <Textfield
              label="What's your Linkedln ID?"
              name="linkedin"
              value={formData.linkedin}
              onChange={formChangeHandler}
            />
            <Textfield
              label="Other profiles you'd like to share?"
              name="other_profiles"
              value={formData.other_profile}
              onChange={formChangeHandler}
            />
            <UploadFiles label="Share your resume or CV with us..." />
            <UploadFiles
              label=" Any other portfolios or examples of your work that you
            want to share?"
            />
            <UploadFiles
              label="lease upload a screenshot showing your Internet Speed
            Test results."
            />
          </CardBody>
        </Card>
      </div>
    );
  };

  const AboutYourBusiness = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto">
        <Card>
          <CardHeader>
            <h3 className="h4">About Your Business</h3>
          </CardHeader>
          <CardBody className="mx-3 row px-0">
            <RadioButton
              options={data.agencyOrfreelancer}
              value={formData.agencyOrfreelancer}
              onChange={formChangeHandler}
              name="agencyOrfreelancer"
              label="Are you a freelancer or an owner of an agency?"
            />
            <Textfield
              type="number"
              label="Number of people in your agency?"
              name="agencyPeople"
              value={formData.agencyPeople}
              onChange={formChangeHandler}
              helperText="Note:If An Agency"
            />
            <RadioButton
              options={data.clientOptions}
              onChange={formChangeHandler}
              value={formData.asClient}
              name="asClient"
              label="Are you also registered as a client on Freelancer?"
            />
            <Textfield
              label="ever worked for client that hires through Freelancer?"
              name="experience"
              value={formData.experience}
              onChange={formChangeHandler}
            />
            <RadioButton
              options={data.receivePaymentOptions}
              onChange={formChangeHandler}
              name="receivePayment"
              value={formData.receivePayment}
              label=" If you are a US freelancer, which are you able to provide to
            receive payment?"
            />
            <RadioButton
              options={data.proofOptions}
              value={formData.pproofOption}
              onChange={formChangeHandler}
              name="proofOption"
              label=" If you are a freelancer from outside of the US, do you have
            documents to show you have a business registered or are
            self-employed?"
            />
          </CardBody>
        </Card>
      </div>
    );
  };

  const AboutYourServices = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto">
        <Card>
          <CardHeader>
            <h3 className="h4">About Your Services</h3>
          </CardHeader>
          <CardBody className="mx-3 row px-0">
            <Textfield
              label="Briefly tell us about professional experiences."
              name="aboutService"
              value={formData.aboutService}
              onChange={formChangeHandler}
              multiline
              rows="4"
              required
              error={serviceRequiredFields.aboutService ? true : false}
            />
            <Textfield
              label="What are your primary skill sets?"
              name="primarySkill"
              onChange={formChangeHandler}
              multiline
              value={formData.primarySkill}
              rows="4"
              required
              error={serviceRequiredFields.primarySkill ? true : false}
            />
            <Textfield
              label="Any other sites you offering services?"
              name="offerService"
              onChange={formChangeHandler}
              value={formData.offerService}
              required
              error={serviceRequiredFields.offerService ? true : false}
            />
            <Textfield
              label="What's your desired  billing rate?"
              name="billingRate"
              onChange={formChangeHandler}
              value={formData.billingRate}
              required
              error={serviceRequiredFields.billingRate ? true : false}
            />
          </CardBody>
        </Card>
      </div>
    );
  };

  const HowRunBusiness = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto">
        <Card>
          <CardHeader>
            <h3 className="h4">How You Run Your Business</h3>
          </CardHeader>
          <CardBody className="mx-3 row px-0">
            <Textfield
              label="Why do you want to join the Freelancer Marketplace?"
              name="joinFreelancer"
              onChange={formChangeHandler}
              multiline
              value={formData.joinFreelancer}
              rows="4"
              required
              error={runBusinessRequiredFields.joinFreelancer ? true : false}
            />
            <Textfield
              label="What is your plan for the next 2 years?"
              name="twoYearPlan"
              onChange={formChangeHandler}
              multiline
              value={formData.twoYearPlan}
              rows="4"
              required
              error={runBusinessRequiredFields.twoYearPlan ? true : false}
            />
            <Textfield
              label="What did you like least about your recent projects?"
              name="recentProject"
              onChange={formChangeHandler}
              multiline
              value={formData.recentProject}
              rows="4"
              required
              error={runBusinessRequiredFields.recentProject ? true : false}
            />
            <Textfield
              label="An example of a time when you messed up with a client."
              name="messedWithClient"
              onChange={formChangeHandler}
              value={formData.messedWithClient}
              multiline
              rows="4"
              required
              error={runBusinessRequiredFields.messedWithClient ? true : false}
            />
            <Textfield
              label="How do you manage communication with clients?"
              name="communication"
              onChange={formChangeHandler}
              value={formData.communication}
              multiline
              rows="4"
              required
              error={runBusinessRequiredFields.communication ? true : false}
            />
            <Textfield
              label="What makes you standout from other freelancers?"
              name="standOut"
              onChange={formChangeHandler}
              multiline
              rows="4"
              value={formData.standOut}
              required
              error={runBusinessRequiredFields.standOut ? true : false}
            />
          </CardBody>
        </Card>
      </div>
    );
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const aboutValidateForm = () => {
    const reqFields = {};
    Object.keys(formData).forEach((key) => {
      const hasKey = aboutRequiredFields.hasOwnProperty([key]);
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required";
      }
    });
    setAboutRequiredFields(reqFields);

    if (!isEmpty(reqFields)) {
      console.log("form ful of errors");
      return false;
    }
    handleNext();
  };
  const contactValidateForm = () => {
    const reqFields = {};
    Object.keys(formData).forEach((key) => {
      const hasKey = contactRequiredFields.hasOwnProperty([key]);
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required";
      }
    });
    setContactRequiredFields(reqFields);

    if (!isEmpty(reqFields)) {
      console.log("form ful of errors");
      return false;
    }
    handleNext();
  };
  const serviceValidateForm = () => {
    const reqFields = {};
    Object.keys(formData).forEach((key) => {
      const hasKey = serviceRequiredFields.hasOwnProperty([key]);
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required";
      }
    });
    setServiceRequiredFields(reqFields);

    if (!isEmpty(reqFields)) {
      console.log("form ful of errors");
      return false;
    }
    handleNext();
  };
  const runBusinessValidationForm = () => {
    const reqFields = {};
    Object.keys(formData).forEach((key) => {
      const hasKey = runBusinessRequiredFields.hasOwnProperty([key]);
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required";
      }
    });
    setRunBusinessRequiredFields(reqFields);

    if (!isEmpty(reqFields)) {
      console.log("form ful of errors");
      return false;
    }
    handleNext();
  };

  return (
    <div className=" mt-5 pt-5">
      <div className="text-center">
        <h2 className="h2">
          Apply to Be a Freelancer on the Freelancer Marketplace
        </h2>
      </div>
      <div className="post-project row mx-0 px-3">
        <div className="pb-2 pb-md-5 offset-xl-1 col-lg-3 col-xl-2 px-0 pr-lg-2 ">
          <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Directions</h3>
            </CardHeader>
            <CardBody>
              <h5 className="pb-1">
                Apply to offer your freelance services through the FreeeUp
                Marketplace by filling out the form below.
              </h5>

              <h5 className="pb-1">
                The more detail you provide in each answer, the easier it makes
                us to make a decision.
              </h5>

              <h5 className="pb-1">
                <strong>Please note</strong> that answers do not save so please
                attempt to complete in one sitting. Should only take 15-20
                minutes.
              </h5>

              <h5 className="pb-1">
                <strong>Note:</strong> We keep all information submitted secure
                and do not share with any 3rd parties. If you ever want to
                remove the information you submit, simply let us know.
              </h5>
            </CardBody>
          </Card>
        </div>
        <div className="mb-5 col-lg-9 col-xl-8  border rounded  px-0 px-md-2 pb-5">
          <Stepper activeStep={activeStep} alternativeLabel className="px-0">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>Finish</div>
            ) : (
              <div>
                {getStepContent(activeStep)}
                <div className="clearfix">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="contained"
                    className="float-left"
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        console.log("end of form");
                      }}
                      className="float-right"
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={stepperValidation}
                      className="float-right"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BodyPostJobOffline);
