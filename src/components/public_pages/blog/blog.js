import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom"


const Blog = (props) => {

  return (
    <React.Fragment>
      <Header />
      <section id="hero_blog" style={{ background: 'url(images/banner.jpg)' }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-5 col-md-5 Blog_banner col-sm-12 justify-content-start">
              <h2>
                Operations19 Blog
              </h2>
              <p className="mt-4 mr-3 right_side_text_color">
                The Operation19 Blog is the top hub for businesses, entrepreneurs, decision makers & professional service providers featuring successful trends & insights in e-commerce, Amazon, marketing, writing, accounting, admin and support, graphics and design, as well as web/mobile and software development.
               </p>
              <div className="share_button_blog">
                <a href="#" className="social_media_icon"><i class="fab fa-facebook-f"></i> </a>
                <a href="#" className="social_media_icon2"><i class="fab fa-twitter"></i> </a>
                <a href="#" className="social_media_icon3"><i class="fab fa-linkedin"></i> </a>
                <a href="#" className="social_media_icon4"><i class="fab fa-instagram"></i></a>
                <a href="#" className="social_media_icon5"><i class="fab fa-youtube"></i> </a>
                <button class="btn share_button_social"><i class="fas fa-share-alt mr-2"></i><p>32.6K</p> Shares</button>
              </div>
            </div>
            <div className="col-md-7 Blog_banner_right">
              <div className="blog_banner_ri8">
                <p>
                  Insights & Methods Used To Scale
                  Today's Leading Brands
              </p>
              </div> 
              <div className="right_logos_blog_page">
                <div className="blog_banner_logo text-center">
                  <img src="images/logos/disney.png" alt="" />
                  <img src="images/logos/nfl.png" alt="" />
                  <img src="images/logos/marvel.png" alt="" />
                </div> 
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="padding_80 pt-5">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-8">
              <form action="#" class="hero-form blog_form">
                <div class="job-keyword">
                  <input type="text" placeholder="What are you looking for?" class="keyword" />
                  <div class="icon-two">
                    <span><i class="fas fa-search"></i></span>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 hero-form blog_form">
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option value="online" selected disabled>Categories</option>
                <option value="online">E-commerce</option>
                <option value="online">Amazon</option>
                <option value="online">Marketing</option>
                <option value="online">Writing</option>
                <option value="online">Accounting</option>
                <option value="online">Admin and support</option>
                <option value="online">Graphics and design</option>
                <option value="online">Web/Mobile and Software development</option>
              </select>
            </div>
          </div>
          <div className="row  ">
            <div className="col-md-8">
              <div class="top_heading_top">
                <h2 class="pt-3">Featured E-commerce Blog</h2>
              </div>
              <div className="row point_heading ">
                <div class="media  media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div class="media media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div className="lint_inblog">
                  <a className="" href="#">View All Posts <i class="fas fa-arrow-right ml-2"></i></a>
                </div>
              </div>
              <div class="top_heading_top">
                <h2 class="pt-3">Featured Amazon Blog</h2>
              </div>
              <div className="row point_heading ">
                <div class="media  media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div class="media media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div className="lint_inblog">
                  <a className="" href="#">View All Posts <i class="fas fa-arrow-right ml-2"></i></a>
                </div>
              </div>
              <div class="top_heading_top">
                <h2 class="pt-3">Featured Marketing Blog</h2>
              </div>
              <div className="row point_heading ">
                <div class="media  media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div class="media media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div className="lint_inblog">
                  <a className="" href="#">View All Posts <i class="fas fa-arrow-right ml-2"></i></a>
                </div>
              </div>
              <div class="top_heading_top">
                <h2 class="pt-3">Featured Writing Blog</h2>
              </div>
              <div className="row point_heading ">
                <div class="media  media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div class="media media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div className="lint_inblog">
                  <a className="" href="#">View All Posts <i class="fas fa-arrow-right ml-2"></i></a>
                </div>
              </div>
              <div class="top_heading_top">
                <h2 class="pt-3">Featured Graphics & Design Blog</h2>
              </div>
              <div className="row point_heading ">
                <div class="media  media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div class="media media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div className="lint_inblog">
                  <a className="" href="#">View All Posts <i class="fas fa-arrow-right ml-2"></i></a>
                </div>
              </div>
              <div class="top_heading_top">
                <h2 class="pt-3">Featured Graphics & Design Blog</h2>
              </div>
              <div className="row point_heading ">
                <div class="media  media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div class="media media_blog_padding">
                  <img class="d-flex mr-3 " src="images/logos/disney.png" alt="Generic placeholder image" height="64" />
                  <div class="media-body">
                    <h3 class="mt-0 font-16">How to Master Video Interviews During COVID-19</h3>
                    <p className="mb-3"><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read</p>
                    <p>Review proposals and communicate directly with your prospective professionals to select the best fit for you...</p>
                  </div>
                </div>
                <div className="lint_inblog">
                  <a className="" href="#">View All Posts <i class="fas fa-arrow-right ml-2"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="subscribe_now_sibebar">
                <div className="logo_side_bar_blog">
                  <img src="images/logo-white.png" alt="" />
                </div>
                <div class="blog-title">
                  <h3 href="#">Subscribe To Our Newsletter</h3>
                </div>
                <div class="text">
                  <p>For insights into today's most successful trends from industry leaders in e-commerce and its related categories.</p>
                  <form>
                    <div class="form-group">
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-mail address" />
                    </div>
                  </form>
                  <a class="fm_custom_btn btn-block text-center" href="#">Subscribe Now</a>
                </div>
                <div>
                  <p className="last_text">100% Privacy. No spam guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container">
        <div className="row mt-2 mb-5 p-5">
          <div className="col-md-12">
            <form action="#" class="hero-form">

              <div class="job-keyword">
                <input type="text" placeholder="Search" class="keyword" />
                <div class="icon-two">
                  <span><i class="fas fa-search"></i></span>
                </div>
              </div>
              <div class="job-category">
                <select id="select-job">
                  <option value="online" selected disabled>Categories</option>
                  <option value="online">E-commerce</option>
                  <option value="online">Amazon</option>
                  <option value="online">Marketing</option>
                  <option value="online">Writing</option>
                  <option value="online">Accounting</option>
                  <option value="online">Admin and support</option>
                  <option value="online">Graphics and design</option>
                  <option value="online">Web/Mobile and Software development</option>
                </select> 
              </div>
              <button class="hero-btn"><i class="fas fa-search"></i> Search</button>
            </form>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div class="blog-posts">
              <div class="blog-image">
                <img src="images/blog-8.jpg" alt="" />
              </div>
              <div class="blog-details">
                <ul class="post-meta imges_text">
                  <li>Jan. 05. 2019</li> 
                </ul>
                <div class="blog-title"> 
                </div>
                <div class="text imges_text">
                  <p className="">How to install the app with in 2 munites. Most easiest way ever. How to install the app with in 2 munites.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div class="blog-posts">
              <div class="blog-image">
                <img src="images/blog-8.jpg" alt="" />
              </div>
              <div class="blog-details">
                <ul class="post-meta imges_text">
                  <li>Jan. 05. 2019</li> 
                </ul>
                <div class="blog-title"> 
                </div>
                <div class="text imges_text">
                  <p>How to install the app with in 2 munites. Most easiest way ever. How to install the app with in 2 munites.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="blog-sidebar">

              <div class="widget search-widget">
                <div class="mb-2">
                  <h4 className="mb-2">Subscribe to the Operations19 Newsletter.</h4>
                  <p>For insights into today's most  successful trends from industry leaders in e-commerce and its related categories. </p>
                </div>
                <div class="search-field">
                  <form class="subscribe-form">
                    <input type="text" placeholder="Search" />
                    <button type="button" class="btn btn-primary btn-block mt-3 subscribe_shadow">SUBSCRIBE NOW</button>
                  </form>
                </div>
              </div>

              <div class="widget recent-post-widget">
                <div class="widget-title">
                  <h4>Recent Post</h4>
                </div>
                <div class="recent-posts">
                  <div class="feature-image">
                    <a href="#"><img src="img/blog/recent-1.jpg" alt="" /></a>
                  </div>
                  <div class="post-details">
                    <h6 class="post-title">
                      <a href="#">How to install the app with in 2 munites</a>
                    </h6>
                    <div class="post-meta">
                      <ul>
                        <li class="date">01 April 2019</li>
                        <li><svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg> 135</li>
                        <li><svg class="svg-inline--fa fa-comment fa-w-16" aria-hidden="true" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>35</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="recent-posts">
                  <div class="feature-image">
                    <a href="#"><img src="img/blog/recent-2.jpg" alt="" /></a>
                  </div>
                  <div class="post-details">
                    <h6 class="post-title">
                      <a href="#">Style your own workspace with this app</a>
                    </h6>
                    <div class="post-meta">
                      <ul>
                        <li class="date">01 April 2019</li>
                        <li><svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg> 120</li>
                        <li><svg class="svg-inline--fa fa-comment fa-w-16" aria-hidden="true" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg> 21</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="recent-posts">
                  <div class="feature-image">
                    <a href="#"><img src="img/blog/recent-3.jpg" alt="" /></a>
                  </div>
                  <div class="post-details">
                    <h6 class="post-title">
                      <a href="#">Best 10 tips for this app lorem ipsum</a>
                    </h6>
                    <div class="post-meta">
                      <ul>
                        <li class="date">03 April 2019</li>
                        <li><svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg> 103</li>
                        <li><svg class="svg-inline--fa fa-comment fa-w-16" aria-hidden="true" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>07</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget comments-widget">
                <div class="widget-title">
                  <h4>Recent Comments</h4>
                </div>
                <div class="comment">
                  <span class="icon"><svg class="svg-inline--fa fa-comment fa-w-16" aria-hidden="true" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg></span>
                  <p><a href="#" class="name">David Willson</a> <i>on</i> Building a New Successful Hostel Campaign</p>
                </div>
                <div class="comment">
                  <span class="icon"><svg class="svg-inline--fa fa-comment fa-w-16" aria-hidden="true" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg></span>
                  <p><a href="#" class="name">Charli Brown</a> <i>on</i> Building a New Successful Hostel Campaign</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </React.Fragment>
  )
}

export default Blog;