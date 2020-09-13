import React from 'react';
import CustomModal from "../../../../../shared/modal";
import { Button } from "@material-ui/core";

const HourlyRateModal = (props) => {
    if(props.selectedCandidate === null) return null
    const { first_name,
           last_name, 
           final_rate, 
           project_title 
          } = props.selectedCandidate && props.selectedCandidate;
    return (
      <CustomModal {...props} title="Hire at Hourly Rate">
        <div>
          <p className="pb-2">
            {`Please confirm that you'd like to ${first_name} ${last_name} at`}
            <strong className="text-color"> {`$${final_rate}`} </strong>
            for the project: {project_title}
          </p>
          <p className="pb-2">
            Reminder: Per our Terms of Use, any billing/ payments with freelancers
            you are introduced to on the freelancer Marketplace is required to
            made through the Freelancer platform. This helps us keep the
            marketplace running and safe for everyone.
          </p>
  
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4", color: "white" }}
            className="mx-auto"
            onClick={props.onHireCandidate}
          >
            Submit
          </Button>
        </div>
      </CustomModal>
    );
  };

export default HourlyRateModal;