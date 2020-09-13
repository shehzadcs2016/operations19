import React from "react"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"
import { withRouter } from "react-router-dom"
import { Card, CardHeader, CardBody } from "reactstrap"

import axios from "../../../../config/axios"
import { store } from "../../../../Redux/store"
import { getCountries } from "../../../shared/countries"
import { Textfield } from "../../../shared/formComponents"
import { SelectMenu } from "./SelectMenu"
import addFlashMessage from "../../../../Redux/actions/flashMessages"
import { buttonStyle } from "../../../../utils"

class ProfileBody extends React.Component {
  state = {
    formData: {
      first_name: "",
      last_name: "",
      full_name: "",
      country_id: "",
      phone_number: "",
      skype_id: "",
      business_type: "",
      payment_provider: "",
      user_skills: "",
      services_to_other_sites: "",
      company_name: "",
      company_website: "",
      user_id: "",
    },
    formErrors: {
      emailErr: "",
      nameErr: "",
      phoneErr: "",
      companyNameErr: "",
    },
    countries: [],
  }

  formChangeHandler = (e) => {
    const value = e.target.value
    const { formData } = this.state

    this.setState({ formData: { ...formData, [e.target.name]: value } })
  }

  validateForm = async (e) => {
    const { formData } = this.state
    console.log("formData", formData)
    try {
      const url = `client/profile/${formData.user_id}`
      const updates = await axios.patch(url, formData, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      console.log("updates", updates.data)

      const msg = { type: "success", text: updates.data.message }
      if (updates.data.status !== 200) {
        msg.type = "error"
      }
      this.props.addFlashMessage(msg)

      if (updates.data.status === 200) {
        this.props.history.push("/clients-manageSetting")
      }
    } catch (err) {
      console.log("error aa gia", err)
    }
    // props.addFlashMessage({
    //   type: "info",
    //   text: "testing",
    // });
    // return;
    // if (shouldValidate) {
    //   const validEmail = validateEmail();
    //   const validPwd = validatePassword();
    //   const validCPwd = validateConfirmPassword();
    //   const validName = validateName();
    //   const validPhone = validatePhoneNumber();
    //   const validCompany = validateCompanyName();
    //   const validTermCondition = validateTermCondition();
    //   if (
    //     !validEmail ||
    //     !validPwd ||
    //     !validCPwd ||
    //     !validName ||
    //     !validPhone ||
    //     !validCompany ||
    //     !validTermCondition
    //   ) {
    //     // console.log("form is not valid");
    //     props.addFlashMessage({ type: "error", text: "Invalid Form" });
    //     return false;
    //   }
    // }
    // setScreen(2);
    // window.scrollTo(0, 0);
  }

  async componentDidMount() {
    try {
      const countries = await getCountries()
      const id = store.getState().login.id
      // console.log(countries, "countries")
      this.setState({ countries })
      const user = await axios.get("client/profile/" + id, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      const { data } = user.data
      const formData = {
        first_name: data.first_name || "",
        last_name: data.last_name || "",
        full_name: data.full_name || "",
        country_id: data.country_id || "",
        phone_number: data.phone_number || "",
        skype_id: data.skype_id || "",
        business_type: data.business_type || "",
        payment_provider: data.payment_provider || "",
        user_skills: data.user_skills || "",
        services_to_other_sites: data.services_to_other_sites || "",
        user_id: data.user_id || "",
        company_name: data.company_name || "",
        company_website: data.company_website || "",
      }

      this.setState({ formData })
      console.log("dummy")
      console.log("user.data", user.data)
      // .then((res) => {
      //   console.log("res.data", res.data.data);
      //   setClientData(res.data.data);
      // })
      // .catch((err) => {
      //   console.log("get error", err);
      // });
    } catch (err) {
      console.log(err, "error")
    }
  }

  render() {
    const { formData, formErrors, countries } = this.state

    return (
      <div className="mt-5 pt-5">
        <div className="row mx-0 px-3">
          <div className="w-100  offset-xl-2 col-xl-8  pb-5">
            <Card className=" pb-5">
              <CardHeader>
                <h3 className="h4">Update Details</h3>
              </CardHeader>
              <CardBody>
                {/* <div className="row">
                  <div className="col-md-6">
                    <Textfield
                      required
                      value={formData.first_name || ""}
                      name="first_name"
                      label="First Name"
                      onChange={this.formChangeHandler}
                      //   onBlur={validateName}
                      error={formErrors.nameErr ? true : false}
                      helperText={formErrors.nameErr}
                    />
                  </div>
                  <div className="col-md-6">
                    <Textfield
                      required
                      value={formData.last_name || ""}
                      name="last_name"
                      label="Last Name"
                      onChange={this.formChangeHandler}
                      //   onBlur={validateName}
                      error={formErrors.nameErr ? true : false}
                      helperText={formErrors.nameErr}
                    />
                  </div>
                </div> */}

                <Textfield
                  required
                  value={formData.full_name || ""}
                  name="full_name"
                  label="Last Name"
                  onChange={this.formChangeHandler}
                  //   onBlur={validateName}
                  error={formErrors.nameErr ? true : false}
                  helperText={formErrors.nameErr}
                />

                <Textfield
                  name="skype_id"
                  label="Skype Id"
                  value={formData.skype_id || ""}
                  onChange={this.formChangeHandler}
                />

                <Textfield
                  required
                  name="company_name"
                  label="Company Name"
                  onChange={this.formChangeHandler}
                  //   onBlur={validateCompanyName}
                  error={formErrors.companyNameErr ? true : false}
                  helperText={formErrors.companyNameErr}
                  value={formData.company_name || ""}
                />

                <Textfield
                  name="company_website"
                  label="Company Website"
                  onChange={this.formChangeHandler}
                  value={formData.company_website || ""}
                />

                <SelectMenu
                  name="country_id"
                  value={formData.country_id || ""}
                  onChange={this.formChangeHandler}
                  label="Country"
                  labelWidth={60}
                  options={countries}
                  cr={true}
                />

                <Textfield
                  required
                  name="phone_number"
                  label="Phone Number"
                  onChange={this.formChangeHandler}
                  //   onBlur={validatePhoneNumber}
                  error={formErrors.phoneErr ? true : false}
                  helperText={formErrors.phoneErr}
                  value={formData.phone_number || ""}
                />
              </CardBody>

              <div className="post-job-btn w-100 text-center m-0">
                <Button
                  variant="contained"
                  style={buttonStyle}
                  className="ml-0 ml-lg-auto mr-0 mr-lg-3 mb-2"
                  onClick={this.validateForm}
                >
                  Update Profile
                </Button>
                <Button
                  variant="contained"
                  className="ml-0 ml-lg-auto mr-0 mr-lg-3 mb-2"
                  onClick={() => {
                    console.log("cancel clicked")
                    this.props.history.push("/clients-manageSetting")
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(ProfileBody)
)
