import React, { useState, useEffect } from "react"
import DropDownMenu from "../../../shared/dropdownMenu"
import { isEmpty } from "../../../../utils"
import ServiceButton from "../../../shared/serviceButton"
import { SelectMenu } from "../../../shared/SelectMenu"
import {
  RadioButton,
  UploadFiles,
  PasswordField,
  CustomSelect,
  CustomTextfield,
} from "../../../shared/formComponents"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete'
import ControlPointIcon from "@material-ui/icons/ControlPoint"


function AddService(props) {
  const {
    count,
    onEducationDelete,
    handleMemoAdd,
    sub_categories,
    categories,
    countries,
    handleSave,
    servicearraycount,
    selectMenuHandler,
    frquency_options,
  } = props

  const [services, setServices] = useState({
    service_category: "",
    service_subcategory: "",
    service_title: "",
    description: "",
    fixed_price: "",
    hourly_fee: "",
    weekly_limit: 0,
    service_frequency: "",
  })

  const [show, sethide] = useState(false)
  const [showon, sethideon] = useState(true)
  const [addon, setaddon] = useState(true)

  // console.log(Education, "memejjksaasnkjasn")

  const handleDelete = () => {
    if (servicearraycount.length > 1) {
      sethideon(!showon)
      sethide(!show)
      onEducationDelete(services)
    }
    // sethideon(true)
    // sethide(false)
  }
  const handleAdd = () => {
    setaddon(!addon)
    sethide(!show)
    handleMemoAdd(services)
  }
  const SaveMenu = () => {
    handleSave()
  }
  const handleServices = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setServices({ ...services, [e.target.name]: value })
  }
  // alert(count)
  if (showon === true) {
    return (
      <>
        <tr>
          <td>
            <SelectMenu
              name="service_category"
              class="form-control form-control-sm"
              value={services.service_category}
              // onChange={selectMenuHandler}
              onChange={(e) => {
                handleServices(e)
                selectMenuHandler(e.target.value)
              }}
              label="Select"
              labelWidth={145}
              options={categories}
              cr={true}
            />

            {services.service_category ? (
              <SelectMenu
                class="form-control form-control-sm"
                name="service_subcategory"
                value={services.service_subcategory}
                onChange={handleServices}
                label="Sub Category"
                labelWidth={150}
                options={sub_categories}
                cr={true}
              />
            ) : null}
          </td>
          <td>
            <input
              required
              name="service_title"
              value={services.service_title}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="text"
              placeholder="Name"
            />
            <input
              required
              name="description"
              value={services.description}
              onChange={handleServices}
              class="form-control form-control-sm mt-2"
              type="text"
              placeholder="Description"
            />
          </td>
          <td>
            <input
              required
              name="fixed_price"
              value={services.fixed_price}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="text"
              // onBlur={validateFN}
              // error={
              //   runBusinessRequiredFields.fixed_price ? true : false
              // }
              // helperText={runBusinessRequiredFields.fixed_price}
            />
          </td>
          <td>
            <input
              required
              name="hourly_fee"
              value={services.hourly_fee}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="text"
              // onBlur={validateFN}
              // error={
              //   runBusinessRequiredFields.hourly_fee ? true : false
              // }
              // helperText={runBusinessRequiredFields.hourly_fee}
            />
          </td>
          <td>
            {" "}
            <input
              required
              name="weekly_limit"
              value={services.weekly_limit}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="number"
              // onBlur={validateFN}
              // error={runBusinessRequiredFields.total ? true : false}
              // helperText={runBusinessRequiredFields.total}
            />
          </td>
          <td>
            <DropDownMenu
              required
              name="service_frequency"
              value={services.service_frequency}
              onChange={handleServices}
              //   onBlur={validaterLanguages}
              //   error={langaugesErr}
              labelWidth={160}
              options={frquency_options}
              cr={true}
            />
          </td>
         
           {addon === true ? (
            <td>
              <ControlPointIcon onClick={handleAdd} />
            </td>
          ) : (
            <td>
              <DeleteIcon value={"Delete Menu"} onClick={handleDelete} />
            </td>
          )}
        </tr>

       

      
      </>
    )
  } else {
    return <div></div>
  }
}
export const MemoService = React.memo(AddService)
