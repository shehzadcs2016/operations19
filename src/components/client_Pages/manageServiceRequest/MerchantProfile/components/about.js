import React from "react"
import "../App.css"
export default function About() {
  return (
    <>
      <div className="container p-4">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h5>About the merchant</h5>
        </div>
        <section className="Block1 pt-4 mt-4">
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
                Book Services from the World’s Top-Rated Professionals
                Operations19 is on a mission to provide you with world-class
                service from industry leaders. Get it right the first time and
                put your time and energy towards growing your business. Submit a
                quick service request, and we will send you offers from
                handpicked professionals specific to your needs within one
                business day. Stop sifting through hundreds of applicants.
              </p>
            </div>
          </div>
        </section>
        <section className=" pt-4 mt-4">
          <div className="container">
            <div className="box col-lg-12 col-md-12 col-sm-12">
              <div className="col-lg-4  col-md-4 col-sm-6">
                {" "}
                <h4>Skills</h4>{" "}
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 pt-3 ">
                {" "}
                <h5>Languages</h5>{" "}
                <small>
                  US, UK, and CA Service Providers ussually have higher rates
                </small>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 pt-3 ">
                {" "}
                <h5>Frameworks</h5>{" "}
                <small>
                  US, UK, and CA Service Providers ussually have higher rates
                </small>
              </div>

              <div className="col-lg-6 col-md-10 col-sm-12 pt-3 ">
                {" "}
                <h5>Libraries/Api,s</h5>{" "}
                <small>
                  US, UK, and CA Service Providers ussually have higher rates
                </small>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 pt-3 ">
                {" "}
                <h5>Tools</h5>{" "}
                <small>
                  US, UK, and CA Service Providers ussually have higher rates
                </small>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 pt-3 ">
                {" "}
                <h5>Platforms</h5>{" "}
                <small>
                  US, UK, and CA Service Providers ussually have higher rates
                </small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
