import React, {useState} from 'react';
import Header from "../../public_pages/shared/Header";
import Footer from "../../public_pages/shared/Footer";
import {
  clients, HourlyRatesData, LocationData, availabilityData, availabilityMore
  , schedulingPrefernces, yesNo, communicationToFreelancerData
} from "./data"
import {
  Textfield,
  CheckBox,
  RadioButton,
  SelectMenu,
} from "../../shared/formComponents";
import { Button } from '@material-ui/core';


const AddProject = () => {
  const [hourly_rates_data, setHourly_rate_data] = useState([...HourlyRatesData]);
  const handleCheckBox = async (e) => {
    // e.target.checked = false;
    const { checked, value } = e.target;
    // checked other
    // if (value === "9") {
      // setShowHourlyRateOther(checked);
    // }
    
    setHourly_rate_data(hourly_rates_data.map(checkBox => {
      if (checkBox.value === value){
        console.log(hourly_rates_data)
        checkBox.isChecked =  checked;
      console.log(checkBox.value, e.target.value)
      }
      return checkBox;
    }))

    // const hourly_rate = checked ? value : "";
    // setFormData({ ...formData, hourly_rate: hourly_rate });
    // uncomment when horuly rate is fixed to array from backend
    // const hourly_rate = formData.hourly_rates;
    // if (checked) {
    //     hourly_rate.push(value);
    // } else {
    //   var index = hourly_rate.indexOf(value);
    //   if (index !== -1) hourly_rate.splice(index, 1);
    // }
    // console.log("hourly_rates", hourly_rate);
    
  };


  return (
    <React.Fragment>
      <Header />
      <section className="padding_80">
        <div className="container project_list edit_page_centent add_nd_edit_product">
          <div className="row add_catagory">
            <div class="col-md-12 mb-3 pl-5 pr-5"><h2 class="inlign">Edit Project</h2><p class="inlign float-right pt-1">Admin</p></div>
            <div className="col-md-12">
              <form>
                <div className="w-100">
                  <div className="card p-4">
                    <h5 className="mb-3">Project Details</h5>
                    <div>
                      <SelectMenu
                        name="client"
                        label="Select Client"
                        options={clients}
                        cr={true}
                      />
                    </div>
                    <div>
                      <Textfield
                        name="skills_required"
                        label="Skills Required"
                        required
                      />
                    </div>
                    <div>
                      <Textfield
                        label="Project Description"
                        name="project_description"
                        multiline
                        rows="4"
                        required
                      />
                    </div>
                  </div>

                  <div className="card mt-5 p-4">
                    <div>
                      <h5 className="mb-3">Your Budget</h5>
                      <p>Hourly Price Range</p>
                      {hourly_rates_data.map((rates) => {
                        return (
                          // <CheckBox
                          //   key={rates.value}
                          //   name="hourly_rates"
                          //   value={rates.value}
                          //   label={rates.label}
                          //   required
                          //   checked={rates.isChecked}
                          // />
                          <div class="chiller_cb" key={rates.value}>
                            <input 
                              id={rates.value}
                              onChange={handleCheckBox} 
                              value={rates.value} 
                              type="checkbox"
                              name="hourly_rates"
                              checked={rates.isChecked}
                              />
                            <label htmlFor={rates.value}>{rates.label}</label>
                            <span></span>
                          </div>
                        );
                      })}
                    </div>
                    {/* {showHourlyRateOther && (
                      <Textfield
                        name="hourly_rate_other"
                        label="Hourly rates Others"
                        value={formData.hourly_rate_other}
                        onChange={setValues}
                      />
                    )} */}
                  </div>
                  <div className="card mt-5 p-4">
                    <div>
                      <h5 className="mb-3">Location</h5>
                      <p>Choose your Preferable Location</p>
                      <RadioButton
                        options={LocationData}
                        name="location"

                      />
                      
                    </div>
                    </div>
                    <div className="card mt-5 p-4">
                      <div>
                        <h5 className="mb-3">Availability</h5>
                        <p>Time period for which the freelancer is required</p>
                        <RadioButton
                          options={availabilityData}
                          name="availability"

                        />
                        <p>More Options</p>
                        <RadioButton
                          options={availabilityMore}
                          name="availability_more"
                        />
                        <Textfield
                          label=" "
                          name="how_quickly"
                          multiline
                        />
                      </div>
                    </div>
                    <div className="card mt-5 p-4">
                      <div>
                        <h5 className="mb-3">Introduction Preferences</h5>
                        <p>Scheduling preferences for freelancer</p>
                        <RadioButton
                          options={schedulingPrefernces}
                          name="scheduling_prefernces"
                        />
                        <p>Freelancer’s availability over weekend</p>
                        <RadioButton
                          options={yesNo}
                          name="availability_weekend"
                        />
                        <p>Type of communication channels with freelancer</p>
                        <RadioButton
                          options={communicationToFreelancerData}
                          name="communicationToFreelancer"
                        />
                        <p className="mb-3">How quickly freelancer is needed</p>
                        <Textfield
                          label=" "
                          name="how_quickly"
                          multiline
                        />
                        <p className="mb-3">How would you like to be introduced to the freelancer</p>
                        <Textfield
                          label=" "
                          name="how_quickly"
                          multiline
                        />
                      </div>
                    </div>
                    <a class="fm_custom_btn pull-right mt-5" href="/add-category-manager">Submit Request</a>
                  </div>
              </form>
            </div>
            </div>
          </div>
      </section>
        {/* <section className="padding_80">
        <div class="container project_list">
        <div className="col-md-12 mb-3">
            <h2 className="inlign">Project List</h2>
            <p className="inlign float-right pt-1">Admin</p>
          </div>
          <div class="card"> 
              <div class="db-table table-responsive">
              <h5>Project Details</h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Client Name</th>
                      <th>Dated</th>
                      <th>Freelancer Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pading_top">Project Name</td>
                      <td className="pading_top">Client Name</td>
                      <td className="pading_top">DD-MM-YYYY</td>
                      <td>
                        <select className="custom-select">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </td>
                      <td>
                        <Link className="fm_custom_btn mr-2" to="/clients-signup">Edit</Link>
                        <Link className="fm_custom_btn" to="/clients-signup">Delete</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Project Name</td>
                      <td className="pading_top">Client Name</td>
                      <td className="pading_top">DD-MM-YYYY</td>
                      <td>
                      <select className="custom-select">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </td>
                      <td>
                        <Link className="fm_custom_btn mr-2" to="/clients-signup">Edit</Link>
                        <Link className="fm_custom_btn" to="/clients-signup">Delete</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Project Name</td>
                      <td className="pading_top">Client Name</td>
                      <td className="pading_top">DD-MM-YYYY</td>
                      <td>
                      <select className="custom-select">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </td>
                      <td>
                        <Link className="fm_custom_btn mr-2" to="/clients-signup">Edit</Link>
                        <Link className="fm_custom_btn" to="/clients-signup">Delete</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Project Name</td>
                      <td className="pading_top">Client Name</td>
                      <td className="pading_top">DD-MM-YYYY</td>
                      <td>
                      <select className="custom-select">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </td>
                      <td>
                        <Link className="fm_custom_btn mr-2" to="/clients-signup">Edit</Link>
                        <Link className="fm_custom_btn" to="/clients-signup">Delete</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Project Name</td>
                      <td className="pading_top">Client Name</td>
                      <td className="pading_top">DD-MM-YYYY</td>
                      <td>
                      <select className="custom-select">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </td>
                      <td>
                        <Link className="fm_custom_btn mr-2" to="/clients-signup">Edit</Link>
                        <Link className="fm_custom_btn" to="/clients-signup">Delete</Link>
                      </td>
                    </tr>
                  </tbody>
                </table> 
            </div>
          </div>
        </div>
      </section> */}
        <Footer />
    </React.Fragment>
  )
}

export default AddProject;