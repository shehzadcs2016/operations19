import React from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";

const topRated = () => {
    return (
        <React.Fragment>
            <Header />
            <section style={{ background: 'url(images/banner.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="blog-hero-area">
                                <div className="blog-category-title Platform custom_subheader">
                                    <h2>Top-Rated <br /><span><strong>Professionals</strong></span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container">
                    <div className="col-md-12 pt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="left_section_image" alt="" src="/images/person-with-logos.png" />
                            </div>
                            <div className="col-lg-6 p-0 pb-4">
                                <div className="work_with_top_rated bg-light">
                                    <div className="mb-0 custom_editing">
                                        <h2 className="pt-3 mb-2 "><strong>Work With Top Rated Professionals Used </strong>
                                        </h2>
                                        <h5 className="mb-4">
                                            To Scale Todays Leading Brands Online
                                        </h5>
                                        <p>
                                            Our professionals have worked with some of the largest, most influential brands in the world. They have seen it all and apply proven methods for guaranteed success and scalability.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-12 mt-3 text-center pl-5">
                                    <div className="get-button float-left">
                                        <a className="fm_custom_btn" href="/clients-signup">Connect With a Pro Today </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <div className="card-body">
                                        <div className="row justify-content-md-center">
                                            <div className="col-md-10">
                                                <div class="titles custom_editing mt-5 mb-3 titles_color_S">
                                                    <h2 class="titles__main-title  mb-3">
                                                        <strong>Insanely Motivated World-Class Professionals with Proven Track Records</strong>
                                                    </h2>
                                                    <p className="stop_wasting_time2">
                                                        Only the top 1% of professionals with a proven track record get approved. Our rigorous application process is based on client testimonials, professional experience, communication, and overall ability. Operations19 ensures that every professional you connect with has the highest level of quality and professionalism.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="cd-timeline">
                                            <ul className="timeline list-unstyled">
                                                <li className="timeline-list how_it_works_detail">
                                                    <div className="cd-timeline-content p-4 custom_shadow">
                                                        <h5><strong>Post A Service Request</strong></h5>
                                                        <p >Professionals are accepted based on real reviews and public opinion. We thoroughly screen every applicant’s public reviews to ensure excellence. Only professionals with an average 4-star rating and higher are accepted.</p>
                                                        <div className="date bg-primary">
                                                            <h4 className="mt-0">1</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="timeline-list right clearfix how_it_works_detail">
                                                    <div className="cd-timeline-content p-4 custom_shadow">
                                                        <h5><strong>Professionalism</strong></h5>
                                                        <p>What makes our professionals second to none? They excel in their areas of expertise thanks to years of professional experience from working with world-class clients on projects that have enabled them to push their limits. Thanks to this, our professionals offer amazing results and a perfectly streamlined interaction.</p>
                                                        <div className="date bg-primary">
                                                            <h4 className="mt-0">2</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="timeline-list how_it_works_detail">
                                                    <div className="cd-timeline-content p-4 custom_shadow">
                                                        <h5><strong>Commitment to Excellence </strong></h5>
                                                        <p>Each professional is closely monitored by our management team to ensure that they are providing businesses with the highest level of service. Professionals are held accountable through our internal rating system. Professionals with strong ratings are rewarded with consistent jobs according to their skillset and strengths. This system of checks and balances motivates professionals to provide businesses with the best possible experience.</p>
                                                        <img src="assets/images/small/img-1.jpg" alt="" className="rounded mr-1" width="120" />
                                                        <img src="assets/images/small/img-2.jpg" alt="" className="rounded" width="120" />

                                                        <div className="date bg-primary">
                                                            <h4 className="mt-0">3</h4>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-light padding_80 in_demand">
                <div class="container">
                    <div class="row  justify-content-md-center">
                        <div class="col-lg-10 text-center ">
                            <div class="titles custom_editing mb-5">
                                <h2 class="titles__main-title text-white mb-3">
                                    <strong>Stop Wasting Time Micromanaging Unqualified Virtual Assistants</strong>
                                </h2>
                                <p className="stop_wasting_time text-white">
                                    There is no time for second-guessing when it comes to your business’s needs. You shouldn’t have to train your hired help or manage their every move. Our professionals have worked with some of the largest, most influential brands in the world. They have seen it all and apply proven methods for guaranteed success and scalability.
                                </p>
                            </div>
                            <div className="col-lg-12 col-md-12 mt-3 text-center pl-5">
                                <p className="float-center stop_wasting_time2 text-white">
                                    Do You Have What It takes?
                                </p>
                                <div className="get-button float-center">
                                    <a className="fm_custom_btn top_rated_last_section_button" href="/clients-signup">Apply As A pro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default topRated;