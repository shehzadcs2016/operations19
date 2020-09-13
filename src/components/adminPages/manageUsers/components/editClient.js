import React, {useState} from "react";
import CustomModal from "../../../shared/modal";
import { Textfield, PasswordField, } from "../../../shared/formComponents";
import { isEmpty, validate } from "../../../../utils";

const EditClient = (props) => {
   const [formData, setFormData] = useState({
      // first_name: "",
      // last_name: "",
      email: "",
      password: "",
      showPassword: false,
      showConfirmPassword: false,
      full_name: "",
      skype_id: "",
      company_name: "",
      company_website: "",
      country_id: "",
      phone_number: "",
   })
   const formChangeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   const [emailErr, setEmailErr] = useState("");
   const [pwdErr, setPwdErr] = useState("");
   const [FNErr, setFNErr] = useState("");

   const handleClickShowPassword = () => {
      setFormData({
        ...formData,
        showPassword: !formData.showPassword,
      });
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const validateEmail = () => {
      if (!validate("email", formData.email)) {
        setEmailErr("Email is not valid");
        return false;
      }
      setEmailErr("");
      return true;
    };
   
   const validatePassword = () => {
   if (!validate("password", formData.password)) {
      setPwdErr(
         "Password must contain one uppercase letter, one lowercase letter, one digit, one special character and minimum of 8 characters."
      );
      return false;
   }
   setPwdErr("");
   return true;
   };

   const validateFN = (e) => {
      const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
        formData.full_name.trim()
      );
      if (formData.full_name.trim() && !isValid) {
        const msg = "Name should not contain any digit or special characters";
        setFNErr(msg);
        return false;
      } else if (!formData.full_name.length) {
        const msg = "First Name is required";
        setFNErr(msg);
        return false;
      }
      setFNErr("");
      setFormData({ ...formData, full_name: formData.full_name.trim() });
      return true;
    };

   return(
      <CustomModal
         {...props}
         className="pt-4"
         toggleModal={props.toggleModal}
         title="Edit Client"
         >
         <div className="pl-3 pr-3 pb-4">
            <form>
               <div>
                  <Textfield
                     required
                     type="email"
                     name="email"
                     label="Email"
                     value={formData.email}
                     onChange={formChangeHandler}
                     onBlur={validateEmail}
                     error={emailErr ? true : false}
                     helperText={emailErr}
                  />
               </div>
               <div>
                  <PasswordField
                     show={formData.showPassword}
                     value={formData.password}
                     onChange={formChangeHandler}
                     label="Password"
                     name="password"
                     handleClickShowPassword={handleClickShowPassword}
                     handleMouseDownPassword={handleMouseDownPassword}
                     labelWidth={80}
                     // error={contactRequiredFields.password ? true : false}
                     error={pwdErr ? true : false}
                     helperText={pwdErr}
                     onBlur={validatePassword}
                  />
               </div>
               <div>
                  <Textfield
                     required
                     name="full_name"
                     label="Full Name"
                     value={formData.full_name}
                     onChange={formChangeHandler}
                     onBlur={validateFN}
                     error={FNErr ? true : false}
                     helperText={FNErr}
                  />
               </div>
               <div>
                  <Textfield
                     required
                     name="skype_id"
                     label="Skype ID"
                     value={formData.skype_id}
                     onChange={formChangeHandler}
                     // error={schoolErr ? true : false}
                     // helperText={schoolErr}
                  />
               </div>
               <div>
                  <Textfield
                     required
                     name="company_name"
                     label="Company Name"
                     value={formData.company_name}
                     onChange={formChangeHandler}
                     // onBlur={validateSchool}
                     // error={schoolErr ? true : false}
                     // helperText={schoolErr}
                  />
               </div>
               <div>
                  <Textfield
                     required
                     name="company_website"
                     label="Company Website"
                     value={formData.company_website}
                     onChange={formChangeHandler}
                     // onBlur={validateSchool}
                     // error={schoolErr ? true : false}
                     // helperText={schoolErr}
                  />
               </div>
               <div>
                  <Textfield
                     required
                     name="country_id"
                     label="Country"
                     value={formData.country_id}
                     onChange={formChangeHandler}
                     // onBlur={validateSchool}
                     // error={schoolErr ? true : false}
                     // helperText={schoolErr}
                  />
               </div>
               <div>
                  <Textfield
                     required
                     name="phone_number"
                     label="Phone Number"
                     value={formData.phone_numbers}
                     onChange={formChangeHandler}
                     // onBlur={validateSchool}
                     // error={schoolErr ? true : false}
                     // helperText={schoolErr}
                  />
               </div>
            </form>
         </div>
      </CustomModal>
   )
}

export default EditClient;