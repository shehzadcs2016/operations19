import React from "react"
import Header from "../shared/Header"
import Seen from "../home/SeenOn";
import Footer from "../shared/Footer"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardBody } from "reactstrap"
import Book from "./Book"
import Hero from "../home/Hero"

const availableServices = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Seen />
      <div className="container">
        <Book />
      </div>
      <section id="  " className="how-it-works">
        <div className="container bg-white ">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="titles custom_editing">
                <h1 className="titles__main-title">
                  How it works 
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="get-started-wrapper">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail ">
                    <img src="img/dispute/search_job.png" alt="" />{" "}
                    {/* <h4 className="stage"><a href="#">Step 1</a></h4> */}
                    <h5>
                      <strong>Post A Service Request</strong>
                    </h5>
                    <p>
                      Post a service request and list the services you are
                      looking for. Operations19 will send you customized
                      proposals specific to your business from the world’s
                      leading professionals.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/safe.png" alt="" />

                    {/* <h4 className="stage"><a href="#">Step 2</a></h4> */}
                    <h5>
                      <strong>Handpicked Proposals Sent Your Way</strong>
                    </h5>
                    <p>
                      Review proposals and communicate directly with your
                      prospective professionals to select the best fit for you.{" "}
                    </p>
                  </div>
                  {/* <div className="col-sm-12 col-md-3 col-lg-3 mobile-padding">
									<img src="img/dispute/dispute-3.png" alt=""/>
									<p className="bar-ymp"></p>
									<h4 className="stage"><a href="#">Stage 3</a></h4>
									<p>Hire and Pay Securely</p>
								</div> */}
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/account_securty.png" alt="" />

                    {/* <h4 className="stage"><a href="#">Step 3</a></h4> */}
                    <h5>
                      <strong>Project Management</strong>
                    </h5>
                    <p>
                      Track hired services through our intuitive project
                      management tool. Communicate with your hired professionals
                      directly from your account.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/Partner_Success.jpg" alt="" />

                    {/* <h4 className="stage"><a href="#">Step 3</a></h4> */}
                    <h5>
                      <strong>100% Satisfaction Guarantee</strong>
                    </h5>
                    <p>
                      If you are unhappy with your service provider for any
                      reason, simply contact our customer success team for
                      immediate assistance. We will work closely with you to
                      ensure the best possible outcome.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/Hassle_Free.jpg" alt="" />
                    {/* <h4 className="stage"><a href="#">Step 3</a></h4> */}
                    <h5>
                      <strong>Hassle-Free Billing</strong>
                    </h5>
                    <p>
                      Pay a fixed price or hourly services, view invoices, pay
                      for the services you authorize, and receive 24/7 customer
                      support.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/get_started.jpg" alt="" />
                    <div class="get-button mb-3">
                      <a class="fm_custom_btn" href="#">
                        Get Started
                      </a>
                    </div>
                    <p>Free to Sign Up, No Monthly Recurring Fees</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12 text-center">
            <div className="load-button"> 
            <p class="titles__main-title"><strong>INSTANT ACCESS TO TRUE TOP TALENT</strong></p>
              <Link to="#" className=" fm_custom_btn">
                Get Started
              </Link>
            </div> 
            <p className="pt-2">
              ALL APPLICANTS ARE RIGUROUSLY TESTED BY INDUSTRY SPECIFIC
              SPECIALIST
            </p>
          </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default availableServices
