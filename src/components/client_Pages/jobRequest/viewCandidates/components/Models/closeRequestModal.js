import React from 'react';
import shortid from "shortid";
import CustomModal from "../../../../../shared/modal";
import { Textfield, SelectMenu } from "../../../../../shared/formComponents";
import { Button } from "@material-ui/core";

const CloseRequestModal = (props) => {
    const options = [
      { id: shortid.generate(), value: "Project Completed" },
      { id: shortid.generate(), value: "Freelancers no longer needed" },
      { id: shortid.generate(), value: "others" },
    ];
    return (
      <CustomModal
        {...props}
        title="Are you sure you want to close your request?"
      >
        <div>
          <p className="pb-2">
            If you decide to close your ticket, it will be removed from your
            account and the candidates will be informed.
          </p>
          <SelectMenu
            label="Select Reason for close request"
            labelWidth={220}
            options={options}
            name="pauseReason"
          />
          <Textfield
            name="closeComment"
            label="Please leave comment"
            multiline
            rows="4"
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4", color: "white" }}
            className="mx-auto"
          >
            Submit
          </Button>
        </div>
      </CustomModal>
    );
  };

export default CloseRequestModal;