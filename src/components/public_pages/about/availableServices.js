import React from "react"
import Header from "../shared/Header"
import Footer from "../shared/Footer"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardBody } from "reactstrap"
import Center from "./center"
const availableServices = () => {
  return (
    <React.Fragment>
      <Header />
      <section style={{ background: "url(images/banner.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blog-hero-area">
                <div className="blog-category-title Platform custom_subheader">
                  <h2>
                    {" "}
                    <span>
                      <strong>Available Services </strong>
                    </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Center />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default availableServices
