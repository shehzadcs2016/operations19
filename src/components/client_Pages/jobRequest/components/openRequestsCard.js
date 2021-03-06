import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
  } from "reactstrap";
  import { Button } from "@material-ui/core";
  import { getFormatedDate } from '../../../../utils';

const OpenRequestCard = ({request, onViewCandidatesClick}) => {
    console.log("request object is ", request);
    return (
        <Card className="mb-3">
              <CardHeader>
                <h4 className="text-color h4">
                {/* {request.client_skills} */}
                {request.client_service ? request.client_service.service_title : request.client_skills}
                </h4>
              </CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col-lg-9 col-md-12 col-sm-12">
                    <p>{`Created on ${getFormatedDate(request.created_at)}`}</p>
                    <p>{`Ticket # ${request.id}`}</p>
                    <strong>Ready to hire</strong>
                  </div>
                  <div className="col-lg-3 col-md-12 col-sm-12">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#2dced4",
                        color: "white",
                      }}
                      onClick={() => {onViewCandidatesClick(request.id,request.client_skills)}}
                    >
                      View Candidates
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
    )
}

export default OpenRequestCard;