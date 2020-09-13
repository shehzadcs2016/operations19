import React, { useState, useEffect } from "react"
import { CustomTextfield } from "../../../../shared/formComponents"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import CustomModal from "../../../../shared/modal"
import { 
  Box, 
  Typography, 
  Tab, 
  Tabs, 
  AppBar, 
  Button, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import ServiceButton from "../../../../shared/serviceButton"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { isEmpty } from "../../../../../utils"
import ShowServiceMenu from './showServiceMenu'
import AvailableProjectsLoader from "../../loaders"
import {
  makeSelectSavedMenu,
  makeSelectMilesTone,
  makeSelectproposedServices,
  makeSelectEditproposedServices,
  makeSelectEditmenuServices,makeSelectmenuService
} from "../../selectors"
import {
  FetchServiceMenu,
  fetchMilestone,
  DeleteServiceProposal,
  fetchProposedServices,
  LoadAddServiceProposal,
  FetchSinglemenuService,
  LoadDeleteMilestone,
  LoadDeleteProposalService,UpdateServiceProposal,FetchSingleServiceMenu,EditmenuServices,UpdateServiceMenu,LoadDeleteServiceMenu,LoadAddServiceMenu
} from "../../actions"
import { MemoTable } from "../memoTable"
import axios from "../../../../../config/axios"
import { store } from "../../../../../Redux/store"
import { MemoService } from "../memoService"
import { Edit } from "@material-ui/icons"
import { SelectMenu } from "../../../../shared/SelectMenu"
import DropDownMenu from "../../../../shared/dropdownMenu"
import MenuServices from "./menuServices"
import {UpdateComponent} from "./updatemenuservice"
import ProposedService from "./proposedServiceComponent"
import ServiceMenuModal from '../../../service-menu/components/serviceMenuModal'
import { Card, CardHeader, CardBody } from "reactstrap";

function ServiceMenu(props) {
  const {
    formData,

    responseData,
    frquency_options,
    categories,
    selectMenuHandler,
    menu,
    Service_type_options,
    dispatchFetchServiceMenus,
    sub_categories,
    SavedMenu,
    menuService,
    dispatchFetchMilesTone,
    EditMilesTone,
    dispatchDeleteServiceProposal,
    dispatcheditproposedServices,
    proposedServices,
    dispatchAddServiceMenu,setFormData,
    dispatchDeleteSingleMilestone,
    EditproposedServices,dispatchFetchSinglemenuservice,updatemenuService,extraProps,
    dispatchDeleteProposalService,dispatchUpdateServiceMenu,dispatchaddMileStone,dispatchFetchSingleproposedservice,dispatchFetchEditMenuServices,EditMenuServices,dispatchDeleteServiceMenu
  }=props
  const [services, setServices] = useState({
    service_category: "",
    service_subcategory: "",
    service_title: "",
    description: "",
    fixed_price: "",
    hourly_fee: "",
    // total_hours: "",
    service_frequency: "",
  })
  const blankData = {
    first_name: "",
 language: "",
 levelofproficiency: "",
 year: "",
 service_name: "",
 serviceproposal_name: "",

}
  const [Milestone, setMilestone] = useState({
    name: "",
    amount: 0,
  })
  //   var [servicearraycount, setproposalArrayCount] = useState([0])
  var [proposalarraycount, setproposalArrayCount] = useState([0])
  const [fixed_price, setfixed_price] = useState(0);

  var [count, setCount] = useState(0)
  const [serviceMenu, setServiceMenu] = useState([]);

  const [serviceData, setserviceData] = useState(blankData)
  const [proposalData, setproposalData] = useState([])

  const [milestoneData, setmilestoneData] = useState([])
  const [proposedId, setproposedId] = useState("")

  const [modalContact, setModalContact] = React.useState(false)
  const [modalSave, setModalSave] = React.useState("")
  const [ismodalStatus, setismodalStatus] = React.useState(false)
  const [isShowData, setisShowData] = useState(false);


  const [EditProp, setEditProp] = React.useState(false)
  const [EditTabledata, setEditTabledata] = React.useState(false)
  const [serviceRequiredFields, setserviceRequiredFields] = useState({
    service_name: "",
  })
  
  const [OpenTable, setOpenTable] = React.useState(false)
  const [saveTable, setSaveTable] = React.useState(false)
  const [isShowServiceMenuModal, setShowServiceMenuModal] = useState(false);
  const serviceMenuToggle = () => {
    setisShowData(false)
    
    setServices({
      service_category: "",
      service_subcategory: "",
      service_title: "",
      description: "",
      fixed_price: "",
      hourly_fee: "",
      // total_hours: "",
      service_frequency: "",
    })
    setShowServiceMenuModal(!isShowServiceMenuModal);
  };
  const handleChange = (e) => {
    let value = e.target.value
    setserviceData({ ...serviceData, [e.target.name]: value })
  }
  const validateServiceName = (e) => {
    
    // const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
    //   formData.service_name.trim()
    // )
    if (!serviceData.service_name.length) {
      const msg = "Service Name is required"
      setserviceRequiredFields({ ...serviceRequiredFields, service_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setserviceRequiredFields({ ...serviceRequiredFields, service_name: "" })
    setserviceData({ ...serviceData, service_name: serviceData.service_name.trim() })
    return true
  }
  
  // console.log(milestoneData, "milestoneData")
  console.log(formData, "milestoneData")
  const handleServices = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setServices({ ...services, [e.target.name]: value })
  }

  const AddMileStoneData = () => {
    setmilestoneData((prevState) => [...prevState, Milestone])
    setMilestone({
      name: "",
      amount: 0,
    })
  }
 

  const deleteServiceMenu = async (id, index) => {
    const array = [...serviceMenu]
    array.splice(index, 1);
    setServiceMenu(array)
    if(id !== "none"){
      const headers = {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      }
      try {
        await axios
          .get(`freelancer/delete-servicemenu/${id}`, headers)
          .then((res) => {
            if (res.data.status === 200) {
              const flashData = {
                type: "success",
                text: "Service menu Deleted.",
              }
              // props.addFlashMessage(flashData)
              // setServiceMenu(res.data.data.service_menu_services)
            }
          })
          .catch((err) => console.log(" error =>", err))
      } catch (error) {
        console.log(error, "error catch")
      }
    }
  }

  const contactTogglModal = (id) => {
    
    if (modalContact === false) {
  
      if (id) {
        dispatchFetchMilesTone({ id: id })
        setproposedId(id)
      } else {
        setModalContact(!modalContact)
      }
    }
    setmilestoneData([])
    setModalContact(!modalContact)
  }
  const handleSaveServiceMenu =  () => {
    setisShowData(true)

    const form_data = new FormData()
    console.log( serviceMenu, "formData.serviceMenu")
    form_data.append("name", serviceData.service_name)
    form_data.append("fixed_price", fixed_price)

    for (let index = 0; index < serviceMenu.length; index++) {
      const element = serviceMenu[index]
      form_data.append("service_menu[]", JSON.stringify(element))
    }
    dispatchAddServiceMenu({ form_data: form_data })

  }

  const handlePropsalserviceDeletion = (id) => {
 
    dispatchDeleteServiceMenu({ id: id })
  }
  // console.log(serviceMenu, "serviceData save")

 
  const ServiceValidateForm = () => {
    // handleSaveServiceMenu()

    const reqFields = {}
    Object.keys(serviceData).forEach((key) => {
      const hasKey = serviceRequiredFields.hasOwnProperty([key])
      if (hasKey && !serviceData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    setserviceRequiredFields(reqFields)
    if (!isEmpty(reqFields)) {
      return false
    }
    if (serviceData.service_name && serviceMenu.length > 0 ) {
      handleSaveServiceMenu()
      
    } else {
      
    }
  }
    console.log(serviceRequiredFields, "services serviceRequiredFields")
  
    //  console.log(serviceData, "services formData")

  const handleUpdate = () => {
// console.log(services, "services formData")
    const form_data = new FormData()
    form_data.append("name", serviceData.service_name)
    // form_data.append("freelancer_profile_image", speed_test_image)

    for (let index = 0; index < serviceMenu.length; index++) {
      const element = serviceMenu[index]
      form_data.append("service_menu[]", JSON.stringify(element))
    }
    dispatchUpdateServiceMenu({ form_data: form_data,id:modalSave })
  }
  const handleAdd = (services) => {
    setproposalArrayCount((prevState) => [...prevState, count])
    setserviceData((prevState) => [...prevState, services])
  }
  const onServiceDelete = (services) => {
    let data = serviceData.filter((array) => array !== services)
    setserviceData(data)

   
  }
  
  // console.log(services, "services")
  useEffect(() => {
    dispatchFetchServiceMenus()
   
  }, [])
  useEffect(() => {
    if(EditMenuServices && EditMenuServices.name){
      setserviceData({service_name:EditMenuServices.name})
      }
  }, [props.EditMenuServices])
  const EditProposal = (id) => {
    
    setModalSave(id)
if(EditProp===true){
  setEditTabledata(!EditTabledata)

}
dispatchFetchEditMenuServices({ id: id })

    setOpenTable(!OpenTable)
    setEditProp(!EditProp)
    
  }
  const DeleteProposal = (id) => {
    dispatchDeleteServiceProposal({ id: id })
  }
    // console.log(EditproposedServices, "proposalData")
  return (
    <>
      
      <div className="row">
        {menu === false ? (
          ""
        ) : (
      
          <>
          <ServiceMenuModal
            modal={isShowServiceMenuModal}
            toggleModal={serviceMenuToggle}
            categories={categories}
            sub_categories={sub_categories}
            selectMenuHandler={selectMenuHandler}
            frquency_options={frquency_options}
            serviceMenu={serviceMenu}
            setfixed_price={setfixed_price}
            fixed_price={fixed_price}
            setServiceMenu={setServiceMenu}
          />
          <div className="w-100   pb-5 mx-auto form_control_divs row">
            <div className="col-md-12">
              <div className="w-100 pt-3 pb-4">
                <h2 className="h2 titles__main-title">
                  <strong>Service Menu</strong>
                </h2>
                <p className="personelinfo_1">
                  Add all of your available services to your service menu. Clients will be able to browse and make purchases directly from you.
              </p>
              </div>
            </div>
            <div className="col-md-12">
              <label>Service Name*</label>
            </div>
            <div className="col-md-12">
              <CustomTextfield
                required
                name="service_name"
                value={serviceData.service_name}
                onChange={(e)=> {setisShowData(false);
                  handleChange(e)}}
                onBlur={validateServiceName}
                placeholder="Service Menu name"
                error={serviceRequiredFields.service_name ? true : false}
                helperText={serviceRequiredFields.service_name}
              />
            </div>
            <div className="col-md-12 p-0">
              <div className="table-responsive service_menu edit_values_table">
                <table className="table w-100 table-sm ">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Service</th>
                      <th scope="col">Fixed Price Fee</th>
                      <th scope="col">Hourly Fee</th>
                      {/* <th scope="col">Total Hours </th> */}
                      <th scope="col">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                 
                    {
                      serviceMenu.map((data, index) => {
                        return (
                          <tr key={`service-menu-${index}`}>
                            <td>
                              <div>
                                <p>
                                  {categories.map(data2 => {
                                    if (data2.id === data.service_category)
                                      return data2.name
                                  })}
                                </p>
                                <p>
                                  {sub_categories.map(data2 => {
                                    if (data2.id === data.service_subcategory)
                                      return data2.name
                                  })}
                                </p>
                              </div>
                            </td>
                            <td>
                              <div>
                                <p>{data.service_title}</p>
                                <p>{data.service_description}</p>
                              </div>
                            </td>
                            <td>{data.fixed_price}</td>
                            <td>{data.hourly_fee}</td>
                            {/* penfind total hours */}
                            {/* <td>{data.total_hours}</td> */}
                            <td>
                              {frquency_options.map(data2 => {
                                if (data2.value === data.service_frequency.toString())
                                  return data2.label
                              })}
                            </td>
                            <td>
                              <DeleteIcon
                                onClick={(index) => deleteServiceMenu(data.id || "none", index)}
                              />
                            </td>
                          </tr>
                        )
                      })
                    }
                    <tr className="text-muted small">
                      <td>
                        <div>
                          <p>Select category</p>
                          <p>Select subcategory</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p>Enter service name</p>
                          <p>Enter service description</p>
                        </div>
                      </td>
                      <td>Amount</td>
                      <td>Amount</td>
                      {/* <td>Time</td> */}
                      <td>Select</td>
                      <td className="text-dark">
                        <AddCircleOutlineIcon className="fa-hand-pointer" value={"Add"} onClick={serviceMenuToggle} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row col-md-12 text-right">
        <div className="col-md-10 text-right">
       
        </div>
        <div className="col-md-2 text-right">
          <ServiceButton value={"Save Menu"} onClick={ServiceValidateForm} />
        </div>
      </div>
              </div>
            </div>
          </div>
        </>
        )}
        {EditProp === false ? (
          ""
        ) : (
          <>
            <ServiceMenuModal
            modal={isShowServiceMenuModal}
            toggleModal={serviceMenuToggle}
            categories={categories}
            sub_categories={sub_categories}
            selectMenuHandler={selectMenuHandler}
            frquency_options={frquency_options}
            serviceMenu={serviceMenu}
            setfixed_price={setfixed_price}
            fixed_price={fixed_price}
            setServiceMenu={setServiceMenu}
            menuService={updatemenuService}
          />
          <div className="col-md-12 pt-2">
            {EditMenuServices && EditMenuServices?
            <div className="col-md-12 p-0">
            <CustomTextfield
              required
              name="service_name"
              value={serviceData.service_name}
              onChange={handleChange}
              onBlur={validateServiceName}
              placeholder="Service Menu name"
              error={serviceRequiredFields.service_name ? true : false}
              helperText={serviceRequiredFields.service_name}
            />
          </div>
            :<AvailableProjectsLoader/>
            }
                  
                </div>
            <div className="table-responsive service_menu">
              <div className="col-md-12">
                <div className="table-responsive service_menu">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Service</th>
                 
                        <th scope="col">Fixed Price Fee</th>
                 
                        <th scope="col">Hourly Fee</th>
                        <th scope="col">Frequency</th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      
                    {
                      serviceMenu.map((data, index) => {
                        return (
                          <tr key={`service-menu-${index}`}>
                            <td>
                              <div>
                                <p>
                                  {categories.map(data2 => {
                                    if (data2.id === data.service_category)
                                      return data2.name
                                  })}
                                </p>
                                <p>
                                  {sub_categories.map(data2 => {
                                    if (data2.id === data.service_subcategory)
                                      return data2.name
                                  })}
                                </p>
                              </div>
                            </td>
                            <td>
                              <div>
                                <p>{data.service_title}</p>
                                <p>{data.service_description}</p>
                              </div>
                            </td>
                            <td>{data.fixed_price}</td>
                            <td>{data.hourly_fee}</td>
                            {/* penfind total hours */}
                            {/* <td>{data.total_hours}</td> */}
                            <td>
                              {frquency_options.map(data2 => {
                                if (data2.value === data.service_frequency.toString())
                                  return data2.label
                              })}
                            </td>
                            <td>
                              <DeleteIcon
                                onClick={(index) => deleteServiceMenu(data.id || "none", index)}
                              />
                            </td>
                          </tr>
                        )
                      })
                    }
      
                   
                      {EditMenuServices.service_menu_services &&
                      EditMenuServices.service_menu_services
                        ? EditMenuServices.service_menu_services.map((service) => (
                          <>
                            <MenuServices
                        MenuServices={SavedMenu}
                             
                              contactTogglModal={contactTogglModal}
                              AvailableProjectsLoader={AvailableProjectsLoader}
                              menu={menu}
                              EditProp={EditProp}
                              EditIcon={EditIcon}
                              service={service}
                              DeleteIcon={DeleteIcon}
                              setEditTabledata={setEditTabledata}
                              EditTabledata={EditTabledata}
                              handleServices={handleServices}
                              selectMenuHandler={selectMenuHandler}
                              DeleteProposal={DeleteProposal}
                              categories={categories}
                              sub_categories={sub_categories}
                              service_type_options={Service_type_options}
                              frquency_options={frquency_options}
                              dispatchFetchSinglemenuservice={dispatchFetchSinglemenuservice}
                              serviceMenuToggle={serviceMenuToggle}
                            />
                            
                            </>
                          ))
                       
                              : 
                          "kjaslkkjsak"} 
                           <tr className="text-muted small">
                      <td>
                        <div>
                          <p>Select category</p>
                          <p>Select subcategory</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p>Enter service name</p>
                          <p>Enter service description</p>
                        </div>
                      </td>
                      <td>Amount</td>
                      <td>Amount</td>
                      {/* <td>Time</td> */}
                      <td>Select</td>
                      <td className="text-dark">
                        <AddCircleOutlineIcon className="fa-hand-pointer" value={"Add"} onClick={serviceMenuToggle} />
                      </td>
                    </tr>
                        
                    </tbody>{" "}
                  </table>
                            <div className="row col-md-12 text-right">
      
            <div className="col-md-10 text-right">
            {EditMenuServices && EditMenuServices.service_menu_services ?EditMenuServices.service_menu_services.length>0?
          <ServiceButton
          value={"Delete Service Menu"}
          onClick={()=>handlePropsalserviceDeletion(EditMenuServices.id)}
          />:""
:
""
}
          
            </div>
            <div className="col-md-2 text-right">
              <ServiceButton value={"Update Menu"} onClick={handleUpdate} />
            </div>
          </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="w-100 pt-2 pb-2">
        <h5 className="h2 titles__main-title">
          <strong>Saved Service Menu's</strong>
        </h5>
      </div>
<ShowServiceMenu
      isShowData={isShowData}
      formData={serviceData}
      serviceMenu={serviceMenu}
      frquency_options={frquency_options}
      EditProp={EditProp}
      contactTogglModal={contactTogglModal}
      Service_type_options={Service_type_options}
      categories={categories}
      sub_categories={sub_categories}

/>
      {SavedMenu && SavedMenu
        ? SavedMenu.saved_service_menus.map((menu) => (
            <>
            <Card className="my-3 w-100 card_heading_dash">
              <CardHeader className="d-flex text-color">
                <h3 className="h4 col-md-6 col-lg-6 m-0 pl-0 main_h ">
                  <strong>{menu.name}</strong> 
                </h3>
                <div class=" col-md-6 col-lg-6 px-2">
                  <button
                        onClick={() => EditProposal(menu.id)}
                        type="button"
                        class="btn btn-sm float-right horlybiling_button"
                      >
                        Edit
                    </button> 
                    
                </div> 
              </CardHeader>
              <CardBody className=" p-0 box_shadow_table service_proposal_edit_table">
                  <TableContainer component={Paper}>
                    <Table className="dashboard_headingg" aria-label="simple table ">
                      <TableHead> 
                        <TableRow>
                          <TableCell>Category</TableCell>
                          <TableCell >Service</TableCell>
                          <TableCell >Fixed Price Fee</TableCell>
                          <TableCell >Hourly Fee</TableCell>
                          <TableCell >Frequency</TableCell> 
                        </TableRow>
                      </TableHead>
                    <TableBody>
                      {menu.service_menu_services.map((service, i) => (
                          <MenuServices
                          MenuServices={SavedMenu}
                            contactTogglModal={contactTogglModal}
                            AvailableProjectsLoader={AvailableProjectsLoader}
                            EditTabledata={EditTabledata}
                            menu={menu}
                            frquency_options={frquency_options}
                            service={service}
                          />
                        ))}
                    </TableBody>
                    </Table>
                  </TableContainer> 
                </CardBody>
              </Card> 
            </>
          ))
        : <AvailableProjectsLoader/>}
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  SavedMenu: makeSelectSavedMenu(),
  EditMenuServices:makeSelectEditmenuServices(),
updatemenuService:makeSelectmenuService(),
})
function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchServiceMenus: () => dispatch(FetchServiceMenu()),
    dispatchFetchEditMenuServices: (payload) => dispatch(FetchSingleServiceMenu(payload)),
    dispatchUpdateServiceMenu: (payload) => dispatch(UpdateServiceMenu(payload)),
    dispatchDeleteServiceMenu: (payload) => dispatch(LoadDeleteServiceMenu(payload)),
    dispatchFetchSinglemenuservice: (payload) =>
    dispatch(FetchSinglemenuService(payload)),
    dispatchAddServiceMenu: (payload) =>
    dispatch(LoadAddServiceMenu(payload)),
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceMenu)
