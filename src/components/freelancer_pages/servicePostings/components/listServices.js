import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { getFormatedDate } from '../../../../utils/index';
import RequestService from './requestService';
import NumberFormat from 'react-number-format';


const Services = (props) => {
  const [requestProjectModal, setRequestProjectModal] = React.useState(false);
  const [service, setServiceObj] = React.useState('');
  const requestServiceModalToggle = (serviceObj) => {
    if (requestProjectModal === false) {
      setServiceObj(serviceObj);
    }
    setRequestProjectModal(!requestProjectModal);
  };

  return (
    <>
      <RequestService
        modal={requestProjectModal}
        toggleModal={requestServiceModalToggle}
        serviceObj={service}
      />

      <Card className="mb-3" >
        <CardHeader className="card_heading_dash">
          <h3 className="h4 main_h m-0"> <strong>{props.activeProjects.length} Posts</strong></h3>
        </CardHeader>
        {props.activeProjects.map((service, key) => {
          return (
            <CardBody className="border_bottom" key={`services-${key}`}>
              <h4 className="header_amazaon">{service.service_title}</h4>
              <h5 className="header_amazaon_2">
                {`Request #${service.id}`}
              </h5>
              <h5 className="header_amazaon_3">
                {`Created on ${getFormatedDate(service.created_at)}`}
              </h5>
              <div className="mt-2">
                <button className="smart_button_REct text-capitalize">{service.client_sub_category.client_category.category_name}</button>
                <button className="smart_button_REct ml-2 text-capitalize">{service.client_sub_category.subcategory_name}</button>
              </div>
              <h5 className="header_amazaon_4 mt-3"> {service.service_description} </h5>
              <table class="table table-striped mt-3 mb-2 service_posting_table"> 
                <tbody>
                  {/* <tr>
                    <td className="first_chlid_width"><strong>Budget:</strong></td>
                    <td className="secnd_chlid_width">{ Object.values(service.client_budget[0].hourly_rate)[0]  }</td>
                  </tr> */}
                  {/* {Object.values(service.client_budget[0]).comments ?
                  <tr>
                    <td className="first_chlid_width">  <strong>Comment:</strong> </td>
                    <td className="secnd_chlid_width">{Object.values(service.client_budget[0]).comments}</td>
                  </tr>
                  : null} */}
                  <tr>
                    <td className="first_chlid_width"> <strong>Budget:</strong> </td>
                    <td className="secnd_chlid_width"> 
                      <NumberFormat value={service.fixed_price_budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                  </tr>
                  <tr>
                    <td className="first_chlid_width"> <strong>Frequency:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(service.service_frequency_type)[0]}</td>
                  </tr>
                  {service.service_frequency_other ?
                  <tr>
                    <td className="first_chlid_width">  <strong>Other:</strong> </td>
                    <td className="secnd_chlid_width">{service.service_frequency_other}</td>
                  </tr>
                  : null}
                  {/* <tr>
                    <td className="first_chlid_width"> <strong>Project length:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(service.client_availibility.client_project_duration)[0]}</td>
                  </tr> */}
                  <tr>
                    <td className="first_chlid_width"> <strong>Location:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(service.location_of_service_provider)[0]}</td>
                  </tr>
                  {/* <tr>
                    <td className="first_chlid_width"> <strong>Availability:</strong> </td>
                    <td className="secnd_chlid_width">{Object.values(service.communication_schedule)[0]}</td>
                  </tr> */}
                  {/* <tr>
                    <td className="first_chlid_width"> <strong>Weekends:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(service.client_availibility.freelancer_availability_weekend)[0]}</td>
                  </tr> */}
                  {Object.values(service.communication_schedule) ?
                  <tr>
                    <td className="first_chlid_width"><strong>Communication:</strong></td>
                    <td className="secnd_chlid_width">{Object.values(service.communication_schedule)[0]}</td>
                  </tr>
                  : null}
                  {/* {service.client_preference.introduction_to_freelancer_other ?
                  <tr>
                    <td className="first_chlid_width"> <strong>Communication:</strong></td>
                    <td className="secnd_chlid_width"> {service.client_preference.introduction_to_freelancer_other}</td>
                  </tr>
                  : null} */}
                </tbody>
              </table> 
              <div className="pt-3 pb-3">
                <button
                  className="fm_custom_btn"
                  onClick={() => { requestServiceModalToggle(service) }}
                >
                  Request this Service
                </button>
              </div>
            </CardBody>
          )
        })
        }
      </Card>
    </>
  )
}

export default Services;