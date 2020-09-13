import React from "react"

export default function ProposedService({
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
  service,
}) {
  const EditData = () => {
    setEditTabledata(!EditTabledata)
  }
  const DeleteData = (id) => {
    DeleteProposal(id)
  }
  return (
    <>
      <tr>
        <td>
          {service.category_id === 1
            ? "Computer Science"
            : service.category_id === 2
            ? "Business"
            : ""}{" "}
          <br />
          <small>
            {service.subcategory_id === 1
              ? "Web Development"
              : service.subcategory_id === 2
              ? "Accounting"
              : ""}
          </small>
        </td>
        <td>
          {service.service_title} <br />
          <small>{service.description}</small>
        </td>
        <td>{service.service_type}</td>
        <td>{service.quantity}</td>
        <td>{service.fixed_price}</td>
        <td>
          <button
            onClick={() => contactTogglModal(service.service_proposal_id)}
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
              <EditIcon onClick={EditData} />
            </td>
            <td>
              <DeleteIcon onClick={() => DeleteData(service.id)} />
            </td>
          </>
        ) : (
          ""
        )}
      </tr>
    </>
  )
}
