import React, { useState, useEffect } from "react"
import { Card, CardHeader, CardBody, Alert } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import { Grid, Typography } from "@material-ui/core"
import { Visibility } from "@material-ui/icons"
import { connect } from "react-redux"

import axios from "../../../config/axios"
import {
  Textfield,
  SelectMenu,
  RadioButton,
  CheckBox,
  PasswordField,
} from "../../shared/formComponents"
import { validate, validateUrl } from "../../../utils"
import GridComp from "./GridComp"
import { getCountries } from "../../shared/countries"
// import FlashMessage from "../../shared/FlashMessagesList";
import { addFlashMessage } from "../../../Redux/actions/flashMessages"

const justifyContent = { textAlign: "justify" }

const options = [
  { label: "Social Media", value: "Social Media" },
  { label: "Advertisement", value: "Advertisement" },
  { label: "other", value: "other" },
]

export const BodyClientSignUp = (props) => {
  // const classes = useStyles();

  // const [formData, setFormData] = useState({
  //   email: "umarr@argonteq.com",
  //   password: "Password@1",
  //   showPassword: false,
  //   confirmPassword: "Password@1",
  //   showConfirmPassword: false,
  //   full_name: "umar",
  //   skype_id: "example",
  //   company_name: "argon",
  //   company_website: "example",
  //   country_id: 2,
  //   phone_number: "03224737870",
  //   hear_about_us: "Social Media",
  //   receive_weekly_updates: 0,
  //   document_signed: 1,
  //   type: 2,
  // });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
    full_name: "",
    skype_id: "",
    company_name: "",
    company_website: "",
    country_id: "",
    phone_number: "",
    hear_about_us: "",
    receive_weekly_updates: false,
    document_signed: false,
    type: 2,
  })

  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErr, setFormErr] = useState("")
  const [visible, setVisible] = useState(false)
  const [submitBtnTxt, setSubmitBtnTxt] = useState("SignUp")

  const onDismiss = () => {
    setVisible(false)
    setFormErr("")
  }

  const [emailErr, setEmailErr] = useState("")
  const [pwdErr, setPwdErr] = useState("")
  const [pwdMatchErr, setPwdMatchErr] = useState("")
  const [nameErr, setNameErr] = useState("")
  const [skypeErr, setSkypeErr] = useState("")
  const [countryErr, setCountryErr] = useState("")
  const [phoneErr, setPhoneErr] = useState("")
  const [hauErr, setHAUErr] = useState("") // hear about us error
  const [companyNameErr, setCompanyNameErr] = useState("")
  const [urlErr, setURLErr] = useState("")
  const [termCoditionErr, setTermConditionErr] = useState("")
  const [shouldValidate] = useState(true)
  const [screen, setScreen] = useState(1)
  const [countries, setCountries] = useState([])

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

  const validateForm = (e) => {
    // props.addFlashMessage({
    //   type: "info",
    //   text: "testing",
    // });
    // return;
    if (shouldValidate) {
      const validEmail = validateEmail()
      const validPwd = validatePassword()
      const validCPwd = validateConfirmPassword()
      const validName = validateName()
      const validSkype = validateSkype()
      const validCountry = validateCountry()
      const validPhone = validatePhoneNumber()
      const validCompany = validateCompanyName()
      const validTermCondition = validateTermCondition()
      const validHearAbtUs = validateHearAbtUs()

      if (
        !validEmail ||
        !validPwd ||
        !validCPwd ||
        !validName ||
        !validSkype ||
        !validCountry ||
        !validPhone ||
        !validCompany ||
        !validTermCondition ||
        !validHearAbtUs
      ) {
        // console.log("form is not valid");
        props.addFlashMessage({
          type: "error",
          text: "Invalid form, please fill all required fields.",
        })
        return false
      }
    }

    setScreen(2)
    window.scrollTo(0, 0)
  }

  const editForm = () => {
    setScreen(1)
  }

  const submitForm = async () => {
    setSubmitBtnTxt("Please Wait...", formData)
    try {
      const clientReq = await axios.post("user/register", formData)
      console.log("clientReq", clientReq)
      const { data } = clientReq
      if (data && data.status !== 200) {
        props.addFlashMessage({ type: "error", text: data.message })
      } else {
        props.addFlashMessage({ type: "success", text: data.message })
        props.history.push("/")
      }
    } catch (err) {
      console.log("error occured: " + err, err)
      // console.log("errs:", err.response ? err.response.data : err);
      setScreen(1)
      if (err.response && err.response.data) {
        setEmailErr(err.response.data.message)
      } else {
        setVisible(true)
        setFormErr("error occured")
      }
    }
    setSubmitBtnTxt("Submit")
  }

  const formChangeHandler = (e) => {
    const value =
      e.target.name === "email" ||
      e.target.name === "password" ||
      e.target.name === "confirmPassword"
        ? e.target.value.trim()
        : e.target.value

    setFormData({ ...formData, [e.target.name]: value })
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

  const checkedBoxHandleChange = (name) => (event) => {
    let checked = 0
    if (event.target.checked) checked = 1

    setFormData({ ...formData, [name]: checked })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const validateEmail = () => {
    if (!validate("email", formData.email)) {
      setEmailErr("Email is not valid")
      return false
    }

    setEmailErr("")
    return true
  }

  const validateName = () => {
    const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
      formData.full_name.trim()
    )
    if (formData.full_name.trim() && !isValid) {
      setNameErr("Name should not contain any digit or special characters")
      return false
    } else if (!formData.full_name.length) {
      setNameErr("Please Enter Name")
      return false
    }

    setNameErr("")
    setFormData({ ...formData, full_name: formData.full_name.trim() })
    return true
  }

  const validateSkype = () => {
    if (!formData.skype_id.trim().length) {
      setSkypeErr("Skype ID is required")
      return false
    }

    setSkypeErr("")
    return true
  }

  const validateHearAbtUs = () => {
    const { hear_about_us } = formData
    let valid = false
    options.forEach((opt) => {
      if (opt.value === hear_about_us) {
        valid = true
        return
      }
    })

    if (!valid) {
      setHAUErr("Please select one of the option.")
      return false
    }

    setHAUErr("")
    return true
  }

  const validateCountry = () => {
    if (!formData.country_id) {
      setCountryErr("Country is required")
      return false
    }

    setCountryErr("")
    return true
  }
  const validatePhoneNumber = () => {
    const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}\s?[-./0-9]*$/i
    const isValid = regex.test(formData.phone_number.trim())

    if (!isValid) {
      setPhoneErr("Invalid Phone Number")
      return false
    }
    setPhoneErr("")
    return true
  }

  const validateCompanyName = () => {
    if (!formData.company_name) {
      setCompanyNameErr("Please enter your company name")
      return false
    }

    setCompanyNameErr("")
    return true
  }

  const validateCompanyWebsite = () => {
    if (!validateUrl(formData.company_website)) {
      setURLErr("Invalid content, company website should be a valid URL.")
      return false
    }
    setURLErr("")
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
    const compared = formData.password.localeCompare(formData.confirmPassword)
    if (compared) {
      setPwdMatchErr("Password did not match")
      return false
    } else if (!formData.confirmPassword.length) {
      setPwdMatchErr("Please Enter Confirm Password")
      return false
    }
    setPwdMatchErr("")
    return true
  }

  const validateTermCondition = () => {
    if (!formData.document_signed) {
      setTermConditionErr("Please check the Term of Use")
      return false
    }

    setTermConditionErr("")
    return true
  }

  const RenderCard = (props) => {
    return (
      <div className={` mt-5 pt-5`}>
        <div className="row mx-0">
          <div className="w-100 offset-md-1 offset-lg-2 col-xl-8 col-md-8  pb-5">
            <Card className=" pb-5">
              <CardHeader>
                <h3>Get a Free Account & Start Hiring</h3>
              </CardHeader>
              <CardBody>
                <div className="pb-5 text-center">
                  <h2 style={{ color: "rgba(0, 181, 188, 0.9)" }}>
                    Client SignUp
                  </h2>
                </div>

                <Grid item container direction="column" xs={12}>
                  <Typography variant="h6" gutterBottom>
                    <div className="float-left">Client Details</div>
                    <button
                      className="btn btn-primary float-right"
                      onClick={editForm}
                    >
                      Edit
                    </button>
                  </Typography>
                  <Grid container>
                    <GridComp label="Email">
                      <code>{formData.email}</code>
                    </GridComp>
                    <GridComp label="Password">
                      {formData.password}
                      <Visibility />
                    </GridComp>
                    <GridComp label="Name" value={formData.full_name} />
                    <GridComp
                      label="Skype Id"
                      value={formData.skype_id || " "}
                    />
                    <GridComp
                      label="Company Name"
                      value={formData.company_name}
                    />
                    <GridComp
                      label="Company Website"
                      value={formData.company_website || " "}
                    />
                    <GridComp
                      label="Country"
                      value={formData.country_id || " "}
                    />
                    <GridComp
                      label="Phone Number"
                      value={formData.phone_number}
                    />
                    <GridComp
                      label="How Did You Hear About Freelancer"
                      value={formData.hear_about_us}
                    />
                    <GridComp
                      label="Receive promotions"
                      value={formData.receive_weekly_updates ? "Yes" : "No"}
                    />
                  </Grid>
                </Grid>
              </CardBody>

              <div className="post-job-btn w-100 text-center m-0">
                <button className=" button-ymp " onClick={submitForm}>
                  {submitBtnTxt}
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const FormComponent = (props) => {
    return (
      <div className="container p-0 m-0">
        <div className="row mx-0 px-3">
          <div className="w-100 col-md-8 col-xl-8 p-5 pb-5 main-content-left ">
            <div className="row">
              <div className="col-md-4 mb 5 pt-3  pb-5">
                <Link to="/freelancer-dashboard">
                  <img
                    className="company_logo"
                    src="images/logo-black.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <h1 className="h1 m-0">
              <strong> Join Operations19 </strong>
            </h1>
            <div className="pb-5 text-center">
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
                {formErr}
              </Alert>
            </div>
            <div className=" form_control_divs row">
              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <Textfield
                  required
                  value={formData.full_name}
                  name="full_name"
                  label="Full Name"
                  onChange={formChangeHandler}
                  onBlur={validateName}
                  error={nameErr ? true : false}
                  helperText={nameErr}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6">
                <Textfield
                  required
                  value={formData.email}
                  error={emailErr ? true : false}
                  helperText={emailErr}
                  name="email"
                  onChange={formChangeHandler}
                  onBlur={validateEmail}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <PasswordField
                  show={formData.showPassword}
                  value={formData.password}
                  onChange={formChangeHandler}
                  label="Password"
                  name="password"
                  handleClickShowPassword={handleClickShowPassword}
                  handleMouseDownPassword={handleMouseDownPassword}
                  onBlur={validatePassword}
                  labelWidth={80}
                  error={pwdErr ? true : false}
                  helperText={pwdErr}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <PasswordField
                  show={formData.showConfirmPassword}
                  value={formData.confirmPassword}
                  onChange={formChangeHandler}
                  label="Confirm Password"
                  name="confirmPassword"
                  handleClickShowPassword={handleClickShowConfirmPassword}
                  handleMouseDownPassword={handleMouseDownPassword}
                  labelWidth={140}
                  onBlur={validateConfirmPassword}
                  error={pwdMatchErr ? true : false}
                  helperText={pwdMatchErr}
                />
              </div>

              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <Textfield
                  required
                  name="skype_id"
                  label="Skype Id"
                  value={formData.skype_id}
                  onChange={formChangeHandler}
                  onBlur={validateSkype}
                  error={skypeErr ? true : false}
                  helperText={skypeErr}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <Textfield
                  required
                  name="company_name"
                  label="Company Name"
                  onChange={formChangeHandler}
                  onBlur={validateCompanyName}
                  error={companyNameErr ? true : false}
                  helperText={companyNameErr}
                  value={formData.company_name}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <Textfield
                  name="company_website"
                  label="Company Website"
                  onChange={formChangeHandler}
                  value={formData.company_website}
                  onBlur={validateCompanyWebsite}
                  error={urlErr ? true : false}
                  helperText={urlErr}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <SelectMenu
                  required
                  name="country_id"
                  value={formData.country_id}
                  onChange={formChangeHandler}
                  onBlur={validateCountry}
                  label="Country"
                  error={countryErr}
                  labelWidth={60}
                  options={countries}
                  cr={true}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 ">
                <Textfield
                  required
                  name="phone_number"
                  label="Phone Number"
                  onChange={formChangeHandler}
                  onBlur={validatePhoneNumber}
                  error={phoneErr ? true : false}
                  helperText={phoneErr}
                  value={formData.phone_number}
                />
              </div>
              <div className="client_sign_up_radio  col-xl-12 col-lg-12 ">
                <RadioButton
                  options={options}
                  onChange={formChangeHandler}
                  name="hear_about_us"
                  label="How Did You Hear About Freelancer?"
                  value={formData.hear_about_us}
                />
                {hauErr && <p style={{ color: "red" }}>{hauErr}</p>}
              </div>
              <div className=" client_sign_up_page  col-xl-12 col-lg-12 ">
                <CheckBox
                  className="mb-0"
                  label="Receive weekly updates, promotions, and discounts"
                  onChange={checkedBoxHandleChange("receive_weekly_updates")}
                  value="discount"
                  checked={Boolean(formData.receive_weekly_updates)}
                />
                <CheckBox
                  label={
                    <p className="mb-0">
                      I agree to the{" "}
                      <Link to="#">Freelancer Terms of Use </Link>
                    </p>
                  }
                  onChange={checkedBoxHandleChange("document_signed")}
                  checked={Boolean(formData.document_signed)}
                  value="termCondition"
                  error={!formData.document_signed}
                  helperText={!formData.document_signed ? termCoditionErr : ""}
                />
              </div>
            </div>
            <div className="  ">
              <div className="post-job-btn w-100 text-center m-0 p-0">
                <button
                  className=" button-ymp  btn-block "
                  onClick={validateForm}
                >
                  {submitBtnTxt}
                </button>
              </div>
            </div>

            <div className="mt-4 mx-4">
              <p className="d-block">
                Already have an account?<Link to="/login"> Log In</Link>
              </p>

              <p className="d-block">
                Are you looking to offer your services on Freelancer?
                <Link to="/freelance-signup"> Apply as a freeelancer</Link>
              </p>
            </div>
          </div>
          <div className="w-100 col-xl-4 col-md-4 p-0 pb-5 client-right-sidebar">
            <div className="w-100 p-5 bg-primary text-white">
              <h3 className="h4 m-0">
                Book Services From The World’s Top-Rated Professionals
              </h3>
              <p style={justifyContent} className="pt-3 pb-2">
                Operations19 is a best-in-class “service for hire” platform that
                connects businesses with digital services from today’s
                industry-leading experts. Book one-time or repetitive tasks from
                proven top-rated professionals.
              </p>
            </div>
            <div className="w-100 bg-grey p-5">
              <p>
                <strong>Brands We Work With</strong>
              </p>
              <div class="client_signup_brands">
                <div className="">
                  <img src="images/company_logos/disney.png" alt="" />
                </div>
                <div className="">
                  <img src="images/company_logos/marvel.png" alt="" />
                </div>
                <div className="">
                  <img src="images/company_logos/NBC.png" alt="" />
                </div>
                <div className="">
                  <img src="images/company_logos/hallmark.png" alt="" />
                </div>
                <div className="">
                  <img src="images/company_logos/NBA.png" alt="" />
                </div>

                <div className="">
                  <img src="images/company_logos/steve-madden.png" alt="" />
                </div>
                <div className="">
                  <img src="images/company_logos/reebok.png" alt="" />
                </div>
                <div className="">
                  <img src="images/company_logos/NFL.png" alt="" />
                </div>
              </div>
              <p>300+ Brand Partners </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // return (
  //   <React.Fragment>
  //     {screen === 1 ? FormComponent() : RenderCard()}
  //     <FlashMessage />
  //   </React.Fragment>
  // );

  return screen === 1 ? FormComponent() : RenderCard()
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(BodyClientSignUp)
)
