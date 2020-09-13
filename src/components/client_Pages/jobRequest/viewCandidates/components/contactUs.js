import React from 'react';
import { CardHeader, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const ContactUs = (props) => (
    <div className="col-md-4 pb-3">
    <Card>
      <CardHeader>
        <h3 className="h4">Contact Us</h3>
      </CardHeader>
      <CardBody>
        <div>
          <img src="/images/team.jpg" alt="team" />
        </div>
        <div>
          <p className="pb-3 text-size">
            Hey! Thanks for using Freelancers. We know how hard hiring
            can be and are always here if you have questions.
          </p>
          <p className="pb-3 text-size">
            Reach out to us at any of the channels below and we'll be
            with you quickly!
          </p>
          <Link to="">
            <p className="text-size text-color pb-3">
              Schedule a meeting with us
            </p>
          </Link>
          <div className="pb-3">
            <p className="text-size">Contact us via email:</p>
            <p className="text-size text-color ">Example@example.com</p>
          </div>
          <div className="pb-3">
            <p className="text-size">Connect with us on Skype: ID:</p>
            <p className="text-size text-color ">example.com</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </div>
)

export default ContactUs;