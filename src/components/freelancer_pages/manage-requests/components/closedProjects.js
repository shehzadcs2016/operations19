import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Button } from "@material-ui/core";
import { getFormatedDate } from '../../../../utils/index'
import RequestProject from '../../components/requestProject';

const ClosedProjects = (props) => {
  const { closedProjects, onRequestProject } = props && props;
  // eslint-disable-next-line no-lone-blocks
  // const getBudgetOptions = (budgets) => {
  //   let budgetList = '';
  //   budgets.forEach((budget) => {
  //     budgetList = budgetList + " " + budget.hourly_rate
  //   })
  //   return budgetList
  // }
  const [requestProjectModal, setRequestProjectModal] = React.useState(false);
  const [project, setprojectId] = React.useState('');
  const requestProjectModalToggle = (projectObj) => {
    if (requestProjectModal === false){
      setprojectId(projectObj);
    }
    setRequestProjectModal(!requestProjectModal);
  };
  return (
    <>
    <RequestProject 
      modal={requestProjectModal}
      toggleModal={requestProjectModalToggle}
      onRequestProject = {onRequestProject}
      projectObj={project} 
    />
      {
        closedProjects.map((project, key) => 
        <Card 
        className="mb-3"
        key={`available-projects-${key}`}
        >
        <CardHeader>
          <h4 className="h4">
            {" "}
            {project.client_skills}
          </h4>
        </CardHeader>
        <CardBody>
          <h5 className="text-secondary">
            {`Request #${project.id} created on ${getFormatedDate(project.created_at)}`}
          </h5>
          {console.log("project.client_budget is 776776556", project)}
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
          <h5 className="my-4">
            <strong>Project length:</strong>
            {Object.values(project.client_availibility.client_project_duration)[0]}
          </h5>
          <h5 className="my-4">
            <strong>Availability:</strong>
            {Object.values(project.client_availibility.client_schedule)[0]}
          </h5>
    
          <h5 className="my-4">
            <strong>Weekends:</strong>
            { Object.values(project.client_availibility.freelancer_availability_weekend)[0]}
          </h5>
          <h5 className="my-4">
            <strong>Speed to hire:</strong>
            {
            Object.values(project.client_preference.quickly_project_completion)[0]}
          </h5>
          <div className="text-center">
            <Button
              className="bg-info "
              variant="contained"
              color="default"
              // onClick={() => {onRequestProject(project.id)}}
              onClick={() => {requestProjectModalToggle(project)}}
            >
              Request this project
            </Button>
          </div>
        </CardBody>
      </Card>)
      }
    </>
  )
}

export default ClosedProjects;