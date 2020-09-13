import React, { useState } from "react"
import { Button } from "@material-ui/core"
import CustomModal from "../../../shared/modal"
import { CustomTextfield } from "../../../shared/formComponents"
import { isEmpty } from "../../../../utils"
import { connect } from "react-redux"
import { store } from "../../../../Redux/store"
 
import {
  LoadAddaccounts,
 
} from "../actions"
const ContactModal = (props) => {
  // console.log(props, "props")
  
  //   console.log(EditMilesTone, "EditMilesTone")
const {handleChange,serviceData,serviceRequiredFields,validateAccount,handleVerify}=props
  return (
    <CustomModal {...props} title="Account security">
      <div>
        <p className="pb-2">
          Get in touch with De Castro through one of the following contact
          methods.
        </p>
        <div className="row">
          <div className="col-md-6">
            <p className="pb-2">
              <strong>Link*</strong>
            </p>
          </div>
          
        </div>
        <div className="row">
          <div className="col-md-8">
            <CustomTextfield
              required
              name="account"
              value={serviceData.account}
              onChange={handleChange}
              onBlur={validateAccount}
              placeholder="http://3.211.37.133/"
            error={serviceRequiredFields.account ? true : false}
            helperText={serviceRequiredFields.account}
            type="text"
            />
          </div>
         
          <div className="col-md-4 pt-2">
            <button
          onClick={handleVerify}
              type="button"
              class="btn btn-outline-primary "
            >
              Add
            </button>
          </div>
        </div>
        
      </div>
    </CustomModal>
  )
}
function LinkedAccounts({dispatchAddAccount,responseData}) {
  const [linkedinStatus, setlinkedinStatus] = useState(false)
  const [facebooktStatus, setfacebookStatus] = useState(false)

  const [twitterStatus, settwitterStatus] = useState(false)
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
  
  const [modalContact, setModalContact] = React.useState(false)
  const blankData = {
    account:"",
}
const [serviceData, setserviceData] = useState(blankData)

const [serviceRequiredFields, setserviceRequiredFields] = useState({
  account: "",
})
const handleChange = (e) => {
  let value = e.target.value
  setserviceData({ ...serviceData, [e.target.name]: value })
}

// validateAccount

const validateAccount = (e) => {
  //  const valid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(serviceData.email.trim())
   if(!serviceData.account.length ){
    const msg = "required"
    setserviceRequiredFields({ ...serviceRequiredFields, account: msg })
    // setFNErr("Please Enter Name"); 
  }

  setserviceRequiredFields({ ...serviceRequiredFields, account: "" })
  setserviceData({ ...serviceData, account: serviceData.account.trim()})
  return true
}

// EmailValidation


// contactTogglModal
  const contactTogglModal = () => {
    setModalContact(!modalContact)
  }


// handleverify

  const handleVerify=()=>{
    
    const reqFields = {}
    Object.keys(serviceData).forEach((key) => {
      const hasKey = serviceRequiredFields.hasOwnProperty([key])
      if (hasKey && !serviceData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setserviceRequiredFields(reqFields)
    if (!isEmpty(reqFields) ) {
      // alert("wjni")
      const msg = "required"
      setserviceRequiredFields({ ...serviceRequiredFields, account: msg })
      return false
    }
    if (serviceData.account ) {
      handleSave()
    } else {
      
    }
  }
// handlesave
console.log(responseData,"responseData responseData")
  const handleSave=()=>{
    if(serviceData.account){
      const form_data = new FormData()
   
      form_data.append("facebook", serviceData.account)
      // form_data.append("twitter", serviceData.account)
      // form_data.append("linkedin", serviceData.account)


      dispatchAddAccount({form_data:form_data})
      // window.location.reload(true);
    }
  }
  return (
    <>
      <ContactModal
   handleChange={handleChange}
   serviceRequiredFields={serviceRequiredFields}
   validateAccount={validateAccount}
    modal={modalContact}
    serviceData={serviceData}
    toggleModal={contactTogglModal}
    handleVerify={handleVerify}
  />
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto account_setting_body_color p-3">
        <div className="w-100   pb-5 mx-auto form_control_divs row">
      <div className="col-md-12">
        <div className="w-100 pt-3  ">
          <h2 className="h2 titles__main-title">
            <strong>Linked Accounts</strong>
          </h2>
          <h5>
            Taking the time to verify and link your accounts can upgrade your
            credibility and help us provide
          </h5>
        </div>
      </div>
      <div className="col-md-12">
        <h6 className="  mt-4 mb-3">
          Your Social Presence* <span>Private</span>
        </h6>
      </div>

      {responseData && responseData.user_profile ?
      <>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <div className="social_icons_verify">
              <i class="fab fa-linkedin linkedin_icon"></i>
              <p className="social_icons_detail">LinkedIn</p>
            </div>
          </div>
          {responseData.user_profile.linkedin  !==null ? (
            <div className="col-md-6 text-right">
              <button type="button" class="btn btn-sm highlighted_success_btn">
                Connected
              </button>
            </div>
          ) : (
            <div className="col-md-6 text-right">
              <Button
                onClick={contactTogglModal}
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
          {responseData.user_profile.facebook  !== null ? (
            <div className="col-md-6 text-right">
              <button type="button" class="btn btn-sm highlighted_success_btn">
                Connected
              </button>
            </div>
          ) : (
            <div className="col-md-6 text-right">
              <Button
                onClick={contactTogglModal}
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
          {responseData.user_profile.twitter !==null ? (
            <div className="col-md-6 text-right">
              <button type="button" class="btn btn-sm highlighted_success_btn">
                Connected
              </button>
            </div>
          ) : (
            <div className="col-md-6 text-right">
              <Button
                onClick={contactTogglModal}
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
      </>
:""
          }

    </div>
  
        </div>
      </div>
    </div>
    </>
    )
}
function mapDispatchToProps(dispatch) {
  return {
   
      dispatchAddAccount: (payload) =>
      dispatch(LoadAddaccounts(payload)),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(LinkedAccounts)
