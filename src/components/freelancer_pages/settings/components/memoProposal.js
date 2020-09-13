import React, { useState, useEffect } from "react"
import DropDownMenu from "../../../shared/dropdownMenu"
import { isEmpty } from "../../../../utils"
import ServiceButton from "../../../shared/serviceButton"
import ControlPointIcon from "@material-ui/icons/ControlPoint"
import DeleteIcon from "@material-ui/icons/Delete"
import { SelectMenu } from "../../../shared/SelectMenu"
import {
  RadioButton,
  UploadFiles,
  PasswordField,
  CustomSelect,
  CustomTextfield,
} from "../../../shared/formComponents"
function AddService(props) {
  const {
    count,
    onEducationDelete,
    handleMemoAdd,
    sub_categories,
    categories,

    handleSave,
    servicearraycount,
    service_type_options,
    selectMenuHandler,
    frquency_options,
    contactTogglModal,
  } = props

  const [services, setServices] = useState({
    category_id: "",
    subcategory_id: "",
    service_title: "",
    service_type: "",
    description: "",
    fixed_price: 0,
    hourly_fee: 0,
    weekly_limit: 0,
    frequency: "",
    delivery_time: "",
    quantity: "",
    total: 0,
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
              name="category_id"
              class="form-control form-control-sm"
              value={services.category_id}
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

            {services.category_id ? (
              <SelectMenu
                class="form-control form-control-sm"
                name="subcategory_id"
                value={services.subcategory_id}
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
            <DropDownMenu
              required
              name="service_type"
              value={services.service_type}
              onChange={handleServices}
              labelWidth={160}
              options={service_type_options}
              cr={true}
            />
          </td>
          <td>
            <input
              required
              name="quantity"
              value={services.quantity}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="number"
            />
          </td>
          <td>
            <input
              required
              name="fixed_price"
              value={services.fixed_price}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="number"
            />
          </td>
          <td>-------</td>
          <td>
            <input
              required
              name="hourly_fee"
              value={services.hourly_fee}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="number"
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
            />
          </td>
          <td>
            <DropDownMenu
              required
              name="frequency"
              value={services.frequency}
              onChange={handleServices}
              labelWidth={160}
              options={frquency_options}
              cr={true}
            />
          </td>
          <td>
            <input
              required
              name="delivery_time"
              value={services.delivery_time}
              onChange={handleServices}
              class="form-control form-control-sm"
            />
          </td>
          <td>
            {" "}
            <input
              required
              name="total"
              value={services.total}
              onChange={handleServices}
              class="form-control form-control-sm"
              type="number"
              // onBlur={validateFN}
              // error={runBusinessRequiredFields.total ? true : false}
              // helperText={runBusinessRequiredFields.total}
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

        {/* ) : null} */}
      </>
    )
  } else {
    return <div></div>
  }
}
export const MemoProposal = React.memo(AddService)
