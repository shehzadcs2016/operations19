import React, { useState, useEffect } from "react"
import AvailableProjectsLoader from "../loaders"
import { Button } from "@material-ui/core"

import UploadFileButton from "../../../shared/uploadFile"
import DefaultProfile from "../../images/avatar.png"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  CircularProgress,

  // Button,
  Avatar,
} from "@material-ui/core"
import "../App.css"
import CloseIcon from '@material-ui/icons/Close';

import {
  RadioButton,
  UploadFiles,
  PasswordField,
  CustomSelect,
  CustomTextfield,
} from "../../../shared/formComponents"
import { addFlashMessage } from "../../../../Redux/actions/flashMessages"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import axios from "../../../../config/axios"
import { store } from "../../../../Redux/store"
import { BASE_URL_API } from "../../../../config/constants"
import { MemoLanguage } from "../../service-menu/components/AddLanguage"
 function Personal(props) {
  const {
    responseData,
    formData,
    handleChange,
    DropDownMenu,
    validateFN,setAboutRequiredFields,
    descErr,languageValue,setLanguageValue,
    langaugesErr,handleDeleteLanguagesData,
    aboutRequiredFields,validateLN,validatedescription,setProficiencyErr,isEmpty,setIsbuttonLoading,
    formChangeHandler,
    validateCountryLiving,setprofileErr,
    countries,ProficiencyErr,handleLanguageAdd,languagesData,
    ServiceButton,setDisplaySTFN,proficiencyValue,setProficiencyValue,
    livingCountryErr,displaySTFNErr,setProfileImage,
    languages_options,setDisplaySTFNErr,
    proficiency_level_options,profileImage,
    setFormData,setProfilePreview,profilePreview,profileErr,setLanguagesErr,isbuttonLoading
  } = props && props
  const [templanguageData,settemplanguageData]=useState([])
  useEffect(() => {
    // if (responseData && responseData) {
    //   setEditData(responseData.user_languages)
    // }
    
    if (responseData.user_profile && responseData.user_profile) {
      setFormData({
        first_name: responseData.user_profile.first_name,
        last_name: responseData.user_profile.last_name,
        description: responseData.user_profile.description,
        country_id: responseData.user_profile.country_id,
      })
    }
    if(responseData.user_languages && responseData.user_languages){
      settemplanguageData(responseData.user_languages)
    }
  }, [props.responseData])

console.log(languagesData,"languagesData fofoof")
// console.log(languages_options,"languages_options fofoof")

const handleDeleteLanguages=(id)=>{
  const headers = {
    headers: {
      Authorization: `Bearer ${store.getState().login.token}`,
   
    },
  }
  setIsbuttonLoading(true)

  try {
    axios
      .get(
        `freelancer/delete-user-language/${id}`,
        headers
      )
      .then((res) => {
        console.log(res, "response")
        if (res.status === 200) {
  setIsbuttonLoading(false)
      window.location.reload(true);

          const flashData = { type: "success", text: "User Language deleted  successfully." }
          props.addFlashMessage(flashData)
        }
      })
      .catch((err) => {
  setIsbuttonLoading(false)
      
      console.log(" error =>", err)
    }
      )
  } catch (error) {
  setIsbuttonLoading(false)

    const flashData = { type: "error", text: "User Language not deleted  successfully." }
    props.addFlashMessage(flashData)

    console.log("error catch", error)
  }
}

const personalinfovalidate = () => {
  const reqFields = {}
  const vcl = validateCountryLiving()
  const vld = validatedescription()
  let vlg = false
  let vlp = false;
  if (languagesData.length > 0) {
    vlg = true
    vlp = true
    setLanguagesErr("")
    setProficiencyErr("")
  } else {
    setLanguagesErr("Required")
    setProficiencyErr("Required")
    vlg = false
    vlp = false
  }
  let vFirstName = true
  let vLastName = true
  if (!formData["first_name"]) {
    vFirstName = false
  }
  if (!formData["last_name"]) {
    vLastName = false
  }
  console.log("data", formData)
  Object.keys(formData).forEach((key) => {
    const hasKey = aboutRequiredFields.hasOwnProperty([key])
    if (key === "first_name" || "last_name") {
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    }
  })
  if (!profileImage) {
    setprofileErr("Required")
  } else {
    setprofileErr("")
  }
  setAboutRequiredFields(reqFields)

  if (!vFirstName || !vLastName || !vcl || !vlg || !vlp || !vld || !profileImage) {
    console.log("form ful of errors", !isEmpty(reqFields), vcl, vlg, vlp, vld)
    const flashData = { type: "error", text: "Fill the required fields." }
    props.addFlashMessage(flashData)
    return false
  }
  setIsbuttonLoading(true)
  const form_data = new FormData()
  form_data.append("first_name", formData.first_name)
  form_data.append("last_name", formData.last_name)
  form_data.append("country_id", formData.country_id)
  form_data.append("description", formData.description)
  form_data.append("freelancer_profile_image", profileImage)

  for (let index = 0; index < languagesData.length; index++) {
    const element = languagesData[index]
    form_data.append("user_languages[]", JSON.stringify(element))
  }

  const headers = {
    headers: {
      Authorization: `Bearer ${store.getState().login.token}`,
      "Content-Type": "multipart/form-data",
    },
  }

  try {
    axios
      .post(
        "freelancer/update-personal-info",
        form_data,
        headers
      )
      .then((res) => {
        // setskillData(res.data.data)
        // setshowskill(true)
        setIsbuttonLoading(false)
        console.log(res, "response")
        if (res.status === 200) {
      window.location.reload(true);

          const flashData = { type: "success", text: "Personal Info added successfully." }
          props.addFlashMessage(flashData)
        }
      })
      .catch((err) => console.log(" error =>", err))
  } catch (error) {
  setIsbuttonLoading(false)

    console.log("error catch", error)
  }
}

  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto account_setting_body_color p-3">
    <div className="w-100  pb-5 mx-auto form_control_divs row 2nd_row_murchant_labels">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  ">
        <div className="w-100 pt-3  pb-3">
          <h2 className="h2 titles__main-title">
            <strong>Personal Information</strong>
          </h2> 
          <div className="w-70 clearfix pb-3 personelinfo_1">
            <p>
              Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.
            </p>
          </div>
        </div>
      </div>
      
      <div className="col-xl-12 col-lg-12 col-md-8 col-sm-12 pb-3 mb-4">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 ">
            {responseData.user_profile && responseData.user_profile.user_profile_image ?
            <Avatar
              alt="Profile"
              src={responseData.user_profile.user_profile_image ?
                `http://3.211.37.133/${responseData.user_profile.user_profile_image}`: profilePreview}
              style={{
                width: "180px",
                height: "180px",
              }}
              className="mx-auto mx-0"
            />:
            <Avatar
            alt="Profile"
            src={profilePreview}
            style={{
              width: "180px",
              height: "180px",
            }}
            className="mx-auto mx-0"
          /> 
            }
            {!profileImage
              ? <p style={{ color: "red !important" }} className="small text-danger">{profileErr}</p>
              : null}
              
          </div>
          <div className="col-lg-6 col-md-8 p-3  ">
            <h5 className="profile_heading_1">Profile Picture*</h5>
            <p className="profile_desciption">
              Add a profile picture of yourself so customers will know exactly
              who they will be working with.
            </p>
            <div className="row custom-file profile_ifo_uplaod_btn">
              {displaySTFNErr ? (
                <span className="text-danger">{displaySTFNErr}</span>
              ) : (
                  ""
                )}

              <UploadFileButton
                name="profileImage"
                onChange={(e) => {
                  
                  const file = e.target.files[0]
                  const type = e.target.files[0].type
                  console.log(e.target.files, "file")
                  if (
                    type === "image/jpeg" ||
                    type === "image/jpg" ||
                    type === "image/png"
                  ) {
                    setDisplaySTFNErr("")
                    setProfileImage(file)
                    setProfilePreview(URL.createObjectURL(file))
                    if (file) setDisplaySTFN(file.name)
                  } else {
                    setDisplaySTFNErr("upload images only")
                  }
                }}
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="col-md-6">
        <label>First Name*</label>
        <CustomTextfield
          required
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
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
          onChange={handleChange}
          onBlur={validateLN}
          error={aboutRequiredFields.last_name ? true : false}
          helperText={aboutRequiredFields.last_name}
        />
      </div>

      <div className="col-md-12">
        <label>Country *</label>
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

      <div className="col-md-12 text_area_back_color">
        <label><h5>Description*</h5></label>
        <CustomTextfield
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-100"
          rows="4"
          multiline
          onBlur={validatedescription}
          error={descErr ? true : false}
          helperText={descErr}
        />
      </div>

      <div className="col-md-5">
        <label>Languages*</label>
        <CustomSelect
          required
          name="language_id"
          value={languageValue}
          onChange={(e) => setLanguageValue(e.target.value)}
          // onBlur={validaterLanguages}
          error={langaugesErr}
          options={languages_options}
          cr={true}
        />
      </div>
      <div className="col-md-5">
        <label>Level of Proficiency *</label>
        <DropDownMenu
          required
          name="proficiency_level"
          value={proficiencyValue}
          onChange={(e) => setProficiencyValue(e.target.value)}
          // onBlur={validaterProficiency}
          error={ProficiencyErr}
          options={proficiency_level_options}
        />
      </div>
      <div className="col-md-2 profile_info_add_btn text-right">
        <ServiceButton value={"Add"} onClick={handleLanguageAdd} />
      </div>
      <div className="col-md-12">
        <div className="col-md-10 pr-0 li_marker">
          <ul>
            {languagesData.map((data, index) => {
              return (
                <li key={"language-" + index}>
                  <strong>
                    {languages_options.map(data2 => {
                      if (data2.id === data.language_id) {
                        return data2.name
                      }
                    })}
                  </strong>  -
                  {proficiency_level_options.map(data2 => {
                    if (data2.value === data.proficiency_id)
                      return (" " + data2.label)
                  })}
                    <CloseIcon className="pull-right text-muted cursor-pointer" onClick={() => handleDeleteLanguagesData(data.language_id)} />
                  </li>
              )
            })}
          </ul>
          <ul>
            {templanguageData ? templanguageData.map((data, index) => {
              return (
                <li key={"language-" + index}>
                  <strong>
                  {data.language.language}
                  </strong>  -
                  {data.proficiency_level}
                    <CloseIcon className="pull-right text-muted cursor-pointer" onClick={() => handleDeleteLanguages(data.id)} />
                  </li>
              )
            })
          :""
          }
          </ul>
        </div>
      </div>
      <div className="col-md-12 text-right">
        {isbuttonLoading===true?
            <ServiceButton value={"Loading....."}  />
        :
            <ServiceButton value={"Update"} onClick={personalinfovalidate} />
        }
          </div>
    </div>
    </div></div></div>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(Personal)
)

