import React from "react"
import { Card, CardBody } from "reactstrap"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Avatar,
} from "@material-ui/core"
import CustomModal from "../../../shared/modal"
import RequestModal from "./ContactModel"
import { createStructuredSelector } from "reselect"
import { fetchViewRequests } from "../actions"
import { connect } from "react-redux"
import { makeSelectViewRequest } from "../selectors"
import DefaultProfile from "../../images/avatar-s-22.png"
import { fullDate } from "./config"
const ContactModal = (props) => {
  console.log(props, "hoiild")
  const {
    full_name,
    skype_id,
    phone_number,
    first_name,
    last_name,
  } = props.hold.user.user_profile
  const { email } = props.hold.user

  return (
    <CustomModal {...props} title="Contact Information">
      <div>
        <p className="pb-2">
          Get in touch with{" "}
          <b>
            {full_name == " " ? `${first_name}  ${last_name}` : `${full_name}`}
          </b>{" "}
          through one of the following contact methods.
        </p>
        <p className="pb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="pb-2">
          <strong>Phone:</strong> {phone_number}
        </p>
        <p className="pb-2">
          <strong>Skype:</strong> {skype_id}
        </p>
        <p className="pb-2">
          If you have any issues getting in touch with a candidate, let us know
          and we'll be glad to help!
        </p>
      </div>
    </CustomModal>
  )
}
function SinglePutOnHold({
  hold,
  onReactivate,
  dispatchViewRequest,
  viewRequest,
}) {
  const [modalContact, setModalContact] = React.useState(false)
  const [modalRequest, setModalRequest] = React.useState(false)
  const requestTogglModal = (id) => {
    if (modalRequest === false) {
      dispatchViewRequest({ id: id })
    }
    setModalRequest(!modalRequest)
  }
  const contactTogglModal = () => {
    setModalContact(!modalContact)
  }
  return (
    <React.Fragment>
      <ContactModal
        hold={hold}
        modal={modalContact}
        toggleModal={contactTogglModal}
      />
      <RequestModal
        viewRequest={viewRequest}
        modal={modalRequest}
        toggleModal={requestTogglModal}
      />
      <Card className="mb-3">
        <CardBody>
          <div className="row">
            <div className="col-md-4 pb-4 ">
              <Avatar
                alt="Profile"
                src={
                  hold.user.user_profile.user_profile_image == null
                    ? DefaultProfile
                    : `http://localhost:3000/${hold.user.user_profile.user_profile_image}`
                }
                style={{ width: "180px", height: "180px" }}
                className="mx-auto mx-0"
              />
            </div>
            <div className="col-md-6 pb-4 pt-0 pt-lg-3">
              <h4 className="text-color pb-2 h2">
                {hold.user.user_profile.full_name == ""
                  ? `${hold.user.user_profile.first_name} ${hold.user.user_profile.last_name}`
                  : hold.user.user_profile.full_name}
              </h4>
              <p className="pb-2">
                <strong>Status: </strong>
                <span className="text-info">{hold.status} </span> |
                <strong> Hours limit: </strong>
                <span className="text-info">
                  {" "}
                  {hold.client_budget[0].hourly_rate["9"]}{" "}
                </span>
              </p>
              <p className="pb-2">
                <strong>Start date: </strong>
                <span className="text-secondary">
                  {fullDate(hold.created_at)}
                </span>
              </p>
              <Button
                onClick={() => onReactivate(hold.id)}
                variant="contained"
                className="bg-success text-white"
              >
                Reactivate
              </Button>
            </div>
            <div className="col-md-12">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#2dced4",
                  color: "white",
                }}
                className="w-100"
                onClick={contactTogglModal}
                name="hireHourly"
              >
                Contact Information
              </Button>
            </div>
            <div className="col-md-12 py-4 d-flex flex-column justify-content-between flex-lg-row">
              <p>
                <strong>Project name: </strong>
                <span className="text-info">{hold.project_detail} </span> |
                <strong> Project rate: </strong>
                <span className="text-success">
                  {hold.client_budget[0].budget}{" "}
                </span>
              </p>

              <Button
                onClick={() => requestTogglModal(hold.id)}
                variant="contained"
                style={{
                  backgroundColor: "#2dced4",
                  color: "white",
                }}
                className=" mx-lg-4 mx-0 mt-2 mt-lg-0"
                name="hireHourly"
              >
                View Request
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
const mapStateToProps = createStructuredSelector({
  viewRequest: makeSelectViewRequest(),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchViewRequest: (payload) => {
    dispatch(fetchViewRequests(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePutOnHold)
