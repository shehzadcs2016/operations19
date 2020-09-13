import React, { useState } from "react"
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import { Link } from "react-router-dom"
import SideBar from "./components/sidebar"
import Section from "./components/section"

function ViewOffers() {
  return (
    <React.Fragment>
      <section>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12">
              <Link className="row pl-3" to="/clients-requests">
                Back to All Requests <ArrowRightAltIcon />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className=" col-xl-5 col-lg-6 col-md-10 col-sm-12">
              Service Request #9099-Ecommerce-Amazon Seller Central
            </div>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className="row col-xl-8  col-lg-6 col-md-10 col-sm-12">
              <Link to="/" className="pl-3">
                {" "}
                Want more options?
              </Link>
              {"   "}
              <p className="pl-2"> #9099-Ecommerce-Amazon Seller Central </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="container">
          <div className="row">
            <SideBar />
            <div className="row col-xl-9  col-lg-9 col-md-9 col-sm-9">
              <Section />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default ViewOffers
