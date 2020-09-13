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
import SideBar from "./sidebar"
import Men from "../../images/avatar.png"

import { getFormatedDate } from "../../../../utils"

import { connect } from "react-redux"
import AvailableProjectsLoader from "../loaders"

function SingleOpenRequest({ open }) {
  return (
    <>
      <div className="container">
        <section className="p-4">
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="row Block1 col-xl-9  col-lg-9 col-md-9 col-sm-9">
                <div className="pt-4 mt-4 pl-5  col-xl-3 col-lg-3 col-md-3 ">
                  <img src={Men} width={80} height={80} />
                  <p>youngeinstein</p>
                  <Link to="/merchant-profile">
                    <p>View Profile</p>
                  </Link>
                  <p>Location</p>
                  <p>Merchant Reviews</p>
                  <p>Contact Merchant:</p>
                  <p>Project Management</p>
                </div>
                <div className=" col-xl-9 col-lg-9 col-md-9 ">
                  <div className="row">
                    <section className=" pt-4 mt-4">
                      <div className="container">
                        <div className="box col-lg-12 col-md-12 col-sm-12">
                          <div className="row ">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <h5>From</h5>
                              <b> India</b>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <h5>In Business Since</h5>
                              <b>Jun 2018</b>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <h5>Avg.Response Time</h5>
                              <b>1 hour</b>
                            </div>
                          </div>
                          <hr />
                          <p>
                            Book Services from the World’s Top-Rated
                            Professionals Operations19 is on a mission to
                            provide you with world-class service from industry
                            leaders. Get it right the first time and put your
                            time and energy towards growing your business.
                            Submit a quick service request, and we will send you
                            offers from handpicked professionals specific to
                            your needs within one business day. Stop sifting
                            through hundreds of applicants.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default SingleOpenRequest
