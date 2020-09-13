import React from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Seen from "../home/SeenOn";
import { Link } from "react-router-dom"; 

const howItWorkProfessionals = () => {
  return (
    <React.Fragment>
      <Header />
      <section style={{ background: 'url(images/banner.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blog-hero-area">
                <div className="blog-category-title Platform custom_subheader">
                  <h2>Apply To   <br /><span><strong>Offer </strong></span>your services</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80  mt-1 bg-light custom_shadow professinals_bg">
        <div className="container about_us_page">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div class="titles custom_editing">
                <h2 class="titles__main-title text-left">
                  <strong>Offer Your Services to Successful Brands Looking to Grow Their E-Commerce Business</strong></h2>
                <p class="  pt-1 mb-0 text-justify">Operations19 is a best-in-class “service for hire” platform that connects top-rated service providers with successful brands to execute their one-time or repetitive tasks. Our network of businesses purchases services in e-commerce, Amazon, marketing, writing, accounting, admin and support, graphics and design, as well as web/mobile and software development.</p>

                <h4 class="h4 text-left mb-0 mt-2">
                  <strong>Here’s How It Works</strong></h4>
                <p class=" text-left pt-1 mb-0 text-justify">Businesses submit service requests outlining their needs. Service providers submit fixed or hourly-priced proposals. Businesses accept your proposals, and working relationships are established. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white padding_80 mt-1 custom_shadow join_professinals">
        <div className="container">
          <div className="row justify-content">
            <div className="col-md-12 text-center">
              <div className="titles custom_editing">
                <h2 className="titles__main-title text-white mb-4">
                  <strong>
                      Join Operations19 and Grow Your Business 
                  </strong>
                </h2>
              </div> 
            </div>
            <div className="col-lg-7 text-center ">
              <img className="join_professinals_image" src="/images/join_pro_students.jpg" alt="" />
            </div>
            <div className="col-md-5 text-left join_professinals_detail">
            <ul class="features">
                <li><h5><strong>Exciting Clients </strong></h5>
                  <span class="screenshot-box__feature-desc">
                  You will have access to an exciting network of successful businesses. Operations19 invests heavily in onboarding enterprise and top-tier businesses. 
                   </span> 
                </li>
                <li><h5><strong>Service Menus </strong></h5>
                  <span class="screenshot-box__feature-desc"> Create service menus to showcase and upsell your services to new and existing clients. </span>
                </li>
                <li><h5><strong> Project Management </strong></h5>
                  <span class="screenshot-box__feature-desc">Access tools and resources to manage and communicate the status of your services to your clients. </span>
                </li>
                <li><h5><strong>Easy Billing and Payouts </strong></h5>
                  <span class="screenshot-box__feature-desc">Operations19 takes 15% on all billed services generated through the platform. There are no additional fees. Manage your billed services, view payouts, and receive 24/7 customer support. </span>
                </li>
                <li><h5><strong>Merchant-Friendly </strong></h5>
                  <span class="screenshot-box__feature-desc">Our professionals are an extension of the Operations19 family. We will always look out for your best interest and work extremely hard to bring you consistent work.</span>
                </li> 
              </ul>
            </div>
            
          </div>
        </div>
      </section>
      <Seen />
      <section className="how-it-works our_history bg-light mt-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className=" custom_editing">
                <h2 className="titles__main-title">
                  <strong>Our History </strong>
                </h2> 
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <p class="pt-1 mb-2 text-justify">
                In 2012, Operations19 launched as an e-commerce / Amazon consulting agency in New York City. We were among the first agencies to offer consulting services for brands looking to expand their presence online. Since then, we have helped thousands of brands successfully grow their business online. Many of these brands have a strong presence in some of the largest retail chains. As business continues to shift from retail to online, brands are more focused on growing their online presence. What we have seen in the last eight years is a consistent demand for services from experienced service providers in e-commerce, Amazon, marketing, writing, accounting, admin and support, graphics and design, as well as web/mobile and software. 
                </p>
                <p class="pt-1 mb-0 text-justify">
                While many platforms claim to offer top the 1% of remote talent, this is just not true in most cases. Most businesses that hire virtual assistants from these networks find themselves micromanaging or creating instructional guidelines for executing tasks. We created Operations19 to provide businesses with quick access to services from proven top-rated professionals with extensive experience in their field and do not require constant monitoring and teaching. We’re on a mission to provide businesses with world-class services from industry leaders. 
                </p>
                <p class="pt-2 mb-0">
                  Calling all professionals, join our family today!
                </p>
                <div className="get-button float-left">
                  <Link to="freelance-signup" className="fm_custom_btn mt-1">
                      Apply Now
                  </Link>
                </div> 
             </div> 
          </div>

        </div>
      </section>
     
      <Footer />
    </React.Fragment>
  )
}

export default howItWorkProfessionals;