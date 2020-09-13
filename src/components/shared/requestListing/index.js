import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import RequestCard from './requestCard';
import RequestsLoader from './loader'

const RequestLsting = ({requests}) => {
    return (
        <Card className="mb-3">
              <CardHeader className="d-flex flex-column flex-md-row client_dashboard">
                <h3 className="h4">
                  Your Job Requests
                  <Button id="Popover1">
                    <HelpIcon />
                  </Button>
                </h3>
                <Link className="ml-auto" to="/clients-requests">
                  All Requests <ArrowRightAltIcon />
                </Link>
              </CardHeader>
              <CardBody>
                {
                    requests ? requests.map((request, key) => (
                        <RequestCard data={request} key={`request${request.id}`}/>
                    )) : <RequestsLoader />
                }
              </CardBody>
            </Card>
    )
}

export default RequestLsting;