import React from "react"
import CustomModal from "../../../shared/modal"
import AvailableProjectsLoader from "../loaders"
import { getMonthName, getDay, getFullYear } from "./config"

const ContactModal = (props) => {
  console.log(props, "propsseeee")
  const { viewRequest } = props && props
  return (
    <CustomModal {...props} title="Request Detail">
      {viewRequest.length > 0 ? (
        viewRequest.map((request) => (
          <div>
            <p className="pb-2">
              Submitted on{" "}
              {getMonthName(new Date(request.created_at).getMonth())}{" "}
              {getDay(request.created_at)},{getFullYear(request.created_at)}
            </p>
            <p>
              {request.status} - Ticket # {request.ticket}{" "}
            </p>
            <p className="pb-2">
              <strong>Location preffered:</strong>{" "}
              {request.client_location["4"]}
            </p>
            <hr />
            <p className="pb-2">
              <strong>Description:</strong> {request.description}
            </p>
            <p className="pb-2">
              <strong>Desired budget:</strong>{" "}
              {request.client_budget[0].hourly_rate["9"]}
            </p>
            <p className="pb-2">
              <strong>Project type:</strong>
              {request.client_availibility.client_project_duration["4"]}
            </p>
            <p className="pb-2">
              <strong>Hours needed per week:</strong>{" "}
              {request.client_availibility.hours_of_freelancer_required}
            </p>
            <p className="pb-2">
              <strong>Availability required:</strong>
              {request.client_availibility.client_schedule["4"]}
            </p>
            <p className="pb-2">
              <strong>Weekends needed:</strong>
              {request.client_availibility.freelancer_availability_weekend["3"]}
            </p>
            <p className="pb-2">
              If you have any issues getting in touch with a candidate, let us
              know and we'll be glad to help!
            </p>
          </div>
        ))
      ) : (
        <div>
          <p className="pb-2"> No Request Available for this Project....</p>
        </div>
      )}
    </CustomModal>
  )
}
export default ContactModal
