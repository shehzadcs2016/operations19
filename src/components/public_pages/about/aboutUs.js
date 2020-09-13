import React from 'react';
import Header from "../shared/Header";
import Seen from "../home/SeenOn";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";

const aboutUs = () => {
  return (
    <React.Fragment>
      <Header />
      <section style={{ background: 'url(images/banner.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blog-hero-area">
                <div className="blog-category-title Platform HIT_banner custom_subheader">
                  <h2>About the<br />Operations19 Platform </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Seen />
      <section className="padding_80">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-5">
              <img src="/images/about_us/About1.png" alt="" />
              <div className=" about_2_section ">
                <h2 className="mb-2 titles__main-title ">
                  Our Services
                </h2>
                <p class="pt-1 mb-2">
                  Operations19 provides businesses with quick access to services from the world’s leading professionals. Book one-time or repetitive tasks from proven top-rated professionals.
                </p>
                <p class="pt-1 mb-2 ">
                  Our handpicked professionals are leaders in their industry and apply proven methods for guaranteed success and scalability.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/images/about_us/about2.png" alt="" />
              <div className=" about_2_section ">
                <h2 className="mb-2 titles__main-title ">
                  Our Motivation
                </h2>
                <p class="pt-1 mb-2 ">
                  Businesses do not have time to hire, train, and manage virtual assistants. While many websites claim to offer top talent or the top 1%, this is just not true in most cases.
                </p>
                <p class="pt-1 mb-2 ">
                  Most businesses that hire virtual assistants find themselves micromanaging these workers or creating step-by-step instructional guidelines for executing their tasks.
                </p>
                <p class="pt-1 mb-2 ">
                  We created Operations19 to provide businesses with quick access to services from the world’s leading professionals. These are professionals with extensive experience in their field. They do not require constant monitoring and teaching. They have seen it all and apply proven methods for guaranteed success and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80 bg-light">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-5">
              <img src="/images/about_us/about3.png" alt="" />
              <div className=" about_2_section ">
                <h2 className="mb-2 titles__main-title ">
                  We’re on a Mission
                </h2>
                <p class="pt-1 mb-2">
                  Operations19 is on a mission to provide you with world-class service from industry leaders. Purchase services from professionals with a proven track record and get your work done correctly and professionally.
                </p>
                <p class="pt-1 mb-2 ">
                  Operations 19 is your source for executing all your business needs in a professional and timely manner. Get it right the first time and put your time and energy towards growing your business. Operations19 is in your corner every step of the way!
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/images/about_us/about4.png" alt="" />
              <div className=" about_2_section ">
                <h2 className="mb-2 titles__main-title ">
                  Our Motivation
                </h2>
                <p class="pt-1 mb-2 ">
                  Operation19 wants to assist companies with their struggle to keep business expenses low. Instead of hiring employees to execute tasks that take only a few hours per day, simply pay for the services you need when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80 pb-0">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-5">
              <img src="/images/about_us/about5.png" alt="" />
              <div className=" about_2_section ">
                <h2 className="mb-2 titles__main-title ">
                  Per-Task Project Management
                </h2>
                <p class="pt-1 mb-2">
                  Managing your business on a per-task basis will allow you to better organize your business priorities and reach your goals faster. When using our platform, you will be able to track and manage tasks from the professionals you hire. Real accountability, real progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="  " className="how-it-works pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="titles custom_editing left_side_our_history">
                <h2 className="titles__main-title">
                We Are Passionate About 
                </h2> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">

              <div className="get-started-wrapper howitwork_padding">
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/about_Icon6.png" alt="" /> 
                    <h5>
                      <strong>
                      Our Clients
                    </strong>

                    </h5>
                    <p>
                    We are devoted to our clients. Business is what keeps the world moving, and we want to assist you in reaching your business goals. We are in your corner every step of the way.
                     </p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/about_Icon1.png" alt="" />
                    <h5>
                      <strong>
                      Your Bottom Line
                    </strong>
                    </h5> 
                    <p>We are here to reduce your expenses. Stop paying workers to experiment on your dime. Hire real professionals to get it right the first time. </p>
                  </div> 
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/about_Icon2.png" alt="" /> 
                    <h5>
                      <strong>
                      The Long Haul
                    </strong>
                    </h5>
                    <p>We care a great deal about your success. It is our job and duty to provide you with exceptional service whenever you need it.</p>

                  </div>
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                    <img src="img/dispute/about_Icon3.png" alt="" /> 
                    <h5>
                      <strong>
                      World-Class Service 
                    </strong>
                    </h5>
                    <p>Customer service is at the core of Oprations19. We work closely with you from day one to provide you with the best possible experience. Our support team is on call 24/7 to assist you with your every need.
                    </p>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">

                    <img src="img/dispute/about_Icon4.png" alt="" /> 
                    <h5>
                      <strong>
                      Our Professionals
                    </strong>
                    </h5>
                    <p>Our professionals are an extension of the Operations19 family. We will always look out for your best interest and work extremely hard to bring you consistent work.
                    </p>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">

                    <img src="img/dispute/about_Icon5.png" alt="" /> 
                    <h5>
                      <strong>
                      Our Partners
                    </strong>
                    </h5>
                    <p>Partnerships and collaboration are the cornerstones of Operation19. Our business model compliments thousands of professional services and SaaS providers. If you believe that we can help each other, please contact us. We would love to discuss the potential for a mutually rewarding relationship.  
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="padding_80">
        <div className="container">
          <div className="row">
            <div className="col-md-4 left_side_our_history text-center">
              <div className=" custom_editing">
                <h2 className="titles__main-title">
                  Our History
                </h2>
              </div>
              <div className="Our_history_button">
                <div className="get-button">
                  <Link to="/professional-application" className="fm_custom_btn_history padding_butn mt-1">
                    Post a Service Request
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <p class="pt-1 mb-2 text-justify">
              In 2012, Operations19 launched as an e-commerce / Amazon consulting agency in New York City. We were among the first agencies to offer consulting services for brands looking to expand their presence online. Since then, we have helped thousands of brands successfully grow their business online. Many of these brands have a strong presence in some of the largest retail chains.
                </p>
              <p class="pt-1 mb-2 text-justify">
              As business continues to shift from retail to online, brands are more focused on growing their online presence. What we have seen in the last eight years is a consistent demand for services from experienced service providers in e-commerce, Amazon, marketing, writing, accounting, admin and support, graphics and design, as well as web/mobile and software.
                </p>
                <p class="pt-1 mb-2 text-justify">
                While many platforms claim to offer the top 1% of remote talent, this is just not true in most cases. Most businesses that hire virtual assistants from these networks find themselves micromanaging or creating instructional guidelines for executing tasks.
                </p>
                <p class="pt-1 mb-2 text-justify">
                We created Operations19 to provide businesses with quick access to services from proven top-rated professionals with extensive experience in their field and do not require constant monitoring and teaching. We’re on a mission to provide businesses with world-class services from industry leaders.
                </p> 
            </div>
          </div>
        </div>
      </section>
      {/* <section className="padding_80 bg-white  mt-1 custom_shadow">
        <div className="container  about_us_page">
          <div className="row justify-content-md-center">
            <div className="col-lg-7 bg-light custom_shadow vertical_align_middle">
              <div className=" ">
                <h2 className="mb-2 titles__main-title text-primary">
                  Our Services
                </h2>
                <span class="about_us_page_detail">Operations19 provides businesses with quick access to services from the world’s leading professionals. Book one-time or repetitive tasks from proven top-rated professionals. Our handpicked professionals are leaders in their industry and apply proven methods for guaranteed success and scalability.  </span>
              </div>
            </div>
            <div className="col-lg-3">
              <img className=" " src="/images/about_us/1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80 bg-light  mt-1 custom_shadow">
        <div className="container about_us_page">
          <div className="row">
            <div className="col-lg-3">
              <img className=" " src="/images/about_us/2.jpg" alt="" />
            </div>
            <div className="col-lg-7 custom_shadow bg-white vertical_align_middle">
              <div className=" ">
                <h2 className="mb-2 titles__main-title text-primary">
                  Our Motivation
                </h2>
                <span class="about_us_page_detail">
                  Businesses do not have time to hire, train, and manage virtual assistants. While many websites claim to offer top talent or the top 1%, this is just not true in most cases. Most businesses that hire virtual assistants find themselves micromanaging these workers or creating step-by-step instructional guidelines for executing their tasks. We created Operations19 to provide businesses with quick access to services from the world’s leading professionals. These are professionals with extensive experience in their field. They do not require constant monitoring and teaching. They have seen it all and apply proven methods for guaranteed success and scalability.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80  mt-1 bg-white custom_shadow">
        <div className="container  about_us_page">
          <div className="row justify-content-md-center">
            <div className="col-lg-7 custom_shadow bg-light  vertical_align_middle">
              <div className=" ">
                <h2 className="mb-2 titles__main-title text-primary">
                  We’re on a Mission
                </h2>
                <span class="about_us_page_detail">
                  Operations19 is on a mission to provide you with world-class service from industry leaders. Purchase services from professionals with a proven track record and get your work done correctly and professionally. Operations 19 is your source for executing all your business needs in a professional and timely manner. Get it right the first time and put your time and energy towards growing your business. Operations19 is in your corner every step of the way!
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <img className=" " src="/images/about_us/3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80  mt-1 bg-light custom_shadow">
        <div className="container about_us_page">
          <div className="row">
            <div className="col-lg-3">
              <img className=" " src="/images/about_us/2.jpg" alt="" />
            </div>
            <div className="col-lg-7 custom_shadow bg-white vertical_align_middle">
              <div className=" ">
                <h2 className="mb-2 titles__main-title text-primary">
                  In a Post-COVID-19 World
                </h2>
                <span class="about_us_page_detail">
                  Operation19 wants to assist companies with their struggle to keep business expenses low. Instead of hiring employees to execute tasks that take only a few hours per day, simply pay for the services you need when you need them.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80  mt-1 bg-white custom_shadow">
        <div className="container  about_us_page">
          <div className="row justify-content-md-center">
            <div className="col-lg-7 custom_shadow bg-light  vertical_align_middle">
              <div className=" ">
                <h2 className="mb-2 titles__main-title text-primary">
                  Per-Task Project Management
                </h2>
                <span class="about_us_page_detail">
                  Managing your business on a per-task basis will allow you to better organize your business priorities and reach your goals faster. When using our platform, you will be able to track and manage tasks from the professionals you hire. Real accountability, real progress.
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <img className=" " src="/images/about_us/5.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="padding_80  mt-1 bg-light custom_shadow">
        <div className="container about_us_page">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div class="titles custom_editing">
                <h2 class="titles__main-title"><strong>Operations19 is Passionate About  </strong></h2></div>
              <div className="get-started-wrapper">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 padding_bottom_35px">
                    <div className="about_us_icon mb-3">
                      <i class="fas fa-heart"></i>
                    </div>
                    <div className="about_us_detail">
                      <h5>
                        <strong>
                          Our Clients
                        </strong>
                      </h5>
                      <p>
                        We are devoted to our clients. Business is what keeps the world moving, and we want to assist you in reaching your business goals. We are in your corner every step of the way.
                      </p>
                    </div>

                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 padding_bottom_35px">
                    <div className="about_us_icon mb-3">
                      <i class="fab fa-opencart"></i>
                    </div>
                    <div className="about_us_detail">
                      <h5>
                        <strong>
                          Your Bottom Line
                    </strong>
                      </h5>
                      <p>We are here to reduce your expenses. Stop paying workers to experiment on your dime. Hire real professionals to get it right the first time. </p>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 padding_bottom_35px">
                    <div className="about_us_icon mb-3">
                      <i class="fas fa-flag"></i>
                    </div>
                    <div className="about_us_detail">
                      <h5>
                        <strong>
                          The Long Haul
                    </strong>
                      </h5>
                      <p>We care a great deal about your success. It is our job and duty to provide you with exceptional service whenever you need it.</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 padding_bottom_35px">
                    <div className="about_us_icon mb-3">
                      <i class="fas fa-thumbs-up"></i>
                    </div>
                    <div className="about_us_detail">
                      <h5>
                        <strong>
                          World-Class Service
                    </strong>
                      </h5>
                      <p>
                        Customer service is at the core of Oprations19. We work closely with you from day one to provide you with the best possible experience. Our support team is on call 24/7 to assist you with your every need.
                    </p>
                    </div>

                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 padding_bottom_35px">
                    <div className="about_us_icon mb-3">
                      <i class="fas fa-users"></i>
                    </div>
                    <div className="about_us_detail">
                      <h5>
                        <strong>
                          Our Professionals
                    </strong>
                      </h5>
                      <p>Our professionals are an extension of the Operations19 family. We will always look out for your best interest and work extremely hard to bring you consistent work.</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 padding_bottom_35px">
                    <div className="about_us_icon mb-3">
                      <i class="fas fa-handshake"></i>
                    </div>
                    <div className="about_us_detail">
                      <h5>
                        <strong>
                          Our Partners
                      </strong>
                      </h5>
                      <p>
                        Partnerships and collaboration are the cornerstones of Operation19. Our business model compliments thousands of professional services and SaaS providers. If you believe that we can help each other, please contact us. We would love to discuss the potential for a mutually rewarding relationship.
                      </p>
                    </div>
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

export default aboutUs;