import React, { useEffect } from "react"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Avatar,
} from "@material-ui/core"
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap"
import { Link } from "react-router-dom"

import { getFormatedDate, queryParam } from "../../../../utils"

import { connect } from "react-redux"
import AvailableProjectsLoader from "../loaders"
import DefaultProfile from "../../images/avatar-s-22.png"
import { useHistory } from "react-router"

function SingleOpenRequest({ open }) {
  const { push } = useHistory()

  return (
    <>
      <Card className="mb-3">
        <CardHeader>
          <h4 className="text-color h4">{open.service_title}</h4>
        </CardHeader>
        <CardBody>
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <p>{`Created on ${getFormatedDate(open.created_at)}`}</p>
              <p> {`Ticket # ${open.id}`}</p>
              <strong>Ready to hire</strong>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <Button
                onClick={() => push(`/clients-viewOffers?id=${open.id}`)}
                variant="contained"
                style={{
                  backgroundColor: "#2dced4",
                  color: "white",
                }}
              >
                View Offers
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
// const mapStateToProps = createStructuredSelector({
//   pauseReasons: makeSelectPauseReasons(),
// })

// const mapDispatchToProps = (dispatch) => ({
//   DispatchSendBonus: (id) => {
//     dispatch(sendBonus(id))
//   },
//   DispatchSetHoursLimit: (id) => {
//     dispatch(hoursLimit(id))
//   },
//   DispatchpauseFreelancer: (id) => {
//     dispatch(pauseFreelancer(id))
//   },
//   DispatchfetchReasons: () => {
//     dispatch(fetchReasonPauseFreelancer())
//   },
// })
// export default connect(mapStateToProps, mapDispatchToProps)(
export default SingleOpenRequest
