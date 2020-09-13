import React, { useState, useEffect } from "react"
import ServiceButton from "../../shared/serviceButton"

import HelpIcon from "@material-ui/icons/Help"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@material-ui/core/styles"
import CustomModal from "../../shared/modal"
import { Box, Typography, Tab, Tabs, AppBar, Button } from "@material-ui/core"
import { Popover } from "../../shared/formComponents"
import { SelectMenu } from "../../shared/SelectMenu"
import DropDownMenu from "../../shared/dropdownMenu"
import { makeSelectEditProfile } from "./selectors"
import PersonalInfo from "./components/PersonalInfo"
import ProfessionalInfo from "./components/ProfessionalInfo"
import LinkedAccounts from "./components/LinkedAccounts"
import MerchantReviews from "./components/MerchantReviews"
import AccountSecurity from "./components/AccountSecurity"
import ServiceMenu from "./components/ServiceMenu"
import PortfolioTab from "./components/portfolioTab"
import FAQ from "./components/Faq"
import axios from "../../../config/axios"
import { store } from "../../../Redux/store"
import AvailableProjectsLoader from "./loaders"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { fetchEditProfile } from "./actions"
import DefaultProfile from "../images/avatar.png"
import { isEmpty } from "../../../utils"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

function AccountSetting({ dispatchFetchEditProfile, EditProfile }) {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  const [category, setcategory] = useState({
    category_id: "",
    sub_category_id: "",
  })
  const [expierence_level, setexperiences_options] = useState([])
  const [best_describe_options, setbest_describe_options] = useState([])
  const [stage_business_options, setstage_business_options] = useState([])
  const [peoplework_options, setpeoplework_options] = useState([])
  const [countryCollege_options, setcountryCollege_options] = useState([])
  const [title_options, settitle_options] = useState([])
  const [yearofgraduation_options, setyearofgraduation_options] = useState([])
  const [yearGgraduationErr, setyearGgraduationErr] = useState("")
  const [CategoryErr, setCategoryErr] = useState("")
  const [proficiency_level_options, setproficiency_level_options] = useState([])
  const [languages_options, setlanguages_options] = useState([])
  const [Service_type_options, setService_type] = useState([])
  const [subCategoryErr, setsubCategoryErr] = useState("")
  const [experienceLevel, setExperienceLevel] = useState("");

  const handleCategoryMenu = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setcategory({ ...category, [e.target.name]: value })
  }
  const blankData = {
       first_name: "",
    language: "",
    levelofproficiency: "",
    year: "",
    service_name: "",
    serviceproposal_name: "",

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
  const [optionDescribe, setoptionDescribe] = useState("")
  const [describebusinessStage, setdescribebusinessStage] = useState("")

  const [aboutRequiredFields, setAboutRequiredFields] = useState({
    first_name: "",
    description: "",
    // service_name: "",
    // description: "",
    // fixed_price: "",
    // hourly_fee: "",
    // total: "",
  })
  const [formData, setFormData] = useState(blankData)
  const [countries, setCountries] = useState([])
  const [livingCountryErr, setLivingCountryErr] = useState("")
  const [categories, setCategories] = useState([])
  const [sub_categories, setSubCategories] = useState([])
  const [categoryData, setcategoryData] = useState([])
  const [frquency_options, setfrquency_options] = useState([])
  const [skillsData, setSkillsData] = useState([]);
  const [educationData, setEducationData] = useState([])
  const [CountryCollegeErr, setCountryCollegeErr] = useState("")
  const [profilePreview, setProfilePreview] = useState(DefaultProfile);
  const [langaugesErr, setLanguagesErr] = useState("")
  const [serviceRequiredFields, setserviceRequiredFields] = useState({
    service_name: "",
  })
  

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
  const [profileImage, setProfileImage] = useState(null)
  const [descErr, setdescErr] = useState("")


  const [skillTitleErr, setSkillTitleErr] = useState("")
  const [experienceLevelErr, setExperienceLevelErr] = useState("")
  const [skillTitle, setSkillTitle] = useState("")
  const [portfolioErr, setPortfolioErr] = useState({
    project_title: "",
    project_overview: "",
  })
  const [TitleErr, setTitleErr] = useState("")

  const [faqData, setFaqData] = useState({
    question: "",
    answer: "",
  })
  const [faqErr, setFaqErr] = useState({
    question: "",
    answer: "",
  })

  const [portfolioData, setPortfolioData] = useState(
    {
      project_title: "",
      project_overview: "",
    });
  const [portfolioFiles, setPortfolioFiles] = useState([])
  const [portfolioThumbnail, setPortfolioThumbnail] = useState("")
  const [portfolioFilesErr, setPortfolioFilesErr] = useState("")
  const [portfolioThumbnailErr, setPortfolioThumbnailErr] = useState("")
  const [isPortfolioDataExist, setIsPortfolioDataExist] = useState(false)
  const [companySizeErr, setCompanySizeErr] = useState("")
  const [companySize, setCompanySize] = useState(null)
  const [categoryValue, setCategoryValue] = useState("");
  const [subCategoryValue, setSubCategoryValue] = useState("")
  const [certificateData, setCertificateData] = useState([])
  const [profileErr, setprofileErr] = useState("")
  const [displaySTFNErr, setDisplaySTFNErr] = useState("")
  const [displaySTFN, setDisplaySTFN] = useState("")
  const [proficiencyValue, setProficiencyValue] = useState("");
  const [ProficiencyErr, setProficiencyErr] = useState("")
  var [isbuttonLoading, setIsbuttonLoading] = useState(false)
  
  const [educationErr, setEducationErr] = useState({
    institute_country: "",
    institute_name: "",
    title: "",
    major: "",
    year: "",
  })
  const [profRequiredFields, setprofRequiredFields] = useState({
    company: "",
    title: "",
    institute_name: "",
    major: "",
    certificate: "",
    certified_from: "",
  })
  const [languageValue, setLanguageValue] = useState("");

  const [certificateErr, setCertificateErr] = useState({
    certificate: "",
    certified_from: "",
    year: "",
  })
  const [languagesData, setLanguagesData] = useState([]); //contains language and proficiency value 
  const [professionalWebsite, setProfessionalWebsite] = useState(null)
  const [professionalWebsiteErr, setProfessionalWebsiteErr] = useState(null)
  const handleProfessionalWebsite = (e) => {
    setProfessionalWebsite(e.target.value)
  }
  const handleLanguageAdd = () => {
    // if (!languageValue) {
    //   setLanguagesErr("Required")
    //   return false
    // } else {
    //   setLanguagesErr("")
    // }
    // if (!proficiencyValue) {
    //   setProficiencyErr("Required")
    //   return false
    // } else {
    //   setProficiencyErr("")
    // }
    // const found = languagesData.some(el => el.language_id === languageValue);
    // if (!found) {
    //   setLanguagesErr("")
    //   setLanguageValue("")
    //   setProficiencyValue("")
    //   setLanguagesData([...languagesData, { "language_id": languageValue, "proficiency_level": proficiencyValue }])
    // }
    // else {
    //   setLanguagesErr("Already exist")
    // }
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
      setLanguagesData([...languagesData, { "language_id": languageValue, "proficiency_level": proficiencyValue }])
    }
    else {
      setLanguagesErr("Already exist")
    }
  }
  
  const handleDeleteLanguagesData = (id) => {

    setLanguagesData(languagesData.filter(el => el.language_id !== id))
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
  const [categoriesData, setCategoriesData] = useState([]); //contains freelancer categories and subCategories 
  const handleCategoryAdd = () => {
    if (!categoryValue) {
      setCategoryErr("Required")
      return false
    } else {
      setCategoryErr("")
    }
    if (!subCategoryValue) {
      setsubCategoryErr("Required")
      return false
    } else {
      setsubCategoryErr("")
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
      setsubCategoryErr("Already exist")
    }
  }
  const handleDeleteCategoriesData = (id) => {
    setCategoriesData(categoriesData.filter(el => el.sub_category_id !== id))
  }

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
  const handleTab = (event, newValue) => {
    setValue(newValue)
  }
  const validateCountry = () => {
    if (!educationData.institute_country) {
      setCountryCollegeErr("Required")
      return false
    }

    setCountryCollegeErr("")
    return true
  }
  const handleChangeIndex = (index) => {
    setValue(index)
  }
  const handleCompany = (e) => {
    setCompanySize(e.target.value)
  }
  console.log(Service_type_options, "service_type_options")
  const validateCompanySize = (e) => {
    const isValid = /^[0-9\b]+$/.test(companySize)
    if (companySize && !isValid) {
      const msg =
        "Cann't be empty & only contains digits"
      setCompanySizeErr(msg)
      return false
    } else if (companySize === "0") {
      const msg = "Required"
      setCompanySizeErr(msg)
      return false
    }
    setCompanySizeErr("")
    setCompanySize(companySize)
    return true
  }
  useEffect(() => {
    // alert(store.getState().login.id)
    dispatchFetchEditProfile({ id: store.getState().login.id })

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
        const servicetype = Object.keys(res.data.data["service_types"])
        setService_type(
          servicetype.map((key) => {
            return {
              value: key,
              label: res.data.data["service_types"][key],
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
        const frequency = Object.keys(res.data.data["service_frequency"])
        setfrquency_options(
          frequency.map((key) => {
            return {
              value: key,
              label: res.data.data["service_frequency"][key],
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
        const year_keys = Object.keys(res.data.data["title"])
        setyearofgraduation_options(
          year_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["title"][key],
            }
          })
        )
      })

      .catch((err) => console.log("Graduation error =>", err))
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

    const getCountry = async () => {
      try {
        const countryRes = await axios.get("country")
        setCountries(countryRes.data.data)
      } catch (err) {
        // console.log(err.response.data.message);
      }
    }
    getCountry()
  }, [value])

  const handleChange = (e) => {
    let value = e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }
  const validateTitle = () => {
    if (!educationData.title) {
      setTitleErr("Required")
      return false
    }

    setTitleErr("")
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
  const validateFN = (e) => {
    const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
      formData.first_name.trim()
    )
    if (formData.first_name.trim() && !isValid) {
      const msg = "Name should not contain any digit or special characters"
      setAboutRequiredFields({ ...aboutRequiredFields, first_name: msg })
      return false
    } else if (!formData.first_name.length) {
      const msg = "full Name is required"
      setAboutRequiredFields({ ...aboutRequiredFields, first_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setAboutRequiredFields({ ...aboutRequiredFields, first_name: "" })
    setFormData({ ...formData, first_name: formData.first_name.trim() })
    return true
  }
  const validateProfessionalWebsite = () =>{
    if(!professionalWebsite){
      setProfessionalWebsiteErr("Required")
      return false
    }else{
      setProfessionalWebsiteErr("")
      return true
    }
  }

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const validatedescription = () => {
    if (!formData.description) {
      setdescErr("Required")
      return false
    }

    setdescErr("")
    return true
  }
  const validateCountryLiving = () => {
    if (!formData.country_id) {
      setLivingCountryErr("Country is required.")
      return false
    }

    setLivingCountryErr("")
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
  const validateCategory = () => {
    if (!category.category_id) {
      setCategoryErr("Required")
      return false
    }

    setCategoryErr("")
    return true
  }

  const validateSubCategory = () => {
    if (!category.sub_category_id) {
      setsubCategoryErr("subcategory Required")
      return false
    }

    setsubCategoryErr("")
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


  // const validateLanguages = () => {
  //   if (!language.language_id) {
  //     setlanguagesErr("Required")
  //     return false
  //   }
  //   setlanguagesErr("")
  //   return true
  // }
  // const validateProficiency = () => {
  //   if (!language.proficiency_level) {
  //     setProficiencyErr("Required")
  //     return false
  //   }
  //   setProficiencyErr("")
  //   return true
  // }
  const addCategory = () => {
    // e.preventDefault()
    // alert("shehzad")
    // console.log(language, "language")
    setcategoryData((prevState) => [...prevState, category])

    // skillsData.push(skillData)
  }

  const validatePortfolioForm = () => {
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
      const flashData = { type: "error", text: "Fill the required fields." }
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
      const flashData = { type: "error", text: "Fill the required fields." }
      // props.addFlashMessage(flashData)
      return false
    } else {
      return true
    }
  }
  const handleSkillDelete = (id) => {
    setSkillsData(skillsData.filter(el => el.title !== id))
  }
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
  return (
    <div className="container-fluid">
      <div className="w-100">
        <AppBar
          position="static"
          color="default"
          style={{
            boxShadow: "none",
            backgroundColor: "#F1F1F1",
            borderBottom: "solid 1px lightgray",
          }}
        >
          <Tabs
            className="profile_setting_tabs_color"
            value={value}
            onChange={handleTab}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Personal Info" {...a11yProps} />
            <Tab label="Professional Info" {...a11yProps} />
            <Tab label="Linked Accounts" {...a11yProps} />
            <Tab label="Merchant Reviews" {...a11yProps} />
            <Tab label="Account Security" {...a11yProps} />
            <Tab label="Service Menu " {...a11yProps} />
            <Tab label="Portfolio " {...a11yProps} />
            <Tab label="FAQs" {...a11yProps} />
          </Tabs>
        </AppBar>
        {EditProfile && EditProfile ? (
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <PersonalInfo
                responseData={EditProfile}
                formData={formData}
                setFormData={setFormData}
                languageValue={languageValue}
                setLanguageValue={setLanguageValue}
                ProficiencyErr={ProficiencyErr}
                handleChange={handleChange}
                validateFN={validateFN}
                aboutRequiredFields={aboutRequiredFields}
                formChangeHandler={formChangeHandler}
                validateCountryLiving={validateCountryLiving}
                setDisplaySTFN={setDisplaySTFN}
                countries={countries}
                languages_options={languages_options}
                proficiency_level_options={proficiency_level_options}
                
                livingCountryErr={livingCountryErr}
                DropDownMenu={DropDownMenu}
                profileImage={profileImage}
                setProfileImage={setProfileImage}
                ServiceButton={ServiceButton}
                profilePreview={profilePreview}
                setProfilePreview={setProfilePreview}
                profileErr={profileErr}
                displaySTFNErr={displaySTFNErr}
                setDisplaySTFNErr={setDisplaySTFNErr}
                handleLanguageAdd={handleLanguageAdd}
                validateLN={validateLN}
                validatedescription={validatedescription}
                descErr={descErr}
                langaugesErr={langaugesErr}
                languagesData={languagesData}
                proficiencyValue={proficiencyValue}
                setProficiencyValue={setProficiencyValue}
                handleDeleteLanguagesData={handleDeleteLanguagesData}
                setLanguagesErr={setLanguagesErr}
                setProficiencyErr={setProficiencyErr}
                setAboutRequiredFields={setAboutRequiredFields}
                setprofileErr={setprofileErr}
                isEmpty={isEmpty}
                setIsbuttonLoading={setIsbuttonLoading}
                isbuttonLoading={isbuttonLoading}
              />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ProfessionalInfo
                value={value}
                responseData={EditProfile}
                formData={formData}
                setCompanySize={setCompanySize}
                validateCategory={validateCategory}
                validateSubCategory={validateSubCategory}
                setProfessionalWebsite={setProfessionalWebsite}
                CategoryErr={CategoryErr}
                subCategoryValue={subCategoryValue}
                handleProfessionalWebsite={handleProfessionalWebsite}
                validateProfessionalWebsite={validateProfessionalWebsite}
                setSubCategoryValue={setSubCategoryValue}
                validateCompanySize={validateCompanySize}
                validateTitle={validateTitle}
                subCategoryErr={subCategoryErr}
                CountryCollegeErr={CountryCollegeErr}
                professionalWebsite={professionalWebsite}
                professionalWebsiteErr={professionalWebsiteErr}
                skillTitle={skillTitle}
                TitleErr={TitleErr}
                isbuttonLoading={isbuttonLoading}
                setIsbuttonLoading={setIsbuttonLoading}
                setSkillTitle={setSkillTitle}
                skillsData={skillsData}
                setFormData={setFormData}
                handleAddSkill={handleAddSkill}
                selectMenuHandler={selectMenuHandler}
                handleCategoryMenu={handleCategoryMenu}
                validateMajor={validateMajor}
                validateFN={validateFN}
                setCategoryErr={setCategoryErr}
                setSubCategoryErr={setsubCategoryErr}
                setExperienceLevelErr={setExperienceLevelErr}
                setSkillTitleErr={setSkillTitleErr}
                handleSkillDelete={handleSkillDelete}
                categories={categories}
                setoptionDescribe={setoptionDescribe}
                setdescribebusinessStage={setdescribebusinessStage}
                handleCategoryAdd={handleCategoryAdd}
                handleCompany={handleCompany}
                title_options={title_options}
                setCertificateErr={setCertificateErr}
                certificateErr={certificateErr}
                categoryData={categoryData}
                categoryValue={categoryValue}
                certificateData={certificateData}
                setEducationData={setEducationData}
                setCategoryValue={setCategoryValue}
                experienceLevelErr={experienceLevelErr}
                sub_categories={sub_categories}
                expierence_level={expierence_level}
                skillTitleErr={skillTitleErr}
              
                profRequiredFields={profRequiredFields}
                validateYearOfGraduation={validateYearOfGraduation}
                validateCollege={validateCollege}
                validateCountry={validateCountry}
                handleDeleteCategoriesData={handleDeleteCategoriesData}
                categoriesData={categoriesData}
                setyearGgraduationErr={setyearGgraduationErr}
                aboutRequiredFields={aboutRequiredFields}
                formChangeHandler={formChangeHandler}
                experienceLevel={experienceLevel}
                setExperienceLevel={setExperienceLevel}
                validateCountryLiving={validateCountryLiving}
                educationData={educationData}
                countries={countries}
                languages_options={languages_options}
                companySize={companySize}
                proficiency_level_options={proficiency_level_options}
                validateSubCategory={validateSubCategory}
                livingCountryErr={livingCountryErr}
                best_describe_options={best_describe_options}
                stage_business_options={stage_business_options}
                SelectMenu={SelectMenu}
                DropDownMenu={DropDownMenu}
                ServiceButton={ServiceButton}
                optionDescribe={optionDescribe}
                describebusinessStage={describebusinessStage}
                yearGgraduationErr={yearGgraduationErr}
                yearofgraduation_options={yearofgraduation_options}
                companySizeErr={companySizeErr}
                educationErr={educationErr}
                setCertificateData={setCertificateData}
                setEducationErr={setEducationErr}
              />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <LinkedAccounts 
                responseData={EditProfile}
                />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <MerchantReviews
                ServiceButton={ServiceButton}
                responseData={EditProfile}
                setIsbuttonLoading={setIsbuttonLoading}
        
              />
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <AccountSecurity />
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              <ServiceMenu
                SelectMenu={SelectMenu}
                selectMenuHandler={selectMenuHandler}
                categories={categories}
                sub_categories={sub_categories}
                responseData={EditProfile}
                ServiceButton={ServiceButton}
                Button={Button}
                handleChange={handleChange}
                Service_type_options={Service_type_options}
                formData={formData}
                frquency_options={frquency_options}
                setFormData={setFormData}
               
              />
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              <PortfolioTab
                setPortfolioErr={setPortfolioErr}
                portfolioErr={portfolioErr}
                setPortfolioData={setPortfolioData}
                portfolioData={portfolioData}
                setPortfolioFiles={setPortfolioFiles}
                portfolioFiles={portfolioFiles}
                isbuttonLoading={isbuttonLoading}
                setIsbuttonLoading={setIsbuttonLoading}
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
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
              <FAQ
                setFaqData={setFaqData}
                faqData={faqData}
                faqErr={faqErr}
                setFaqErr={setFaqErr}
                checkFaqForm={checkFaqForm}
                setIsbuttonLoading={setIsbuttonLoading}
                isbuttonLoading={isbuttonLoading}
              />
            </TabPanel>
          </SwipeableViews>
        ) : (
            <AvailableProjectsLoader />
          )}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  EditProfile: makeSelectEditProfile()
})
function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchEditProfile: (payload) => dispatch(fetchEditProfile(payload)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting)
