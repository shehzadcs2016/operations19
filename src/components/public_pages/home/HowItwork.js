import React from "react";
import { Link } from "react-router-dom";

const HowItwork = props => {
  return (
    <div> 
      <section id="  " className="how-it-works bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="titles custom_editing left_side_our_history">
                <h2 className="titles__main-title">
                  How it works 
                </h2>
                {/* <p class="pt-1 mb-0">Submit a job request in three simple steps.</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">

              <div className="get-started-wrapper howitwork_padding">
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/Icon(1).png" alt="" />
                   
                    {/* <h4 className="stage"><a href="#">Step 1</a></h4> */}
                    <h5>
                      <strong>
                      1. Post A Service Request 
                    </strong>

                    </h5>
                    <p>
                    Post a service request and list the services you are looking for. Operations19 will send you customized proposals specific to your business from the world’s leading professionals.
                     </p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/Icon.png" alt="" />
                   
                    {/* <h4 className="stage"><a href="#">Step 2</a></h4> */}
                    <h5>
                      <strong>

                     2. Handpicked Proposals
                    </strong>
                    </h5>
                    <h5>
                      <strong>

                      Sent Your Way 
                    </strong>
                    </h5>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you. </p>
                  </div>
                  {/* <div className="col-sm-12 col-md-3 col-lg-3 mobile-padding">
									<img src="img/dispute/dispute-3.png" alt=""/>
									<p className="bar-ymp"></p>
									<h4 className="stage"><a href="#">Stage 3</a></h4>
									<p>Hire and Pay Securely</p>
								</div> */}
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/Icon(2).png" alt="" />
                   
                    {/* <h4 className="stage"><a href="#">Step 3</a></h4> */}
                    <h5>
                      <strong> 
                      3. Project Management 
                    </strong>
                    </h5>
                    <p>Track hired services through our intuitive project management tool. Communicate with your hired professionals directly from your account.</p>

                  </div>
                  </div>
                  <div className="row justify-content-center mt-4">
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/Icon(3).png" alt="" />
                   
                    {/* <h4 className="stage"><a href="#">Step 3</a></h4> */}
                    <h5>
                      <strong> 
                      4. Your Partner in Success 
                    </strong>
                    </h5>
                    <p>We work closely with you from day one to provide you with the best possible experience. 
                      Our support team is on call 24/7 to assist you with your every need. 
                    </p>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    
                  <img src="img/dispute/Icon(4).png" alt="" />
                    {/* <h4 className="stage"><a href="#">Step 3</a></h4> */}
                    <h5>
                      <strong> 
                     5. Hassle-Free Billing   
                    </strong>
                    </h5>
                    <p>Pay for fixed-price or hourly services, view invoices, pay for the services you authorize, receive 24/7 customer support.
                    </p>

                  </div>
                  
                  </div>
                  <div className="dashed_line1">
                  </div>
                  <div className="dashed_line2">
                  </div>
                  <div className="dashed_line3">
                  </div>
                  {/* <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                  <img src="img/dispute/get_started.jpg" alt="" />
                      <div class="get-button mb-3">
                        <a class="fm_custom_btn" href="#">Get Started</a>
                      </div>
                      <p>
                      Free to Sign Up, No Monthly Recurring Fees
                      </p>
                  </div> */}
                
              </div>
            </div>
            <div className="col-md-12 contect_us_submit">
                  <div className="post-job-btn w-100 mt-3 p-0  text-center">
                      <button className="button-ymp" type="submit"> Get Started</button>
                      <p className="howirwork_start_button">
                      Free to Sign Up, No Monthly Recurring Fees
                      </p>
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
      
    </div>
  );
};

export default HowItwork;
