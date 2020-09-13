import React from 'react';
import { CardHeader, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const HiringTips = (props) =>(
    <div className="col-md-8 pb-3">
    <Card className="h-100">
      <CardHeader>
        <div className="d-flex flex-column flex-md-row">
          <h3 className="h4">How to Make a High Quality Hire</h3>
          <div className="ml-auto mt-2">
            <Link to="">
              <h5>View Help Center </h5>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="border-bottom pb-3">
          <p>
            <strong className="text-size">
              1. Set up a 15-20 minute interview
            </strong>
          </p>
          <p className="text-size font-weight-light">
            Meet with each candidate to learn about their experience and
            see if they are a good fit for your project.
          </p>
          <Link to="">
            <p className="text-color">
              Review common interview questions
            </p>
          </Link>
        </div>
        <div className="border-bottom pb-3">
          <p>
            <strong className="text-size">
              2. Hire or ask for more options
            </strong>
          </p>
          <p className="text-size font-weight-light">
            Make the hire and get started working. Or click the button
            above to get introduced to another qualified candidate for
            your project.
          </p>
          <Link to="">
            <p className="text-color">
              Review tips for getting started with a new hire
            </p>
          </Link>
        </div>
        <div className="border-bottom pb-3">
          <p>
            <strong className="text-size">
              3. Set clear expectations upfront
            </strong>
          </p>
          <p className="text-size font-weight-light">
            Once you've hired, talk to them about how to communicate,
            what hours they are approved to work, and what the core
            goals of the work is.
          </p>
          <Link to="">
            <p className="text-color">
              Review best practices for onboarding and communication
            </p>
          </Link>
        </div>
      </CardBody>
    </Card>
  </div>
)

export default HiringTips;