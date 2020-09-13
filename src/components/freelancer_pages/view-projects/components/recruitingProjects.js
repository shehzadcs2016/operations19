import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import Button from "@material-ui/core/Button";
import { getFormatedDate } from '../../../../utils/index';
import RequestProject from '../../components/requestProject';

const RecruitingProjects = (props)=>{
  const [requestProjectModal, setRequestProjectModal] = React.useState(false);
  const [project, setprojectId] = React.useState('');
  const requestProjectModalToggle = (projectObj) => {
    if (requestProjectModal === false){
      setprojectId(projectObj);
    }
    setRequestProjectModal(!requestProjectModal);
  };
    return(
        <>
          <RequestProject 
              modal={requestProjectModal}
              toggleModal={requestProjectModalToggle}
              onRequestProject = {props.onRequestProject}
              projectObj={project} 
            />
        {
            props.recruitingProjects.map((project,key)=>{
                return(
                    <Card className="mb-3" key={`recruiting-projects-${key}`}>
                    <CardHeader>
                      <h4 className="h4">
                      {project.client_skills}
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <h5 className="text-secondary">
                        {`Request #${project.id} created on ${getFormatedDate(project.created_at)}`}
                      </h5>
                      <h5 className="my-4">
                            <strong>Budget:</strong> {
                            Object.values(project.client_budget[0].hourly_rate)[0]
                            }
                      </h5>
                      <h5 className="my-4">
                        <strong>Location:</strong> {Object.values(project.client_location)[0]}
                      </h5>
                      <h5 className="my-4">
                        <strong>Description:</strong> {project.project_detail}
                      </h5>
          
                      <h5 className="my-4">Need a highly skilled ads buyer </h5>
                      <h5 className="my-4">
                        <strong>Project length:</strong> {Object.values(project.client_availibility.client_project_duration)[0]}
                      </h5>
                      <h5 className="my-4">
                        <strong>Availability:</strong> {Object.values(project.client_availibility.client_schedule)[0]}
                      </h5>
          
                      <h5 className="my-4">
                        <strong>Weekends:</strong> { Object.values(project.client_availibility.freelancer_availability_weekend)[0]}
                      </h5>
                      <h5 className="my-4">
                        <strong>Speed to hire:</strong> {Object.values(project.client_preference.quickly_project_completion)[0]}
                      </h5>
                      <div className="text-center">
                        <Button
                          className="bg-info "
                          variant="contained"
                          color="default"
                          onClick={() => {requestProjectModalToggle(project)}}
                        >
                          Request this project
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                )
            })
        }
        </>
    )
}

export default RecruitingProjects;