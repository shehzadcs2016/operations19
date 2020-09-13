import React, { useState } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import {Textfield} from "../../../shared/formComponents";

const ProfessionalApplication = (props) => {
  const blankData = {
    name: '',
    email: '',
    pass: '',
    confirm_pass: '',
  };
  
  const [formData, setFormData] = useState({...blankData});

  const setValues = (e) => {
    console.log(formData)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
	return (
    <React.Fragment>
			<Header />
			<div className="container">
				<div className="row mt-5 mb-5">
					<div className='col-md-12 col-sm-12'>
            <div className="w-100 text-center">
						  <h2 className="p-4">Application</h2>
            </div>
            <div className="row">
              <div className="col-md-8 m-auto p-5">
                <form method="post">
                  <Textfield
                    name="email"
                    label="Your Email"
                    value={formData.email}
                    onChange={setValues}
                    required
                  /><br/><br/>
                  <Textfield
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={setValues}
                    required
                  /><br/><br/>
                  <Textfield
                    name="pass"
                    label="Password"
                    value={formData.pass}
                    onChange={setValues}
                    required
                  /><br/><br/>
                  <Textfield 
                    name="confirm_pass"
                    label="Confirm Password"
                    value={formData.confirm_pass}
                    onChange={setValues}
                    required
                  />
                  <div className="post-job-btn w-100 text-center mb-5">
                    <button className="button-ymp" type="submit"> Apply </button>
                  </div>
                </form>
              </div>
            </div>
					</div>
				</div>
			</div>
			<Footer />
    </React.Fragment>
	)
}

export default ProfessionalApplication;