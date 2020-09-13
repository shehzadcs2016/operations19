import React from "react";
import { Link } from "react-router-dom";

const ClientFooter = () => {
  return (
    <React.Fragment>
      <div
        className="px-4 py-3 position-relative  w-100"
        style={{
          backgroundColor: "#1886C5"
        }}
      >
        <div className="row mb-2">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Help Center
                </Link>
              </div>
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Contact Us
                </Link>
              </div>
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Skills & Rates
                </Link>
              </div>
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Blog
                </Link>
              </div>
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Podcast
                </Link>
              </div>
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Facebook Group
                </Link>
              </div>
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Referrals
                </Link>
              </div>
              <div className="col-md-1">
                <Link className="text-white" to="#">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2  pt-2">
            <div className="row">
              <div className="col-3">
                <Link className="text-white" to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </div>
              <div className="col-3">
                <Link className="text-white" to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
              <div className="col-3">
                <Link className="text-white" to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </div>
              <div className="col-3">
                <Link className="text-white" to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-2 text-white">
          <div className="col-md-10">
            <p>©FreeeUp, 2020. All rights reserved.</p>
          </div>
          <div className="col-md-2">
            <p>Made with ♥ in the US.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientFooter;
