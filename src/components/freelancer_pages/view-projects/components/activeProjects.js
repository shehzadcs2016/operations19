import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { getFormatedDate } from '../../../../utils/index';
import RequestProject from '../../components/requestProject';

const ActiveProjects = (props) => {
  const [requestProjectModal, setRequestProjectModal] = React.useState(false);
  const [project, setprojectId] = React.useState('');
  const requestProjectModalToggle = (projectObj) => {
    if (requestProjectModal === false) {
      setprojectId(projectObj);
    }
    setRequestProjectModal(!requestProjectModal);
  };

  const checkData = (data) => {
    if (data && data[0] !== "other") {
      console.log(data)
      return true
    }
    else {
      return false
    }
  }

  return (
    <>
      <RequestProject
        modal={requestProjectModal}
        toggleModal={requestProjectModalToggle}
        onRequestProject={props.onRequestProject}
        projectObj={project}
      />

      <Card className="mb-3" >
        <CardHeader className="card_heading_dash">
          <h3 className="h4 main_h m-0"> <strong>{props.activeProjects.length} Posts</strong></h3>
        </CardHeader>
        {props.activeProjects.map((project, key) => {
          return (
            <CardBody className="border_bottom mb-3" key={`active-projects-${key}`}>
              <h4 className="header_amazaon">Amazon Product Research & Development</h4>
              <h5 className="header_amazaon_2">
                {`Request #${project.id}`}
              </h5>
              <h5 className="header_amazaon_3">
                {`Created on ${getFormatedDate(project.created_at)}`}
              </h5>
              <div className="mt-2">
                <button className="smart_button_REct">{project.client_skills}</button>
              </div>
              <h5 className="header_amazaon_4 mt-3"> {project.project_detail} </h5>
              <table class="table table-striped mt-3 mb-2 service_posting_table"> 
                <tbody>
                  <tr>
                    <td className="first_chlid_width"><strong>Budget:</strong></td>
                    <td className="secnd_chlid_width">{ Object.values(project.client_budget[0].hourly_rate)[0]  }</td>
                  </tr>
                  {Object.values(project.client_budget[0]).comments ?
                  <tr>
                    <td className="first_chlid_width">  <strong>Comment:</strong> </td>
                    <td className="secnd_chlid_width">{Object.values(project.client_budget[0]).comments}</td>
                  </tr>
                  : null}
                  <tr>
                    <td className="first_chlid_width"> <strong>Project length:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(project.client_availibility.client_project_duration)[0]}</td>
                  </tr>
                  <tr>
                    <td className="first_chlid_width"> <strong>Location:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(project.client_location)[0]}</td>
                  </tr>
                  <tr>
                    <td className="first_chlid_width"> <strong>Availability:</strong> </td>
                    <td className="secnd_chlid_width">{Object.values(project.client_availibility.client_schedule)[0]}</td>
                  </tr>
                  <tr>
                    <td className="first_chlid_width"> <strong>Weekends:</strong> </td>
                    <td className="secnd_chlid_width"> {Object.values(project.client_availibility.freelancer_availability_weekend)[0]}</td>
                  </tr>
                  {checkData(Object.values(project.client_preference.introduction_to_freelancer)) === true ?
                  <tr>
                    <td className="first_chlid_width"><strong>Communication:</strong></td>
                    <td className="secnd_chlid_width">{Object.values(project.client_preference.introduction_to_freelancer)[0]}</td>
                  </tr>
                  : null}
                  {project.client_preference.introduction_to_freelancer_other ?
                  <tr>
                    <td className="first_chlid_width"> <strong>Communication:</strong></td>
                    <td className="secnd_chlid_width"> {project.client_preference.introduction_to_freelancer_other}</td>
                  </tr>
                  : null}
                </tbody>
              </table> 
              <div className="pt-3 pb-3">
                <button
                  className="fm_custom_btn"
                  onClick={() => { requestProjectModalToggle(project) }}
                >
                  Request this project
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

export default ActiveProjects;