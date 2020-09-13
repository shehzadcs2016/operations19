import React from 'react';
import Header from "../shared/Header";
import Seen from "../home/SeenOn";
import HowItwork from "../home/HowItwork";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";

const howItWorkClient= () =>{
  return (
    <React.Fragment>
      <Header />
      <section style={{ background: 'url(images/banner.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blog-hero-area">
                <div className="blog-category-title HIT_banner Platform custom_subheader">
                  <h2>How It Works<br/>for Clients</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Seen />
      <HowItwork />
      {/* <section id="  " className="how-it-works">
        <div className="container bg-white "> 
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">

              <div className="get-started-wrapper">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/search_job.png" alt="" /> 
                    <h5>
                      <strong>
                      Post A Service Request 
                    </strong>

                    </h5>
                    <p>
                    Post a service request and list the services you are looking for. Operations19 will send you customized proposals specific to your business from the world’s leading professionals.
                     </p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/safe.png" alt="" /> 
                    <h5>
                      <strong>

                      Handpicked Proposals Sent Your Way 
                    </strong>
                    </h5>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you. </p>
                  </div> 
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/account_securty.png" alt="" /> 
                    <h5>
                      <strong> 
                      Project Management 
                    </strong>
                    </h5>
                    <p>Track hired services through our intuitive project management tool. Communicate with your hired professionals directly from your account.</p>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/Partner_Success.jpg" alt="" /> 
                    <h5>
                      <strong> 
                      100% Satisfaction Guarantee
                    </strong>
                    </h5>
                    <p>If you are unhappy with your service provider for any reason, simply contact our customer success team for immediate assistance. We will work closely with you to ensure the best possible outcome.
                    </p>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    
                  <img src="img/dispute/Hassle_Free.jpg" alt="" /> 
                    <h5>
                      <strong> 
                      Hassle-Free Billing   
                    </strong>
                    </h5>
                    <p>Pay a fixed price or hourly services, view invoices, pay for the services you authorize, and receive 24/7 customer support.</p>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                  <img src="img/dispute/get_started.jpg" alt="" />
                      <div class="get-button mb-3">
                        <Link class="fm_custom_btn" to="/clients-signup">Get Started</Link>
                      </div>
                      <p>
                      Free to Sign Up, No Monthly Recurring Fees
                      </p>
                  </div>
                </div>
              </div>
            </div> 
          </div>

        </div>
      </section> */}
      
      <Footer />
    </React.Fragment>
  )
}

export default howItWorkClient;