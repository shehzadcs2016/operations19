import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Avatar,
  } from "@material-ui/core";
  import { Card, CardBody } from "reactstrap";

  const CandidatePreview = ({
        contactTogglModal,
        negotiateRateTogglModal,
        passOptionTogglModal,
        hourlyRateTogglModal,
        data,
        modals,
  }) => {
    const { user: {
      id, user_profile
    },
    desire_rate,
  }= data;
  const {
    first_name,
    last_name,
    profile_picture,
    country: {
      name
    }
  } = user_profile;
  const {
    showNegotiateRateModal,
    showPassOnThisModal,
    showHireAtHourlyRateModal,
  } = modals;
    return(
      <Card className="mb-3">
            <CardBody>
                <div className="row">
                <div className="col-md-4 pb-4">
                    <Avatar
                    alt="Profile"
                    src={`${profile_picture}`}
                    style={{ width: "180px", height: "180px" }}
                    className="mx-auto mx-0"
                    />
                </div>
                <div className="col-md-6 pb-4 pt-0 pt-md-3">
                    <h4 className="text-color pb-2 h4">
                    {`${first_name} ${last_name}`}
                    </h4>
                    <p className="pb-2">
                    <strong>{name}</strong>
                    </p>
                    <p>
                    Hourly Rate: $<strong>{`${desire_rate}`}</strong>
                    </p>
                </div>
                <div className="col-md-12 py-4 d-flex flex-column flex-lg-row">
                    <Link
                    to={`/clients-viewProfile?profileId=${id}`}
                    className="text-color pt-2 "
                    >
                    View Profile
                    </Link>

                    <Link
                    // component="button"
                    to="" 
                    className="text-color pt-2 px-lg-4 px-0 "
                    onClick={(e) => {
                      contactTogglModal(id);
                      e.preventDefault();
                    }}
                    >
                    Contact
                    </Link>
                    {showNegotiateRateModal && <Link
                    to="#"
                    className="text-color pt-2 px-lg-4 px-0 "
                    onClick={(e) => {
                      negotiateRateTogglModal()
                      e.preventDefault();
                    }}
                    >
                    Negotiate Rate
                    </Link>}
                    {showPassOnThisModal && <Link
                    to="#"
                    className="text-color pt-2 px-lg-4 px-0 "
                    onClick={(e) => {
                      passOptionTogglModal();
                      e.preventDefault();
                    }}
                    >
                    Pass on this Option
                    </Link>}
                    {
                      showHireAtHourlyRateModal &&
                      <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#2dced4",
                        color: "white",
                    }}
                    className="mr-auto mx-lg-4 mx-0 mt-2 mt-lg-0"
                    onClick={() => {
                      hourlyRateTogglModal({
                        freelancer_id:id, final_rate:desire_rate,
                        first_name, last_name
                      })
                    }}
                    name="hireHourly"
                    >
                    Hire at hourly Rate
                    </Button>
                    }
                    
                </div>
                </div>
            </CardBody>
            </Card>
    )
  }

  export default CandidatePreview;