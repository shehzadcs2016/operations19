import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>


      {/* <section className="subscribe_now">
        <div className="container">
          <div className="footer-subscribe">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h4 className="mt-2" style={{ color: "#fff" }}>
                  <strong>
                    World-class articles,delivered weekly.
                   </strong>
                </h4>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="subscribe-form-pt">
                  <div id="mc_embed_signup">
                    <form
                      action="https://awardorb.us17.list-manage.com/subscribe/post?u=40bdb138dfb2d7c92d79ef6cb&amp;id=78778cd267"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group">
                          <input
                            placeholder="Type your Email"
                            type="email"
                            value=""
                            name="EMAIL"
                            onChange={() => { }}
                            className="required email"
                            id="mce-EMAIL"
                          />
                        </div>
                        <div id="mce-responses" className="clear">
                          <div
                            className="response"
                            id="mce-error-response"
                          ></div>
                          <div
                            className="response"
                            id="mce-success-response"
                          ></div>
                        </div>
                        <div className="clear">
                          <button
                            type="submit"
                            id="mc-embedded-subscribe"
                            name="subscribe"
                            className="btn-search-pt button"
                            style={{ background: "#6b86dd" }}
                          >
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                      <div id="mce-responses" className="clear">
                        <div
                          className="response"
                          id="mce-error-response"
                        ></div>
                        <div
                          className="response"
                          id="mce-success-response"
                        ></div>
                      </div>
                      <div className="clear">
                        <button
                          type="submit"
                          id="mc-embedded-subscribe"
                          name="subscribe"
                          className="btn-search-pt button"

                        >
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <footer className="custom_shadow" id="footer" style={{ backgroundColor: "#142A66" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">


              {/* <div className="row mx-auto w-100 text-white mb-5">
              <div className="col-md-3 pb-2 text-center">
                <h4>Join the Freeeup Community</h4>
              </div>
              <div className="col-md-3 pb-2 text-center">
                <div className="get-button">
                  <Link to="clients-signup" className="get-btn">
                    Hire Top Talent
                  </Link>
                </div>
              </div>
              <div className="col-md-2 pb-2 text-center">
                <h4>OR</h4>
              </div>
              <div className="col-md-4 pb-2 text-center">
                <div className="get-button">
                  <Link to="freelance-signup" className="get-btn">
                    Apply as a Freelancer
                  </Link>
                </div>
              </div>
            </div> */}

              <div className="widget-area footer_color">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="footer-widget">
                      {/* <h5 className="widget-title">operations19</h5> */}
                      <Link to="/">
                        <img className="mb-3" src="images/logo-white.png" alt="" />
                      </Link>
                      <ul>
                        <li>
                          <p>
                            Operations19 is a best-in-class “service for hire” platform that connects businesses with digital services from today’s industry-leading experts. Book one-time or repetitive tasks from proven top-rated professionals
                        </p>
                        </li>
                      </ul>
                      {/* <h5 className="widget-title mt-2 get_social">
                        Follow us
                      </h5> */}
                      {/* <ul>
                        <li>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-facebook-f"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-instagram"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-linkedin-in"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-twitter"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-youtube"
                            ></i>
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="footer-widget">
                      <h5 className="widget-title">For Clients</h5>
                      <ul>
                        <li>
                          <Link to="#">Post a Service Request </Link>
                        </li>
                        <li>
                          <Link to="top-rated">Top-Rated Professionals</Link>
                        </li>
                        <li>
                          <Link to="about-us">About Us</Link>
                        </li>
                        <li>
                          <Link to="how-it-works-for-clients">How It Works for Clients</Link>
                        </li>
                        <li>
                          <Link to="available-services">Available Business Services </Link>
                        </li>
                        <li>
                          <Link to="solutions">Businesses Solutions</Link>
                        </li>
                        <li>
                          <Link to="blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="contactus">Contact Us</Link>
                        </li> 
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="footer-widget">
                      <h5 className="widget-title">For Professionals</h5>
                      <ul>
                        <li>
                          <Link to="apply-as-pro">Apply to Offer Your Services</Link>
                        </li>
                        <li>
                          <Link to="how-it-works-for-professionals">How It Works for Professionals</Link>
                        </li>
                        <li>
                          <Link to="#">FAQs</Link>
                        </li>
                        <li>
                          <Link to="contactus">Contact Us</Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-12">
                    <div className="footer-widget">
                      <h5 className="widget-title">Terms </h5>
                      <ul>
                        <li>
                          <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="#">Terms and Conditions</Link>
                        </li>
                        <li>
                          <Link to="#">Copyright Policy</Link>
                        </li>
                        <li>
                          <Link to="#">Code of Conduct</Link>
                        </li>
                        <li>
                          <Link to="#">Fees and Charges</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="dropdown-divider"></div>
                  <div class="col-lg-12 col-md-12 col-sm-12 ">
                    <div class="copyright-area ">
                      <div class="copyright-wrapper divider_border">
                        <div class="copyright-text">
                        <ul>
                        <li>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-facebook-f"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-instagram"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-linkedin-in"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-twitter"
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              style={{ marginRight: "20px" }}
                              className="fab fa-youtube"
                            ></i>
                          </Link>
                        </li>
                      </ul>
                        </div>
                        <div class="footer-nav">
                          <ul id="menu-footer-nav" class="footer_nav">
                            <li
                              id="menu-item-439"
                              class="menu-item menu-item-type-custom menu-item-object-custom footer_last_contect_after menu-item-439"
                            >
                              <a href="# " className="dil_style_ri8">MAde with <span><i class="fas fa-heart heart_color"></i></span> in nyc</a>
                            </li>
                            {/* <li
                              id="menu-item-440"
                              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-440"
                            >
                              <a href="# ">Privacy Policy</a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <section id="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="copyright-area">
                <div class="copyright-wrapper">
                  <div class="copyright-text">
                    © 2020 <a href="# ">Operations19</a>
                  </div>
                  <div class="footer-nav">
                    <ul id="menu-footer-nav" class="footer_nav">
                      <li
                        id="menu-item-439"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-439"
                      >
                        <a href="# ">Terms &amp; Condition</a>
                      </li>
                      <li
                        id="menu-item-440"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-440"
                      >
                        <a href="# ">Privacy Policy</a>
                      </li>
                    </ul>
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

export default Footer;
