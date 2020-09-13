import React, { useState,useEffect } from "react";
import CustomModal from "../../../shared/modal";
import ServiceButton from "../../../shared/serviceButton"
import { SelectMenu } from "../../../shared/SelectMenu"
import { CustomTextfield } from "../../../shared/formComponents"
import DropDownMenu from "../../../shared/dropdownMenu"
import CurrencyInput from "react-currency-input"

export const ServiceMenuModal = (props) => {
   const { categories, sub_categories, selectMenuHandler,
      frquency_options, serviceMenu, setServiceMenu,menuService } = props;
   const blankData = {
      service_category: "",
      service_subcategory: "",
      service_title: "",
      description: "",
      fixed_price: "",
      hourly_fee: "",
      // total_hours: "",
      service_frequency: "",
   }
   const blankDataErr = {
      service_category: "",
      service_subcategory: "",
      service_title: "",
      description: "",
      // total_hours: "",
      service_frequency: "",
   }
   const [serviceData, setServiceData] = useState(blankData);
   const [serviceMenuErr, setServiceMenuErr] = useState(blankDataErr);
   const handleChange = (e) => {
      const value = e.target.value
      setServiceData({ ...serviceData, [e.target.name]: value })
   }
   const isEmpty = (e) => {
      if (!e.target.value || e.target.value === "$ 0") {
         setServiceMenuErr({ ...serviceMenuErr, [e.target.name]: "Required" })
      } else {
         setServiceMenuErr({ ...serviceMenuErr, [e.target.name]: "" })
      }
   }
   useEffect(()=>{
      
      if(menuService && menuService){
      
        const {id,service_category,service_subcategory,service_title,description,fixed_price,hourly_fee,service_frequency }=menuService
        console.log(menuService,"menuService")
  
  setServiceData({
    id:id,
    service_category:   "",
    service_subcategory:   "",
    service_title:   service_title,
    description:   description,
    fixed_price:  fixed_price,
    hourly_fee:  hourly_fee,
    
    service_frequency:   "",
  
  })}
  
    },[props.menuService])
   const validateData = () => {
      const obj = {}
      let reqFields = true
      Object.keys(blankDataErr).map((key) => {
         if (serviceData[key].toString().trim() === "") {
            obj[key] = "Required"
            reqFields = false
         }
         return obj
      })
      setServiceMenuErr(obj)
      if (!reqFields) {
         return false
      } else {
         return true
      }
   }

   const handleAdd = () => {
      const isValid = validateData()
      if (isValid === true) {
         setServiceMenu([...serviceMenu, serviceData])
         setServiceData(blankData)
         setServiceMenuErr(blankDataErr)
         props.toggleModal()
      }
   }
   return (
      <CustomModal
         {...props} 
         title="Add Serivce Menu"
      >
         <div className="container">
            <div className="row mt-2 service_module_model">
               <div className="col-md-12 model_padding">
                  <label>Service Category*</label>
                  <SelectMenu
                     name="service_category"
                     class="form-control form-control-sm"
                     value={serviceData.service_category}
                     onChange={(e) => {
                        handleChange(e)
                        selectMenuHandler(e.target.value)
                     }}
                     onBlur={isEmpty}
                     options={categories}
                     cr={true}
                     error={serviceMenuErr.service_category}
                  />
               </div>
               <div className="col-md-12 mt-2  model_padding">
                  {serviceData.service_category ? (
                     <>
                        <label>Service SubCategory*</label>
                        <SelectMenu
                           name="service_subcategory"
                           class="form-control form-control-sm"
                           value={serviceData.service_subcategory}
                           onChange={handleChange}
                           options={sub_categories}
                           cr={true}
                           onBlur={isEmpty}
                           error={serviceMenuErr.service_subcategory}
                        />
                     </>
                  )
                     : null}
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Service Title*</label>
                  <CustomTextfield
                     required
                     name="service_title"
                     value={serviceData.service_title}
                     onChange={handleChange}
                     onBlur={isEmpty}
                     error={serviceMenuErr.service_title ? true : false}
                     helperText={serviceMenuErr.service_title}
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Service Description*</label>
                  <CustomTextfield
                     required
                     name="description"
                     value={serviceData.description}
                     onChange={handleChange}
                     onBlur={isEmpty}
                     multiline
                     rows="3"
                     error={serviceMenuErr.description ? true : false}
                     helperText={serviceMenuErr.description}
                  />
               </div>
               <div className="col-md-12 p-0 mt-3">
                  <h5>Fixed Price</h5>
                  <div className="MuiFormControl-root MuiTextField-root w-100 pb-2">
                     <div
                        className={serviceMenuErr.fixed_price ?
                           "create-service-currency-input-error MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                           :
                           "create-service-currency-input MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                        }
                     >
                        <CurrencyInput
                           name="fixed_price"
                           className="MuiInputBase-input MuiOutlinedInput-input"
                           prefix="$ "
                           precision={0}
                           allowNegative={false}
                           allowEmpty={true}
                           value={serviceData.fixed_price}
                           onChange={(value) =>
                              setServiceData({ ...serviceData, fixed_price: value })
                           }
                           // onBlur={isEmpty}
                           // error={serviceMenuErr.fixed_price ? true : false}
                           // helperText={serviceMenuErr.fixed_price}
                        />
                     </div>
                     {serviceMenuErr.fixed_price ?
                        <p className="small error-color{">{serviceMenuErr.fixed_price}</p> :
                        null}
                  </div>
               </div>
               <div className="col-md-12 p-0 mt-3">
                  <h5>Hourly Fee</h5>
                  <div className="MuiFormControl-root MuiTextField-root w-100 pb-2">
                     <div
                        className={serviceMenuErr.hourly_fee ?
                           "create-service-currency-input-error MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                           :
                           "create-service-currency-input MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                        }
                     >
                        <CurrencyInput
                           name="hourly_fee"
                           className="MuiInputBase-input MuiOutlinedInput-input"
                           prefix="$ "
                           precision={0}
                           allowNegative={false}
                           allowEmpty={true}
                           value={serviceData.hourly_fee}
                           onChange={(value) =>
                              setServiceData({ ...serviceData, hourly_fee: value })
                           }
                           // onBlur={isEmpty}
                        />
                     </div>
                     {/* {serviceMenuErr.hourly_fee ? */}
                        {/* <p className="small error-color{">{serviceMenuErr.hourly_fee}</p> : */}
                        {/* null} */}
                  </div>
               </div>
               {/* <div className="col-md-12 mt-2">
                  <label>Total Hours*</label>
                  <CustomTextfield
                     type="number"
                     required
                     name="total_hours"
                     value={serviceData.total_hours}
                     onChange={handleChange}
                     onBlur={isEmpty}
                     error={serviceMenuErr.total_hours ? true : false}
                     helperText={serviceMenuErr.total_hours}
                  />
               </div> */}
               <div className="col-md-12 mt-2 model_padding">
                  <label>Service Frequency</label>
                  <DropDownMenu
                     required
                     name="service_frequency"
                     value={serviceData.service_frequency}
                     onChange={handleChange}
                     onBlur={isEmpty}
                     error={serviceMenuErr.service_frequency}
                     labelWidth={160}
                     options={frquency_options}
                     cr={true}
                  />
               </div>
               <div className="col-md-12 mt-4 mb-3 model_padding">
                  <ServiceButton className="text-right" value={"Add"} onClick={handleAdd} />
               </div>

            </div>
         </div>
      </CustomModal>
   )
}

export default ServiceMenuModal