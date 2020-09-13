import React from 'react';
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { getFormatedDate } from '../../../utils';

const RequestCard = ({data}) => {
    return (
        <Card className="m-3">
        <CardBody>
          <Link to="#" className="h5 text-primary">
            {/* {data.client_skills} */}
            {data.client_service ? data.client_service.service_title : data.client_skills}
          </Link>
          <h5 className="mt-3">
            {`Ticket #: ${data.id} created on ${getFormatedDate(data.created_at)}`}
          </h5>

          <h5 className="text-secondary mt-3 ">Ready to Hire</h5>
        </CardBody>
      </Card>
    )
}

export default RequestCard;