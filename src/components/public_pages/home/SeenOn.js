import React, { Component } from "react"; 
import Slider from "react-slick";

export default class SeenOn extends Component {
  render() {
    const settings = { 
      className: "center",
      // centerMode: true,
      dots: false,
      arrows: false,
      infinite: true, 
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    };
    return (
      <section id="seenOn" className=" bg_twilight_blue ">

        <div className="container ">
          {/* <div className="col-lg-2 col-md-12 col-sm-12">
              <h4 className="mt-2">
                <strong>
                  Seen on:
                   </strong>
              </h4>
            </div> */}
            <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 text-center brand_title">
              <h4 className="text_grey h5 heading_seenON_component">
                <strong>
                Brands We Work With 
                   </strong>
              </h4>
            </div> 
              <div className="col-md-9 brand_slider">
              <Slider {...settings} className="text-center">
            

            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/disney.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/marvel.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/apple.png"
                alt=""
              />
            </div> 
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/NBC.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/hallmark.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/NBA.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/CBS-news.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/lego.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/steve-madden.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/samsung.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/reebok.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/nickelodeon.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  margin:"0 auto"
                }}
                src="images/company_logos/NFL.png"
                alt=""
              />
            </div>
          </Slider>
              </div> 
            </div>
          
        </div>
      </section>
    );
  }
};