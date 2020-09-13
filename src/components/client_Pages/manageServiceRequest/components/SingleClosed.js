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
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap"
import { Link } from "react-router-dom"
import CustomModal from "../../../shared/modal"
import { Popover, Textfield } from "../../../shared/formComponents"
import shortid from "shortid"

import { connect } from "react-redux"
import AvailableProjectsLoader from "../loaders"
import DefaultProfile from "../../images/avatar-s-22.png"
import { getFormatedDate } from "../../../../utils"

function SingleClosedRequest({ close }) {
  return (
    <>
      <Card className="mb-3">
        <CardHeader>
          <h4 className="text-color h4">{close.service_title}</h4>
        </CardHeader>
        <CardBody>
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <p>{`Created on ${getFormatedDate(close.created_at)}`}</p>
              <p> {`Ticket # ${close.id}`}</p>
              <strong>Ready to hire</strong>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <Link to="/clients-viewOffers">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#2dced4",
                    color: "white",
                  }}
                >
                  View Offers
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
export default SingleClosedRequest
