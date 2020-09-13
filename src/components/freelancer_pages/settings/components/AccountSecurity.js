import React,{useState} from "react"
import CustomModal from "../../../shared/modal"
import { CustomTextfield } from "../../../shared/formComponents"
import { isEmpty } from "../../../../utils"
import { connect } from "react-redux"
import { store } from "../../../../Redux/store"

import {
  LoadAddEmail,
 
} from "../actions"
const ContactModal = (props) => {
  // console.log(props, "props")
  
  //   console.log(EditMilesTone, "EditMilesTone")
const {handleChange,serviceData,serviceRequiredFields,validateEmail,handleVerify}=props
  return (
    <CustomModal {...props} title="Milestones">
      <div>
        <p className="pb-2">
          Get in touch with De Castro through one of the following contact
          methods.
        </p>
        <div className="row">
          <div className="col-md-6">
            <p className="pb-2">
              <strong>Email*</strong>
            </p>
          </div>
          
        </div>
        <div className="row">
          <div className="col-md-8">
            <CustomTextfield
              required
              name="email"
              value={serviceData.email}
              onChange={handleChange}
              onBlur={validateEmail}
              placeholder="example@gmail.com"
            error={serviceRequiredFields.email ? true : false}
            helperText={serviceRequiredFields.email}
            type="email"
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
 function Security({dispatchAddEmail}) {
  const [modalContact, setModalContact] = React.useState(false)
  const blankData = {
    email:"",
}
const [serviceData, setserviceData] = useState(blankData)

const [serviceRequiredFields, setserviceRequiredFields] = useState({
  email: "",
})
const handleChange = (e) => {
  let value = e.target.value
  setserviceData({ ...serviceData, [e.target.name]: value })
}

// validateEmail

const validateEmail = (e) => {
   const valid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(serviceData.email.trim())
  if (serviceData.email.length && !valid) {
    const msg = "You have entered an invalid email address!"
    setserviceRequiredFields({ ...serviceRequiredFields, email: msg })
    // setFNErr("Please Enter Name");
    return false
  }else if(!serviceData.email.length ){
    const msg = "required"
    setserviceRequiredFields({ ...serviceRequiredFields, email: msg })
    // setFNErr("Please Enter Name"); 
  }

  setserviceRequiredFields({ ...serviceRequiredFields, email: "" })
  setserviceData({ ...serviceData, email: serviceData.email.trim() })
  return true
}

// EmailValidation
const EmailValidation = () => {
  const valid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(serviceData.email.trim())
if(serviceData && !valid){
  const msg = "You have entered an invalid email address!"
    setserviceRequiredFields({ ...serviceRequiredFields, email: msg })
    return false

}
 else if (!serviceData.email.length) {
  const msg = "required"
  setserviceRequiredFields({ ...serviceRequiredFields, email: msg })
  return false
    
  }
  setserviceRequiredFields({ ...serviceRequiredFields, email: "" })
  setserviceData({ ...serviceData, email: serviceData.email.trim() })

  return true
}

// contactTogglModal
  const contactTogglModal = () => {
    setserviceData({email:""})
    setModalContact(!modalContact)
  }


// handleverify

  const handleVerify=()=>{
    const eml=EmailValidation()
    const reqFields = {}
    Object.keys(serviceData).forEach((key) => {
      const hasKey = serviceRequiredFields.hasOwnProperty([key])
      if (hasKey && !serviceData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setserviceRequiredFields(reqFields)
    if (!isEmpty(reqFields)) {
      // alert("wjni")
      const msg = "required"
      setserviceRequiredFields({ ...serviceRequiredFields, email: msg })
      return false
    }
    if(!eml){
      const msg = "You have entered an invalid email address!"
        setserviceRequiredFields({ ...serviceRequiredFields, email: msg })
    }
    if (serviceData.email ) {
      handleSave()
    } else {
      
    }
  }
// handlesave

  const handleSave=()=>{
    if(serviceData.email){
      if(serviceData.email===store.getState().login.email){
        dispatchAddEmail({email:serviceData.email})
      }
      else{
        const msg = "You have entered an invalid email address!"
        setserviceRequiredFields({ ...serviceRequiredFields, email: msg })
      }
    }
  }
  return (
    <>
    <ContactModal
   handleChange={handleChange}
   serviceRequiredFields={serviceRequiredFields}
   validateEmail={validateEmail}
    modal={modalContact}
    serviceData={serviceData}
    toggleModal={contactTogglModal}
    handleVerify={handleVerify}
  />
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto account_setting_body_color p-3">
        <div className="w-100  pb-5 mx-auto form_control_divs row">
      <div className="col-md-12">
        <div className="w-100 pt-3 pb-5">
          <h2 className="h2 titles__main-title">
            <strong>Account Security</strong>
          </h2>
          <p>
            It is a digital payment platform that allows users to transfer money
            into an integrated wallet via mobile money, internet banking, credit
            and debit cards etc.
          </p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-10 mt-2">
            <h5>
              {" "}
              <span className="verified_mail_icon mr-2">
                <i class="far fa-envelope"></i>
              </span>{" "}
              Email Verification*
            </h5>
          </div>
          <div className="col-md-2">
            {/* <Button variant="outlined" color="primary">
              Verify
            </Button> */}
            {/* highlighted_success_btn */}
            <button type="button" onClick={contactTogglModal} class="btn btn-sm btn-info">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  
        </div>
      </div>
    </div>
    </>
    )
}

// const mapStateToProps = createStructuredSelector({
//   EditproposedServices: makeSelectEditproposedServices(),
// })
function mapDispatchToProps(dispatch) {
  return {
   
      dispatchAddEmail: (payload) =>
      dispatch(LoadAddEmail(payload)),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Security)
