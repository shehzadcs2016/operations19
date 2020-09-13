import React, { useState } from "react";
import Header from "../shared/Header";
import Seen from "../home/SeenOn";
import Footer from "../shared/Footer";
import { Textfield } from "../../shared/formComponents";
import { TextareaAutosize } from "@material-ui/core";


const ContactUs = (props) => {
  const blankData = {
    name: '',
    email: '',
    phone_no: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState({ ...blankData });

  const setValues = (e) => {
    console.log(formData)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <React.Fragment>
      <Header />
      <section className="  in_demand"  >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blog-hero-area">
                <div className="blog-category-title Platform custom_subheader">
                  <h2><span>Contact Us</span></h2> 
                  
                    <div className="row justify-content-center">
                    <div className="col-md-5">
                    <h5 className=" mt-3 contect_short_title">  
                     Please drop us message and a member from our team will get back to you within one
                      business day.
                    </h5> 
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <Seen />
      <section className=" padding_80 ">
        <div className="container ">
          <div className="row justify-content-md-center">
            <div className='col-md-8 col-sm-12 bg-white contact_us_page'> 
              <form method="post">
                <div className="row justify-content-md-center " > 
                  {/* <div className="col-md-12 text-center contact_us_header ">
                    <h2 className=" mb-2 mt-4"><strong>Get In Touch</strong> </h2>
                    <h5 className=" mb-3 ">  
                     Please drop us message and a member from our team will get back to you within one
                      business day.
                      
                    </h5>
                    <p className="h6 mb-3 mt-4"></p>
                  </div> */}
                  <div className="col-md-5 ">
                    <Textfield
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={setValues}
                      required
                    />
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <Textfield
                      name="email"
                      label="Your Email"
                      value={formData.email}
                      onChange={setValues}
                      required
                    />
                  </div>
                  
                </div>
                <div className="row  justify-content-md-center" >
                  <div className="col-md-5 col-sm-12  ">
                    <Textfield
                      name="phone_no"
                      label="Your Phone"
                      value={formData.phone_no}
                      onChange={setValues}
                    />
                  </div>
                  <div className="col-md-5 col-sm-12  ">
                    <Textfield
                      name="subject"
                      label="Subject"
                      value={formData.subject}
                      onChange={setValues}
                    />
                  </div>
                </div>
                <div className="row  justify-content-md-center" >
                  <div className="col-md-10 col-sm-12  ">
                   
                      {/* <label>Your Message</label> */}
                      <TextareaAutosize
                        placeholder="Message"
                        name="message"
                        // variant="outlined"
                        className=" w-100 p-2"
                        value={formData.message}
                        onChange={setValues}
                        rows={5}
                      />
                   
                  </div>
                  
                </div>
                <div className="row  justify-content-md-center" >
                  <div className="col-md-10 col-sm-12  mt-3">
                  <div className="row">
                  <div className="col-md-7">
                  <div className=" mt-1 p-0  text-left">
                  <label><span class="text-info">*</span> Required field</label>
                    </div>
                  </div>
                  <div className="col-md-5 contect_us_submit">
                  <div className="post-job-btn w-100 mt-1 p-0  text-right">
                      <button className="button-ymp" type="submit"> Send Message</button>
                    </div>
                  </div>
                  </div>
                    </div>
                  </div>
                
              </form>
            </div>
            
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default ContactUs;