import React from 'react';
import CustomModal from "../../../shared/modal";
// import { Button, FormControl, MenuItem, InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Textfield, SelectMenu, CustomTextfield } from "../../../shared/formComponents";
import { getFormatedDate } from '../../../../utils/index'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";


const RequestProject = (props) => {
  const { onRequestProject, projectObj } = props && props;
  const [desireRate, setDesireRate] = React.useState('');
  const [freelancerNote, setFreelancerNote] = React.useState('');
  const [feedBack, setFeedBack] = React.useState('');
  const [submitBtn, setsubmitBtn] = React.useState(false);

  const handleCheckBox = async (e) => {
    const { checked, value } = e.target;
    console.log(checked, value)
    if (checked === true) {
      setsubmitBtn(false)
    }
    else {
      setsubmitBtn(true)
    }
  }

  const handleDesireRateChange = (e) => {
    setDesireRate(e.target.value);
  };
  const handleFreelancerNoteChange = (e) => {
    setFreelancerNote(e.target.value);
  };
  const handleFeedBackChange = (e) => {
    setFeedBack(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestProject(projectObj.id, desireRate, freelancerNote, projectObj.status, feedBack);
    props.toggleModal(projectObj);
  }
  React.useEffect(() => {
    setDesireRate("");
    setFreelancerNote("");
    setFeedBack("");
  }, [])
  return (
    <CustomModal modal={props.modal}
      toggleModal={props.toggleModal}
      title="Request this Project"
      className="modal-header review_pop_head"
      modalClass="modal-lg"
    >
      <div className="pr-3 pl-3">
        <p className="rewive_popup_p1">You can add a paragraph to give some tips on how to apply on projects. Please check the details and confirm your action.</p>
        <div className="w-100 mt-4 mb-4 border_bottom">
          <h4><strong>Step 1: Submit Your Proposal</strong></h4>
          <p className="header_amazaon_4 mt-2">
            Create a service proposal. After creating your service proposal select it from the select service proposal dropdown. If a service proposal already exist simply select it from the service proposal dropdown.
            </p>
          <div className="w-100 mt-4 mb-4" style={{ "display": "inline-flex" }}>
            <div className="w-50 pr-3">
              <button className="perposal_color2_popup w-100">Create a Service Proposal</button>
            </div>
            <div className="w-50 perposal_color2_popup_select">
              <SelectMenu
                className="w-100"
                label="Select Service Proposal Label"
                // value={sortByBudget}
                // onChange={handleSortByBudgetChange}
                labelWidth={210}
              >

                {/* {hourlyRateFilterData ? */}
                {/* Object.keys(hourlyRateFilterData).map(key=>{ */}
                {/* return <MenuItem key={key} value={key}>{hourlyRateFilterData[key]}</MenuItem> */}
                {/* }) */}
                {/* : null} */}
              </SelectMenu>
            </div>
          </div>
        </div>
        {projectObj ?
          <div className="w-100 mt-4 mb-4 border_bottom">
            <h4><strong>Step 2: Review the ticket details</strong></h4>
            <h4 className="header_amazaon mt-3">Amazon Product Research & Development</h4>
            <h5 className="header_amazaon_2">
              {`Request #${projectObj.id}`}
            </h5>
            <h5 className="header_amazaon_3">
              {`Created on: ${getFormatedDate(projectObj.created_at)}`}
            </h5>
            <div className="mt-2">
                <button className="smart_button_REct">Amazon</button>
                <button className="smart_button_REct ml-2">Amazon Seller Central</button>
              </div>
              <h5 className="header_amazaon_4 mt-3"> {projectObj.project_detail}</h5>
              <table class="table table-striped mt-3 mb-2 service_posting_table"> 
                <tbody>
                  <tr>
                    <td className="first_chlid_width"><strong>Budget:</strong></td>
                    <td className="secnd_chlid_width">{Object.values(projectObj.client_budget[0].hourly_rate)[0]}</td>
                  </tr>
                  {projectObj.client_budget[0].comments ?
                  <tr>
                    <td className="first_chlid_width">  <strong>Comment:</strong> </td>
                    <td className="secnd_chlid_width"> {projectObj.client_budget[0].comments}</td>
                  </tr>
                  : null}
                  <tr>
                    <td className="first_chlid_width"> <strong>Location:</strong> </td>
                    <td className="secnd_chlid_width">{Object.values(projectObj.client_location)[0]}</td>
                  </tr>
                  {projectObj.client_location_comments ?
                  <tr>
                    <td className="first_chlid_width"> <strong>Comment:</strong> </td>
                    <td className="secnd_chlid_width"> {projectObj.client_location_comments}</td>
                  </tr>
                  : null}
                  <tr>
                    <td className="first_chlid_width"> <strong>Project length:</strong> </td>
                    <td className="secnd_chlid_width">{Object.values(projectObj.client_availibility.client_project_duration)[0]}</td>
                  </tr>
                  {projectObj.client_availibility.client_project_duration_comments ?
                  <tr>
                    <td className="first_chlid_width"> <strong>Comment:</strong> </td>
                    <td className="secnd_chlid_width"> {projectObj.client_availibility.client_project_duration_comments}</td>
                  </tr>
                  : null} 
                  <tr>
                    <td className="first_chlid_width"><strong>Availability:</strong></td>
                    <td className="secnd_chlid_width">{Object.values(projectObj.client_availibility.client_schedule)[0]}</td>
                  </tr> 
                  {projectObj.client_availibility.client_schedule_comments ?
                  <tr>
                    <td className="first_chlid_width"> <strong>Comment:</strong></td>
                    <td className="secnd_chlid_width">  {projectObj.client_availibility.client_schedule_comments}</td>
                  </tr>
                  : null} 
                  <tr>
                    <td className="first_chlid_width"> <strong>Weekends:</strong></td>
                    <td className="secnd_chlid_width">   {Object.values(projectObj.client_availibility.freelancer_availability_weekend)[0]}</td>
                  </tr> 
                  {projectObj.client_availibility.freelancer_availability_weekend_comments ?
                  <tr>
                    <td className="first_chlid_width"> <strong>Comment:</strong></td>
                    <td className="secnd_chlid_width"> {projectObj.client_availibility.freelancer_availability_weekend_comments}</td>
                  </tr>
                  : null} 
                  <tr>
                    <td className="first_chlid_width"><strong>Speed to hire:</strong></td>
                    <td className="secnd_chlid_width">{Object.values(projectObj.client_preference.quickly_project_completion)[0]}</td>
                  </tr>
                  {projectObj.client_preference.quickly_project_completion_comments ?
                  <tr>
                    <td className="first_chlid_width"> <strong>Comment:</strong></td>
                    <td className="secnd_chlid_width">  {projectObj.client_preference.quickly_project_completion_comments}</td>
                  </tr>
                  : null} 
                </tbody>
              </table>  
          </div>
          : null}
        <div className="w-100 text_areacolor">
          <h4><strong>Step 3: Explain why you are best fit for this service posting</strong></h4>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <h5 className="pb-2">Enter Your Desire Rate for this request.*</h5>
              <CustomTextfield
                className="w-100"
                type="number"
                name="desire_rate"
                // value={desireRate}
                onChange={(e) => handleDesireRateChange(e)}
                required
              />
            </div>
            <div className="mt-3">
              <h5 className="pb-2">Note*</h5>
              <CustomTextfield
                className="w-100"
                name="freelancer_note"
                // value={freelancerNote}
                onChange={(e) => handleFreelancerNoteChange(e)}
                multiline
                rows="4"
                required
              />
            </div>
            <div className="mt-3">
              <h5 className="pb-2">Feed back*</h5>
              <CustomTextfield
                className="w-100"
                name="feed_back"
                // value={feedBack}
                onChange={(e) => handleFeedBackChange(e)}
                multiline
                rows="4"
                required
              />
            </div>
            <p className="last_p_tag">Best Practices: <span>Submitting custom introductions</span></p>
            <div className="mt-5 mb-5">
              <div className="chiller_cb review_pop_up_radio">
                <input
                  id="confirm_form"
                  onChange={handleCheckBox}
                  type="checkbox"
                  name="confirm_form"
                  required
                // checked={confirmForm}
                />
                
                <label htmlFor="confirm_form" className="header_amazaon_4 ">
                  I confirm that i read every part of the project and that I am 100% qualified for all requirements mentioned on the request. Note that requestung projects that you are not 100% qualified for can lead to being terminated from the platform.
                  </label>
                <span ></span>
              </div>
            </div>
            <button
              type="submit"
              variant="contained"
              className="fm_custom_btn mx-auto text-uppercase w-100 mt-4 mb-3 text-white"
              disabled={submitBtn}
            >
              Request this project
              </button>
          </form>
        </div>
      </div>
    </CustomModal>
  );
};

export default RequestProject;