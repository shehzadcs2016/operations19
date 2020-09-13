import React, { useState,useEffect } from "react";
import CustomModal from "../../../shared/modal";
import ServiceButton from "../../../shared/serviceButton"
import { SelectMenu } from "../../../shared/SelectMenu"
import { CustomTextfield } from "../../../shared/formComponents"
import DropDownMenu from "../../../shared/dropdownMenu"
import CurrencyInput from "react-currency-input"

export const ServiceProposalModal = (props) => {
   const { categories, sub_categories, selectMenuHandler,
      frquency_options, serviceMenu, setServiceMenu,service_type_options ,setfixedPrice,fixedPrice,EditproposedServices} = props;
   const blankData = {
     category_id: "",
    subcategory_id: "",
    service_title: "",
    service_type: "",
    description: "",
    
    hourly_fee: "",
    weekly_limit: "",
    frequency: "",
    delivery_time: "",
    quantity: "",
    total: "",
   }
   
   const [serviceData, setServiceData] = useState(blankData);

   const [serviceMenuErr, setServiceMenuErr] = useState(blankData);
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
      if(EditproposedServices && EditproposedServices){
      
        const {id,service_proposal_id,category_id,subcategory_id,service_title,description,service_type,quantity,fixed_price,hourly_fee,weekly_limit,frequency,delivery_time,total }=EditproposedServices
        console.log(EditproposedServices,"EditproposedServices")
  // if(modalSave===true){
  //   alert("sdsds|hello")
  //   console.log(services,"services update")
  //   setserviceData((prevState) => [...prevState, services])
  // }
  setServiceData({
    id:id,service_proposal_id:service_proposal_id,
    category_id:   "",
    subcategory_id:   "",
    service_title:   service_title,
    service_type:   "",
    description:   description,
   //  fixed_price:  fixed_price,
    hourly_fee:  hourly_fee,
    weekly_limit:  weekly_limit,
    frequency:   "",
    delivery_time:   delivery_time,
    quantity:   quantity,
    total:  total,
  })}
  
    },[props.EditproposedServices])
   const validateData = () => {
      const obj = {}
      let reqFields = true
      Object.keys(serviceData).map((key) => {
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
      console.log(serviceData,"serviceDataserviceData")
      const isValid = validateData()
      if (isValid === true) {
         setServiceMenu([...serviceMenu, serviceData])
         setServiceData(blankData)
         setServiceMenuErr(blankData)
         props.toggleModal()
      }
   }
console.log(serviceMenu,"serviceMenuserviceMenu")

   return (
      <CustomModal
         {...props}
         title="Add Serivce proposal"
         
      >
         <div className="container">
            <div className="row  mt-2 service_module_model">
               <div className="col-md-12 model_padding">
                  <label>Service Category*</label>
                  <SelectMenu
                     name="category_id"
                     class="form-control form-control-sm"
                     value={serviceData.category_id}
                     onChange={(e) => {
                        handleChange(e)
                        selectMenuHandler(e.target.value)
                     }}
                     onBlur={isEmpty}
                     options={categories}
                     cr={true}
                     error={serviceMenuErr.category_id}
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  {serviceData.category_id ? (
                     <>
                        <label>Service SubCategory*</label>
                        <SelectMenu
                           name="subcategory_id"
                           class="form-control form-control-sm"
                           value={serviceData.subcategory_id}
                           onChange={handleChange}
                           options={sub_categories}
                           cr={true}
                           onBlur={isEmpty}
                           error={serviceMenuErr.subcategory_id}
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
               <div className="col-md-12 mt-2 model_padding">
                  <label>Service Type*</label>
             
              <DropDownMenu
                     required
                     name="service_type"
                     value={serviceData.service_type}
                     onChange={handleChange}
                     onBlur={isEmpty}
                     error={serviceMenuErr.service_type}
                     labelWidth={160}
                     options={service_type_options}
                     cr={true}
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Quantity*</label>
                  <CustomTextfield
                     required
                     name="quantity"
                     value={serviceData.quantity}
                     onChange={handleChange}
                     onBlur={isEmpty}
                     error={serviceMenuErr.quantity ? true : false}
                     helperText={serviceMenuErr.quantity}
                     type="number"
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Fixed Price</label>
           
                  <CustomTextfield
                     required
                     name="fixed_price"
                     value={fixedPrice}
                     onChange={(e)=>setfixedPrice(e.target.value)}
                     onBlur={isEmpty}
                    
                     error={serviceMenuErr.fixed_price ? true : false}
                     helperText={serviceMenuErr.fixed_price}
                     type="number"
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Hourly Fee*</label>
                  <CustomTextfield
                     required
                     name="hourly_fee"
                     value={serviceData.hourly_fee}
                     onChange={handleChange}
                     onBlur={isEmpty}
                    
                     error={serviceMenuErr.hourly_fee ? true : false}
                     helperText={serviceMenuErr.hourly_fee}
                     type="number"
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Weekly Limit*</label>
      
                  <CustomTextfield
                     required
                     name="weekly_limit"
                     value={serviceData.weekly_limit}
                     onChange={handleChange}
                     onBlur={isEmpty}
                    
                     error={serviceMenuErr.weekly_limit ? true : false}
                     helperText={serviceMenuErr.weekly_limit}
                     type="number"
                  />
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
                  <label> Frequency</label>
                  <DropDownMenu
                     required
                     name="frequency"
                     value={serviceData.frequency}
                     onChange={handleChange}
                     onBlur={isEmpty}
                     error={serviceMenuErr.frequency}
                     labelWidth={160}
                     options={frquency_options}
                     cr={true}
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Delivery Time*</label>
                  <CustomTextfield
                     required
                     name="delivery_time"
                     value={serviceData.delivery_time}
                     onChange={handleChange}
                     onBlur={isEmpty}
                    
                     error={serviceMenuErr.delivery_time ? true : false}
                     helperText={serviceMenuErr.delivery_time}
                  />
               </div>
               <div className="col-md-12 mt-2 model_padding">
                  <label>Total hours*</label>
                  <CustomTextfield
                     required
                     name="total"
                     value={serviceData.total}
                     onChange={handleChange}
                     onBlur={isEmpty}
                    
                     error={serviceMenuErr.total ? true : false}
                     helperText={serviceMenuErr.total}
                     type="number"
                  />
               
               </div>
               <div className="col-md-12 mt-2 mb-2 model_padding">
                  <ServiceButton className="text-right" value={"Add"} onClick={handleAdd} />
               </div>

            </div>
         </div>
      </CustomModal>
   )
}

export default ServiceProposalModal