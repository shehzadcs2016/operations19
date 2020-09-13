import React from "react";
import { Link } from "react-router-dom";

const PhoneCall = props => {
  return (
    <section id="PhoneCall" className=" padding_80 ">
        {/* <div className="cta " style={{ background: "url(img/cta/cta-bg2.png)" }}> */}
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 custom_editing">
              <div className="we_are_here  m-lg-5 m-0 pb-md-0 pb-3 pt-5 pt-lg-0">
                <span>We are here to help</span>
              <h2>
                <strong>
                 Schedule a meeting with us today
                </strong>
              </h2>
              <p>Not sure where to start?  Our team of expert consultants will
                customize a winning strategy specific to your needs. Tap into
                our elite team of industry specific entrepreneurs to help you
                scale your business with proven processes.</p>
              <p>Our members are our number one top priorty. We are with you every step of the way.</p>
              
              <div className="get-button mt-3">
                <Link to="#" className="fm_custom_btn">
                  Schedule a Call
                </Link>
              </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="ceo_detail text-center mt-4">
                <img src="images/dummy_ceo1.jpg" alt="" />
                <Link to="#" className="ceo_info">
                  Garrett German | Director of Business Development
                </Link>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* <div className="container mt-5  ">
        <div className="row text-center">
        <div className="col-lg-2 col-md-12 col-sm-12">
                  <h4 className="mt-2">
                   <strong> 
                   Seen on:
                   </strong>
                  </h4>
                </div>
          <div className="  col-lg-2 col-md-2 col-sm-12 pb-4 pb-md-0">
            <img
              style={{
                maxHeight: "60px",
                maxWidth: "60px"
              }}
              src="images/Company 1.png"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 pb-4 pb-md-0">
            <img
              style={{
                maxHeight: "110px",
                maxWidth: "110px"
              }}
              src="images/Company 2.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 pb-4 pb-md-0">
            <img
              style={{
                maxHeight: "80px",
                maxWidth: "80px"
              }}
              src="images/Company 3.png"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 pb-4 pb-md-0">
            <img
              style={{
                maxHeight: "100px",
                maxWidth: "100px"
              }}
              src="images/Company 4.png"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 pb-4 pb-md-0">
            <img
              style={{
                maxHeight: "60px",
                maxWidth: "60px"
              }}
              src="images/Company 5.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default PhoneCall;
