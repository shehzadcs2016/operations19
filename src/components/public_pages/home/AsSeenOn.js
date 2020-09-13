import React from "react";
import { Link } from "react-router-dom";

const AsSeenOn = (props) => {
  return (
    <section id=" " className=" padding_80 mb-1">
      <div className="container py-2">
        {/* <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="titles custom_editing">
              <h2 className="titles__main-title">
                <strong>As Seen On</strong>
              </h2>
            </div>
          </div>
        </div> */}
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-1 mb-3"> 
                <h4 className="titles__main-title  ">
                  <strong>
                    As seen on
                  </strong>
                </h4> 
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <div className="as_seen_on"> 
                  <div className="as_seen_img">
                    <img
                    // style={{
                    //   maxHeight: "100px",
                    //   maxWidth: "100px"
                    // }}
                    src="images/as_ssen/01.png"
                    alt=""
                    />
                  </div>
                  <div className="as_seen_img">
                    <img
                    // style={{
                    //   maxHeight: "100px",
                    //   maxWidth: "120px"
                    // }}
                    src="images/as_ssen/02.png"
                    alt=""
                    />
                  </div> 
                  <div className="as_seen_img">
                    <img
                    // style={{
                    //   maxHeight: "100px",
                    //   maxWidth: "120px"
                    // }}
                    src="images/as_ssen/03.png"
                    alt=""
                    />
                  </div> 
                  <div className="as_seen_img">
                    <img
                    // style={{
                    //   maxHeight: "100px",
                    //   maxWidth: "100px"
                    // }}
                    src="images/as_ssen/04.png"
                    alt=""
                    />
                  </div>
                  
                  {/* <div className="as_seen_img">
                    <img
                    style={{
                      maxHeight: "70px",
                      maxWidth: "70px"
                    }}
                    src="images/Company 1.png"
                    alt=""
                    />
                  </div>  */}
              </div>
            </div>
              
             
             
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
