import React,{useState, useEffect} from "react"
import DropDownMenu from "../../../../shared/dropdownMenu"

import ServiceButton from "../../../../shared/serviceButton"
import { SelectMenu } from "../../../../shared/SelectMenu"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
export default function MemoUpdate(props) {
  const {
    menuService,
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
    service_category: "",
    service_subcategory: "",
    service_title: "",
    description: "",
    fixed_price: "",
    hourly_fee: "",
    
    service_frequency: "",
  })


  useEffect(()=>{
      
    if(menuService && menuService){
    
      const {id,service_category,service_subcategory,service_title,description,fixed_price,hourly_fee,service_frequency }=menuService
      console.log(menuService,"menuService")
// if(modalSave===true){
//   alert("sdsds|hello")
//   console.log(services,"services update")
//   setserviceData((prevState) => [...prevState, services])
// }
setServices({
  id:id,
  service_category:   service_category,
  service_subcategory:   service_subcategory,
  service_title:   service_title,
  
  description:   description,
  fixed_price:  fixed_price,
  hourly_fee:  hourly_fee,
  
  service_frequency:   service_frequency,

})}

  },[props.menuService])

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
    {menuService  && menuService ?
    
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
          <br />
          <small>
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
          <input
            required
            name="fixed_price"
            value={services.fixed_price}
            onChange={handleServices}
            class="form-control form-control-sm"
            type="text"
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
          />
        </td>

        <td>
          <DropDownMenu
            required
            name="service_frequency"
            value={services.service_frequency}
            onChange={handleServices}
            labelWidth={160}
            options={frquency_options}
            cr={true}
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
