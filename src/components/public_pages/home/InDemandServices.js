import React from "react";
import { Link } from "react-router-dom";

const InDemandServices = (props) => {
  return (
    <div>
      <section className="padding_80 Demand_section_des">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="titles custom_editing mb-4">
                <h2 className="demand_ind_main_head">
                  Most In-Demand Services
                  From Operations19
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-5 padding_lft_ri8_hovrsection"> 
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/amazon.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">Amazon</a></h6>
                </div>
                <div className="category__info">
                  <p>Amazon Seller Central, Amazon Vendor Central , Amazon Merch, Amazon Affiliates & More.</p>
                </div>
                <div className="category__info_more_ser">
                  <h6><a href="#"> View All Services</a></h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 left_right_borders">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/e-comerce.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">E-commerce</a></h6>
                </div>
                <div className="category__info">
                  <p>Walmart, Google Shopping, Product Listings, Shopify, Woo Commerce, Drop Shipping, Wholesale & More.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/marketing.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">Marketing</a></h6>
                </div>
                <div className="category__info">
                  <p>SEO, Social Media Marketing, Adwords Experts, Affiliate Marketers, Influencer Marketing, Lead Generation & More.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 padding_lft_ri8_hovrsection">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/writng.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">Writing</a></h6>
                </div>
                <div className="category__info">
                  <p>Article & Blog Writing, Website Content, Podcast Writing, Book & E-book Writing, Content Editing & More.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 left_right_borders">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/graphics_and_design.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">Graphics & Design</a></h6>
                </div>
                <div className="category__info">
                  <p>Logo Design, Graphics Design, UX/UI Design, Video Editor, Illustrators,3D Graphics Design & More </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/develper.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">Web, Mobile & Software Dev</a></h6>
                </div>
                <div className="category__info">
                  <p>Web Developer, Mobile Developer, Wix Developer, Desktop App Developer, Software Engineer & More.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="row justify-content-center padding_lft_ri8_hovrsection">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/admin_spport.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">Admin & Support</a></h6>
                </div>
                <div className="category__info">
                  <p>Virtual Assistant, Microsoft Excel Expert, Data Entry, Customer Service, Market Research & More.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 left_side_borders">
              <div className="category">
                <div className="category__image">
                  <img src="img/dispute/accounting.png" alt="" /> 
                </div>
                <div className="category__info">
                  <h6><a href="#">Accounting</a></h6>
                </div>
                <div className="category__info">
                  <p>Business Consulting, Financial Consulting, Book Keeping, Accounting, Financial Planning & CFA's & More.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 contect_us_submit mt-3">
              <div className="post-job-btn w-100 mt-5 p-0  text-center">
                <button className="button-ymp" type="submit"> View All Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-light padding_80 in_demand">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <div className="titles custom_editing mb-4">
                <h2 className="titles__main-title text-white">
                  <strong>
                    Most in-demand services from Operations19
                  </strong>
                </h2>

              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 in_demand_services">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action"> Cras justo odio
                          <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Vestibulum at eros
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 in_demand_services">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action"> Cras justo odio
                          <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Vestibulum at eros
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 in_demand_services">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action"> Cras justo odio
                          <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Vestibulum at eros
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 in_demand_services">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action"> Cras justo odio
                          <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus
                        <span className="float-right"><i className="far fa-arrow-alt-circle-right"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section> */}
    </div>
  );
};

export default InDemandServices;
