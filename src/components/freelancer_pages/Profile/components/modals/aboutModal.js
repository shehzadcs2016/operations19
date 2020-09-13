import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "../../../../../config/axios";
import { store } from "../../../../../Redux/store";
import { UploadSingleFile, UploadFiles } from "../../../../shared/formComponents";
import { connect } from "react-redux";
import addFlashMessage from "../../../../../Redux/actions/flashMessages";
import {
  CustomSelect,
  CustomTextfield,
} from "../../../../shared/formComponents"
import { getCountries } from "../../../../shared/countries"


export const AboutMeModal = (props) => {
  const [formData, setFormData] = useState({
    user_id: store.getState().login.id,
    first_name: "",
    last_name: "",
    location: "",
    profile_image: "",
    aboutme: "",
    expertise: "",
    user_skills: "",
    profile_link: "",
    skype_id: "",
    phone_number: "",
    country_id: "",
  });

  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [livingCountryErr, setLivingCountryErr] = useState("");
  const [countries, setCountries] = useState([]);

  const formChangeHandler = (e) => {
    if (e.target.name === "phone_number") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.replace(/[^\d+]/, ""),
      })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

  };

  const validateFirstName = (e) => {
    if (formData.first_name.length < 1) {
      setFirstNameErr("First Name is required")
      return false
    } else if (formData.first_name.length < 2) {
      setFirstNameErr("First Name is Too short")
      return false
    }
    setFirstNameErr("")
    return true
  }

  const validateLastName = (e) => {
    if (formData.last_name.length < 1) {
      setLastNameErr("Last Name is required")
      return false
    } else if (formData.last_name.length < 2) {
      setLastNameErr("Last Name is Too short")
      return false
    }
    setLastNameErr("")
    return true
  }


useEffect(() => {
  ; (async () => {
    try {
      const res = await getCountries()
      setCountries(res)
    } catch (err) {
      console.log(err)
    }
  })()
}, [])

useEffect(() => {
  setFormData({
    user_id: store.getState().login.id,
    freelancer_profile_id: store.getState().login.id,
    first_name: props.aboutme_data.first_name || "",
    last_name: props.aboutme_data.last_name || "",
    location: props.aboutme_data.location || "",
    aboutme: props.aboutme_data.aboutme || "",
    expertise: props.aboutme_data.expertise || "",
    user_skills: props.aboutme_data.skills || "",
    profile_link: props.aboutme_data.profile_link || "",
    skype_id: props.user_profile.skype_id || "",
    phone_number: props.user_profile.phone_number || "",
    address: props.user_profile.address || "",
    country_id: props.user_profile.country_id || "",
  });

}, [props]);

const closeModal = () => {
  props.setismodalStatus(true)
  props.dispatchFetchFreelancerProfile({
    profileId: store.getState().login.id,
  })
  if (props.ismodalStatus === false)
    props.toggleModal()

  setisSubmitting(false)
}
console.log(props.aboutme_data, "props")
const profileImageHandler = (e) => {
  let name = e.target.name
  const file = e.target.files[0]
  setFormData({ ...formData, [name]: file })
}

const validateCountryLiving = () => {
  if (!formData.country_id) {
    setLivingCountryErr("Country is required.")
    return false
  }
  setLivingCountryErr("")
  return true
}

const handleSubmit = async () => {
  const validFirstName = validateFirstName()
  const validLastName = validateLastName()
  if (
    !validFirstName ||
    !validLastName ||
    !formData.skype_id ||
    !formData.phone_number
  ) {
    props.addFlashMessage({
      type: "info",
      text: "Please fill the required fields",
    })
    setisSubmitting(false)
    return
  }
  const form_data = new FormData();

  Object.keys(formData).forEach((key) => {
    return form_data.append(key, formData[key]);
  });
  await updateAboutMe(form_data)
}

const updateAboutMe = async (form_data) => {
  console.log("update here")
  form_data.append("_method", "patch")
  try {
    const url = `freelancer/profile/${form_data.get("user_id")}`
    const freelancer_profile = await axios.post(url, form_data, {
      headers: { Authorization: `Bearer ${store.getState().login.token}` },
    })
    console.log("freelancer profile", freelancer_profile.data)
    if (freelancer_profile.data.status === 200) {
      closeModal()
      props.addFlashMessage({
        type: "success",
        text:
          freelancer_profile.data.message || "Profile Updated successfully",
      })
    } else {
      props.addFlashMessage({
        type: "info",
        text: freelancer_profile.data.message || "Error Occured",
      })
    }
    // setisSubmitting(false);
  } catch (err) {
    console.log("ERROR!!!!" + err, err.data)
    props.addFlashMessage({
      type: "error",
      text: err.data.message || "Error Occured" + err,
    })
  }
};
let profileInputRef = null;
return (
  <div>
    <div className="row">
      <div className="offset-md-4 col-md-2">
        <input
          type="file"
          ref={input => profileInputRef = input}
          accept="image/*"
          label="Replace"
          name="profile_image"
          onChange={profileImageHandler}
          fileName={formData.profile_image ? formData.profile_image.name : null}
        />
        <button onClick={() => profileInputRef.click()} className="btn">Replace</button>
      </div>
      <div className="col-md-2">
        <Button>Remove</Button>
      </div>
    </div>
    <div style={{ display: "inline-flex" }} className="mb-2">

    </div>
    <div className="row">
      <div className="col-md-6">
        <label>First Name* <span className="text-muted small"><i>Private</i></span></label>
        <CustomTextfield
          required
          name="first_name"
          value={formData.first_name}
          onChange={formChangeHandler}
          onBlur={validateFirstName}
          error={firstNameErr ? true : false}
          helperText={firstNameErr}
        />
      </div>
      <div className="col-md-6">
        <label>Last Name* <span className="text-muted small"><i>Private</i></span></label>
        <CustomTextfield
          required
          value={formData.last_name}
          name="last_name"
          onChange={formChangeHandler}
          onBlur={validateLastName}
          error={lastNameErr ? true : false}
          helperText={lastNameErr}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label>What's your phone number?*</label>
        <CustomTextfield
          required
          name="phone_number"
          value={formData.phone_number}
          onChange={formChangeHandler}
          // error={contactRequiredFields.phone_number ? true : false}
          // helperText={contactRequiredFields.phone_number}
          inputProps={{ maxlength: 15 }}
        />
      </div>
      <div className="col-md-12 mt-3 text-capitalize">
        <label>Country*</label>
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
      <div className="col-md-12 mt-3">
        <label>Location*</label>
        <CustomTextfield
          required
          name="location"
          value={formData.location}
          onChange={formChangeHandler}
        // error={serviceRequiredFields.aboutService ? true : false}
        />
      </div>
      <div className="col-md-12 mt-3">
        <label>About me*</label>
        <CustomTextfield
          required
          multiline
          rows="5"
          name="aboutme"
          value={formData.aboutme}
          onChange={formChangeHandler}
        // error={serviceRequiredFields.aboutService ? true : false}
        />
      </div>
      <div className="col-md-4 mt-3">
        <label>Language You Know* <span className="text-muted small"><i>Private</i></span></label>
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
      <div className="col-md-4 mt-3">
        <label>Level of Proficiency* <span className="text-muted small"><i>Private</i></span></label>
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
      <div className="col-md-4 p-5 mt-3">
        <Button className="btn ">Add</Button>
      </div>
    </div>
  </div>
);
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}
export default connect(mapStateToProps, { addFlashMessage })(AboutMeModal)
