import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom"

const blogOverView = (props) => {
    return (
    <>
        <Header />
    <section className="padding_80">
        <div className="container">
          <div className="row mt-2 pl-5 pr-5">
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
                <option value="online" selected disabled>Browse Categories</option>
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
            <div className="row pl-3 pr-2">
              <div className="col-md-8 blog_over_2" >
                <p className="blog_over_1"><strong><a href="#" className="">Blog </a></strong> > Web, Mobile & software Dev</p>
                <div class="short_heading margin_pading">
                  <h3>4 Ways to Make Up for Lost Freelance Revenue from Covid-19 (By the End of 2020)</h3>
                </div>
                <div class="mt-3 margin_pading">
                  <p><strong>Operations19 Team</strong> • Jul 10, 2020 • 7 Min Read <span className="float-right">
                    <i class="fas fa-eye"></i> 2323 <i class="ml-2 fas fa-comment"></i> 8</span></p>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src="/images/blog_img1.png" alt="" />
                    <p class="pt-1 mb-2 mt-3">
                      It is always a good idea to learn new skills that can help you grow while also helping you to support yourself and your family. Now possibly more than ever. Learning new skills can enrich your life in so many ways including financial but also in your creativity, health, and quality of life.
                    </p>
                    <p class="pt-1 mb-2 ">
                      While we are currently living in challenging times, we are also in a time of immense opportunity. There are so many things we can learn online that can help us start or expand a freelance career giving our lives more freedom and flexibility.
                    </p>
                    <p class="pt-1 mb-2">
                      Here are 5 self-taught freelance career ideas to get you started. You can even combine these to offer your clients helpful packages.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 left_side_our_history mt-2">
                    <h3>1. Content Marketing</h3>
                    <p class="pt-1 mb-2 mt-3">
                      Content Marketing is all about using creative thought to develop purposeful and engaging content for the web whether that is through blogs, websites, or email campaigns.


                    </p>
                    <p class="pt-1 mb-2 ">
                      Content marketing is about nurturing customers and potential customers to lead to conversion. If you are interested in a freelance career in content marketing, you will want to look into Blog Content Strategy and Storytelling. Jon Youshaei has a great class on this called Stories That Sell: 7 Secrets To Create Killer Content.
                   </p>
                    <p class="pt-1 mb-2">
                      From emails to blog posts to sales pages, as the Marketing Manager at YouTube, Jon knows what he is talking about. And this is an informative and straightforward class.
                  </p>
                  </div>
                  <div className="col-md-12 left_side_our_history mt-2">
                    <h3>2. Social Media Marketing</h3>
                    <p class="pt-1 mb-2 mt-3">
                      Social Media Marketing gets more specific than content marketing and focuses on social media platforms for the distribution of content. You can go to college to get a marketing degree but many social media managers and marketers actually learned their skills themselves online.
                   </p>
                    <p class="pt-1 mb-2 ">
                      Learning Social Media Content Strategy can prepare you to help a wide range of clients.
                   </p>
                    <p class="pt-1 mb-2">
                      You could manage full social media profiles for clients, create social media post packages to sell, work with clients to develop their monthly social media content calendars, and more.
                   </p>
                  </div>
                  <div className="col-md-12 left_side_our_history mt-2">
                    <h3>3. Search Engine Optimization</h3>
                    <p class="pt-1 mb-2 mt-3">
                      If you are a technical person and love data learning Search Engine Optimization (SEO) could be a great fit. You can learn how to build backlinks to websites, properly use Title Tags, sort through analytics, and understand how search engines like Google rank content.
                    </p>
                    <p class="pt-1 mb-2 ">
                      You can learn how to Launch and Scale SEO Campaigns to support your clients with all the work they are putting into their websites and marketing. You can also learn how to do a Technical SEO Audit for your client’s websites to see what is working and what needs to be improved.
                  </p>
                  </div>
                  <div className="col-md-12 left_side_our_history mt-2 mb-5">
                    <h3>4. Photo and Image Editing</h3>
                    <p class="pt-1 mb-2 mt-3">
                      Did you know that many individuals and companies hire freelancers to make their online images look great? Learning to edit photos using popular design tools like Photoshop can get you into a variety of freelance services.
                      
                   </p>
                    <p class="pt-1 mb-2 ">
                      You can specialize in enhancing and restoring old photos, adding special effects with photo manipulation, removing backgrounds, and even creating graphics. Business owners often don’t have the time to learn these skills and want to outsource to a professional which could be a freelancer like you.
                   </p>
                    <p class="pt-1 mb-2 ">
                      The possibilities are endless and as the late Jim Rohn said,
                   </p>
                    <p class="pt-1 mb-2 ">
                      “Learn to work harder on yourself than you do on your job. If you work hard on your job you can make a living, but if you work hard on yourself you’ll make a fortune.” Jim Rohn
                   </p>
                    <p class="pt-1 mb-2 ">
                      Learning new skills makes you more valuable to the marketplace and can greatly enhance your life. Now is the time.
                   </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 backgroundcolor_secttion">
                    <div className="imge_section_blogover">
                      <img src="images/logo-black.png" alt="" />
                      <p class="pt-1 mb-2 mt-2">
                        Book one-time or repetitive tasks from proven top-rated professionals.
                       </p>
                    </div>
                    <div className="get-started-wrapper howitwork_padding hhit_work_padding blog_section">
                      <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                          <img src="img/dispute/circle1.png" alt="" />
                          <p>
                            Post a service request.
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                          <img src="img/dispute/circle2.png" alt="" />
                          <p>Review handpicked proposals from industry leaders.</p>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mobile-padding how_it_works_detail">
                          <img src="img/dispute/circle3.png" alt="" />
                          <p>Select the best fit for you.</p>

                        </div>
                      </div>
                      <div className="dashed_line444">
                      </div>
                      <div className="dashed_line555">
                      </div>

                    </div>
                    <div class="get-button text-center">
                      <Link class="fm_custom_btn_history padding_butn mt-1" to="/professional-application">Submit a Service Request</Link>
                    </div>
                  </div>

                </div>
                <div className="row padding_80 pb-0">
                  <div className="col-md-12 top_heading border_botem">
                    <div className="row">
                      <div className="col-md-6 pl-0">
                        <p className=""><strong>8 Comment</strong></p>
                      </div>
                      <div className="col-md-6 pr-0">
                        <a href="#" className="float-right">Login <i class="fas fa-chevron-down"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 top_heading mt-1">
                    <div className="row">
                      <div className="col-md-6 pl-0">
                        <p className=""><i class="fas fa-thumbs-up"></i> Recommended 5</p>
                      </div>
                      <div className="col-md-6 pr-0">
                        <a href="#" className="float-right">Sort by Best <i class="fas fa-chevron-down"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 p-0">
                    <div class="chat-panel">
                      <div class="chat chat-left">
                        <div class="chat-avatar f_comnt_p">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/Image.png" alt="" /></a>
                        </div>
                        <div class="chat-body mr-0 mb-0">
                          <div class="chat-content mb-0">
                            <input type="text" placeholder="What are you looking for?" class="keyword-coment" />
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0"><strong>John Carter</strong> <time>• 5 min ago</time></p>
                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left reply">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0 reply_hed"><strong>Robert Owen</strong></p><p className="reply_hed ml-2"><i class="fas fa-share"></i> John Carter  <time>• 5 min ago</time></p>
                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left reply-2">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0 reply_hed"><strong>Sergio Carlos</strong></p><p className="reply_hed ml-2"><i class="fas fa-share"></i> John Carter  <time>• 5 min ago</time></p>
                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0"><strong>John Carter</strong> <time>• 5 min ago</time></p>
                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left reply">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0 reply_hed"><strong>Sergio Carlos</strong></p><p className="reply_hed ml-2"><i class="fas fa-share"></i> John Carter  <time>• 5 min ago</time></p>
                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0"><strong>John Carter</strong> <time>• 5 min ago</time></p>
                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left reply">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0 reply_hed"><strong>Sergio Carlos</strong></p><p className="reply_hed ml-2"><i class="fas fa-share"></i> John Carter  <time>• 5 min ago</time></p>
                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left reply">
                        <div class="chat-avatar">
                          <a href="#" data-toggle="tooltip" data-placement="left" data-original-title="James89"><img src="img/chatting/comment.png" alt="" /></a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p className="mb-0 reply_hed"><strong>Sergio Carlos</strong></p><p className="reply_hed ml-2"><i class="fas fa-share"></i> John Carter  <time>• 5 min ago</time></p>

                            <p className="mb-0">I'm working on project with more than 40 pages and performance of Sketch was not being good. I need to break project in 9 files to be more light to work.</p>
                            <p className="mb-0 comnt_last_line">48  <i class="fas fa-chevron-down"></i></p>
                            <p className="mb-0 comnt_last_line1"><i class="fas fa-chevron-up"></i> • Reply</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
        </div>
      </section>
      
        <Footer />
    </>
    )}

export default blogOverView;