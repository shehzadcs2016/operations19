import React from "react"
import UpdateComponent from "../InnerComponents/updatePropsalComponent"
import {     
  TableRow,
  TableCell,
  Paper, } from "@material-ui/core"
  import { Card, CardHeader, CardBody } from "reactstrap";
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
  LoadDeleteProposedService
} from "../../actions"
function EditProposalComponent({
  ServiceProposal,
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
  EditproposedServices,serviceMenuToggle,
  dispatchFetchSingleproposedservice,
  dispatchDeleteSingleProposedService
}) {
  const EditData = (id) => {
    serviceMenuToggle()
    dispatchFetchSingleproposedservice({ id: id })
    setEditTabledata(!EditTabledata)
  }
  const DeleteData = (id) => {
    dispatchDeleteSingleProposedService({id:id})

  }
  return (
    <> 
      {ServiceProposal && ServiceProposal ? (
        <>
         <TableRow key={service}>
              <TableCell className="">
              {service.subcategory.client_category.category_name}<br></br>
                <small class="text-muted small"> {service.subcategory.subcategory_name}</small> 
              </TableCell>
              <TableCell className="">
              {service.service_title}<br></br>
                <small class="text-muted small">{service.description}</small> 
              </TableCell>
              <TableCell >
              {service.service_type}
              </TableCell>
              <TableCell >
              {service.quantity}
              </TableCell>
              <TableCell >
              {service.fixed_price?service.fixed_price:'----'}
              </TableCell>
              <TableCell >
              <button
                onClick={() => contactTogglModal(service.id)}
                type="button"
                class="btn service_add_btn"
              >
                {EditProp === true ? "Edit" : "View"}
              </button>
              </TableCell>
              <TableCell >
              {service.hourly_fee}
              </TableCell>
              <TableCell >
              {service.weekly_limit}
              </TableCell>
              <TableCell >
              {service.frequency}
              </TableCell>
              <TableCell >
              {service.delivery_time}
              </TableCell>
              <TableCell >
              {service.total}
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
              <TableCell >

              </TableCell>
         </TableRow>
          {/* <tr key={service}>
            <td>
            {service.subcategory.client_category.category_name}
              <br />
              <small>
              {service.subcategory.subcategory_name}
              </small>
            </td>
            <td>
              {service.service_title} <br />
              <small>{service.description}</small>
            </td>
            <td>{service.service_type}</td>
            <td>{service.quantity}</td>
            <td>{service.fixed_price?service.fixed_price:'----'}</td>
            <td>
              <button
                onClick={() => contactTogglModal(service.id)}
                type="button"
                class="btn btn-outline-primary"
              >
                {EditProp === true ? "Edit" : "View"}
              </button>
            </td>
            <td>{service.hourly_fee}</td>
            <td>{service.weekly_limit}</td>
            <td>{service.frequency}</td>
            <td>{service.delivery_time}</td>
            <td>{service.total}</td>
            {EditProp === true ? (
              <>
                <td>
                  <EditIcon onClick={() => EditData(service.id)} />
                </td>
                <td>
                  <DeleteIcon onClick={() => DeleteData(service.id)} />
                </td>
              </>
            ) : (
              ""
            )}
          </tr> */}
         
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
      dispatchDeleteSingleProposedService: (payload) =>
      dispatch(LoadDeleteProposedService(payload)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProposalComponent)
