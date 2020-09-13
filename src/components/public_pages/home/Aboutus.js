import React from "react";
import { Link } from "react-router-dom";

const Aboutus = (props) => {
  return (
    <div>
      <section id="Aboutus" className="padding_80">
        <div className="container-fluid pl-0">
          <div className="row justify-content">
            <div className="col-md-4 helping_business_groth1">
              <img className="helping_business_groth" src="/images/img_left.png" alt="" />
            </div>
            <div className="col-md-8 helping_bussness_right" >
              <div className="row ">
                <div className="col-md-9">
                  <div className="short_heading">
                    <h3>Helping Businesses Grow Through Proven Processes And Innovation</h3>
                  </div>
                </div>
              </div>
              <div className="row point_heading justify-content-center mt-2">
                <div className="col-md-6">
                  <h3>Best of The Best</h3>
                  <p>Our handpicked professionals are leaders in their industry and apply proven methods for guaranteed success and scalability. Work with the world’s top-rated professionals and give yourself the best chance at success.</p>
                </div>
                <div className="col-md-6">
                  <h3>White Glove Service</h3>
                  <p>Submit a quick service request, and we will send you offers from handpicked professionals specific to your needs within one business day. Stop sifting through hundreds of applicants.</p>
                </div>
                <div className="col-md-6">
                  <h3>Your Partner in Success</h3>
                  <p>We work closely with you from day one to provide you with the best possible experience. Our support team is on call 24/7 to assist you with your every need.</p>
                </div>
                <div className="col-md-6">
                  <h3>100% Satisfaction Guarantee</h3>
                  <p>If you are unhappy with your service provider for whatever reason, we will find an immediate replacement for you and cover the transition cost.</p>
                </div>
                <div className="col-md-6">
                  <h3>Expert Guidance</h3>
                  <p>Not sure where to start? Submit a service request for an expert consultant today. Hiring an expert consultant before executing your project will give you the best chance at success. Our handpicked consultants will customize a winning strategy specific to your business needs.</p>
                </div>
                <div className="col-md-6">
                  <h3>Your Personal Dashboard</h3>
                  <p>Post service requests, review proposals, hire and manage services, communicate with professionals, manage billing, and much more, all from one simple and intuitive dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="Aboutus" className="bg-light padding_80 mt-1 custom_shadow">
        <div className="container">
          <div className="row justify-content"> 
            <div className="why_choose_us_section">
              <div className="row">
                <div className="col-lg-6 p-0 top_margin_55">
                  <img className="why_chose_img" src="/images/growth-image.png" alt="" />
                </div>
                <div className="col-lg-6 p-0">
                  <div className="why_choose_us_points">
                    <div className="mb-4 custom_editing"> 
                      <h4 className="pt-3 mb-3 ">
                        Helping Businesses Grow Through Proven  <strong>Processes and Innovation.</strong>
                      </h4>
                    </div>
                    <ul class="features">
                      <li><h5><strong>Best of the Best</strong></h5>
                        <span class="screenshot-box__feature-desc">Our handpicked professionals are leaders in their industry and apply proven methods for guaranteed success and scalability. Work with the world’s top-rated professionals and give yourself the best chance at success. </span>
                      </li>
                      <li><h5><strong>White Glove Service</strong></h5>
                        <span class="screenshot-box__feature-desc"> Submit a quick service request, and we will send you offers from handpicked professionals specific to your needs within one business day. Stop sifting through hundreds of applicants.</span>
                      </li>
                      <li><h5><strong>Your Partner in Success</strong></h5>
                        <span class="screenshot-box__feature-desc">We work closely with you from day one to provide you with the best possible experience.
                        Our support team is on call 24/7 to assist you with your every need.
                                              </span>
                      </li>
                      <li><h5><strong>100% Satisfaction Guarantee</strong></h5>
                        <span class="screenshot-box__feature-desc">If you are unhappy with your service provider for whatever reason, we will find an immediate replacement for you and cover the transition cost. </span>
                      </li>
                      <li><h5><strong>Expert Guidance </strong></h5>
                        <span class="screenshot-box__feature-desc">Not sure where to start? Submit a service request for an expert consultant today. Hiring an expert consultant before executing your project will give you the best chance at success. Our handpicked consultants will customize a winning strategy specific to your business needs.</span>
                      </li>
                      <li><h5><strong>Your Personal Dashboard   </strong></h5>
                        <span class="screenshot-box__feature-desc">Post service requests, review proposals, hire and manage services, communicate with professionals, manage billing, and much more, all from one simple and intuitive dashboard.  </span>
                      </li>
                    </ul> 
                  </div>
                </div>

              </div>
            </div> 
          </div>
        </div>
      </section>  */}
    </div>
  );
};

export default Aboutus;
