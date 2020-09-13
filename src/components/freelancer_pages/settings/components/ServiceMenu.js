import React, { useState, useEffect } from "react"
import { MemoService } from "../../service-menu/components/memoService"
import { CustomTextfield } from "../../../shared/formComponents"
import ServiceMenuTab from "./InnerComponents/ServiceMenuTab"
export default function ServiceMenu(props) {
  const {
    SelectMenu,
    selectMenuHandler,
    categories,
    sub_categories,setFormData,
    responseData,
    Service_type_options,
    handleChange,
    formData,
    Button,validateServiceName,
    frquency_options,
  } = props && props

  return (
    <div className="container ">
     <div className="row">
     <div className="col-lg-12 m-auto account_setting_body_color p-3">
        <div className="w-100   pb-5 mx-auto form_control_divs row">
          <div className="col-md-12">
            <div className="w-100 pt-3 pb-5">
              <h2 className="h2 titles__main-title">
                <strong>Service Menu/Proposal</strong>
              </h2> 

              {responseData && responseData ? (
                <ServiceMenuTab
                  responseData={responseData}
                  formData={formData}
                  handleChange={handleChange}
                  sub_categories={sub_categories}
                  validateServiceName={validateServiceName}
                  Service_type_options={Service_type_options}
                  categories={categories}
                  selectMenuHandler={selectMenuHandler}
                  frquency_options={frquency_options}
                  setFormData={setFormData}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    
     </div>
     </div>
  )
}
