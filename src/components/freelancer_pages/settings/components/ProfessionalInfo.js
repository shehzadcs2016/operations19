import React, { useState, useEffect } from "react"
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
import {
  RadioButton,
  UploadFiles,
  PasswordField,
  CustomSelect,
  CustomTextfield,
} from "../../../shared/formComponents"
import { MemoCategory } from "../../service-menu/components/memoCategory"
import CloseIcon from '@material-ui/icons/Close';
import MemoEducation from '../../service-menu/components/memoEducation'
import AddCertificate from '../../service-menu/components/memoCertificate'
import { store } from "../../../../Redux/store"
import { addFlashMessage } from "../../../../Redux/actions/flashMessages"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import axios from "../../../../config/axios"
import AvailableProjectsLoader from "../loaders"

function Professional(props) {
  const {
    responseData,
    formData,
    setFormData,
    handleChange,
    validateFN,
    validateDesc,
    DropDownMenu,
    aboutRequiredFields,
    formChangeHandler,setCertificateData,
    validateCountryLiving,
    countries,
    ServiceButton,educationData,educationErr,setEducationErr,validateYearOfGraduation,
    handleDeleteCategoriesData,
    livingCountryErr,setdescribebusinessStage,
    SelectMenu,
    languages_options,setEducationData,
    proficiency_level_options,
    skillTitle,
    setSkillTitle,skillTitleErr,
    best_describe_options,
    stage_business_options,validateProfessionalWebsite,
    handleCategoryMenu,
    selectMenuHandler,setCompanySize,
    categories,isbuttonLoading,setIsbuttonLoading,
    expierence_level,
    sub_categories,setCertificateErr,certificateErr,certificateData,setCategoryErr,setSubCategoryErr,setExperienceLevelErr,
    title_options,
    yearGgraduationErr,setyearGgraduationErr,validateMajor,validateTitle,TitleErr,CountryCollegeErr,validateCountry,validateCollege,profRequiredFields,
    yearofgraduation_options,
    subCategoryErr,setExperienceLevel,experienceLevel,experienceLevelErr,skillsData,handleSkillDelete,handleAddSkill,
    CategoryErr,professionalWebsite,professionalWebsiteErr,handleProfessionalWebsite,
     companySize,validateSubCategory,setProfessionalWebsite,
    validateCategory,subCategoryValue,setSubCategoryValue,handleCategoryAdd,categoriesData,setSkillTitleErr,setoptionDescribe,
    optionDescribe, describebusinessStage,handleCompany,validateCompanySize,companySizeErr,setCategoryValue,categoryValue
  } = props && props
 
  useEffect(() => {
    if (responseData && responseData.user_profile) {
      
      let best_describe=Object.keys(responseData.user_profile.best_describes_u)[0];
      let stage_career=Object.keys(responseData.user_profile.stage_career)[0];

      setProfessionalWebsite(responseData.user_profile.company_website)
      setCompanySize(responseData.user_profile.company_size)
      setFormData({
        best_describes_u:`${best_describe}` ,
        stage_career: stage_career,
      })
     
    }
  }, [props.responseData,props.value])
console.log(formData.best_describes_u,"responseData.best_describes_u")
  const ProfessionalValidateForm = () => {
    let validateCat = true
    let validateSubCat = true
    if (categoriesData.length === 0) {
      setCategoryErr("Required")
      setSubCategoryErr("Required")
      validateCat = false
      validateSubCat = false
    } else {
      setCategoryErr("")
      setSubCategoryErr("")
      validateCat = true
      validateSubCat = true
    }

    let validateSkill = true
    let validateSkillLevel = true
    if (skillsData.length === 0) {
      setExperienceLevelErr("Required")
      setSkillTitleErr("Required")
      validateSkill = false
      validateSkillLevel = false
    } else {
      setExperienceLevelErr("")
      setSkillTitleErr("")
      validateSkill = true
      validateSkillLevel = true
    }

    let obj = {}
    let validateEducationData = false;
    if (educationData.length > 0) {
      Object.keys(educationErr).map((key) => obj[key] = ""
      );
      setEducationErr(obj)
      validateEducationData = true
    } else {
      Object.keys(educationErr).map((key) => obj[key] = "Required"
      );
      setEducationErr(obj)
      validateEducationData = false
    }

    let certObj = {}
    let validateCertificateData = false;
    if (certificateData.length > 0) {
      Object.keys(certificateErr).map((key) => certObj[key] = ""
      );
      setCertificateErr(certObj)
      validateCertificateData = true
    } else {
      Object.keys(certificateErr).map((key) => certObj[key] = "Required"
      );
      setCertificateErr(certObj)
      validateCertificateData = false
    }

    if (!companySize) {
      validateCompanySize()
    } else {
      validateCompanySize()
    }

    if (!formData.best_describes_u) {
      setoptionDescribe("Required")
    } else {
      setoptionDescribe("")
    }

    if (!formData.stage_career) {
      setdescribebusinessStage("Required")
    } else {
      setdescribebusinessStage("")
    }
    const isValidProSite=validateProfessionalWebsite()
    if (!formData.stage_career || !formData.best_describes_u || !validateCat || !validateSubCat || !validateSkill || !validateSkillLevel || !validateEducationData || !validateCertificateData || !isValidProSite) {
      // console.log("form ful of errors")
      // const flashData = { type: "error", text: "Fill the required fields." }
      // props.addFlashMessage(flashData)
      return false
    }

    const form_data = new FormData()
    form_data.append("best_describes_u", formData.best_describes_u)
    form_data.append("stage_career", formData.stage_career)
    form_data.append("company_size", companySize)
    form_data.append("professional_website", professionalWebsite)
    for (let index = 0; index < categoriesData.length; index++) {
      const element = categoriesData[index]
      form_data.append("categories[]", JSON.stringify(element))
    }
    for (let index = 0; index < skillsData.length; index++) {
      const element = skillsData[index]
      form_data.append("skills[]", JSON.stringify(element))
    }
    for (let index = 0; index < educationData.length; index++) {
      const element = educationData[index]
      form_data.append("eductions[]", JSON.stringify(element))
    }
    for (let index = 0; index < certificateData.length; index++) {
      const element = certificateData[index]
      form_data.append("certificates[]", JSON.stringify(element))
    }
    // console.log(form_data, "formdata")
    setIsbuttonLoading(true)
    const headers = {
      headers: { Authorization: `Bearer ${store.getState().login.token}` },
    }
    try {
      axios
        .post("freelancer/professional-info", form_data, headers)
        .then((res) => {
          if (res.status === 200) {
        window.location.reload(true);

            const flashData = { type: "success", text: "Professional Info added successfully." }
            props.addFlashMessage(flashData)
         setIsbuttonLoading(false)

          }
        })
        .catch((err) => {
    setIsbuttonLoading(false)
          
          console.log(" error =>", err)})
    } catch (error) {
    setIsbuttonLoading(false)

      console.log(error, "error catch")
    }
    
  }

  const handleDeleteCategories=(id)=>{
    const headers = {
      headers: { Authorization: `Bearer ${store.getState().login.token}` },
    }
    try {
      axios
        .post("freelancer/professional-info", headers)
        .then((res) => {
          if (res.status === 200) {
        window.location.reload(true);

            const flashData = { type: "success", text: "category deleted successfully." }
            props.addFlashMessage(flashData)
         setIsbuttonLoading(false)

          }
        })
        .catch((err) => {
    setIsbuttonLoading(false)
          
          console.log(" error =>", err)})
    } catch (error) {
    setIsbuttonLoading(false)

      console.log(error, "error catch")
    }
  }
 const handleDeleteSkill=(id)=>{
  const headers = {
    headers: { Authorization: `Bearer ${store.getState().login.token}` },
  }
  try {
    axios
      .get(`freelancer/delete-user-skill/${id}`, headers)
      .then((res) => {
        if (res.status === 200) {
      window.location.reload(true);

          const flashData = { type: "success", text: "skill deleted successfully." }
          props.addFlashMessage(flashData)
       setIsbuttonLoading(false)

        }
      })
      .catch((err) => {
  setIsbuttonLoading(false)
        
        console.log(" error =>", err)})
  } catch (error) {
  setIsbuttonLoading(false)

    console.log(error, "error catch")
  }
 }
 const handleCertificateDelete=(id)=>{
  const headers = {
    headers: { Authorization: `Bearer ${store.getState().login.token}` },
  }
  try {
    axios
      .get(`freelancer/delete-user-certificate/${id}`, headers)
      .then((res) => {
        if (res.status === 200) {
      window.location.reload(true);
          const flashData = { type: "success", text: "education deleted successfully." }
          props.addFlashMessage(flashData)
       setIsbuttonLoading(false)

        }
      })
      .catch((err) => {
  setIsbuttonLoading(false)
        
        console.log(" error =>", err)})
  } catch (error) {
  setIsbuttonLoading(false)

    console.log(error, "error catch")
  }
 }
 const handleDeleteEducation=(id)=>{
  const headers = {
    headers: { Authorization: `Bearer ${store.getState().login.token}` },
  }
  try {
    axios
      .get(`freelancer/delete-user-education/${id}`, headers)
      .then((res) => {
        if (res.status === 200) {
      window.location.reload(true);

          const flashData = { type: "success", text: "education deleted successfully." }
          props.addFlashMessage(flashData)
       setIsbuttonLoading(false)

        }
      })
      .catch((err) => {
  setIsbuttonLoading(false)
        
        console.log(" error =>", err)})
  } catch (error) {
  setIsbuttonLoading(false)

    console.log(error, "error catch")
  }
 }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto account_setting_body_color p-3">
    <div className="w-100   pb-5 mx-auto form_control_divs row">
      <div className="w-100 pt-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
        <h2 className="h2 titles__main-title ">
          <strong> Professional Info </strong>
        </h2>


        <div className="w-70 clearfix pb-4 personelinfo_1">
          <p>
            Please be as accurate as possible. The More Accurate you are the
            more success you will have with the business on our platform
          </p>
          <div className="col-md-12 mt-2">
            <ul>
              <li className="profile_desciption">
                This information is private & will not be shared on the platform.
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-12 radio_button_color">
        <label>Which option best describes you*</label>
        <RadioButton
          error={optionDescribe ? true : false}
          options={best_describe_options}
          onChange={formChangeHandler}
          value={formData.best_describes_u}
          name="best_describes_u"
        />
        {optionDescribe && (
          <p className="text-danger small">
            {optionDescribe}
          </p>
        )}
      </div>
      <div className="col-md-12 radio_button_color">
        <label>Which best describes the stage of your business?*</label>
        <RadioButton
          error={describebusinessStage ? true : false}
          options={stage_business_options}
          onChange={formChangeHandler}
          value={formData.stage_career}
          name="stage_career"
        />
        {describebusinessStage && (
          <p className="text-danger small">
            {describebusinessStage}
          </p>
        )}
      </div>
      <div className="col-md-12">
        <label>How many people work at your company?*</label>
        <CustomTextfield
          required
          type="number"
          name="companySize"
          value={companySize}
          onChange={handleCompany}
          onBlur={validateCompanySize}
          error={companySizeErr ? true : false}
          helperText={companySizeErr}
        />
      </div>
      <div className="col-md-12">
          <label>Provide a link to your own Professional website*</label>
          <CustomTextfield
            required
            type="url"
            name="professional_website"
            value={professionalWebsite}
            onChange={handleProfessionalWebsite}
            onBlur={validateProfessionalWebsite}
            error={professionalWebsiteErr ? true : false}
            helperText={professionalWebsiteErr}
          />
        </div>

      <div className="col-md-5" style={{ display: "inline-block" }}>
        <label>Categories that You have expertise in*</label>
        <SelectMenu
          name="category_id"
          value={categoryValue}
          onBlur={validateCategory}
          error={CategoryErr}
          onChange={(e) => {
            setCategoryValue(e.target.value)
            setSubCategoryValue("")
            selectMenuHandler(e.target.value)
          }}
          options={categories}
          cr={true}
        />
      </div>
      {sub_categories.length ? (
        <>
          <div className="col-md-5" style={{ display: "inline-block" }}>
            <label>Subcategories that You have expertise in*</label>
            <SelectMenu
              name="sub_category_id"
              value={subCategoryValue}
              onChange={(e) => { setSubCategoryValue(e.target.value) }}
              onBlur={validateSubCategory}
              error={subCategoryErr}
              options={sub_categories}
              cr={true}
            />
          </div>
          <div className="col-md-2 pt-5">
            <ServiceButton value={"Add"} onClick={handleCategoryAdd} />
          </div>
        </>
      ) : null}
       
      <div className="col-md-12  text-capitalize">
        <div className="col-md-10 pr-0 li_marker">
          <ul>
            {categoriesData.map((data, index) => {
              return (
                <li key={"categories-" + index}>
                  <strong>
                    {categories.map(data2 => {
                      if (data2.id === data.category_id)
                        return data2.name
                    })}</strong>  - {data.subCategoryName}
                  <CloseIcon className="pull-right text-muted" onClick={() => handleDeleteCategoriesData(data.sub_category_id)} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="col-md-12  text-capitalize">
        <div className="col-md-10 pr-0 li_marker">
          <ul>
            {responseData && responseData.freelancer_categories ? responseData.freelancer_categories.map((data, index) => {
              return (
                <li key={"categories-" + index}>
                  <strong>
                    {data.category_name}
                    </strong>  - {data.category_name}
                  <CloseIcon className="pull-right text-muted" onClick={() => handleDeleteCategories(data.id)} />
                </li>
              )
            }):<AvailableProjectsLoader/>}
          </ul>
        </div>
      </div>
      <div className="col-md-12 mt-3">
        <h5>
          <b>Skills</b>
        </h5>
      </div>
      <div className="col-md-12 mt-3">
        <div className="row">
          <div className="col-md-6">
            <label>
              List the Skills related to the Services you're offering*
            </label>

            <CustomTextfield
              required
              name="SkillTitle"
              value={skillTitle}
              onChange={(e) => setSkillTitle(e.target.value)}
              // onBlur={validateMemoSkill}
              error={skillTitleErr ? true : false}
              helperText={skillTitleErr}
            />
          </div>

          <div className="col-md-6 radio_button_color_level">
            <label>Your experience level*</label>

            <RadioButton
              options={expierence_level}
              value={experienceLevel}
              onChange={(e) => {
                setExperienceLevel(e.target.value)
              }}
              name="experienceLevel"
            />
            {experienceLevelErr && (
              <p className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error text-danger Mui-required">
                {experienceLevelErr}
              </p>
            )}
          </div>
          <div className="col-md-8">
            <div className="col-md-9 pr-0 li_marker pt-2">
              <ul>
                {skillsData.map((data, index) => {
                  return (
                    <li key={"skills-" + index}><strong>{data.title + " - "}</strong>
                      {expierence_level.map(data2 => {
                        console.log(data2)
                        if (data2.value === data.proficiency_level)
                          return data2.label
                      })}
                      <CloseIcon className="pull-right text-muted" onClick={() => handleSkillDelete(data.title)} />
                    </li>
                  )
                })}
              </ul>
              <ul>
                {responseData && responseData.merchant_skills? responseData.merchant_skills.map((data, index) => {
                  return (
                    <li key={"skills-" + index}><strong>{data.skill + " - "}</strong>
                      { data.experience_level[Object.keys(data.experience_level)[0]] }
                      <CloseIcon className="pull-right text-muted" onClick={() => handleDeleteSkill(data.id)} />
                    </li>
                  )
                }):<AvailableProjectsLoader/>}
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-right">
            <ServiceButton value={"Add"} onClick={handleAddSkill} />
          </div>
        </div>
      </div>

      <div className="col-md-12  mt-4 mb-3">
        <h5>
          <b>Education Data</b>
        </h5>
      </div>
      <MemoEducation
        setEducationData={setEducationData}
        educationData={educationData}
        educationErr={educationErr}
        responseData={responseData}
        setEducationErr={setEducationErr}
        validateYearOfGraduation={validateYearOfGraduation}
        countries={countries}
        setyearGgraduationErr={setyearGgraduationErr}
        validateMajor={validateMajor}
        yearGgraduationErr={yearGgraduationErr}
        validateTitle={validateTitle}
        TitleErr={TitleErr}
        validateCountry={validateCountry}
        CountryCollegeErr={CountryCollegeErr}
        validateCollege={validateCollege}
        profRequiredFields={profRequiredFields}
        title_options={title_options}
        yearofgraduation_options={yearofgraduation_options}
        handleEducationDelete={handleDeleteEducation}
      />

      <div className="col-md-12  mt-4">
        <h5>
          <b>Certificate</b>
        </h5>
      </div>
      <AddCertificate
        setCertificateErr={setCertificateErr}
        certificateErr={certificateErr}
        profRequiredFields={profRequiredFields}
        certificateData={certificateData}
        responseData={responseData}
        handleDeleteCertificate={handleCertificateDelete}
        setCertificateData={setCertificateData}
        countries={countries}
        yearofgraduation_options={yearofgraduation_options}
      />
       <div className="col-md-12 text-right mt-2">
       {isbuttonLoading===true?
            <ServiceButton value={"Loading....."}  />
        :
        <ServiceButton value={"Update"} onClick={ProfessionalValidateForm} />


        }
          </div>
    </div>
    </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(Professional)
)





















