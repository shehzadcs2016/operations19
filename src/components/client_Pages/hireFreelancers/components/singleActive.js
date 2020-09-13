import React from "react"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Avatar,
} from "@material-ui/core"
import { Card, CardBody, CardFooter } from "reactstrap"
import { Link } from "react-router-dom"
import CustomModal from "../../../shared/modal"
import { Popover, Textfield } from "../../../shared/formComponents"
import { SelectMenu } from "../SelectMenu"
import shortid from "shortid"
import {
  sendBonus,
  hoursLimit,
  fetchReasonPauseFreelancer,
  pauseFreelancer,
} from "../actions"
import { makeSelectPauseReasons } from "../selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import AvailableProjectsLoader from "../loaders"
import DefaultProfile from "../../images/avatar-s-22.png"

const ContactModal = (props) => {
  const {
    full_name,
    skype_id,
    phone_number,
    first_name,
    last_name,
  } = props.active.user.user_profile
  const { email } = props.active.user
  return (
    <CustomModal {...props} title="Contact Information">
      <div>
        <p className="pb-2">
          Get in touch with
          <b>
            {" "}
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
const BonusModal = (props) => {
  return (
    <CustomModal {...props} title="Give a bonus">
      <div>
        <p className="pb-2">
          Please add the bonus that you would like to reward to Monica Olivia De
          Castro.
        </p>
        <p className="pb-2">
          They will be informed and you will be billed for the bonus on your
          next invoice.
        </p>
        <Textfield
          required
          onChange={props.handleBonus}
          value={props.bonusAmount}
          label="Enter the bonus amount"
          name="bonusAmount"
          type="number"
        />
        <Textfield
          required
          onChange={props.handleComment}
          value={props.commment}
          label="Comments "
          name="comment"
          multiline
          rows="4"
        />
        <Button
          onClick={props.sendBonus}
          variant="contained"
          style={{ backgroundColor: "#2dced4", color: "white" }}
          className="mx-auto"
        >
          Submit
        </Button>
      </div>
    </CustomModal>
  )
}
const PauseModal = (props) => {
  const options = [
    { id: shortid.generate(), value: "Project Completed" },
    { id: shortid.generate(), value: "Freelancers no longer needed" },
    { id: shortid.generate(), value: "others" },
  ]
  return (
    <CustomModal {...props} title="Want to pause">
      <div>
        <p>
          Please confirm that you'd like to pause Monica Olivia De Castro for
          this project.
        </p>
        <p>
          They will no longer be able to bill hours to your account, unless you
          unpause them.
        </p>
        <SelectMenu
          required
          value={props.reasonPause}
          onChange={props.handleReasonPause}
          name="pauseReason"
          label="Select your reason to pause"
          labelWidth={220}
          options={props.pauseReasons}
        />
        <Textfield
          required
          value={props.reasonPauseComment}
          onChange={props.handleReasonPauseComment}
          label="Please enter the reason why you're pausing"
          name="pauseComment"
          multiline
          rows="4"
        />
        {props.reasonPause == 4 ? (
          <Textfield
            required
            value={props.otherReason}
            onChange={props.handleOtherReason}
            label="Please enter the other reason why you're pausing"
            name="other"
          />
        ) : (
          ""
        )}
        <Button
          onClick={props.setPauseFreelancer}
          variant="contained"
          style={{ backgroundColor: "#2dced4", color: "white" }}
          className="mx-auto"
        >
          Submit
        </Button>
      </div>
    </CustomModal>
  )
}
const UnPauseModal = (props) => {
  return (
    <CustomModal {...props} title="Want to unpause">
      <div>
        <p className="pb-2">
          Please confirm that you'd like to unpause Michael Variacion for this
          project.
        </p>
        <p className="pb-2">
          They will be able to bill hours to your account again.
        </p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#2dced4", color: "white" }}
          className="mx-auto"
        >
          Yes, please UnPause
        </Button>
      </div>
    </CustomModal>
  )
}
const HoursModal = (props) => {
  return (
    <CustomModal {...props} title="Set a weekly hours limit">
      <div>
        <p>
          Please add the number of hours you'd like to limit Monica Olivia De
          Castro to billing to you each week.
        </p>
        <p>
          They will be informed and will not be able to bill over this new
          weekly hours limit.
        </p>
        <Textfield
          required
          onChange={props.handleHourLimit}
          value={props.hourLimit}
          inputProps={{ min: "0" }}
          type="number"
          name="weekHour"
          label="Enter the week hour limit"
        />
        <Textfield
          required
          onChange={props.handleComment}
          value={props.commment}
          label="Please comment why you are setting the limit"
          name="limitComment"
          multiline
          rows="4"
        />
        <Button
          onClick={props.SetLimit}
          variant="contained"
          style={{ backgroundColor: "#2dced4", color: "white" }}
          className="mx-auto"
        >
          Submit
        </Button>
      </div>
    </CustomModal>
  )
}

function SingleActive({
  active,
  DispatchSendBonus,
  DispatchSetHoursLimit,
  DispatchfetchReasons,
  pauseReasons,
  DispatchpauseFreelancer,
}) {
  const [modalContact, setModalContact] = React.useState(false)
  const [modalBonus, setModalBonus] = React.useState(false)
  const [modalPause, setModalPause] = React.useState(false)
  const [modalUnPause, setModalUnPause] = React.useState(false)
  const [modalHours, setModalHours] = React.useState(false)
  const [bonusAmount, setbonusAmount] = React.useState(0)
  const [hourLimit, sethourLimit] = React.useState(0)

  const [comment, setComment] = React.useState("")

  const [reasonPause, setReason] = React.useState("")
  const [otherReason, setOtherReason] = React.useState("")
  const [reasonPauseComment, setReasonComment] = React.useState("")
  const handleOtherReason = (e) => {
    setOtherReason(e.target.value)
  }
  const handleReasonPause = (e) => {
    setReason(e.target.value)
  }
  const handleReasonPauseComment = (e) => {
    setReasonComment(e.target.value)
  }
  const contactToggleModal = () => {
    setModalContact(!modalContact)
  }
  const bonusToggleModal = () => {
    setModalBonus(!modalBonus)
  }
  const pauseToggleModal = () => {
    if (modalPause === false) {
      DispatchfetchReasons()
    }
    setModalPause(!modalPause)
  }
  const unPauseToggleModal = () => {
    setModalUnPause(!modalUnPause)
  }
  const hoursToggleModal = () => {
    setModalHours(!modalHours)
  }

  const sendBonus = () => {
    DispatchSendBonus({
      id: active.id,
      bonusAmount: bonusAmount,
      comment: comment,
    })
    setModalBonus(!modalBonus)
  }
  const SetLimit = () => {
    DispatchSetHoursLimit({
      id: active.id,
      bonusAmount: bonusAmount,
      comment: comment,
    })
    setModalHours(!modalHours)
  }
  const handleBonus = (e) => {
    setbonusAmount(e.target.value)
  }
  const handleHourLimit = (e) => {
    sethourLimit(e.target.value)
  }
  const handleComment = (e) => {
    setComment(e.target.value)
  }
  const setPauseFreelancer = () => {
    DispatchpauseFreelancer({
      id: active.id,
      comment: reasonPauseComment,
      reasonPause: reasonPause,
      otherReason: otherReason,
    })
    setModalPause(!modalPause)
  }
  return (
    <>
      <ContactModal
        active={active}
        modal={modalContact}
        toggleModal={contactToggleModal}
      />
      <BonusModal
        bonusAmount={bonusAmount}
        comment={comment}
        handleComment={handleComment}
        modal={modalBonus}
        handleBonus={handleBonus}
        sendBonus={sendBonus}
        toggleModal={bonusToggleModal}
      />
      <PauseModal
        setPauseFreelancer={setPauseFreelancer}
        handleOtherReason={handleOtherReason}
        otherReason={otherReason}
        reasonPause={reasonPause}
        pauseReasons={pauseReasons}
        reasonPauseComment={reasonPauseComment}
        modal={modalPause}
        handleReasonPause={handleReasonPause}
        handleReasonPauseComment={handleReasonPauseComment}
        toggleModal={pauseToggleModal}
      />
      <UnPauseModal modal={modalUnPause} toggleModal={unPauseToggleModal} />
      <HoursModal
        comment={comment}
        handleComment={handleComment}
        hourLimit={hourLimit}
        handleHourLimit={handleHourLimit}
        SetLimit={SetLimit}
        modal={modalHours}
        toggleModal={hoursToggleModal}
      />

      <Card className="mb-3">
        <CardBody>
          <div className="row">
            <div className="col-md-4 pb-4">
              <Avatar
                alt="Profile"
                src={
                  active.user.user_profile.user_profile_image == null
                    ? DefaultProfile
                    : `http://localhost:3000/${active.user.user_profile.user_profile_image}`
                }
                style={{ width: "180px", height: "180px" }}
                className="mx-auto mx-0"
              />
            </div>
            <div className="col-md-6 pb-4 pt-0 pt-md-3">
              <h4 className="text-color pb-2 h2">
                {active.user.user_profile.full_name == " "
                  ? `${active.user.user_profile.first_name}  ${active.user.user_profile.last_name}`
                  : `${active.user.user_profile.full_name}`}
              </h4>
              <p className="pb-2">
                <strong>Status: </strong>
                <span className="text-info">
                  {active.user.is_active ? "Active" : "Offline"}{" "}
                </span>{" "}
                <strong> Hours limit: </strong>
                <span className="text-info">
                  {active.client_availibility.client_project_duration["4"]}
                </span>
              </p>
            </div>
            <div className="col-md-12 py-4 d-flex flex-column flex-md-row">
              <Link to="/clients-viewProfile" className="text-color pt-2 ">
                View Profile
              </Link>

              <Link
                to="#"
                className="text-color pt-2 px-md-4 px-0 "
                onClick={contactToggleModal}
              >
                Contact
              </Link>

              <Link
                to="#"
                className="text-color pt-2 px-md-4 px-0 "
                onClick={bonusToggleModal}
              >
                Send Bonus
              </Link>

              <Link
                to="#"
                className="text-color pt-2 px-md-4 px-0 "
                onClick={pauseToggleModal}
              >
                Pause
              </Link>
              <Link
                to="#"
                className="text-color pt-2 px-md-4 px-0 "
                onClick={hoursToggleModal}
              >
                Set hours limit
              </Link>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-white">
          <h4>
            <small>
              Hired for
              <strong className="text-color">
                {" "}
                {active.user.user_profile.user_skills}{" "}
              </strong>
              at a rate of ${active.user.user_profile.minimum_hourly_wage} per
              hour
            </small>
          </h4>
        </CardFooter>
      </Card>
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  pauseReasons: makeSelectPauseReasons(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchSendBonus: (id) => {
    dispatch(sendBonus(id))
  },
  DispatchSetHoursLimit: (id) => {
    dispatch(hoursLimit(id))
  },
  DispatchpauseFreelancer: (id) => {
    dispatch(pauseFreelancer(id))
  },
  DispatchfetchReasons: () => {
    dispatch(fetchReasonPauseFreelancer())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleActive)
