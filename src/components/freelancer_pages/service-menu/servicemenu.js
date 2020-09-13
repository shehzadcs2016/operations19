import React, { useEffect, useState } from "react"
import { Stepper, Step, StepLabel, Button } from "@material-ui/core"
import { connect } from "react-redux"
import {
  RadioButton,
  CustomSelect,
  CustomTextfield,
} from "../../shared/formComponents"
import ServiceButton from "../../shared/serviceButton"
import DropDownMenu from "../../shared/dropdownMenu"
import { MemoLanguage } from "./components/AddLanguage"
import { MemoCategory } from "./components/memoCategory"
import { MemoSkill } from "./components/memoSkill"
import MemoEducation from "./components/memoEducation"
import AddCertificate from "./components/memoCertificate"
import PortfolioTab from "./components/portfolioTab"
import { MemoService } from "./components/memoService"
import UploadFileButton from "../../shared/uploadFile"
import { isEmpty } from "../../../utils"
import DeleteIcon from "@material-ui/icons/Delete"
// import { getCountries } from "../../shared/countries";
import DefaultProfile from "../images/avatar.png"
import {
  CircularProgress,
  Avatar,
} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import { withRouter } from "react-router-dom"
import axios from "../../../config/axios"
import { addFlashMessage } from "../../../Redux/actions/flashMessages"
import { store } from "../../../Redux/store"
import { SelectMenu } from "../../shared/SelectMenu"
import ReviewMemo from "./components/memoReview";
import FAQ from "./components/faq";
import { useHistory } from "react-router";
import ServiceMenuModal from "./components/serviceMenuModal";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { isFirstDayOfMonth } from "date-fns/fp"
import validator from 'validator';
import DeleteServiceMenuModel from './components/deleteServiceMenuModel';

