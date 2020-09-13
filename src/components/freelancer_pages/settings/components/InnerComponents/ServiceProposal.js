import React, { useState, useEffect } from "react"
import { CustomTextfield } from "../../../../shared/formComponents"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import CustomModal from "../../../../shared/modal"
import { Box, Typography, Tab, Tabs, AppBar, Button } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import ServiceButton from "../../../../shared/serviceButton"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShowServiceProposal from './showServiceProposal'
import AvailableProjectsLoader from "../../loaders"
import { MemoService } from "../../../service-menu/components/memoService"
import {     
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper, } from "@material-ui/core"
  import { Card, CardHeader, CardBody } from "reactstrap";
import {
  makeSelectServiceProposal,
  makeSelectMilesTone,
  makeSelectproposedServices,
  makeSelectEditproposedServices,
} from "../../selectors"
import {
  fetchServiceProposal,
  fetchMilestone,
  DeleteServiceProposal,
  fetchProposedServices,
  LoadAddServiceProposal,
  FetchSingleproposedService,
  LoadDeleteMilestone,
  LoadDeleteProposalService, UpdateServiceProposal, addMileStone
} from "../../actions"
import { isEmpty } from "../../../../../utils"

import { MemoTable } from "../memoTable"
import axios from "../../../../../config/axios"
import { store } from "../../../../../Redux/store"
import { MemoProposal } from "../memoProposal"
import { Edit } from "@material-ui/icons"
import { SelectMenu } from "../../../../shared/SelectMenu"
import DropDownMenu from "../../../../shared/dropdownMenu"
import EditProposalComponent from "./EditProposalComponent"
import { UpdateComponent } from "./updatePropsalComponent"
import ProposedService from "./proposedServiceComponent"
import ServiceProposalModal from '../serviceProposalModal'
const ContactModal = (props) => {
  // console.log(props, "props")
  const {
    handleMileStone,
    AddMilestone,
    Milestone,
    AddMileStoneData,
    DeleteMileStonedata,
    milestoneData,
    EditMilesTone,
    DeleteMileStone,
  } = props
  //   console.log(EditMilesTone, "EditMilesTone")

  return (
    <CustomModal {...props} title="Milestones">
      <div>
        <p className="pb-2">
          Get in touch with De Castro through one of the following contact
          methods.
        </p>
        <div className="row">
          <div className="col-md-6">
            <p className="pb-2">
              <strong>Name of Milestone*</strong>
            </p>
          </div>
          <div className="col-md-6">
            <p className="pb-2">
              <strong>Deposit Amount:*</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <CustomTextfield
              required
              name="name"
              value={Milestone.name}
              onChange={handleMileStone}
              // onBlur={validateServiceName}
              placeholder="Name Of MileStone"
            // error={serviceRequiredFields.serviceproposal_name ? true : false}
            // helperText={serviceRequiredFields.serviceproposal_name}
            />
          </div>
          <div className="col-md-5">
            <CustomTextfield
              required
              name="amount"
              value={Milestone.amount}
              onChange={handleMileStone}
              // onBlur={validateServiceName}
              placeholder="Name Of MileStone"
            // error={serviceRequiredFields.serviceproposal_name ? true : false}
            // helperText={serviceRequiredFields.serviceproposal_name}
            />
          </div>
          <div className="col-md-2">
            <button
              onClick={AddMileStoneData}
              type="button"
              class="btn btn-outline-primary "
            >
              Add
            </button>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name Of MileStone</th>
              <th scope="col">Deposit Amount</th>
            </tr>
          </thead>
          <tbody>
            {EditMilesTone && EditMilesTone.milestones
              ? EditMilesTone.milestones.map((mile) => (
                <tr>
                  <td>{mile.name}</td>

                  <td>{mile.amount}</td>
                  <td>
                    <DeleteIcon onClick={() => DeleteMileStone(mile.id)} />
                  </td>
                  <td>

                  </td>
                </tr>
              ))
              : ""}
            {milestoneData.map((mile) => (
              <tr>
                <td>{mile.name}</td>

                <td>{mile.amount}</td>
                <td>
                <DeleteIcon   onClick={() => DeleteMileStonedata(mile.id)}/>
                 
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
        <div className="col-md-12 text-center">
          <button
            onClick={AddMilestone}
            type="button"
            class="btn btn-outline-primary fullWidth"
          >
            Add MileStones
          </button>
        </div>
      </div>
    </CustomModal>
  )
}
function ServiceMenu(props) {
  const {
    formData,
  
    responseData,
    frquency_options,
    categories,
    selectMenuHandler,
    menu,
    Service_type_options,
    dispatchFetchServiceProposals,
    sub_categories,
    ServiceProposal,
    dispatchFetchMilesTone,
    EditMilesTone,
    dispatchDeleteServiceProposal,
    dispatcheditproposedServices,
    proposedServices,
    dispatchLoadAddServiceProposal,
    dispatchDeleteSingleMilestone,
    EditproposedServices,
    dispatchDeleteProposalService, dispatchUpdateServiceProposal, dispatchaddMileStone, dispatchFetchSingleproposedservice,setFormData
  }=props
  const [services, setServices] = useState({
    service_proposal_id: "",
    id: "",
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
  const blankData = {
    first_name: "",
 language: "",
 levelofproficiency: "",
 year: "",
 service_name: "",
 serviceproposal_name: "",

}
const [serviceData, setserviceData] = useState(blankData)

  const [serviceMenu, setServiceMenu] = useState([]);
  const [fixedPrice, setfixedPrice] = useState(0);


  const [Milestone, setMilestone] = useState({
    name: "",
    amount: 0,
  })
  //   var [servicearraycount, setproposalArrayCount] = useState([0])
  var [proposalarraycount, setproposalArrayCount] = useState([0])

  var [count, setCount] = useState(0)

  const [proposalData, setproposalData] = useState([])
  const [milestoneData, setmilestoneData] = useState([])
  const [proposedId, setproposedId] = useState("")

  const [modalContact, setModalContact] = React.useState(false)
  const [modalSave, setModalSave] = React.useState("")

  const [EditProp, setEditProp] = React.useState(false)
  const [EditTabledata, setEditTabledata] = React.useState(false)

  const [OpenTable, setOpenTable] = React.useState(false)
  const [saveTable, setSaveTable] = React.useState(false)
  const [isShowServiceMenuModal, setShowServiceMenuModal] = useState(false);
  const [isShowData, setisShowData] = useState(false);

  const [serviceRequiredFields, setserviceRequiredFields] = useState({
    serviceproposal_name: "",
  })
  const handleChange = (e) => {
    let value = e.target.value
    setserviceData({ ...serviceData, [e.target.name]: value })
  }
  
  const validateServiceName = (e) => {
    
    // const isValid = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/i.test(
    //   formData.serviceproposal_name.trim()
    // )
    if (!serviceData.serviceproposal_name.length) {
      const msg = "Service proposal Name is required"
      setserviceRequiredFields({ ...serviceRequiredFields, serviceproposal_name: msg })
      // setFNErr("Please Enter Name");
      return false
    }

    setserviceRequiredFields({ ...serviceRequiredFields, serviceproposal_name: "" })
    setserviceData({ ...serviceData, serviceproposal_name: serviceData.serviceproposal_name.trim() })
    return true
  }
  const handleMileStone = (e) => {
    let value = e.target.value
    setMilestone({ ...Milestone, [e.target.name]: value })
  }
  // console.log(milestoneData, "milestoneData")
  // console.log(Milestone, "milestoneData")
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
  const DeleteMileStonedata = (mile) => {
    let data = milestoneData.filter((array) => array !== mile)
    setmilestoneData(data)
  }
  const DeleteMileStone = (id) => {

    dispatchDeleteSingleMilestone({ id: id })
  }
  const AddMilestone = () => {
    const form_data = new FormData()
    // alert(proposedId)
    // console.log(milestoneData,"add milestone")
    form_data.append("proposed_service_id", proposedId)

    for (let index = 0; index < milestoneData.length; index++) {
      const element = milestoneData[index]
      form_data.append("milestones[]", JSON.stringify(element))
    }
    dispatchaddMileStone({ form_data: form_data })
    // console.log(form_data, "formdata")
    // alert(store.getState().login.token)


  }
  const contactTogglModal = (id) => {

    if (modalContact === false) {

      if (id) {
        dispatchFetchMilesTone({ id: id })
        setproposedId(id)
      } else {
        setModalContact(!modalContact)
        setmilestoneData([])
      }
    }
    setModalContact(!modalContact)
  }
  const handlePropsalserviceDeletion = (id) => {

    dispatchDeleteProposalService({ id: id })
  }
  const ServiceValidateForm = () => {
    // handleSaveServiceMenu()
    setisShowData(true)

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
      handleSave()
      
    } else {
      
    }
  }
  const handleSave = () => {

    // console.log(services, "services formData")
    const form_data = new FormData()
    form_data.append("name", serviceData.serviceproposal_name)
    form_data.append("fixed_price", fixedPrice)
    for (let index = 0; index < serviceMenu.length; index++) {
      const element = serviceMenu[index]
      form_data.append("proposed_services[]", JSON.stringify(element))
    }
    dispatchLoadAddServiceProposal({ form_data: form_data })
  }

  //  console.log(serviceData, "services formData")

  const handleUpdate = () => {
    // console.log(services, "services formData")
    const form_data = new FormData()
    form_data.append("name", serviceData.serviceproposal_name)
    form_data.append("fixed_price", fixedPrice)

    // form_data.append("freelancer_profile_image", speed_test_image)

    for (let index = 0; index < serviceMenu.length; index++) {
      const element = serviceMenu[index]
      form_data.append("proposed_services[]", JSON.stringify(element))
    }
    dispatchUpdateServiceProposal({ form_data: form_data, id: modalSave })
  }
  const handleAdd = (services) => {
    setproposalArrayCount((prevState) => [...prevState, count])
    setserviceData((prevState) => [...prevState, services])
  }
  const onServiceDelete = (services) => {
    let data = serviceData.filter((array) => array !== services)
    setserviceData(data)


  }
  const deleteproposedService = async (id, index) => {
    const array = [...serviceMenu]
    array.splice(index, 1);
    setServiceMenu(array)
    if (id !== "none") {
      dispatchDeleteProposalService({id:id})
    }
  }
  const serviceMenuToggle = () => {
    setisShowData(false)
    setServices({
      service_proposal_id: "",
      id: "",
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
    setShowServiceMenuModal(!isShowServiceMenuModal);
  };
  // console.log(services, "services")
  useEffect(() => {
   
    dispatchFetchServiceProposals()
  }, [])

  useEffect(() => {
    if(proposedServices && proposedServices.name){
      setserviceData({serviceproposal_name:proposedServices.name})
      }
  }, [props.proposedServices])
  const EditProposal = (id) => {
    // alert(id)
    setModalSave(id)
    if (EditProp === true) {
      setEditTabledata(!EditTabledata)

    }
    dispatcheditproposedServices({ id: id })
    setOpenTable(!OpenTable)
    setEditProp(!EditProp)
  }
  const DeleteProposal = (id) => {
    dispatchDeleteServiceProposal({ id: id })
  }
  // console.log(EditproposedServices, "proposalData")
  return (
    <>
      <ContactModal
        handleMileStone={handleMileStone}
        AddMileStoneData={AddMileStoneData}
        modal={modalContact}
        AddMilestone={AddMilestone}
        Milestone={Milestone}
        milestoneData={milestoneData}
        EditMilesTone={EditMilesTone}
        toggleModal={contactTogglModal}
        DeleteMileStonedata={DeleteMileStonedata}
        DeleteMileStone={DeleteMileStone}
      />

      <div className="row service_proposal_edit_table">
        {menu === false ? (
          ""
        ) : (
            <>
              <ServiceProposalModal
                modal={isShowServiceMenuModal}
                toggleModal={serviceMenuToggle}
                categories={categories}
                sub_categories={sub_categories}
                selectMenuHandler={selectMenuHandler}
                frquency_options={frquency_options}
                serviceMenu={serviceMenu}
                setServiceMenu={setServiceMenu}
                setfixedPrice={setfixedPrice}
                fixedPrice={fixedPrice}
                service_type_options={Service_type_options}
              />
              <div className="table-responsive service_menu">
                <div className="col-md-12">
                  <CustomTextfield
                    required
                    name="serviceproposal_name"
                    value={serviceData.serviceproposal_name}
                    onChange={(e)=> {setisShowData(false);
                       handleChange(e)}}
                    onBlur={validateServiceName}
                    placeholder="Service Proposal name"
                  error={serviceRequiredFields.serviceproposal_name ? true : false}
                  helperText={serviceRequiredFields.serviceproposal_name}
                  />
                </div>
                <div className="col-md-12">
                  <div className="table-responsive service_menu">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Category</th>
                          <th scope="col">Service</th>
                          <th scope="col">Service Type</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Fixed Price Fee</th>
                          <th scope="col">Milestones</th>
                          <th scope="col">Hourly Fee</th>
                          <th scope="col">Weekly Limit</th>
                          <th scope="col">Frequency</th>
                          <th scope="col">Delivery Time</th>
                          <th scope="col">Total Hours</th>
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
                                        if (data2.id === data.category_id)
                                          return data2.name
                                      })}
                                    </p>
                                    <p>
                                      {sub_categories.map(data2 => {
                                        if (data2.id === data.subcategory_id)
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
                                <td>
                                  {Service_type_options.map(data2 => {
                                    if (data2.id === data.service_type.toString())
                                      return data2.label
                                  })}
                                </td>
                                <td>{data.quantity}</td>
                                <td>{data.fixed_price}</td>
                                <td>-----</td>

                                <td>{data.hourly_fee}</td>
                                <td>{data.weekly_limit}</td>

                                {/* penfind total hours */}
                                {/* <td>{data.total_hours}</td> */}
                                <td>
                                  {frquency_options.map(data2 => {
                                    if (data2.value === data.frequency.toString())
                                      return data2.label
                                  })}
                                  
                                </td>
                                <td>{data.delivery_time}</td>

                                <td>{data.total}</td>

                                <td>
                                  <DeleteIcon
                                    onClick={(index) => deleteproposedService(data.id || "none", index)}
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
                          <td>select</td>
                          <td>Quantity</td>
                          <td>Fixed Price fee</td>
                          <td>-----</td>
                          <td>Hourly Fee</td>
                          <td>Weekly Limit</td>
                          <td>select</td>
                          <td>Delivery Time</td>
                          <td>Total Hours</td>

                          <td className="text-dark">
                            <AddCircleOutlineIcon className="fa-hand-pointer" value={"Add"} onClick={serviceMenuToggle} />
                          </td>
                        </tr>
                      </tbody>{" "}
                    </table>
                    <div className="col-md-12 text-right">

                        <ServiceButton value={"Save Menu"} onClick={ServiceValidateForm} />
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
              <ServiceProposalModal
                modal={isShowServiceMenuModal}
                toggleModal={serviceMenuToggle}
                categories={categories}
                sub_categories={sub_categories}
                selectMenuHandler={selectMenuHandler}
                frquency_options={frquency_options}
                serviceMenu={serviceMenu}
                setServiceMenu={setServiceMenu}
                setfixedPrice={setfixedPrice}
                fixedPrice={fixedPrice}
                service_type_options={Service_type_options}
                EditproposedServices={EditproposedServices}
              />
                {proposedServices && proposedServices?
            <div className="col-md-12">
            <CustomTextfield
              required
              name="serviceproposal_name"
              value={serviceData.serviceproposal_name}
              onChange={handleChange}
              onBlur={validateServiceName}
              placeholder="Service Proposal name"
              error={serviceRequiredFields.serviceproposal_name ? true : false}
              helperText={serviceRequiredFields.serviceproposal_name}
            />
          </div>
            :""
            }
              <div className="table-responsive service_menu">
                <div className="col-md-12">
                  <div className="table-responsive service_menu">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Category</th>
                          <th scope="col">Service</th>
                          <th scope="col">Service Type</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Fixed Price Fee</th>
                          <th scope="col">Milestones</th>
                          <th scope="col">Hourly Fee</th>
                          <th scope="col">Weekly Limit</th>
                          <th scope="col">Frequency</th>
                          <th scope="col">Delivery Time</th>
                          <th scope="col">Total Hours</th>
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
                                        if (data2.id === data.category_id)
                                          return data2.name
                                      })}
                                    </p>
                                    <p>
                                      {sub_categories.map(data2 => {
                                        if (data2.id === data.subcategory_id)
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
                                <td>
                                  {Service_type_options.map(data2 => {
                                    if (data2.value === data.service_type.toString())
                                      return data2.label
                                  })}
                                </td>
                                <td>{data.quantity}</td>
                                <td>{data.fixed_price}</td>
                                <td>-----</td>

                                <td>{data.hourly_fee}</td>
                                <td>{data.weekly_limit}</td>

                                {/* penfind total hours */}
                                {/* <td>{data.total_hours}</td> */}
                                <td>
                                  {frquency_options.map(data2 => {
                                    if (data2.value === data.frequency.toString())
                                      return data2.label
                                  })}
                                </td>
                                <td>{data.delivery_time}</td>

                                <td>{data.total}</td>

                                <td>
                                  <DeleteIcon
                                    onClick={(index) => deleteproposedService(data.id || "none", index)}
                                  />
                                </td>
                              </tr>
                            )
                          })
                        }
                        {proposedServices.proposed_services &&
                          proposedServices.proposed_services
                          ? proposedServices.proposed_services.map((service) => (
                            <>
                              <EditProposalComponent
                                ServiceProposal={ServiceProposal}
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
                          <td>select</td>
                          <td>Quantity</td>
                          <td>Fixed Price fee</td>
                          <td>-----</td>
                          <td>Hourly Fee</td>
                          <td>Weekly Limit</td>
                          <td>select</td>
                          <td>Delivery Time</td>
                          <td>Total Hours</td>

                          <td className="text-dark">
                            <AddCircleOutlineIcon className="fa-hand-pointer" value={"Add"} onClick={serviceMenuToggle} />
                          </td>
                        </tr>
                      </tbody>{" "}
                    </table>
                    <div className="row col-md-12 text-right">
                      {proposedServices && proposedServices ?
                        <div className="col-md-10 text-right">
       {proposedServices && proposedServices.proposedservices ?proposedServices.proposedservices.length>0?
          <ServiceButton
          value={"Delete Service Proposal"}
          onClick={() => handlePropsalserviceDeletion(proposedServices.id)}
        />:""
:
""
}
                        </div> : ""}
                      <div className="col-md-2 text-right">
                        <ServiceButton value={"Update  Menu"} onClick={handleUpdate} />
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
          <strong>Saved Service Proposal's</strong>
        </h5>
      </div>
      <ShowServiceProposal
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
      {ServiceProposal && ServiceProposal
        ? ServiceProposal.service_proposals.map((menu) => (
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
            <CardBody className=" p-0 box_shadow_table">
                  <TableContainer component={Paper}>
                    <Table className="dashboard_headingg" aria-label="simple table ">
                      <TableHead> 
                        <TableRow>
                          <TableCell>Category</TableCell>
                          <TableCell >Service</TableCell>
                          <TableCell >Service Type</TableCell>
                          <TableCell >Quantity</TableCell>
                          <TableCell >Fixed Price Fee</TableCell> 
                          <TableCell >Milestones</TableCell> 
                          <TableCell >Hourly Fee</TableCell> 
                          <TableCell >Weekly Limit</TableCell> 
                          <TableCell >Frequency</TableCell> 
                          <TableCell >Delivery Time</TableCell> 
                          <TableCell >Total Hours</TableCell> 
                        </TableRow>
                      </TableHead>
                    <TableBody>
                    {menu.proposed_services.map((service, i) => (
                      <EditProposalComponent
                        ServiceProposal={ServiceProposal}
                        contactTogglModal={contactTogglModal}
                        AvailableProjectsLoader={AvailableProjectsLoader}
                        EditTabledata={EditTabledata}
                        menu={menu}
                        service={service}
                        service_type_options={Service_type_options}
                      />
                    ))}
                    </TableBody>
                    </Table>
                  </TableContainer> 
                </CardBody>
          </Card>
            {/* <div className="row">
              <div className="col-md-10 pt-2">
                <h5></h5>
              </div>
              <div className="col-md-2 pb-2">
                
              </div>
            </div> */}
        
            {/* <div className="col-md-12">
              <div className="table-responsive service_menu">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Service</th>
                      <th scope="col">Service Type</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Fixed Price Fee</th>
                      <th scope="col">Milestones</th>
                      <th scope="col">Hourly Fee</th>
                      <th scope="col">Weekly Limit</th>
                      <th scope="col">Frequency</th>
                      <th scope="col">Delivery Time</th>
                      <th scope="col">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody>
              
                    

                  </tbody>
                </table>

              </div>
            </div> */}
          </>
        ))
        : <AvailableProjectsLoader/>}
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  ServiceProposal: makeSelectServiceProposal(),
  EditMilesTone: makeSelectMilesTone(),
  proposedServices: makeSelectproposedServices(),
  EditproposedServices: makeSelectEditproposedServices(),
})
function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchServiceProposals: () => dispatch(fetchServiceProposal()),
    dispatchFetchMilesTone: (payload) => dispatch(fetchMilestone(payload)),
    dispatcheditproposedServices: (payload) =>
      dispatch(fetchProposedServices(payload)),

    dispatchDeleteServiceProposal: (payload) =>
      dispatch(DeleteServiceProposal(payload)),

    dispatchLoadAddServiceProposal: (payload) =>
      dispatch(LoadAddServiceProposal(payload)),
    dispatchFetchSingleproposedservice: (payload) =>
      dispatch(FetchSingleproposedService(payload)),
    dispatchDeleteSingleMilestone: (payload) =>
      dispatch(LoadDeleteMilestone(payload)),
    dispatchDeleteProposalService: (payload) =>
      dispatch(LoadDeleteProposalService(payload)),
    dispatchUpdateServiceProposal: (payload) =>
      dispatch(UpdateServiceProposal(payload)),
    dispatchaddMileStone: (payload) =>
      dispatch(addMileStone(payload)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceMenu)
