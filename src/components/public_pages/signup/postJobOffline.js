import React, { useEffect, useState } from "react"
import { Stepper, Step, StepLabel, Button } from "@material-ui/core"
import { connect } from "react-redux"
import {
  RadioButton,
  UploadFiles,
  PasswordField,
  CustomSelect,
  CustomTextfield,
} from "../../shared/formComponents"
import * as data from "./signupData"
import { isEmpty, validate } from "../../../utils"
import { getCountries } from "../../shared/countries"
import { withRouter } from "react-router-dom"
import axios from "../../../config/axios"
import { addFlashMessage } from "../../../Redux/actions/flashMessages"
import { Link } from "react-router-dom"
import { es } from "date-fns/locale"

export const BodyPostJobOffline = (props) => {
  const [resume_files, setResumeFile] = useState([])
  const [other_files, setOtherFiles] = useState([]) //portfolio_files
  const [speed_test_image, setSpeedTestScreenshot] = useState(null)
  // const [formData, setFormData] = useState({
  //   first_name: "Usman",
  //   last_name: "Sharif",
  //   hear_about_us: "Referral",
  //   referral_name: "Mubeen",
  //   country_id: "1",
  //   citizen_of_id: "2",
  //   email: "usman@mail.com",
  //   password: "Password@1",
  //   showPassword: false,
  //   confirm_password: "Password@1",
  //   showConfirmPassword: false,
  //   phone_number: "031156487467",
  //   skype_id: "my_skype_id",
  //   linkedin: "my_linkedin_id",
  //   other_profile: "",
  //   // resume_files: [],
  //   // other_files: [],
  //   // portfolio_files: [],
  //   agencyOrfreelancer: "I Am A Freelancer",
  //   agencyPeople: "0",
  //   already_member: "1",
  //   experience: "",
  //   receivePayment: "I Will Provide An EIN",
  //   proofOption: "Yes I Can Provide Proof",
  //   aboutService: "A demo for about service",
  //   primarySkill: "A demo for primary skill",
  //   offerService: "A demo for offer ervice",
  //   minimum_hourly_wage: "20",
  //   joinFreelancer: "A demo for join freelancer",
  //   twoYearPlan: "A demo for two year plan",
  //   recentProject: "A demo for recent projects",
  //   messedWithClient: "A demo for messed with client",
  //   communication: "A demo for communication",
  //   standOut: "A demo for stand out",
  //   type: 3,
  // });
  const blankData = {
    first_name: "",
    last_name: "",
    hear_about_us: "",
    referral_name: "",
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
    resume_files: [],
    other_files: [],
    portfolio_files: [],
    speed_test_screenshot: "",
    agencyOrfreelancer: "",
    agencyPeople: "",
    already_member: "",
    experience: "",
    receivePayment: "",
    proofOption: "",
    aboutService: "",
    primarySkill: "",
    offerService: "",
    minimum_hourly_wage: "",
    joinFreelancer: "",
    twoYearPlan: "",
    recentProject: "",
    messedWithClient: "",
    communication: "",
    standOut: "",
    type: "3",
  }
  const [formData, setFormData] = useState(blankData)

  const [countries, setCountries] = useState([])
  const [aboutRequiredFields, setAboutRequiredFields] = useState({
    first_name: "",
    last_name: "",
  })
  const [formSubmit, setFormSubmit] = useState(false)
  const [livingCountryErr, setLivingCountryErr] = useState("")
  const [citizenCountryErr, setCitizenCountryErr] = useState("")
  const [contactRequiredFields, setContactRequiredFields] = useState({
    // email: "",
    // password: "",
    // confirm_password: "",
    phone_number: "",
    skype_id: "",
    linkedin: "",
  })
  const [emailErr, setEmailErr] = useState("")
  const [pwdErr, setPwdErr] = useState("")
  const [pwdMatchErr, setPwdMatchErr] = useState("")

  const [serviceRequiredFields, setServiceRequiredFields] = useState({
    aboutService: "",
    primarySkill: "",
    offerService: "",
    minimum_hourly_wage: "",
  })
  const [runBusinessRequiredFields, setRunBusinessRequiredFields] = useState({
    joinFreelancer: "",
    twoYearPlan: "",
    recentProject: "",
    messedWithClient: "",
    communication: "",
    standOut: "",
  })

  const [displayCVFN, setDisplayCVFN] = useState([])
  const [displayOFN, setDisplayOFN] = useState([])
  const [displaySTFN, setDisplaySTFN] = useState("")
  const [displaySTFNErr, setDisplaySTFNErr] = useState("")
  const [alreadyMemberErr, setAlreadyMemberErr] = useState("")
  const [is_hear_about_us, setis_hear_about_us] = useState("")
  // const [submitBtnTxt, setSubmitBtnTxt] = useState("Submit Application");
  const [isSubmitting, setisSubmitting] = useState(false)
  // const [fnErr, setFNErr] = useState("");

  const validateFN = (e) => {
    const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
      formData.first_name.trim()
    )
    if (formData.first_name.trim() && !isValid) {
      const msg = "Name should not contain any digit or special characters"
      setAboutRequiredFields({ ...aboutRequiredFields, first_name: msg })
      return false
    } else if (!formData.first_name.length) {
      const msg = "First Name is required"
      setAboutRequiredFields({ ...aboutRequiredFields, first_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setAboutRequiredFields({ ...aboutRequiredFields, first_name: "" })
    setFormData({ ...formData, first_name: formData.first_name.trim() })
    return true
  }

  const validateLN = (e) => {
    const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
      formData.last_name.trim()
    )
    if (formData.last_name.trim() && !isValid) {
      const msg = "Name should not contain any digit or special characters"
      setAboutRequiredFields({ ...aboutRequiredFields, last_name: msg })
      return false
    } else if (!formData.last_name.length) {
      const msg = "First Name is required"
      setAboutRequiredFields({ ...aboutRequiredFields, last_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setAboutRequiredFields({ ...aboutRequiredFields, last_name: "" })
    setFormData({ ...formData, last_name: formData.last_name.trim() })
    return true
  }

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getCountries()
        // console.log(res);
        setCountries(res)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

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
    if (e.target.name === "phone_number") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.replace(/[^\d+]/, ""),
      })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const [isShowGetstarted, setGetStarted] = useState(true)
  const handleGetStarted = () => {
    setGetStarted(false)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  function getSteps() {
    return [
      "About You",
      "Contact Info",
      "About Business",
      "About Services",
      "How to Run ",
      "Done",
    ]
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return AboutYou()
      case 1: {
        return ContactInformation()
        // return HowRunBusiness();
      }
      case 2:
        return AboutYourBusiness()
      case 3:
        return AboutYourServices()
      case 4: {
        return HowRunBusiness()
        // return ContactInformation();
      }
      case 5:
        return DoneView()
      default:
        return "Unknown stepIndex"
    }
  }

  const validateCountryLiving = () => {
    if (!formData.country_id) {
      setLivingCountryErr("Country is required.")
      return false
    }

    setLivingCountryErr("")
    return true
  }

  const validateCountryCitizen = () => {
    if (!formData.citizen_of_id) {
      setCitizenCountryErr("Country is required.")
      return false
    }

    setCitizenCountryErr("")
    return true
  }

  const stepperValidation = () => {
    // console.log(formData);
    window.scrollTo(0, 0)
    switch (activeStep) {
      case 0:
        return aboutValidateForm()
      case 1:
        return contactValidateForm()
      case 2:
        return aboutBusinessValidateForm()
      case 3:
        return serviceValidateForm()
      case 4:
        return runBusinessValidationForm()
      case 5:
        submitForm()
        return
      default:
        return "Unknown stepIndex"
    }
  }

  const GetStarted = () => {
    return (
      <div className="   form_control_divs row">
        <div className="col-md-4 brand_sidebar ">
          <div className="row p-4 brands_detail_imgs">
            <div className="col-md-12">
              <h3 className="brands_work">Brands We Work With</h3>
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/01.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/02.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/03.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/04.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/05.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/06.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/07.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/08.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/09.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                className="company_logo"
                src="images/signup_sidebar_logos/10.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-7  mx-auto">
          <div className="row ">
            <div className="col-md-4 mb 5 pt-3 pl-5 pb-2">
              <Link to="/freelancer-dashboard">
                <img
                  className="company_logo"
                  src="images/logo-black.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-12 pro_app_form p-5">
              <div className="w-100  ">
                <h1 className="h1  ">
                  <strong>Operations19 Professional Application Form</strong>
                </h1>
              </div>
              <p>
                We are honored by your interest in joining Operations19. To set
                expectations, in order to be approved, you must have a public
                record demonstrating successful client service in your field(s)
                of expertise. You must provide us with a public profile(s) where
                we can view actual client reviews.
              </p>
              <p className="mt-3 mb-3">
                We only accept freelancers or agencies with an average rating of
                4 stars or higher. Operations19’s screening team will evaluate
                your application based on the information you provide here.
              </p>
              <p>
                Please note that once submitted, this information cannot be
                edited.
              </p>
              <div className=" ">
                <button
                  type="button"
                  className=" mt-5 w-100 btn-primary btn-block btn-lg"
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
                <div className="mt-4">
                  <p className="d-block">
                    Already have an account?<Link to="/login"> Log In</Link>
                  </p>
                  <p className="d-block">
                    Are you looking to get services from Freelancers?
                    <Link to="/clients-signup"> Apply as a client</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const AboutYou = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto form_control_divs row">
        <div className="col-md-4 pt-3 pb-2">
          <Link to="/freelancer-dashboard">
            <img className="company_logo" src="images/logo-black.png" alt="" />
          </Link>
        </div>
        <div className="col-md-12">
          <div className="w-100 pt-5 pb-3">
            <h2 className="h2 titles__main-title">
              <strong>Personal Information</strong>
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <label>First Name*</label>
          <CustomTextfield
            required
            name="first_name"
            value={formData.first_name}
            onChange={(e) => {
              let value = e.target.value.replace(/[^A-Za-z]/gi, "")
              setFormData({ ...formData, first_name: value })
            }}
            onBlur={validateFN}
            error={aboutRequiredFields.first_name ? true : false}
            helperText={aboutRequiredFields.first_name}
          />
        </div>
        <div className="col-md-6">
          <label>Last Name*</label>
          <CustomTextfield
            required
            name="last_name"
            value={formData.last_name}
            // onChange={formChangeHandler}
            onChange={(e) => {
              let value = e.target.value.replace(/[^A-Za-z]/gi, "")
              setFormData({ ...formData, last_name: value })
            }}
            onBlur={validateLN}
            error={aboutRequiredFields.last_name ? true : false}
            helperText={aboutRequiredFields.last_name}
          />
        </div>
        <div className="col-md-6">
          <label>Referral name (optional)</label>
          <CustomTextfield
            onChange={formChangeHandler}
            value={formData.referral_name}
            name="referral_name"
          />
          {/* <SelectMenu
                required
                name="country_id"
                value={formData.country_id}
                onChange={formChangeHandler}
                label="Country you living in?"
                labelWidth={160}
                options={countries}
                cr={true}
              /> */}
        </div>

        <div className="col-md-6">
          <label>Country you living in?*</label>
          <CustomSelect
            required
            name="country_id"
            value={formData.country_id}
            onChange={formChangeHandler}
            onBlur={validateCountryLiving}
            error={livingCountryErr}
            labelWidth={160}
            options={countries}
            cr={true}
          />
        </div>
        <div className="col-md-6">
          <label>In which country are you citizen?*</label>
          <CustomSelect
            name="citizen_of_id"
            value={formData.citizen_of_id}
            onChange={formChangeHandler}
            onBlur={validateCountryCitizen}
            error={citizenCountryErr}
            labelWidth={240}
            options={countries}
            cr={true}
          />
        </div>
        <div className="col-md-12">
          {console.log("options", data.options)}
          <RadioButton
            required
            error={is_hear_about_us ? true : false}
            options={data.options}
            onChange={formChangeHandler}
            value={formData.hear_about_us}
            name="hear_about_us"
            label="How did you hear about Freelancer?"
          />
          {is_hear_about_us && (
            <p style={{ color: "red" }}>{is_hear_about_us}</p>
          )}
        </div>
      </div>
    )
  }

  const validateEmail = () => {
    if (!validate("email", formData.email)) {
      setEmailErr("Email is not valid")
      return false
    }

    setEmailErr("")
    return true
  }

  const validatePassword = () => {
    if (!validate("password", formData.password)) {
      setPwdErr(
        "Password must contain one uppercase letter, one lowercase letter, one digit, one special character and minimum of 8 characters."
      )
      return false
    }
    setPwdErr("")
    return true
  }

  const validateConfirmPassword = () => {
    const compared = formData.password.localeCompare(formData.confirm_password)
    if (compared) {
      setPwdMatchErr("Password did not match")
      return false
    } else if (!formData.confirm_password.length) {
      setPwdMatchErr("Please Enter Confirm Password")
      return false
    }
    setPwdMatchErr("")
    return true
  }

  const ContactInformation = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto form_control_divs row">
        <div className="col-md-4 pt-3 pb-2">
          <Link to="/freelancer-dashboard">
            <img className="company_logo" src="images/logo-black.png" alt="" />
          </Link>
        </div>
        <div className="col-md-12">
          <div className="w-100 pt-5 pb-3">
            <h2 className="h2 titles__main-title">
              <strong> Contact Info </strong>
            </h2>
          </div>
        </div>
        <div className="col-md-4">
          <label>What's your email address?*</label>
          <CustomTextfield
            required
            value={formData.email}
            name="email"
            onChange={formChangeHandler}
            error={emailErr ? true : false}
            helperText={emailErr}
            onBlur={validateEmail}
          />
        </div>
        <div className="col-md-4">
          <label>Password*</label>
          <PasswordField
            show={formData.showPassword}
            value={formData.password}
            onChange={formChangeHandler}
            name="password"
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            // error={contactRequiredFields.password ? true : false}
            error={pwdErr ? true : false}
            helperText={pwdErr}
            onBlur={validatePassword}
            hideLabel={true}
          />
        </div>
        <div className="col-md-4">
          <label>Confirm Password*</label>
          <PasswordField
            show={formData.showConfirmPassword}
            value={formData.confirm_password}
            onChange={formChangeHandler}
            name="confirm_password"
            handleClickShowPassword={handleClickShowConfirmPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            // error={contactRequiredFields.confirm_password ? true : false}
            error={pwdMatchErr ? true : false}
            helperText={pwdMatchErr}
            onBlur={validateConfirmPassword}
            hideLabel={true}
          />
        </div>
        <div className="col-md-6">
          <label>What's your phone number?*</label>
          <CustomTextfield
            required
            name="phone_number"
            value={formData.phone_number}
            onChange={formChangeHandler}
            error={contactRequiredFields.phone_number ? true : false}
            helperText={contactRequiredFields.phone_number}
            inputProps={{ maxlength: 15 }}
          />
        </div>
        <div className="col-md-6">
          <label>What's your Skype ID?*</label>
          <CustomTextfield
            required
            name="skype_id"
            value={formData.skype_id}
            onChange={formChangeHandler}
            error={contactRequiredFields.skype_id ? true : false}
            helperText={contactRequiredFields.skype_id}
          />
        </div>
        <div className="col-md-6">
          <label>What's your Linkedln ID?*</label>
          <CustomTextfield
            required
            name="linkedin"
            value={formData.linkedin}
            onChange={formChangeHandler}
            error={contactRequiredFields.linkedin ? true : false}
            helperText={contactRequiredFields.linkedin}
          />
        </div>
        <div className="col-md-6">
          <label>Other profiles you'd like to share?</label>
          <CustomTextfield
            name="other_profile"
            value={formData.other_profile}
            onChange={formChangeHandler}
          />
        </div>
        <div className="col-md-12">
          <UploadFiles
            accept={"image/*, .doc, .docx, application/pdf"}
            onChange={(e) => {
              const file = Array.from(e.target.files)
              console.log("Share your resume or CV with us...", file)
              if (file.length > 0) {
                setResumeFile([...resume_files, ...file])
                setDisplayCVFN(file)
              }
            }}
            label="Share your resume or CV with us..."
            name="resume_files"
          />
          <div className="w-100">
            {resume_files
              ? resume_files.map((file, index) => {
                  let name_separator = ", "
                  if (index === 0) {
                    name_separator = ""
                  }
                  return (
                    <p
                      className="fa-pull-left"
                      key={file.name + index.toString()}
                    >
                      {name_separator}
                      {file.name}
                    </p>
                  )
                })
              : null}
          </div>
        </div>
        <div className="col-md-12">
          <UploadFiles
            accept={".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"}
            label=" Any other portfolios or examples of your work?"
            name="other_files"
            onChange={(e) => {
              const file = Array.from(e.target.files)
              if (file.length > 0) {
                console.log("other_files", file)
                setOtherFiles([...other_files, ...file])
                setDisplayOFN(file)
              }
              console.log("other_files", file, other_files)
            }}
          />
          <div className="w-100">
            {other_files
              ? other_files.map((file, index) => {
                  let name_separator = ", "
                  if (index === 0) {
                    name_separator = ""
                  }
                  return (
                    <p
                      className="fa-pull-left"
                      key={file.name + index.toString()}
                    >
                      {name_separator}
                      {file.name}
                    </p>
                  )
                })
              : null}
          </div>
        </div>
        <div className="col-md-12">
          <UploadFiles
            label="Please upload a screenshot showing your Internet Speed Test results."
            name="speed_test_image"
            onChange={(e) => {
              const file = e.target.files[0]
              console.log(file)
              // setDisplaySTFNErr("");
              if (file) {
                setSpeedTestScreenshot(file)
                setDisplaySTFN(file.name)
              }
            }}
          />
          {displaySTFN && <p>{displaySTFN}</p>}
          {displaySTFNErr && <p style={{ color: "red" }}>{displaySTFNErr}</p>}
        </div>
      </div>
    )
  }

  const AboutYourBusiness = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto form_control_divs row">
        <div className="col-md-4 pt-3 pb-2">
          <Link to="/freelancer-dashboard">
            <img className="company_logo" src="images/logo-black.png" alt="" />
          </Link>
        </div>
        <div className="col-md-12">
          <div className="w-100 pt-5 pb-3">
            <h2 className="h2 titles__main-title">
              <strong>About Business</strong>
            </h2>
          </div>
        </div>
        <div className="col-md-12">
          <RadioButton
            options={data.agencyOrfreelancer}
            value={formData.agencyOrfreelancer}
            onChange={formChangeHandler}
            name="agencyOrfreelancer"
            label="Are you a freelancer or an owner of an agency?"
          />
        </div>
        <div className="col-md-6">
          <label>Number of people in your agency?</label>
          <CustomTextfield
            type="number"
            name="agencyPeople"
            value={formData.agencyPeople}
            onChange={formChangeHandler}
            helperText="Note:If An Agency"
          />
        </div>
        <div className="col-md-6">
          <label>Ever worked for client that hires through Freelancer?</label>
          <CustomTextfield
            name="experience"
            value={formData.experience}
            onChange={formChangeHandler}
          />
        </div>
        <div className="col-md-12">
          <RadioButton
            required
            options={data.clientOptions}
            value={formData.already_member}
            name="already_member"
            onChange={formChangeHandler}
            label="Are you also registered as a client on Freelancer?"
            error={alreadyMemberErr ? true : false}
            helperText={alreadyMemberErr}
          />
          {alreadyMemberErr && (
            <p style={{ color: "red" }}>{alreadyMemberErr}</p>
          )}
        </div>

        <div className="col-md-12">
          <RadioButton
            options={data.receivePaymentOptions}
            onChange={formChangeHandler}
            name="receivePayment"
            value={formData.receivePayment}
            label=" If you are a US freelancer, which are you able to provide to
            receive payment?"
          />
        </div>
        <div className="col-md-12">
          <RadioButton
            options={data.proofOptions}
            value={formData.proofOption}
            onChange={formChangeHandler}
            name="proofOption"
            label=" If you are a freelancer from outside of the US, do you have
            documents to show you have a business registered or are
            self-employed?"
          />
        </div>
      </div>
    )
  }

  const AboutYourServices = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto form_control_divs row">
        <div className="col-md-4 pt-3 pb-2">
          <Link to="/freelancer-dashboard">
            <img className="company_logo" src="images/logo-black.png" alt="" />
          </Link>
        </div>
        <div className="col-md-12">
          <div className="w-100 pt-5 pb-3">
            <h2 className="h2 titles__main-title">
              <strong> About Your Services </strong>
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <label>Briefly tell us about professional experiences.*</label>
          <CustomTextfield
            required
            multiline
            rows="4"
            name="aboutService"
            value={formData.aboutService}
            onChange={formChangeHandler}
            error={serviceRequiredFields.aboutService ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>What are your primary skill sets?*</label>
          <CustomTextfield
            required
            multiline
            rows="4"
            name="primarySkill"
            onChange={formChangeHandler}
            value={formData.primarySkill}
            error={serviceRequiredFields.primarySkill ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>Any other sites you offering services? (number only)*</label>
          <CustomTextfield
            required
            name="offerService"
            type="number"
            onChange={formChangeHandler}
            value={formData.offerService}
            error={serviceRequiredFields.offerService ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>What's your desired billing rate?*</label>
          <CustomTextfield
            required
            name="minimum_hourly_wage"
            type="number"
            onChange={formChangeHandler}
            value={formData.minimum_hourly_wage}
            error={serviceRequiredFields.minimum_hourly_wage ? true : false}
          />
        </div>
      </div>
    )
  }

  const HowRunBusiness = () => {
    return (
      <div className="w-100 px-2 pb-5 mx-auto form_control_divs row">
        <div className="col-md-4 pt-3 pb-2">
          <Link to="/freelancer-dashboard">
            <img className="company_logo" src="images/logo-black.png" alt="" />
          </Link>
        </div>
        <div className="col-md-12 pt-5 pb-3">
          <h2 className="h2 titles__main-title">
            <strong>How You Run Your Business </strong>
          </h2>
        </div>
        <div className="col-md-6">
          <label>Why do you want to join the Freelancer Marketplace?*</label>
          <CustomTextfield
            name="joinFreelancer"
            onChange={formChangeHandler}
            multiline
            value={formData.joinFreelancer}
            rows="4"
            required
            error={runBusinessRequiredFields.joinFreelancer ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>What is your plan for the next 2 years?*</label>
          <CustomTextfield
            name="twoYearPlan"
            onChange={formChangeHandler}
            multiline
            value={formData.twoYearPlan}
            rows="4"
            required
            error={runBusinessRequiredFields.twoYearPlan ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>What did you like least about your recent projects?*</label>
          <CustomTextfield
            name="recentProject"
            onChange={formChangeHandler}
            multiline
            value={formData.recentProject}
            rows="4"
            required
            error={runBusinessRequiredFields.recentProject ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>An example of a time when you messed up with a client.*</label>
          <CustomTextfield
            name="messedWithClient"
            onChange={formChangeHandler}
            value={formData.messedWithClient}
            multiline
            rows="4"
            required
            error={runBusinessRequiredFields.messedWithClient ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>How do you manage communication with clients?*</label>
          <CustomTextfield
            name="communication"
            onChange={formChangeHandler}
            value={formData.communication}
            multiline
            rows="4"
            required
            error={runBusinessRequiredFields.communication ? true : false}
          />
        </div>
        <div className="col-md-6">
          <label>What makes you standout from other freelancers?*</label>
          <CustomTextfield
            name="standOut"
            onChange={formChangeHandler}
            multiline
            rows="4"
            value={formData.standOut}
            required
            error={runBusinessRequiredFields.standOut ? true : false}
          />
        </div>
      </div>
    )
  }

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    })
  }

  const handleClickShowConfirmPassword = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const aboutValidateForm = () => {
    const reqFields = {}
    const vcl = validateCountryLiving()
    const vcc = validateCountryCitizen()

    Object.keys(formData).forEach((key) => {
      const hasKey = aboutRequiredFields.hasOwnProperty([key])
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setAboutRequiredFields(reqFields)

    if (!isEmpty(reqFields) || !vcl || !vcc) {
      console.log("form ful of errors")
      return false
    }
    if (!formData.hear_about_us) {
      setis_hear_about_us("Required!")
      return false
    }
    setis_hear_about_us("")
    handleNext()
  }

  const contactValidateForm = () => {
    const reqFields = {}
    Object.keys(formData).forEach((key) => {
      const hasKey = contactRequiredFields.hasOwnProperty([key])
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setContactRequiredFields(reqFields)

    const ve = validateEmail()
    const vp = validatePassword()
    const vcp = validateConfirmPassword()

    const stsh = speed_test_image
    if (!stsh) {
      // alert("aagy mat jao");
      setDisplaySTFNErr("This is required")
    } else {
      setDisplaySTFNErr("")
    }

    if (!isEmpty(reqFields) || !ve || !vp || !vcp || !stsh) {
      console.log("form ful of errors")
      return false
    }
    handleNext()
  }

  const aboutBusinessValidateForm = () => {
    // const reqFields = {};
    // Object.keys(formData).forEach((key) => {
    //   const hasKey = contactRequiredFields.hasOwnProperty([key]);
    //   if (hasKey && !formData[key].trim().length) {
    //     reqFields[key] = "Required";
    //   }
    // });
    // setContactRequiredFields(reqFields);

    // const ve = validateEmail();
    // const vp = validatePassword();
    // const vcp = validateConfirmPassword();

    const already_member = formData.already_member
    // if (!stsh) {
    //   // alert("aagy mat jao");
    //   setDisplaySTFNErr("This is required");
    // } else {
    //   setDisplaySTFNErr("");
    // }

    if (!already_member) {
      setAlreadyMemberErr("Required!")
      return false
    }
    setAlreadyMemberErr("")
    handleNext()
  }

  const serviceValidateForm = () => {
    const reqFields = {}
    Object.keys(formData).forEach((key) => {
      const hasKey = serviceRequiredFields.hasOwnProperty([key])
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setServiceRequiredFields(reqFields)

    if (!isEmpty(reqFields)) {
      console.log("form ful of errors")
      return false
    }
    handleNext()
  }

  const runBusinessValidationForm = () => {
    const reqFields = {}
    Object.keys(formData).forEach((key) => {
      const hasKey = runBusinessRequiredFields.hasOwnProperty([key])
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setRunBusinessRequiredFields(reqFields)

    if (!isEmpty(reqFields)) {
      console.log("form ful of errors")
      return false
    }
    return true
    // handleNext();
  }

  const submitForm = (e) => {
    e.preventDefault()
    // console.log("one");
    if (!formSubmit) {
      return
    } else {
      setisSubmitting(true)
    }

    const formtag = document.querySelector("form")
    const form_data = new FormData(formtag)

    Object.keys(formData).forEach((key) => {
      return form_data.append(key, formData[key])
    })

    if (resume_files) {
      for (let index = 0; index < resume_files.length; index++) {
        const element = resume_files[index]
        console.log("running resume_files", element)
        form_data.append("resume_files", element, element.name)
      }
    }

    if (other_files) {
      for (let index = 0; index < other_files.length; index++) {
        const element = other_files[index]
        console.log("running portfolio_files", element)
        form_data.append("portfolio_files", element, element.name)
      }
    }

    if (speed_test_image) {
      form_data.append(
        "speed_test_screenshot",
        speed_test_image,
        speed_test_image.name
      )
    }

    axios
      .post("user/register", form_data, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          const progress = Math.round((loaded / total) * 100)
          console.log("Uploaded Progress", progress)
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("response back", res)
        const { data } = res
        const flashData = { type: "success", text: data.message }
        setisSubmitting(false)
        if (data.status !== 200) {
          flashData.type = "error"
          // props.addFlashMessage({ type: "error", text: data.message });
        } else {
          // props.addFlashMessage({ type: "success", text: data.message });
          // console.log("success:", data.message);
        }
        if (flashData.type !== "error") {
          setActiveStep(5)
          setFormData(blankData)
          setSpeedTestScreenshot(null)
          setOtherFiles(null)
          setResumeFile(null)
          setDisplaySTFN("")
          setDisplayOFN("")
          setDisplayCVFN("")
        }
        props.addFlashMessage(flashData)
      })
      .catch((e) => {
        // setSubmitBtnTxt("Submit Application");
        setisSubmitting(false)
        console.log("e: =>" + e)
      })
  }

  const DoneView = () => {
    return (
      <div className="w-100 px-2 p-4 mx-auto form_control_divs row">
        <div className="col-md-4 pt-3 pb-2">
          <Link to="/freelancer-dashboard">
            <img className="company_logo" src="images/logo-black.png" alt="" />
          </Link>
        </div>
        <div className="col-md-12 pt-5 pb-3">
          <h1 className="h1 titles__main-title">
            <strong>Your application has been successfully submitted</strong>
          </h1>
        </div>
        <div className="col-md-12">
          <p>
            Thank you again for your interest in Operations19. Our intake
            department will review your application. We will let you know if you
            have been accepted or declined within five business days.
          </p>
          <p className="mt-3 mb-3">Thank You,</p>
          <p>Operations19</p>
          <Link to="login" className="fm_custom_btn mt-1">
            {" "}
            Done{" "}
          </Link>
        </div>
      </div>
    )
  }

  const justifyContent = { textAlign: "justify" }

  return (
    <div className=" apply_freelancer_steps">
      <div className="post-project  container m-0  ">
        {isShowGetstarted === true ? (
          <GetStarted />
        ) : (
          <>
            <div className="row">
              <div className="   pl-0 vertical-menu  col-lg-4 col-md-4 col-xl-4  bg_darkblue ">
                <Stepper
                  activeStep={activeStep}
                  alternativeLabel
                  orientation={"vertical"}
                  className="bg_darkblue steper_alignment"
                >
                  {steps.map((label, i) => {
                    if (label === "Done") {
                      return (
                        <Step
                          key={label}
                          style={{ cursor: "pointer", display: "none" }}
                        >
                          <StepLabel
                            style={{ cursor: "pointer", display: "none" }}
                            onClick={() => {
                              setActiveStep(i)
                            }}
                          >
                            {label}
                          </StepLabel>
                        </Step>
                      )
                    }
                    return (
                      <Step key={label} style={{ cursor: "pointer" }}>
                        <StepLabel
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setActiveStep(i)
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    )
                  })}
                </Stepper>
              </div>
              <div className="main-content  col-lg-8 col-md-8 col-xl-8 px-0 px-md-2 form_fields">
                <form encType="multipart/form-data" onSubmit={submitForm}>
                  <div>
                    {activeStep === steps.length ? (
                      <div>Finish</div>
                    ) : (
                      <div>
                        {getStepContent(activeStep)}
                        {activeStep === 5 ? null : (
                          <div className="row px-4">
                            <div className="col-md-12">
                              <div className="clearfix">
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                  variant="contained"
                                  className="float-left custom_default_btn"
                                  type="button"
                                >
                                  Back
                                </Button>
                                {activeStep === steps.length - 2 ? (
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    // onClick={submitForm}
                                    className="float-right custom_primary_btn"
                                    type="submit"
                                    onClick={(e) => {
                                      const validates = runBusinessValidationForm()
                                      console.log(
                                        "two",
                                        runBusinessRequiredFields
                                      )
                                      if (!validates) {
                                        e.preventDefault()
                                        setFormSubmit(false)
                                        return
                                      } else {
                                        console.log("validates", validates)
                                        setFormSubmit(true)
                                      }
                                    }}
                                    disabled={isSubmitting}
                                  >
                                    {/* {submitBtnTxt} */}
                                    {isSubmitting
                                      ? "Please Wait..."
                                      : "Submit Application"}
                                  </Button>
                                ) : (
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={stepperValidation}
                                    className="float-right custom_primary_btn"
                                  >
                                    Next
                                  </Button>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="float-right mt-3">
                                <p>* Required fields</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(BodyPostJobOffline)
)
