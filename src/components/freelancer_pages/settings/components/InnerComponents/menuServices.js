import React from "react"
import {   
  Button, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, } from "@material-ui/core"
import UpdateComponent from "../InnerComponents/updatePropsalComponent"
import {
  makeSelectServiceProposal,
  makeSelectMilesTone,
  makeSelectproposedServices,
  makeSelectEditproposedServices,
} from "../../selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import {
  fetchServiceProposal,
  fetchMilestone,
  DeleteServiceProposal,
  fetchProposedServices,
  LoadAddServiceProposal,
  FetchSingleproposedService,
  LoadDeletemenuservice
} from "../../actions"
function MenuServices({
  MenuServices,
  AvailableProjectsLoader,
  contactTogglModal,
  EditProp,
  EditIcon,
  DeleteIcon,
  setEditTabledata,
  EditTabledata,
  DeleteProposal,
  menu,
  handleServices,
  selectMenuHandler,
  categories,
  sub_categories,
  frquency_options,
  service_type_options,
  service,
  EditproposedServices,
  dispatchFetchSinglemenuservice,
  dispatchDeleteSinglemenuservice,serviceMenuToggle
}) {
  const EditData = (id) => {
    serviceMenuToggle()
    dispatchFetchSinglemenuservice({ id: id })
    setEditTabledata(!EditTabledata)
  }
  const DeleteData = (id) => {
    dispatchDeleteSinglemenuservice({id:id})

  }
  console.log(EditTabledata,"EditTabledata")
  return (
    <>
      {MenuServices && MenuServices ? (
        <>
        <TableRow key={service}>
             
              <TableCell className="">
                {service.subcategory.client_category.category_name}<br></br>
                <small class="text-muted small"> {service.subcategory.subcategory_name}</small> 
              </TableCell>
              <TableCell className="">
                  {service.service_title} <br></br>
                <small class="text-muted small">{service.description}</small> 
              </TableCell> 
              <TableCell >
              {service.fixed_price}
              </TableCell>
              <TableCell  >
              {service.hourly_fee}
              </TableCell>
              <TableCell >
              {frquency_options.map(data2 => {
                              if (data2.value === service.service_frequency.toString())
                                return data2.label
                            })}
              </TableCell>
              {EditProp === true ? (
              <>
                 <TableCell >
                  <EditIcon onClick={() => EditData(service.id)} />
                  </TableCell>
                <TableCell >
                  <DeleteIcon onClick={() => DeleteData(service.id)} />
                </TableCell>
              </>
            ) : (
              ""
            )}
          </TableRow>
          
         
        </>
      ) : (
        <AvailableProjectsLoader />
      )}
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  EditproposedServices: makeSelectEditproposedServices(),
})
function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchSingleproposedservice: (payload) =>
      dispatch(FetchSingleproposedService(payload)),
      dispatchDeleteSinglemenuservice: (payload) =>
      dispatch(LoadDeletemenuservice(payload)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuServices)
