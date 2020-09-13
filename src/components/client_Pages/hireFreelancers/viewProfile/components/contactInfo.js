import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";

const ContactInfo = (props) => {
  const {email, phone_number, skype_id} = props && props.info;
  return (
    <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Contact Information</h3>
            </CardHeader>
            <CardBody>
              <h5 className=" pb-2">
                <strong>Email:</strong>
              </h5>
              <p className="pb-2">{email}</p>
              <h5 className=" pb-2">
                <strong>Phone Number:</strong>
              </h5>
              <p className="pb-2">{phone_number}</p>
              <h5 className=" pb-2">
                <strong>Skype:</strong>
              </h5>
              <p className="pb-2">{skype_id}</p>
              
            </CardBody>
          </Card>
  )
}

export default ContactInfo;