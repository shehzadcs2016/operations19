import React,{useState, useEffect} from "react"
import DropDownMenu from "../../../../shared/dropdownMenu"

import ServiceButton from "../../../../shared/serviceButton"
import { SelectMenu } from "../../../../shared/SelectMenu"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
export default function MemoUpdate(props) {
  const {
    EditproposedServices,
    setserviceData,
    selectMenuHandler,
    sub_categories,
    categories,
    service_type_options,
    
    contactTogglModal,
    frquency_options,
    setEditTabledata,
    EditTabledata,
  }=props
  const [services, setServices] = useState({
    id:"",
    service_proposal_id:"",
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

  useEffect(()=>{
    if(EditproposedServices && EditproposedServices){
    
      const {id,service_proposal_id,category_id,subcategory_id,service_title,description,service_type,quantity,fixed_price,hourly_fee,weekly_limit,frequency,delivery_time,total }=EditproposedServices
      console.log(EditproposedServices,"EditproposedServices")
// if(modalSave===true){
//   alert("sdsds|hello")
//   console.log(services,"services update")
//   setserviceData((prevState) => [...prevState, services])
// }
setServices({
  id:id,service_proposal_id:service_proposal_id,
  category_id:   category_id,
  subcategory_id:   subcategory_id,
  service_title:   service_title,
  service_type:   service_type,
  description:   description,
  fixed_price:  fixed_price,
  hourly_fee:  hourly_fee,
  weekly_limit:  weekly_limit,
  frequency:   frequency,
  delivery_time:   delivery_time,
  quantity:   quantity,
  total:  total,
})}

  },[props.EditproposedServices])

  const EditData = () => {
    setEditTabledata(!EditTabledata)
  }
  const EditSave = () => {
    setserviceData((prevState) => [...prevState, services])
    setEditTabledata(!EditTabledata)

    }
    
  
  const DeleteData = () => {
    alert("deleted!")
  }
  console.log(categories,"services categories")
  console.log(sub_categories,"services sub_categories")
  const handleServices = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setServices({ ...services, [e.target.name]: value })
    
  }

  return (
    <>
    {services  && services ?
    
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
          <br />
          <small>
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
          </small>
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
          />{" "}
          <br />
          <small>
            <input
              required
              name="description"
              value={services.description}
              onChange={handleServices}
              class="form-control form-control-sm mt-2"
              type="text"
              placeholder="Description"
            />
          </small>
        </td>
        <td>
          {" "}
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

        <td>
          <button
            onClick={() => contactTogglModal(services.id)}
            type="button"
            class="btn btn-outline-primary"
          >
            Edit
          </button>
        </td>
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
        <td>
          {EditTabledata===true?
           <button
           onClick={EditSave}
           type="button"
           class="btn btn-outline-primary "
         >
           save
         </button>:
          <EditIcon onClick={EditData} />
          }
        </td>
        <td>
          <DeleteIcon onClick={DeleteData} />
        </td>
      </tr>:""
}
    </>
  )
}

export const UpdateComponent = React.memo(MemoUpdate)
