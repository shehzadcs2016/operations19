import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import HelpIcon from "@material-ui/icons/Help";
import { Popover } from "../../../../shared/formComponents";


const PageHeading = (props) => (
    <div className="px-4">
    <Link to="/clients-requests">
      <div className="d-flex">
        <ArrowBackIosIcon />
        <h5>Back to all Requests </h5>
      </div>
    </Link>
    <h3 className="pt-4 h3">
      <strong className="text-color">
        {props.heading}
      </strong>
      <Button id="Popover1" type="button">
        <HelpIcon />
      </Button>
      <Popover target="Popover1" title="How to manage your request?">
        <p>
          Review qualified candidates on this page as they are added to
          your request. Set up a 10-15 minute interview and hire the best
          fit. Contact FreeeUp at any time for help with your request.
        </p>
      </Popover>
    </h3>
  </div>
)

export default PageHeading;