export const BodyPostJobOffline = (props) => {
  const history = useHistory();
  const [resume_files, setResumeFile] = useState(null)
  var [isbuttonLoading, setIsbuttonLoading] = useState(false)
  var [count, setCount] = useState(0)
  var [personalarraycount, setpersonalArrayCount] = useState([0])
  var [arraycount, setArrayCount] = useState([0])
  var [Professionalarraycount, setProfessionalArrayCount] = useState([0])
  var [skillcount, setskillArrayCount] = useState([0])
  var [educationcount, seteducationArrayCount] = useState([0])
  var [servicearraycount, setserviceArrayCount] = useState([0])
  var [certificatecount, setcertificatecount] = useState([0])
  var [reviewCount, setreviewCount] = useState([0])
  const [expierence_level, setexperiences_options] = useState([])
  const [best_describe_options, setbest_describe_options] = useState([])
  const [stage_business_options, setstage_business_options] = useState([])
  const [peoplework_options, setpeoplework_options] = useState([])
  const [title_options, settitle_options] = useState([])
  const [yearofgraduation_options, setyearofgraduation_options] = useState([])
  const [proficiency_level_options, setproficiency_level_options] = useState([])
  const [languages_options, setlanguages_options] = useState([])
  const [frquency_options, setfrquency_options] = useState([])
  const [certificateData, setCertificateData] = useState([])
  const [Review, setReview] = useState({
    reviewer_name: "",
    review: "",
    link: "",
  })
  const [other_files, setOtherFiles] = useState(null)
  const [profileImage, setProfileImage] = useState(null)
  const blankData = {
    first_name: "",
    language: "",
    levelofproficiency: "",
    year: "",
    service_name: "",
    review: "",
    title: "",
    certificate: "",
    best_describes_u: "",
    major: "",
    service_subcategory: "",
    service_category: "",
    year_of_graduation: "",
    description: "",
    last_name: "",
    company_size: "",
    hear_about_us: "",
    referral_name: "",
    country_id: "",
    country_college: "",
    citizen_of_id: "",
    email: "",
    password: "",
    skills: "",
    skype_id: "",
    linkedin: "",
    college_name: "",
    stage_career: "",
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
  const [serviceData, setServiceData] = useState([])

  const [aboutRequiredFields, setAboutRequiredFields] = useState({
    first_name: "",
    last_name: "",
    description: "",
    levelofproficiency: "",
  })
  const [serviceRequiredFields, setserviceRequiredFields] = useState({
    service_name: "",
  })
  const [profRequiredFields, setprofRequiredFields] = useState({
    company: "",
    title: "",
    institute_name: "",
    major: "",
    certificate: "",
    certified_from: "",
  })
  const [categories, setCategories] = useState([])
  const [sub_categories, setSubCategories] = useState([])
  const [formSubmit, setFormSubmit] = useState(false)
  const [livingCountryErr, setLivingCountryErr] = useState("")
  const [descErr, setdescErr] = useState("")
  const [CountryCollegeErr, setCountryCollegeErr] = useState("")
  const [TitleErr, setTitleErr] = useState("")
  const [yearGgraduationErr, setyearGgraduationErr] = useState("")
  const [services, setServices] = useState({
    service_category: "",
    service_subcategory: "",
    service_title: "",
    description: "",
    fixed_price: "",
    hourly_fee: "",
    total: "",
    service_frequency: "",
  })
  const [runBusinessRequiredFields, setRunBusinessRequiredFields] = useState({
    twoYearPlan: "",
    recentProject: "",
    messedWithClient: "",
    communication: "",
    reviewer_name: "",
    reviewer_link: "",
    standOut: "",
  })

  const [displaySTFN, setDisplaySTFN] = useState("")
  const [displaySTFNErr, setDisplaySTFNErr] = useState("")

  const [describebusinessStage, setdescribebusinessStage] = useState("")
  const [profileErr, setprofileErr] = useState("")

  const [linkedinStatus, setlinkedinStatus] = useState(false)
  const [facebooktStatus, setfacebookStatus] = useState(false)

  const [twitterStatus, settwitterStatus] = useState(false)

  const [optionDescribe, setoptionDescribe] = useState("")

  const [submitBtnTxt, setSubmitBtnTxt] = useState("Submit Application")

  const validateFN = (e) => {
    const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
      formData.first_name.trim()
    )
    if (formData.first_name.trim() && !isValid) {
      const msg = "Name should not contain any digit or special characters"
      setAboutRequiredFields({ ...aboutRequiredFields, first_name: msg })
      return false
    } else if (!formData.first_name.length) {
      const msg = "Required"
      setAboutRequiredFields({ ...aboutRequiredFields, first_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setAboutRequiredFields({ ...aboutRequiredFields, first_name: "" })
    setFormData({ ...formData, first_name: formData.first_name.trim() })
    return true
  }

  const validateServiceName = (e) => {
    // const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
    //   formData.service_name.trim()
    // )
    if (!formData.service_name.length) {
      const msg = "Service Name is required"
      setserviceRequiredFields({ ...serviceRequiredFields, service_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setserviceRequiredFields({ ...serviceRequiredFields, service_name: "" })
    setFormData({ ...formData, service_name: formData.service_name.trim() })
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
      const msg = "Required"
      setAboutRequiredFields({ ...aboutRequiredFields, last_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }
    setAboutRequiredFields({ ...aboutRequiredFields, last_name: "" })
    setFormData({ ...formData, last_name: formData.last_name.trim() })
    return true
  }

  const validateCompanySize = (e) => {
    const isValid = /^[0-9\b]+$/.test(companySize)
    if (companySize && !isValid) {
      const msg =
        "Cann't be empty & only contains digits"
      setCompanySizeErr(msg)
      return false
    } else if (companySize === "0" || companySize === "") {
      const msg = "Required"
      setCompanySizeErr(msg)
      return false
    }
    setCompanySizeErr("")
    setCompanySize(companySize)
    return true
  }

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleLinkedIn = (e) => {
    e.preventDefault()

    setlinkedinStatus(!linkedinStatus)
  }
  const handleFacebook = (e) => {
    e.preventDefault()
    setfacebookStatus(!facebooktStatus)
  }
  const handleTwitter = (e) => {
    e.preventDefault()
    settwitterStatus(!twitterStatus)
  }
  const handleBack = () => {
    let data = personalarraycount.filter((array) => array !== arraycount)
    // if (data.length > 1) {
    // alert("shehzad")
    setpersonalArrayCount(arraycount)
    // console.log(data, "data")
    // }
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  useEffect(() => {
    axios
      .get("constant/arrays", {
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
      .then((res) => {
        const proficiency_level = Object.keys(
          res.data.data["proficiency_level"]
        )
        setproficiency_level_options(
          proficiency_level.map((key) => {
            return {
              value: key,
              label: res.data.data["proficiency_level"][key],
            }
          })
        )

        const frequency = Object.keys(res.data.data["service_frequency"])
        setfrquency_options(
          frequency.map((key) => {
            return {
              value: key,
              label: res.data.data["service_frequency"][key],
            }
          })
        )

        const experiences_keys = Object.keys(res.data.data["experience_level"])
        setexperiences_options(
          experiences_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["experience_level"][key],
            }
          })
        )
        const describe_keys = Object.keys(res.data.data["best_describes_u"])
        setbest_describe_options(
          describe_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["best_describes_u"][key],
            }
          })
        )
        const stage_keys = Object.keys(res.data.data["stage_career"])
        setstage_business_options(
          stage_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["stage_career"][key],
            }
          })
        )
        const people_keys = Object.keys(res.data.data["stage_career"])
        setpeoplework_options(
          people_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["stage_career"][key],
            }
          })
        )
        const title_keys = Object.keys(res.data.data["title"])
        settitle_options(
          title_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["title"][key],
            }
          })
        )
        const year_keys = Object.keys(res.data.data["year"])
        setyearofgraduation_options(
          year_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["year"][key],
            }
          })
        )
      })

      .catch((err) => console.log("Graduation error =>", err))

    axios
      .get("client/getcategories", {
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
      .then((res) => {
        setCategories(
          res.data.data.map((d) => {
            return {
              id: d.id,
              name: d.category_name,
            }
          })
        )
      })
      .catch((err) => console.log("Categories error =>", err))
    axios
      .get("freelancer/languages", {
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
      .then((res) => {
        setlanguages_options(
          res.data.data.map((d) => {
            return {
              id: d.id,
              name: d.language,
            }
          })
        )
      })
      .catch((err) => console.log("Categories error =>", err))

    const getCountry = async () => {
      try {
        const countryRes = await axios.get("country")
        setCountries(countryRes.data.data)
      } catch (err) {
        // console.log(err.response.data.message);
      }
    }
    getCountry()
  }, [activeStep])

  function getSteps() {
    return [
      "Personal Information",
      "Professional Information",
      "Linked  Accounts",
      "Merchant Reviews",
      "Account Security",
      "Service Menu",
      "Portfolio",
      "FAQ's",
    ]
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return personalInfo()
      case 1: {
        return ProfessionalInfo()
      }
      case 2:
        return LinkedInAccount()
      case 3:
        return MerchantReviews()
      case 4: {
        return AccountSecurity()
      }
      case 5: {
        return CreateServiceMenu()
      }
      case 6: {
        return Portfolio()
      }
      case 7: {
        return Faq()
      }
      default:
        return "Unknown stepIndex"
    }
  }
  const validateCollege = (e) => {
    const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
      educationData.institute_name.trim()
    )
    if (educationData.institute_name.trim() && !isValid) {
      const msg =
        "College name   should not contain any digit or special characters"
      setprofRequiredFields({ ...profRequiredFields, institute_name: msg })
      return false
    } else if (!educationData.institute_name.length) {
      const msg = "Required"
      setprofRequiredFields({ ...profRequiredFields, institute_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setprofRequiredFields({ ...profRequiredFields, institute_name: "" })
    setEducationData({ institute_name: educationData.institute_name.trim() })
    return true
  }
  const validateMajor = (e) => {
    const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
      educationData.major.trim()
    )
    if (educationData.major.trim() && !isValid) {
      const msg = "major should not contain any digit or special characters"
      setprofRequiredFields({ ...profRequiredFields, major: msg })
      return false
    } else if (!educationData.major.length) {
      const msg = "Required"
      setprofRequiredFields({ ...profRequiredFields, major: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setprofRequiredFields({ ...profRequiredFields, major: "" })
    setEducationData({ major: educationData.major.trim() })
    return true
  }
  const validateCountryLiving = () => {
    if (!formData.country_id) {
      setLivingCountryErr("Required")
      return false
    }

    setLivingCountryErr("")
    return true
  }
  const validateCountry = () => {
    if (!educationData.institute_country) {
      setCountryCollegeErr("Required")
      return false
    }

    setCountryCollegeErr("")
    return true
  }
  const validatedescription = () => {
    if (!formData.description) {
      setdescErr("Required")
      return false
    }

    setdescErr("")
    return true
  }
  const validateTitle = () => {
    if (!educationData.title) {
      setTitleErr("Required")
      return false
    }

    setTitleErr("")
    return true
  }

  const validateYearOfGraduation = () => {
    if (!educationData.year) {
      setyearGgraduationErr("Required")
      return false
    }

    setyearGgraduationErr("")
    return true
  }

  const validateCategory = () => {
    if (!categoryValue) {
      setCategoryErr("Required")
      return false
    }
    setCategoryErr("")
    return true
  }

  const validateSubCategory = () => {
    if (!subCategoryValue) {
      setSubCategoryErr("Required")
      return false
    }
    setSubCategoryErr("")
    return true
  }

  const stepperValidation = () => {
    window.scrollTo(0, 0)
    switch (activeStep) {
      case 0:
        return personalinfovalidate()
      case 1:
        return ProfessionalValidateForm()
      case 2:
        return LinkedAccounts()
      case 3:
        return MerchantValidateForm()
      case 4:
        return MerchantValidateForm()
      case 5:
        return ServiceValidateForm()
      case 6:
        validatePortfolioForm()
        return
      case 7:
        validateFaqForm()
      default:
        return "Unknown stepIndex"
    }
  }

  const onServiceDelete = (services) => {
    let data = serviceData.filter((array) => array !== services)
    setServiceData(data)
    // console.log(data, "languageData idmnlsamn")
  }

  const [profilePreview, setProfilePreview] = useState(DefaultProfile);

  // personalInfo States
  const [langaugesErr, setLanguagesErr] = useState("")
  const [ProficiencyErr, setProficiencyErr] = useState("")
  const [languageValue, setLanguageValue] = useState("");
  const [proficiencyValue, setProficiencyValue] = useState("");
  const [languagesData, setLanguagesData] = useState([]); //contains language and proficiency value 

  const handleLanguageAdd = () => {
    if (!languageValue) {
      setLanguagesErr("Required")
      return false
    } else {
      setLanguagesErr("")
    }
    if (!proficiencyValue) {
      setProficiencyErr("Required")
      return false
    } else {
      setProficiencyErr("")
    }
    const found = languagesData.some(el => el.language_id === languageValue);
    if (!found) {
      setLanguagesErr("")
      setLanguageValue("")
      setProficiencyValue("")
      setLanguagesData([...languagesData, { "language_id": languageValue, "proficiency_id": proficiencyValue }])
    }
    else {
      setLanguagesErr("Already exist")
    }
  }

  const handleDeleteLanguagesData = (id) => {
    setLanguagesData(languagesData.filter(el => el.language_id !== id))
  }

  const personalInfo = () => {
    return (
      <div className="w-100  pb-5 mx-auto form_control_divs row 2nd_row_murchant_labels">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12  ">
          <div className="w-100 pt-3  pb-3">
            <h2 className="h2 titles__main-title">
               Personal Information 
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
            <div className="col-lg-2 col-md-3 col-sm-3 ">
              <Avatar
                alt="Profile"
                src={profilePreview}
                style={{
                  width: "180px",
                  height: "180px",
                }}
                className="mx-auto mx-0"
              />
              {!profileImage
                ? <p style={{ color: "red !important" }} className="small text-danger">{profileErr}</p>
                : null}
            </div>
            <div className="col-lg-6 col-md-8 pt-1 pl-4">
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
          <label>First Name* <i className="small text-muted">Private</i></label>
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
          <label>Last Name* <i className="small text-muted">Private</i></label>
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

        <div className="col-md-12">
          <div className="d-flex">
            <div className="w-50">
              <label>Description*</label>
            </div>
            <div className="w-50">
              <p className="small text-muted pull-right">
                {600 - formData.description.length}
                {600 - formData.description.length < 2 ? " word" : " words"} remaining
              </p>
            </div>
          </div>
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
            inputProps={{
              maxLength:"600",
            }}
          />
        </div>

        <div className="col-md-5">
          <label>Languages You Know*</label>
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
          </div>
        </div>
      </div>
    )
  }

  const selectMenuHandler = async (value) => {
    if (value) {
      const res = await axios.get(`client/getsubcategories/${value}`, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      setSubCategories(
        res.data.data.map((d) => {
          return {
            id: d.id,
            name: d.subcategory_name,
          }
        })
      )
    }
  }

  const addEducation = (educationData) => {
    seteducationArrayCount((prevState) => [...prevState, count])
    setEducationData((prevState) => [...prevState, educationData])
  }

  // state ProfessionalInfo
  const [companySize, setCompanySize] = useState("")
  const handleCompany = (e) => {
    const value = e.target.value.replace(/[^\d+]/, "")
    setCompanySize(value)
  }
  const [professionalWebsite, setProfessionalWebsite] = useState(null)
  const [professionalWebsiteErr, setProfessionalWebsiteErr] = useState(null)
  const handleProfessionalWebsite = (e) => {
    setProfessionalWebsite(e.target.value)
  }
  const [companySizeErr, setCompanySizeErr] = useState("")
  const [CategoryErr, setCategoryErr] = useState("")
  const [subCategoryErr, setSubCategoryErr] = useState("")
  const [categoryValue, setCategoryValue] = useState("");
  const [subCategoryValue, setSubCategoryValue] = useState("")
  const [categoriesData, setCategoriesData] = useState([]); //contains freelancer categories and subCategories 
  const handleCategoryAdd = () => {
    if (!categoryValue) {
      setCategoryErr("Required")
      return false
    } else {
      setCategoryErr("")
    }
    if (!subCategoryValue) {
      setSubCategoryErr("Required")
      return false
    } else {
      setSubCategoryErr("")
    }
    const found = categoriesData.some(el => el.sub_category_id === subCategoryValue);
    if (!found) {
      const subCategoryName = sub_categories.map(data2 => {
        if (data2.id === subCategoryValue)
          return (" " + data2.name)
      })
      setCategoriesData([...categoriesData, {
        "category_id": categoryValue, "sub_category_id": subCategoryValue,
        "subCategoryName": subCategoryName
      }])
      setCategoryValue("")
      setSubCategoryValue("")
    }
    else {
      setSubCategoryErr("Already exist")
    }
  }
  const handleDeleteCategoriesData = (id) => {
    setCategoriesData(categoriesData.filter(el => el.sub_category_id !== id))
  }

  const [skillTitleErr, setSkillTitleErr] = useState("")
  const [experienceLevelErr, setExperienceLevelErr] = useState("")
  const [skillTitle, setSkillTitle] = useState("")
  const [experienceLevel, setExperienceLevel] = useState("");
  const [skillsData, setSkillsData] = useState([]);

  const [educationData, setEducationData] = useState([])

  const handleAddSkill = () => {
    if (!skillTitle) {
      setSkillTitleErr("Required")
      return false
    } else {
      setSkillTitleErr("")
    }
    if (!experienceLevel) {
      setExperienceLevelErr("Required")
      return false
    } else {
      setExperienceLevelErr("")
    }
    const found = skillsData.some(el => el.title === skillTitle);
    if (!found) {
      setSkillsData([...skillsData, { "title": skillTitle, "proficiency_level": experienceLevel }])
      setSkillTitle("")
      setExperienceLevel("")
    } else {
      setSkillTitleErr("Already exist")
    }
  }
  const handleSkillDelete = (id) => {
    setSkillsData(skillsData.filter(el => el.title !== id))
  }

  const [educationErr, setEducationErr] = useState({
    institute_country: "",
    institute_name: "",
    title: "",
    major: "",
    year: "",
  })

  const [certificateErr, setCertificateErr] = useState({
    certificate: "",
    certified_from: "",
    year: "",
  })

  const validateProfessionalWebsite = () =>{
    if(!professionalWebsite){
      setProfessionalWebsiteErr("Required")
      return false
    }
    else if(!validator.isURL(professionalWebsite)){
      setProfessionalWebsiteErr("Invalid link")
      return false
    }
    else{
      setProfessionalWebsiteErr("")
      return true
    }
  }

  const ProfessionalInfo = () => {
    return (
      <div className="w-100   pb-5 mx-auto form_control_divs row">
        <div className="w-100 pt-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
          <h2 className="h2 titles__main-title ">
          Professional Information
          </h2>
          <div className="w-70 clearfix pb-4 personelinfo_1">
            <p>
              Please be as accurate as possible. The More Accurate you are the
              more success you will have with the business on our platform
            </p>
            <div className="col-md-12 mt-2">
              <ul>
                <li className="profile_desciption_info">
                  This information is private & will not be shared on the platform.
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 radio_button_color radio-btns-column">
          <label>Which option best describes you?*</label>
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
        <div className="col-md-12 radio_button_color radio-btns-column">
          <label>Which best describes the stage of your workplace/business?*</label>
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
            // type="number"
            name="companySize"
            value={companySize}
            onChange={handleCompany}
            onBlur={validateCompanySize}
            error={companySizeErr ? true : false}
            helperText={companySizeErr}
          />
        </div>

        <div className="col-md-12">
          <label>Provide a link to your own professional Website*</label>
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
                    <CloseIcon className="pull-right text-muted cursor-pointer" onClick={() => handleDeleteCategoriesData(data.sub_category_id)} />
                  </li>
                )
              })}
            </ul>
          </div>
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
              <label>Your Experience level*</label>

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
                        <CloseIcon className="pull-right text-muted cursor-pointer" onClick={() => handleSkillDelete(data.title)} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-4 text-right">
              <ServiceButton value={"Add"} onClick={handleAddSkill} />
            </div>
          </div>
        </div>

        <div className="col-md-12  mt-3 mb-3">
          <h5>
            <b>Education Data</b>
          </h5>
        </div>
        <MemoEducation
          setEducationData={setEducationData}
          educationData={educationData}
          educationErr={educationErr}
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
            setCertificateData={setCertificateData}
            countries={countries}
            yearofgraduation_options={yearofgraduation_options}
          />
      </div>
    )
  }

  const LinkedInAccount = () => {
    return (
      <div className="w-100   pb-5 mx-auto form_control_divs row">
        <div className="col-md-12">
          <div className="w-100 pt-3  ">
            <h2 className="h2 titles__main-title">
              Linked Accounts 
            </h2>
            <p className="personelinfo_1 text-muted">
              Taking the time to verify and link your accounts can upgrade your
              credibility and help us provide
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <h6 className="  mt-4 mb-3">
            Your Social Presence* <span>Private</span>
          </h6>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="social_icons_verify">
                <i class="fab fa-linkedin linkedin_icon"></i>
                <p className="social_icons_detail">Linkedin</p>
              </div>
            </div>
            {linkedinStatus === true ? (
              <div className="col-md-6 text-right">
                <button
                  type="button"
                  class="btn btn-sm highlighted_success_btn"
                >
                  Connected
                </button>
              </div>
            ) : (
                <div className="col-md-6 text-right">
                  <Button
                    onClick={handleLinkedIn}
                    className="btn btn-warning"
                    variant="outlined"
                    color="primary"
                  >
                    Connect
                </Button>
                </div>
              )}
          </div>
        </div>
        <div className="  col-md-12 mt-3">
          <div className="row ">
            <div className="col-md-6">
              <div className="social_icons_verify">
                <i class="fab fa-facebook fb_icon"></i>
                <p className="social_icons_detail">Facebook</p>
              </div>
            </div>
            {facebooktStatus === true ? (
              <div className="col-md-6 text-right">
                <button
                  type="button"
                  class="btn btn-sm highlighted_success_btn"
                >
                  Connected
                </button>
              </div>
            ) : (
                <div className="col-md-6 text-right">
                  <Button
                    onClick={handleFacebook}
                    className="btn btn-warning"
                    variant="outlined"
                    color="primary"
                  >
                    Connect
                </Button>
                </div>
              )}
          </div>
        </div>
        <div className="  col-md-12 mt-3">
          <div className="row ">
            <div className="col-md-6">
              <div className="social_icons_verify">
                <i class="fab fa-twitter twiter_icon"></i>
                <p className="social_icons_detail">Twitter</p>
              </div>
            </div>
            {twitterStatus === true ? (
              <div className="col-md-6 text-right">
                <button
                  type="button"
                  class="btn btn-sm highlighted_success_btn"
                >
                  Connected
                </button>
              </div>
            ) : (
                <div className="col-md-6 text-right">
                  <Button
                    onClick={handleTwitter}
                    className="btn btn-warning"
                    variant="outlined"
                    color="primary"
                  >
                    Connect
                </Button>
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }

  // state merchant reviews
  const [reviewErrs, setReviewErr] = useState({
    reviewer_name: "",
    link: "",
    review: "",
  })
  const [reviewData, setReviewData] = useState([])
  const MerchantReviews = () => {
    return (
      <ReviewMemo
        setReviewErr={setReviewErr}
        reviewErrs={reviewErrs}
        reviewer_name={reviewErrs.reviewer_name}
        reviewData={reviewData}
        setReviewData={setReviewData}
      />
    )
  }

  const [faqData, setFaqData] = useState({
    question: "",
    answer: "",
  })
  const [faqErr, setFaqErr] = useState({
    question: "",
    answer: "",
  })
  const Faq = () => {
    return (
      <FAQ
        setFaqData={setFaqData}
        faqData={faqData}
        faqErr={faqErr}
        setFaqErr={setFaqErr}
        checkFaqForm={checkFaqForm}
      />
    )
  }

  // state portfolio
  const [portfolioErr, setPortfolioErr] = useState({
    project_title: "",
    project_overview: "",
  })

  const [portfolioData, setPortfolioData] = useState({
    project_title: "",
    project_overview: "",
  });
  const [portfolioFiles, setPortfolioFiles] = useState([])
  const [portfolioThumbnail, setPortfolioThumbnail] = useState("")
  const [portfolioFilesErr, setPortfolioFilesErr] = useState("")
  const [portfolioThumbnailErr, setPortfolioThumbnailErr] = useState("")
  const validatePortfolioFiles = () => {
    if (!portfolioFiles.length > 0) {
      setPortfolioFilesErr("Required")
    } else {
      setPortfolioFilesErr("")
    }
  }
  const validatePortfolioThumbnail = () => {
    if (!portfolioThumbnail) {
      setPortfolioThumbnailErr("Required")
    } else {
      setPortfolioThumbnailErr("")
    }
  }

  const [isPortfolioDataExist, setIsPortfolioDataExist] = useState(false)

  const Portfolio = () => {
    return (
      <PortfolioTab
        setPortfolioErr={setPortfolioErr}
        portfolioErr={portfolioErr}
        setPortfolioData={setPortfolioData}
        portfolioData={portfolioData}
        setPortfolioFiles={setPortfolioFiles}
        portfolioFiles={portfolioFiles}
        portfolioThumbnail={portfolioThumbnail}
        setPortfolioThumbnail={setPortfolioThumbnail}
        portfolioFilesErr={portfolioFilesErr}
        portfolioThumbnailErr={portfolioThumbnailErr}
        validatePortfolioFiles={validatePortfolioFiles}
        validatePortfolioThumbnail={validatePortfolioThumbnail}
        checkPortfolioForm={checkPortfolioForm}
        setIsPortfolioDataExist={setIsPortfolioDataExist}
        isPortfolioDataExist={isPortfolioDataExist}
      />
    )
  }

  const AccountSecurity = () => {
    return (
      <div className="w-100  pb-5 mx-auto form_control_divs row">
        <div className="col-md-12">
          <div className="w-100 pt-3 pb-5">
            <h2 className="h2 titles__main-title">
              Account Security 
            </h2>
            <p className="personelinfo_1">
              Trust and safety is a big deal in our community. Please verify your e-mail and phone number so that we can keep your account secured.
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-10 ">
              <h5>
                {" "}
                <span className="verified_mail_icon mr-2">
                  <i class="far fa-envelope"></i>
                </span>{" "}
                Email Verification*
              </h5>
            </div>
            <div className="col-md-2 text-right">
              {/* <Button variant="outlined" color="primary">
              Verify
            </Button> */}
              <button type="button" class="btn btn-sm highlighted_success_btn">
                Verified
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleSaveServiceMenu = async () => {
    const form_data = new FormData()
    form_data.append("name", formData.service_name)
    for (let index = 0; index < serviceMenu.length; index++) {
      const element = serviceMenu[index]
      form_data.append("service_menu[]", JSON.stringify(element))
    }
    const headers = {
      headers: { Authorization: `Bearer ${store.getState().login.token}` },
    }
    try {
      await axios
        .post("freelancer/servicemenu", form_data, headers)
        .then((res) => {
          if (res.data.status === 200) {
            const flashData = {
              type: "success",
              text: "Service menu added.",
            }
            props.addFlashMessage(flashData)
            setServiceMenu(res.data.data.service_menu_services)
            setServiceMenuId(res.data.data.id)
          }
        })
        .catch((err) => console.log(" error =>", err))
    } catch (error) {
      console.log(error, "error catch")
    }
    // console.log(formData, "formofData")
  }

  const handleChange = (e) => {
    // let value = e.target.value.replace(/[^A-Za-z ]/gi, "")
    let value = e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleReview = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setReview({ ...Review, [e.target.name]: value })
  }

  const handleAdd = (services) => {
    setserviceArrayCount((prevState) => [...prevState, count])
    setServiceData((prevState) => [...prevState, services])
  }

  const [isShowServiceMenuModal, setShowServiceMenuModal] = useState(false);
  const [isShowDeleteServiceMenuModal, setShowDeleteServiceMenuModal] = useState(false);
  const serviceMenuToggle = () => {
    setShowServiceMenuModal(!isShowServiceMenuModal);
  };
  const deleteServiceMenuToggle = () => {
    setShowDeleteServiceMenuModal(!isShowDeleteServiceMenuModal);
  };
  const [serviceMenu, setServiceMenu] = useState([]);
  const [serviceMenuId, setServiceMenuId] = useState("");

  const deleteServiceMenu = async (id, index) => {
    const array = [...serviceMenu]
    array.splice(index, 1);
    setServiceMenu(array)
    if(id !== "none"){
      const headers = {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      }
      try {
        await axios
          .get(`freelancer/delete-servicemenu-service/${id}`, headers)
          .then((res) => {
            if (res.data.status === 200) {
              const flashData = {
                type: "success",
                text: "Service menu Deleted.",
              }
              props.addFlashMessage(flashData)
              // setServiceMenu(res.data.data.service_menu_services)
            }
          })
          .catch((err) => console.log(" error =>", err))
      } catch (error) {
        console.log(error, "error catch")
      }
    }
  }

  const deleteWholeServiceMenu = async (id) => {
    setServiceMenu([])
    setFormData({ ...formData, ["service_name"]: "" })
    if(id !== "none"){
      const headers = {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      }
      try {
        await axios
          .get(`freelancer/delete-servicemenu/${id}`, headers)
          .then((res) => {
            if (res.data.status === 200) {
              const flashData = {
                type: "success",
                text: "Service menu Deleted.",
              }
              props.addFlashMessage(flashData)
              // setServiceMenu(res.data.data.service_menu_services)
            }
          })
          .catch((err) => console.log(" error =>", err))
      } catch (error) {
        console.log(error, "error catch")
      }
    }
  }


  const CreateServiceMenu = () => {
    return (
      <>
        <ServiceMenuModal
          modal={isShowServiceMenuModal}
          toggleModal={serviceMenuToggle}
          modalClass="modal-lg"
          categories={categories}
          sub_categories={sub_categories}
          selectMenuHandler={selectMenuHandler}
          frquency_options={frquency_options}
          serviceMenu={serviceMenu}
          setServiceMenu={setServiceMenu}
        />
        <DeleteServiceMenuModel 
          modal={isShowDeleteServiceMenuModal}
          toggleModal={deleteServiceMenuToggle}
          serviceMenuId={serviceMenuId}
          serviceName={formData.service_name}
          deleteWholeServiceMenu={deleteWholeServiceMenu}

        />
        <div className="w-100   pb-5 mx-auto form_control_divs row">
          <div className="col-md-12">
            <div className="w-100 pt-3 pb-4">
              <h2 className="h2 titles__main-title">
                 Service Menu 
              </h2>
              <p className="personelinfo_1">
                Add all of your available services to your service menu. Clients will be able to browse and make purchases directly from you.
            </p>
            </div>
          </div>
          <div className="col-md-12">
            <label>Service Menu Name*</label>
          </div>
          <div className="col-md-12">
            <CustomTextfield
              required
              name="service_name"
              value={formData.service_name}
              onChange={handleChange}
              onBlur={validateServiceName}
              placeholder="Service Menu name"
              error={serviceRequiredFields.service_name ? true : false}
              helperText={serviceRequiredFields.service_name}
            />
          </div>
          <div className="col-md-12">
            <div className="table-responsive service_menu">
              <table className="table w-100 table-sm">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Service</th>
                    <th scope="col">Fixed Price Fee</th>
                    <th scope="col">Hourly Fee</th>
                    {/* <th scope="col">Total Hours </th> */}
                    <th scope="col">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {servicearraycount.map((c) => (
                    <MemoService
                      onEducationDelete={onServiceDelete}
                      sub_categories={sub_categories}
                      categories={categories}
                      frquency_options={frquency_options}
                      handleSave={handleSave}
                      servicearraycount={servicearraycount}
                      handleMemoAdd={handleAdd}
                      selectMenuHandler={selectMenuHandler}
                    />
                  ))} */}
                  {
                    serviceMenu.map((data, index) => {
                      return (
                        <tr key={`service-menu-${index}`}>
                          <td>
                            <div>
                              <p>
                                {categories.map(data2 => {
                                  if (data2.id === data.service_category)
                                    return data2.name
                                })}
                              </p>
                              <p>
                                {sub_categories.map(data2 => {
                                  if (data2.id === data.service_subcategory)
                                    return data2.name
                                })}
                              </p>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p>{data.service_title}</p>
                              <p>{data.service_description}</p>
                            </div>
                          </td>
                          <td>{data.fixed_price}</td>
                          <td>{data.hourly_fee}</td>
                          {/* penfind total hours */}
                          {/* <td>{data.total_hours}</td> */}
                          <td>
                            {frquency_options.map(data2 => {
                              if (data2.value === data.service_frequency.toString())
                                return data2.label
                            })}
                          </td>
                          <td>
                            <DeleteIcon
                              className="delete-icon-color cursor-pointer" onClick={(index) => deleteServiceMenu(data.id || "none", index)}
                            />
                          </td>
                        </tr>
                      )
                    })
                  }
                  <tr className="text-muted small">
                    <td>
                      <div>
                        <p>Select category</p>
                        <p>Select subcategory</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>Enter service name</p>
                        <p>Enter service description</p>
                      </div>
                    </td>
                    <td>Amount</td>
                    <td>Amount</td>
                    {/* <td>Time</td> */}
                    <td>Select</td>
                    <td className="text-dark">
                      <AddCircleOutlineIcon className="fa-hand-pointer cursor-pointer" color="primary" value={"Add"} onClick={serviceMenuToggle} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-12">
            <div className="pull-right">
              <ServiceButton deleteClass="service-menu-delete-btn mr-3" value="Delete Menu" onClick={deleteServiceMenuToggle}/>
              <ServiceButton onClick={validateOnSaveMenu} value="Save Menu"/>
            </div>
          </div>
        </div>
      </>
    )
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
      // const flashData = { type: "error", text: "Fill the required fields." }
      // props.addFlashMessage(flashData)
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
          "freelancer/personal-info",
          form_data,

          headers
        )
        .then((res) => {
          // setskillData(res.data.data)
          // setshowskill(true)
          setIsbuttonLoading(false)
          console.log(res, "response")
          if (res.status === 200) {
            const flashData = { type: "success", text: "Personal Info added successfully." }
            props.addFlashMessage(flashData)
          }
        })
        .catch((err) => console.log(" error =>", err))
    } catch (error) {
      console.log("error catch", error)
    }
    handleNext()
  }

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
    
    const vCompanySize = validateCompanySize();

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
    if (!formData.stage_career || !formData.best_describes_u || !validateCat || !validateSubCat || !validateSkill || !validateSkillLevel || !validateEducationData || !validateCertificateData || !isValidProSite || !vCompanySize) {
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

    const headers = {
      headers: { Authorization: `Bearer ${store.getState().login.token}` },
    }
    try {
      axios
        .post("freelancer/professional-info", form_data, headers)
        .then((res) => {
          if (res.status === 200) {
            const flashData = { type: "success", text: "Professional Info added successfully." }
            props.addFlashMessage(flashData)
          }
        })
        .catch((err) => console.log(" error =>", err))
    } catch (error) {
      console.log(error, "error catch")
    }
    handleNext()
  }

  const LinkedAccounts = () => {
    handleNext()
  }

  const ClearArrayCount = (i) => {
    if (i === 0) {
      setpersonalArrayCount(arraycount)
    }
    if (i === 1) {
      setProfessionalArrayCount(arraycount)
      setskillArrayCount(arraycount)
      seteducationArrayCount(arraycount)
      setcertificatecount(arraycount)
    }
    if (i === 5) {
      setserviceArrayCount(arraycount)
    }
    if (i === 4) {
      setreviewCount(arraycount)
    }
  }

  const MerchantValidateForm = () => {
    // const form_data = new FormData()
    // for (let index = 0; index < reviewData.length; index++) {
    //   const element = reviewData[index]
    //   form_data.append("merchant_reviews[]", JSON.stringify(element))
    // }
    // const headers = {
    //   headers: {
    //     Authorization: `Bearer ${store.getState().login.token}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
    // try {
    //   axios
    //     .post("freelancer/merchant-review", form_data, headers)
    //     .then((res) => {
    //       setIsbuttonLoading(false)
    //       const flashData = {
    //         type: "success",
    //         text: "Merchant review is added successfully.",
    //       }
    //       props.addFlashMessage(flashData)
    //       // console.log(res, "response")
    //     })
    //     .catch((err) => console.log(" error =>", err))
    // } catch (error) {
    //   // const flashData = {
    //   //   type: "error",
    //   //   text: "Merchant review is not added successfully",
    //   // }
    //   // props.addFlashMessage(flashData)
    //   console.log("error catch", error)
    // }

    handleNext()
  }

  const validateOnSaveMenu = () => {
    const reqFields = {}
    Object.keys(formData).forEach((key) => {
      const hasKey = serviceRequiredFields.hasOwnProperty([key])
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setserviceRequiredFields(reqFields)
    if (!isEmpty(reqFields)) {
      return false
    }
    if (formData.service_name && serviceMenu.length > 0) {
      handleSaveServiceMenu()
      return true
    } else {
      // const flashData = {
      //   type: "error",
      //   text: "No service menu added.",
      // }
      // props.addFlashMessage(flashData)
    }
  }


  const ServiceValidateForm = () => {
    const reqFields = {}
    Object.keys(formData).forEach((key) => {
      const hasKey = serviceRequiredFields.hasOwnProperty([key])
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setserviceRequiredFields(reqFields)
    if (!isEmpty(reqFields)) {
      return false
    }
    if (formData.service_name && serviceMenu.length > 0) {
      handleSaveServiceMenu()
      handleNext()
    } else {
      // const flashData = {
      //   type: "error",
      //   text: "No service menu added.",
      // }
      // props.addFlashMessage(flashData)
    }
  }

  const validatePortfolioForm = () => {
    if (isPortfolioDataExist === true) {
      handleNext()
      return true
    }
    else {
      checkPortfolioForm()
      return false
    }
  }

  const checkPortfolioForm = () => {
    let obj = {}
    let reqFields = true
    Object.keys(portfolioData).map((key) => {
      if (portfolioData[key].trim() === "") {
        obj[key] = "Required"
        reqFields = false
      }
      return obj
    })
    setPortfolioErr(obj)

    if (!reqFields || !portfolioThumbnail || portfolioFiles.length === 0) {
      validatePortfolioThumbnail()
      validatePortfolioFiles()
      // const flashData = { type: "error", text: "Fill the required fields." }
      // props.addFlashMessage(flashData)
      return false
    } else {
      return true
    }
  }

  const checkFaqForm = () => {
    let obj = {}
    let reqFields = true
    Object.keys(faqData).map((key) => {
      if (faqData[key].trim() === "") {
        obj[key] = "Required"
        reqFields = false
      }
      return obj
    })
    setFaqErr(obj)

    if (!reqFields) {
      // const flashData = { type: "error", text: "Fill the required fields." }
      // props.addFlashMessage(flashData)
      return false
    } else {
      return true
    }
  }

  const validateFaqForm = () => {
    history.push({
      pathname: "/freelancer-dashboard",
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    // console.log("one");
    if (!formSubmit) {
      return
    } else {
      setSubmitBtnTxt("Please Wait...")
    }

    // console.log(formData)
    // return;
    const formtag = document.querySelector("form")
    const form_data = new FormData(formtag)
    if (resume_files)
      form_data.append("resume_files", resume_files, resume_files.name)
    if (other_files)
      form_data.append("other_files", other_files, other_files.name)
    if (profileImage)
      form_data.append(
        "profileImage",
        profileImage,
        profileImage.name
      )

    Object.keys(formData).forEach((key) => {
      form_data.append(key, formData[key])
    })

    // console.log("form_data", form_data)
    axios
      .post("user/register", form_data, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          const progress = Math.round((loaded / total) * 100)
          // console.log("Uploaded Progress", progress)
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        // console.log("response back", res)
        const { data } = res
        const flashData = { type: "success", text: data.message }
        setSubmitBtnTxt("Submit Application")
        if (data.status !== 200) {
          flashData.type = "error"
        } else {
        }
        if (flashData.type !== "error") {
          setActiveStep(5)
          setFormData(blankData)
          setProfileImage(null)
        }
        props.addFlashMessage(flashData)
      })
      .catch((e) => {
        setSubmitBtnTxt("Submit Application")
        console.log("e: =>" + e)
      })
  }

  return (
    <div className=" mt-1  container apply_freelancer_steps">
      <div className="post-project justify-content-center row mx-0 px-3">
        <div className="pb-2 pb-md-5   col-lg-3 col-xl-3 px-0 pr-lg-2 ">
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            orientation={"vertical"}
            className="px-0 sevice_steper_alignment"
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
                      ClearArrayCount(i)
                      setActiveStep(i)
                    }}
                  >
                    <span>{label}</span>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </div>
        <div className="mb-5 col-lg-8 col-md-8 service_menu_tabpanls col-xl-8 p-4 card mt-3 ">
          <form encType="multipart/form-data" onSubmit={submitForm}>
            <div>
              {activeStep === steps.length ? (
                <div>Finish</div>
              ) : (
                  <div>
                    {getStepContent(activeStep)}
                    {activeStep === 8 ? null : (
                      <div className="clearfix pr-3 pl-3">
                        <Button
                          disabled={activeStep === 0}
                          onClick={() => handleBack(activeStep)}
                          variant="contained"
                          className="float-left custom_default_btn pervious_btn_service_menu"
                          type="button"
                        >
                          {activeStep === 0 ? "" : "Previous Step"}
                      </Button>
                        {activeStep === steps.length - 1 ? (
                          <Button
                            variant="contained"
                            color="primary"
                            className="float-right custom_primary_btn"
                            onClick={stepperValidation}
                            type="button"
                          >
                            Skip/Complete
                          </Button>
                        ) : (
                            <Button
                              onClick={() => handleBack(activeStep)}
                              variant="contained"
                              color="primary"
                              onClick={stepperValidation}
                              className="float-right custom_primary_btn next_btn_service_menu"
                              type="button"
                            >
                              {activeStep === 3 ? "Skip/Next" : "Next"}
                            </Button>

                          )}
                      </div>
                    )}
                  </div>
                )}
              <div className="w-100 mt-4">
                <div className="col-md-12 requied_fields_end_text">
                  <p className="small text-muted text-right">* Required Fields</p>
                </div>
              </div>
            </div>
          </form>
        </div>
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
