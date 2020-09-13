import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CustomModal from "../../../shared/modal";
import { createStructuredSelector } from 'reselect';
import { getFormatedDate } from '../../../../utils/index'
import { makeSelectServiceProposals } from '../selectors';
import { fetchServiceProposals, requestClientService } from '../actions';
import { SelectMenu, CustomTextfield } from "../../../shared/formComponents";
import NumberFormat from 'react-number-format';


const RequestService = (props) => {
  const { serviceObj } = props && props;
  const [response, setResponse] = React.useState('');
  const [responseErr, setResponseErr] = React.useState('');
  const [submitBtn, setsubmitBtn] = React.useState(false);
  const[serviceProposal, setServiceProposal] = React.useState("");
  const[serviceProposalErr, setServiceProposalErr] = React.useState("");

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
  const validateResponse = () => {
    if (response.trim() === "") {
      setResponseErr("Required")
      return false
    } else {
      setResponseErr("")
      return true
    }
  }

  const validateServiceProposal = () => {
    if (serviceProposal.toString().trim() === "") {
      setServiceProposalErr("Required")
      return false
    } else {
      setServiceProposalErr("")
      return true
    }
  }

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const vRes = validateResponse()
    const vSerProposal = validateServiceProposal()
    if(!vRes || !vSerProposal){

    }else{
      props.dispatchRequestClientService({
        id: serviceObj.id,
        service_proposal_id: serviceProposal,
        reason_for_this_job: response,
      })
      props.toggleModal(serviceObj);
      setServiceProposal("")
      setResponse("")
    }
  }
  React.useEffect(() => {
    props.dispatchFetchServiceProposals()
  }, [])

  React.useEffect(() => {
    if (props.modal===false){
      setResponse("");
      setServiceProposal("")
      setServiceProposalErr("")
      setResponseErr("")
    }
  }, [props.modal])

  return (
    <CustomModal modal={props.modal}
      toggleModal={props.toggleModal}
      title="Request this Project"
      className="modal-header review_pop_head"
      modalClass="modal-lg"
    >
      <form onSubmit={handleSubmit}>
        <div className="pr-3 pl-3">
          <p className="rewive_popup_p1">You can add a paragraph to give some tips on how to apply on projects. Please check the details and confirm your action.</p>
          <div className="w-100 mt-4 mb-4 border_bottom">
            <h4><strong>Step 1: Submit Your Proposal</strong></h4>
            <p className="header_amazaon_4 mt-2">
              Create a service proposal. After creating your service proposal select it from the select service proposal dropdown. If a service proposal already exist simply select it from the service proposal dropdown.
            </p>
            <div className="w-100 mt-4 mb-4" style={{ "display": "inline-flex" }}>
              <div className="w-50 pr-3">
                <Link to="/freelancer-settings" className="perposal_color2_popup w-100">Create a Service Proposal</Link>
              </div>
              <div className="w-50 perposal_color2_popup_select">
                <SelectMenu
                  required
                  name="service_proposal"
                  className="w-100"
                  label="Select Service Proposal Label"
                  value={serviceProposal}
                  onChange={(e)=>setServiceProposal(e.target.value)}
                  labelWidth={210}
                  options={props.availableServiceProposals}
                  onBlur={validateServiceProposal}
                  error={serviceProposalErr}
                  cr={true}
                />

              </div>
            </div>
          </div>
          {serviceObj ?
            <div className="w-100 mt-4 mb-4 border_bottom">
              <h4><strong>Step 2: Review the ticket details</strong></h4>
              <h4 className="header_amazaon mt-3">{serviceObj.service_title}</h4>
              <h5 className="header_amazaon_2">
                {`Request #${serviceObj.id}`}
              </h5>
              <h5 className="header_amazaon_3">
                {`Created on: ${getFormatedDate(serviceObj.created_at)}`}
              </h5>
              <div className="mt-2">
                <button className="smart_button_REct text-capitalize">{serviceObj.client_sub_category.client_category.category_name}</button>
                <button className="smart_button_REct ml-2 text-capitalize">{serviceObj.client_sub_category.subcategory_name}</button>
              </div>
              <h5 className="header_amazaon_4 mt-3">{serviceObj.service_description} </h5>
              <table class="table table-striped mt-3 mb-2 service_posting_table">
                <tbody>
                  <tr>
                    <td className="first_chlsid_width"> <strong>Budget:</strong> </td>
                    <td className="secnd_chlid_width">
                      <NumberFormat value={serviceObj.fixed_price_budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                  </tr>
                  <tr>
                    <td className="first_chlsid_width"> <strong>Frequency:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(serviceObj.service_frequency_type)[0]}</td>
                  </tr>
                  {serviceObj.service_frequency_other ?
                    <tr>
                      <td className="first_chlid_width">  <strong>Other:</strong> </td>
                      <td className="secnd_chlid_width">{serviceObj.service_frequency_other}</td>
                    </tr>
                    : null}
                  <tr>
                    <td className="first_chlid_width"> <strong>Location:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(serviceObj.location_of_service_provider)[0]}</td>
                  </tr>
                  {Object.values(serviceObj.communication_schedule) ?
                    <tr>
                      <td className="first_chlid_width"><strong>Communication:</strong></td>
                      <td className="secnd_chlid_width">{Object.values(serviceObj.communication_schedule)[0]}</td>
                    </tr>
                    : null}
                </tbody>
              </table>
            </div>
            : null}
          <div className="w-100 text_areacolor">
            <h4><strong>Step 3: Explain why you are best fit for this service posting</strong></h4>
            <div className="mt-3">
              <h5 className="pb-2">Write Your Response</h5>
              <CustomTextfield
                required
                className="w-100"
                name="response"
                value={response}
                multiline
                rows="4"
                onChange={(e) => handleResponseChange(e)}
                onBlur={validateResponse}
                error={responseErr ? true : false}
                helperText={responseErr}
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
              Request this Service
              </button>
          </div>
        </div>
      </form>
    </CustomModal>
  );
};

const mapStateToProps = createStructuredSelector({
  availableServiceProposals: makeSelectServiceProposals(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchServiceProposals: () => dispatch(fetchServiceProposals()),
    dispatchRequestClientService: (payload) => dispatch(requestClientService(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RequestService);