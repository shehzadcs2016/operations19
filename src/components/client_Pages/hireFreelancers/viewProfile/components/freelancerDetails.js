import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const FreelancerDetails = (props) => {
  console.log("propsssss", props)
  return (
    <>
      <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Details</h3>
            </CardHeader>
            <CardBody>
              <h5 className=" pb-2">
                <strong>Expertise:</strong>
              </h5>
              <p className="pb-2">{props.expertise}</p>

              <h5 className=" pb-2">
                <strong>Skills:</strong>
              </h5>
              <p className="pb-2">
                {props.skills}
              </p>
              <h5 className=" pb-2">
                <strong>Links:</strong>
              </h5>
              <Link to={props.profileLink}>
                {props.profileLink}
              </Link>
            </CardBody>
          </Card>
    </>
  )
}

export default FreelancerDetails;